"use strict";

// index.js

require("dotenv").config();
const PubNub = require("pubnub");

// Import the data modules:
const { chat } = require("./game-data/chat.js");
const { commentary } = require("./game-data/commentary.js");
const { polls } = require("./game-data/polls.js");
const { reactions } = require("./game-data/reactions.js");
const { stats } = require("./game-data/stats.js");
const { fanExcitement } = require("./on-demand/fan-excitement.js");
const { fanFrustration } = require("./on-demand/fan-frustration.js");
const { goalScored } = require("./on-demand/push-goal.js");
const { fiveMinutesRemaining } = require("./on-demand/push-5mins.js");
const { angry, cheer } = require("./illuminate/illuminate-polls.js");

// Initialize PubNub
const pubnub = new PubNub({
  publishKey: process.env.PUBNUB_PUBLISH_KEY,
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY,
  secretKey: process.env.PUBNUB_SECRET_KEY,
  userId: "game-server",
});

// Track vote counts for each poll
let voteCounts = {};

// Subscribe to control events from the UI
const CONTROL_CHANNEL = "game.server-video-control";
const POLL_DECLARATION_CHANNEL = "game.new-poll";
const POLL_VOTE_CHANNEL = "game.poll-votes";
const POLL_RESULTS_CHANNEL = "game.poll-results";
pubnub.subscribe({
  channels: [CONTROL_CHANNEL, POLL_DECLARATION_CHANNEL, POLL_VOTE_CHANNEL],
});
pubnub.addListener({
  message: async ({ channel, message }) => {
    if (channel === CONTROL_CHANNEL) {
      await handleControlMessage(message);
    } else if (
      channel === POLL_DECLARATION_CHANNEL &&
      message.pollType === "side"
    ) {
      await handlePollDeclarationMessage(message);
    } else if (channel === POLL_VOTE_CHANNEL && message.pollType === "side") {
      await handleVoteMessage(message);
    }
  },
});

/**
 * Handle UI control messages to manipulate the timeline.
 * Supported message types:
 *  - START_STREAM: reset to start
 *  - SEEK: jump to playbackTime
 *  - END_STREAM: advance to end
 */
async function handleControlMessage(msg) {
  switch (msg.type) {
    case "START_STREAM":
      currentTime = 0;
      scriptIndex = 0;
      loopCount = 0;
      voteCounts = {};
      shouldSendChatMessages = true;
      matchScript = buildMatchScript();
      await publishVideoEvent("START_STREAM", {});
      startLoop();
      break;
    case "SEEK": {
      if (!intervalId) return;
      const seekTime = msg.params.playbackTime;
      currentTime = seekTime;
      scriptIndex = matchScript.findIndex(
        (ev) => ev.timeSinceVideoStartedInMs >= currentTime
      );
      if (scriptIndex < 0) scriptIndex = matchScript.length;
      await publishVideoEvent("SEEK", { playbackTime: currentTime });
      break;
    }
    case "END_STREAM":
      stopLoop();
      currentTime = lastEventTime; // 20 minutes
      scriptIndex = matchScript.findIndex(
        (ev) => ev.timeSinceVideoStartedInMs >= currentTime
      );
      await publishVideoEvent("END_STREAM", {});
      break;
    case "BOT_CHAT":
      if (!intervalId) return;
      let messageText = "Messages Restarted";
      if (shouldSendChatMessages) {
        messageText = "Messages Paused";
      }
      shouldSendChatMessages = !shouldSendChatMessages;
      publishMessage("game.chat", { user: "bot-33", text: messageText }, false);
      break;
    case "ON_DEMAND_SCRIPT":
      if (!intervalId) return;
      const scriptName = msg.params.scriptName;
      const scriptEmoji = msg.params.emoji;

      var onDemandScript = null;
      var delay = 0;
      if (scriptName === "fan-excitement") {
        onDemandScript = shuffleArray(expandRepeatedEvents(fanExcitement));
      } else if (scriptName === "fan-frustration") {
        onDemandScript = shuffleArray(expandRepeatedEvents(fanFrustration));
      } else if (scriptName === "push-goal") {
        onDemandScript = goalScored;
      } else if (scriptName === "push-5mins") {
        onDemandScript = fiveMinutesRemaining;
      } else if (scriptEmoji === "😡") {
        onDemandScript = angry;
        console.log("Angry script");
        delay = 30000;
      } else if (scriptEmoji === "🎉") {
        onDemandScript = cheer;
        console.log("Cheer script");
        delay = 30000;
      } else {
        console.error("[Control] Unknown script name:", scriptName);
        return;
      }
      runOnDemandScript(onDemandScript, delay);

      break;
    default:
      console.log("[Control] Unknown control type:", msg.type);
  }
}

async function handlePollDeclarationMessage(msg) {
  const pollId = msg.id;
  const numOptions = msg.options.length;
  for (let i = 0; i < 10; i++) {
    setTimeout(async () => {
      const randomOption = msg.options[Math.floor(Math.random() * numOptions)];
      const randomIndex = randomOption.id;
      const message = {
        pollId: pollId,
        questionId: "1",
        choiceId: randomIndex,
        pollType: "side",
      };
      await publishMessage(POLL_VOTE_CHANNEL, message);
    }, i * 3000);
  }
}

async function handleVoteMessage(msg) {
  const pollId = msg.pollId;
  const choiceId = msg.choiceId;

  // Initialize vote counts for this poll if not already tracked
  if (!voteCounts[pollId]) {
    voteCounts[pollId] = {};
  }

  // Increment the vote count for this choice
  if (!voteCounts[pollId][choiceId]) {
    voteCounts[pollId][choiceId] = 0;
  }
  voteCounts[pollId][choiceId]++;
}

async function handlePollResultsMessage(msg) {
  const votes = voteCounts[msg.id];
  if (!votes) {
    console.log("No votes, or poll was not declared");
    //  No votes, or poll was not declared
    return;
  }

  const options = Object.entries(voteCounts[msg.id] || {}).map(
    ([id, score]) => ({
      id: parseInt(id),
      score: score,
    })
  );
  const message = {
    id: msg.id,
    options: options,
    ...(msg.correctOption !== undefined && {
      correctOption: msg.correctOption,
    }),
    pollType: "side",
  };
  await pubnub.publish({
    channel: POLL_RESULTS_CHANNEL,
    message: message,
    storeInHistory: false,
  });
}

// --------------------------------------------------------------------------------
// Expand repeated events with realistic random delays
function expandRepeatedEvents(events) {
  const expanded = [];

  events.forEach((ev) => {
    if (ev.repeat && ev.repeat > 1) {
      // We'll expand this event into multiple occurrences with random delays
      let lastTime = ev.timeSinceVideoStartedInMs;
      for (let i = 0; i < ev.repeat; i++) {
        // Random delay between 500ms and 2500ms
        let randomDelay = Math.floor(500 + Math.random() * 2000);

        // The first of the repeated actions occurs exactly at the original time
        if (i === 0) {
          randomDelay = 0;
        }

        let newTime = lastTime + randomDelay;
        lastTime = newTime;

        let newItem = {
          ...ev,
          timeSinceVideoStartedInMs: newTime,
          repeat: 1, // Mark as processed so we don't expand again
        };

        expanded.push(newItem);
      }
    } else {
      expanded.push(ev);
    }
  });

  return expanded;
}

// --------------------------------------------------------------------------------
// Merge data from all modules and sort by the timeline
function buildMatchScript() {
  // All modules combined
  let merged = [...chat, ...commentary, ...polls, ...reactions, ...stats];

  // Expand repeats first
  let expanded = expandRepeatedEvents(merged);

  // Sort by timeSinceVideoStartedInMs
  expanded.sort(
    (a, b) => a.timeSinceVideoStartedInMs - b.timeSinceVideoStartedInMs
  );

  return expanded;
}

// --------------------------------------------------------------------------------
// Main timeline logic
let matchScript = buildMatchScript();
let currentTime = 0;
let scriptIndex = 0;
let loopCount = 0;
let shouldSendChatMessages = true;
const MS_INTERVAL = 1000;

// Identify the final time for resetting the timeline
const lastEventTime =
  matchScript.length > 0
    ? matchScript[matchScript.length - 1].timeSinceVideoStartedInMs
    : 0;

// Publish a message to PubNub
async function publishMessage(channel, message, persistInHistory = false) {
  try {
    if (channel === POLL_RESULTS_CHANNEL && message.pollType === "side") {
      handlePollResultsMessage(message);
    } else {
      // Set User ID
      let userId = message.user || "other";
      pubnub.setUUID(userId);
      await pubnub.publish({
        channel: channel,
        message: message,
        storeInHistory: persistInHistory,
      });
    }
  } catch (err) {
    console.error("Error publishing message:", err);
  }
}

// Send the current video time so clients can sync
async function publishVideoStatus() {
  const isStart = currentTime === 0;
  // If we consider "end" as the final event time
  const isEnd = currentTime >= lastEventTime;

  const message = {
    type: "STATUS",
    params: {
      playbackTime: currentTime,
      videoStarted: isStart,
      videoEnded: isEnd,
    },
  };

  await publishMessage("game.client-video-control", message);
}

//  Send a message to the client to indicate a video playback event has occurred
async function publishVideoEvent(videoEvent, eventData) {
  const message = {
    type: videoEvent,
    params: eventData,
  };
  await publishMessage("game.client-video-control", message);
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

async function runOnDemandScript(script, delay = 0) {
  let index = 0;
  while (index < script.length) {
    const eventObj = script[index];
    // Publish the event
    await publishMessage(
      eventObj.action.channel,
      eventObj.action.data,
      !!eventObj.persistInHistory
    );

    if (delay > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay));
    }

    index++;
  }
}

// We'll run the timeline in a loop
async function runLoop() {
  // 1. Check if we have reached or passed the next event in matchScript
  while (
    scriptIndex < matchScript.length &&
    matchScript[scriptIndex].timeSinceVideoStartedInMs <= currentTime
  ) {
    const eventObj = matchScript[scriptIndex];
    // Publish the event

    if (!(eventObj.action.channel === "game.chat" && !shouldSendChatMessages)) {
      await publishMessage(
        eventObj.action.channel,
        eventObj.action.data,
        !!eventObj.persistInHistory
      );
    }

    scriptIndex++;
  }

  // 2. Send a periodic video status message
  if (!intervalId) return;

  await publishVideoStatus();

  // 3. Increment the current time
  currentTime += MS_INTERVAL;

  // 4. If we've hit the end, reset everything
  if (currentTime > lastEventTime) {
    currentTime = 0;
    scriptIndex = 0;
    loopCount++;
    voteCounts = {};
    //  To save wasting resources, stop the loop after 5 loops in guided demo mode
    if (loopCount >= 5 && process.env.GUIDED_DEMO === "true") {
      stopLoop();
    }

    // Re-build the script with new random expansions for repeats on each loop
    matchScript = buildMatchScript();
  }
}

let intervalId = null;

const startLoop = () => {
  if (intervalId) {
    return;
  }

  console.log("Starting loop...");
  intervalId = setInterval(async () => {
    try {
      await runLoop();
    } catch (err) {
      console.error("Error in runLoop:", err);
      // Optionally stop the loop on critical errors
      if (err.isCritical) {
        stopLoop();
      }
    }
  }, MS_INTERVAL);
};

const stopLoop = () => {
  if (intervalId) {
    console.log("Stopping loop...");
    clearInterval(intervalId);
    intervalId = null;
  }
};

// Handle graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully...");
  stopLoop();
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("SIGINT received. Shutting down gracefully...");
  stopLoop();
  process.exit(0);
});

// Start the loop only if GUIDED_DEMO is true
if (process.env.GUIDED_DEMO === "true") {
  console.log("GUIDED_DEMO is true, loop will not start automatically");
} else {
  console.log("GUIDED_DEMO is not true, starting loop");
  startLoop();
}
