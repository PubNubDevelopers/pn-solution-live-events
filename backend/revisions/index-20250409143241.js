"use strict";

/*  
  =============================================================================
  server.js — Node.js server to demonstrate a continually looping synchronized
  video timeline, pushing events/chat/reactions via PubNub in real-time.

  Requirements satisfied:
   1. Runs in a run-loop (setInterval) once every second.
   2. Triggers actions based on a timeline (exports.matchScript) from game-data.js
   3. Single server file that starts with `npm run`.
   4. Outputs only JavaScript code in this file.
   5. Publishes periodic "STATUS" messages over PubNub so front-end can sync video.
   6. Adds simulated user activity (emoji reactions & chat messages) for timeline events.
   7. Uses API keys from ENV with `require("dotenv").config()`
   8. Requires PUBNUB_PUBLISH_KEY and PUBNUB_SUBSCRIBE_KEY in .env
   9. Publishes with random “bot-xx” for reactions on game.stream-reactions.
   10. Publishes with random “user-xx” for chat on game.chat.
   11. Logs all actions and timeline ticks to console.
   12. Adds a realistic random delay between each simulated reaction & chat message.
   13. At least 50 different chat messages available for random selection.
   14. Automatically restarts timeline at 0 when it ends, repeating forever.
   15. Responds to data control requests (skip, start, end, excitement, etc.) via simple Express endpoints.
  =============================================================================
*/

require("dotenv").config();
const express = require("express");
const PubNub = require("pubnub");
const { matchScript } = require("./game-data.js"); // The timeline script provided separately

// -----------------------------------------------------------------------------
// Validate ENV
// -----------------------------------------------------------------------------
if (!process.env.PUBNUB_PUBLISH_KEY || !process.env.PUBNUB_SUBSCRIBE_KEY) {
  console.error("Please set PUBNUB_PUBLISH_KEY and PUBNUB_SUBSCRIBE_KEY in .env");
  process.exit(1);
}

// -----------------------------------------------------------------------------
// PubNub Setup
// -----------------------------------------------------------------------------
const pubnub = new PubNub({
  publishKey: process.env.PUBNUB_PUBLISH_KEY,
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY,
  // We'll just use a generic server UUID; we'll embed user/bot info in the message
  uuid: "server-000",
});

// -----------------------------------------------------------------------------
// Express Setup
// -----------------------------------------------------------------------------
const app = express();
const PORT = process.env.PORT || 3000;

// We'll store current playback time in ms
let playbackTimeMs = 0;
// Track whether we've signaled videoStarted for new loops
let hasSignaledStartThisLoop = false;

// We determine the end of the timeline from the largest time in matchScript:
const MAX_TIME_MS =
  matchScript.reduce((max, evt) => {
    return evt.timeSinceVideoStartedInMs > max
      ? evt.timeSinceVideoStartedInMs
      : max;
  }, 0) + 5000; // add a small buffer beyond the last event

// Keep track of which timeline actions have been published so we don't double-publish.
let publishedEventsIndices = new Set();

// -----------------------------------------------------------------------------
// Example Chat Messages (50+ distinct messages)
// -----------------------------------------------------------------------------
const chatMessages = [
  "Wow, this match is on fire!",
  "I can't believe that just happened!",
  "Go team, go!",
  "Incredible footwork out there.",
  "This is the best stream I've seen in ages!",
  "Did you see that shot?!",
  "Referee, are you blind?!",
  "So much tension, I love it!",
  "Goooaal!!!",
  "Unbelievable defense!",
  "I'm on the edge of my seat!",
  "This is too intense to handle!",
  "Hello everyone, excited to watch this!",
  "Talk about a dramatic turn of events!",
  "Anyone else screaming at their screen?",
  "I just spilled my drink from excitement!",
  "Feels like I'm actually in the stadium!",
  "This team is unstoppable today!",
  "What a legendary moment!",
  "Never say never in this game!",
  "That save was perfection.",
  "Breathtaking skill right there!",
  "I could watch that replay all day.",
  "Woohoo, let's go!",
  "This is a masterclass in teamwork.",
  "I thought this match would be dull, but wow!",
  "They deserve a trophy for that move alone!",
  "Keep the momentum going!",
  "The crowd's energy is insane!",
  "Oh no, that foul looked bad.",
  "This is going down in history books!",
  "Absolutely savage tackle!",
  "No way did that just happen!",
  "The suspense is killing me!",
  "Let's see if they can pull off a comeback.",
  "That's gotta hurt!",
  "Fingers crossed for a hat trick!",
  "A perfect day for football, indeed!",
  "I was not expecting that pass!",
  "Someone pinch me, this is too good!",
  "VAR needs to check that, for sure.",
  "I love watching these two teams clash!",
  "That's a red card in my book!",
  "Incredible atmosphere in the stadium.",
  "The fans are going wild right now!",
  "Are we witnessing a champion performance?",
  "I can't wait to see the final score!",
  "This is the reason why we love this sport!",
  "What a rollercoaster of emotions!",
  "These players are giving it their all.",
  "Let’s keep the chat going, folks!"
];

// -----------------------------------------------------------------------------
// Utility: Random pick from array
// -----------------------------------------------------------------------------
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// -----------------------------------------------------------------------------
// Utility: Generate random integer between [min, max]
// -----------------------------------------------------------------------------
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// -----------------------------------------------------------------------------
// Send a PubNub message
//   We embed a "user" field in the message to indicate which user/bot is sending
// -----------------------------------------------------------------------------
function publishMessage(channel, msg, persistInHistory = false) {
  pubnub.publish(
    {
      channel,
      message: msg,
      storeInHistory: persistInHistory,
    },
    (status, response) => {
      if (status.error) {
        console.error("PubNub publish error:", status);
      } else {
        console.log(
          `Published to ${channel}:`,
          JSON.stringify(msg),
          "storeInHistory=" + persistInHistory
        );
      }
    }
  );
}

// -----------------------------------------------------------------------------
// For each event in the timeline, we also want to simulate a random chat
// message (from user-xx) and a random reaction (from bot-xx) with a small delay
// to make it realistic. We'll do it only if the timeline event channel is
// commentary, just to keep frequency manageable.
// -----------------------------------------------------------------------------
function simulateExtraEventTraffic(mainEventChannel) {
  // We'll add extra chat + reaction only if the main event is some commentary
  // (or you can do it for every channel type if you prefer).
  // This is adjustable logic:
  if (mainEventChannel !== "game.commentary") return;

  // Random chat user
  const userId = `user-${String(randomInt(1, 40)).padStart(2, "0")}`;
  const chatText = pickRandom(chatMessages);

  // Random reaction bot
  const botId = `bot-${String(randomInt(1, 9)).padStart(2, "0")}`;
  // We'll pick from a small set of fun emojis:
  const reactionEmojis = ["🎉", "🔥", "👏", "💥", "⚡", "🎊", "🙌"];
  const chosenEmoji = pickRandom(reactionEmojis);

  // Realistic random delays
  const chatDelay = randomInt(500, 3000);
  const reactionDelay = randomInt(500, 3000);

  // Schedule the chat publish
  setTimeout(() => {
    console.log(`(Simulated chat) from ${userId}: "${chatText}"`);
    publishMessage("game.chat", {
      user: userId,
      text: chatText
    });
  }, chatDelay);

  // Schedule the reaction publish
  setTimeout(() => {
    console.log(`(Simulated reaction) from ${botId}: "${chosenEmoji}"`);
    publishMessage("game.stream-reactions", {
      user: botId,
      text: chosenEmoji,
      type: "reaction"
    });
  }, reactionDelay);
}

// -----------------------------------------------------------------------------
// Periodically check the timeline and publish pending events
// Also publish a "STATUS" message so new joiners can sync
// -----------------------------------------------------------------------------
function timelineLoop() {
  // 1) Publish Video Status
  publishMessage("game.video-control", {
    type: "STATUS",
    params: {
      playbackTime: playbackTimeMs,
      videoStarted: hasSignaledStartThisLoop === true && playbackTimeMs === 0,
      videoEnded: false // We'll set true specifically when it loops
    }
  });

  console.log(
    `Tick: playbackTimeMs=${playbackTimeMs}/${MAX_TIME_MS} (loop runs every 1s)`
  );

  // 2) Fire any new events from the matchScript that are now due
  matchScript.forEach((evt, idx) => {
    if (!publishedEventsIndices.has(idx)) {
      if (evt.timeSinceVideoStartedInMs <= playbackTimeMs) {
        // Mark as published
        publishedEventsIndices.add(idx);

        // Log it
        console.log(
          `Triggering timeline event at ${evt.timeSinceVideoStartedInMs}ms => channel=${evt.action.channel}`
        );

        // Publish it
        publishMessage(
          evt.action.channel,
          evt.action.data,
          evt.persistInHistory || false
        );

        // Possibly simulate extra chat/reactions
        simulateExtraEventTraffic(evt.action.channel);
      }
    }
  });

  // 3) If we've reached or surpassed the end of the timeline, loop back
  if (playbackTimeMs >= MAX_TIME_MS) {
    // Publish a final "videoEnded: true" message
    publishMessage("game.video-control", {
      type: "STATUS",
      params: {
        playbackTime: playbackTimeMs,
        videoStarted: false,
        videoEnded: true
      }
    });
    console.log("Video ended. Restarting timeline at 0...");

    // Reset for next loop
    playbackTimeMs = 0;
    publishedEventsIndices.clear();
    hasSignaledStartThisLoop = false;

    // Now also publish a "videoStarted: true" next tick
  } else {
    // Advance the timeline by 1000ms (1 second) each loop
    playbackTimeMs += 1000;
  }

  // If we haven't signaled the start for this loop yet, do so at time=0
  // This is the moment right after we reset to 0
  if (!hasSignaledStartThisLoop && playbackTimeMs === 0) {
    hasSignaledStartThisLoop = true;
    console.log("Video started (loop beginning).");
    publishMessage("game.video-control", {
      type: "START_STREAM",
      params: {}
    });
  }
}

// -----------------------------------------------------------------------------
// Data Controls Endpoints
// -----------------------------------------------------------------------------
app.get("/start", (req, res) => {
  console.log("Data controls: start stream");
  // Reset timeline if needed
  playbackTimeMs = 0;
  publishedEventsIndices.clear();
  hasSignaledStartThisLoop = false;
  // We'll let the loop do the actual START_STREAM logic on next iteration
  res.send("Starting stream timeline from 0");
});

app.get("/end", (req, res) => {
  console.log("Data controls: end stream");
  // Immediately publish an END_STREAM
  publishMessage("game.video-control", {
    type: "END_STREAM",
    params: {}
  });
  // Also set playbackTime to the max so that next tick resets everything
  playbackTimeMs = MAX_TIME_MS;
  res.send("Ending stream (will loop on next tick).");
});

app.get("/skip", (req, res) => {
  const skipTo = parseInt(req.query.ms || "0", 10);
  console.log(`Data controls: skip to ${skipTo}ms`);
  // Move our timeline pointer
  playbackTimeMs = skipTo;
  // We also need to publish a "SEEK" message
  publishMessage("game.video-control", {
    type: "SEEK",
    params: {
      playbackTime: skipTo
    }
  });
  // Clear out any future events behind skipTo that haven't fired
  matchScript.forEach((evt, idx) => {
    if (evt.timeSinceVideoStartedInMs <= skipTo) {
      publishedEventsIndices.add(idx);
    }
  });
  res.send(`Skipped to ${skipTo}ms`);
});

app.get("/fan-excitement", (req, res) => {
  console.log("Data controls: fan excitement triggered");
  // Generate about 20 "cheer" events
  const cheerEmoji = "🎉";
  // We'll do them with small random delays to seem realistic
  for (let i = 0; i < 20; i++) {
    const delay = randomInt(100, 1500);
    const botId = `bot-${String(randomInt(1, 9)).padStart(2, "0")}`;
    setTimeout(() => {
      console.log(`(Fan Excitement) from ${botId}: ${cheerEmoji}`);
      publishMessage("game.stream-reactions", {
        user: botId,
        text: cheerEmoji,
        type: "reaction"
      });
    }, delay);
  }
  res.send("Fan excitement triggered: 20 cheer emojis sent!");
});

app.get("/fan-frustration", (req, res) => {
  console.log("Data controls: fan frustration triggered");
  // Generate about 25 "anger" events
  const angerEmoji = "😠";
  for (let i = 0; i < 25; i++) {
    const delay = randomInt(100, 1500);
    const botId = `bot-${String(randomInt(1, 9)).padStart(2, "0")}`;
    setTimeout(() => {
      console.log(`(Fan Frustration) from ${botId}: ${angerEmoji}`);
      publishMessage("game.stream-reactions", {
        user: botId,
        text: angerEmoji,
        type: "reaction"
      });
    }, delay);
  }
  res.send("Fan frustration triggered: 25 anger emojis sent!");
});

app.get("/tag-user", (req, res) => {
  // Example of "specialTaggedMessage" with Chat SDK
  const botId = `bot-${String(randomInt(1, 9)).padStart(2, "0")}`;
  console.log(`Data controls: Tag user in message from ${botId}`);
  // We'll just simulate it referencing a placeholder "currentUser" name
  publishMessage("game.chat", {
    user: botId,
    specialTaggedMessage: true,
    // The front-end is responsible for substituting @currentUser
    text: "Hello @currentUser"
  });
  res.send(`Tag user message sent by ${botId}`);
});

// -----------------------------------------------------------------------------
// Start the periodic loop + The server
// -----------------------------------------------------------------------------
setInterval(timelineLoop, 1000);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log("Timeline loop started, publishing events every 1 second...");
});
