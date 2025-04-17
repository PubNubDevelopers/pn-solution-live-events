"use strict";

require("dotenv").config();
const PubNub = require("pubnub");

// Validate required environment variables
if (!process.env.PUBNUB_PUBLISH_KEY || !process.env.PUBNUB_SUBSCRIBE_KEY) {
  console.error("Missing PUBNUB_PUBLISH_KEY or PUBNUB_SUBSCRIBE_KEY in .env file");
  process.exit(1);
}

// Initialize PubNub
const pubnub = new PubNub({
  publishKey: process.env.PUBNUB_PUBLISH_KEY,
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY
});

// Import data modules
const chatData = require("./game-data/chat.js");
const commentaryData = require("./game-data/commentary.js");
const pollsData = require("./game-data/polls.js");
const reactionsData = require("./game-data/reactions.js");
const statsData = require("./game-data/stats.js");

// Merge into single array "matchScript"
let matchScript = [
  ...chatData,
  ...commentaryData,
  ...pollsData,
  ...reactionsData,
  ...statsData
];

// Sort by timeSinceVideoStartedInMs
matchScript.sort(
  (a, b) => a.timeSinceVideoStartedInMs - b.timeSinceVideoStartedInMs
);

// Track current time index and next event
let timeLineProgress = 0; // in ms
let nextEventIndex = 0;

// We assume the last item's timeSinceVideoStartedInMs in matchScript is our end
const maxTime =
  matchScript.length > 0
    ? matchScript[matchScript.length - 1].timeSinceVideoStartedInMs
    : 0;

// Publish helper
function publishMessage(channel, message, storeInHistory = false) {
  pubnub.publish(
    {
      channel: channel,
      message: message,
      storeInHistory: storeInHistory
    },
    (status, response) => {
      if (status.error) {
        console.error("PubNub publish error:", status);
      } else {
        console.log(`[ACTION] Published to ${channel}:`, JSON.stringify(message));
      }
    }
  );
}

// Send initial "VIDEO STARTED" if we have any script at all
if (maxTime > 0) {
  const startMsg = {
    type: "STATUS",
    params: {
      playbackTime: timeLineProgress,
      videoStarted: true,
      videoEnded: false
    }
  };
  console.log("[VIDEO] Starting video loop at time 0");
  publishMessage("game.client-video-control", startMsg);
}

// Interval: once every second
setInterval(() => {
  // Publish a timeline "tick" - the current seek
  const statusMessage = {
    type: "STATUS",
    params: {
      playbackTime: timeLineProgress,
      videoStarted: false,
      videoEnded: false
    }
  };
  publishMessage("game.client-video-control", statusMessage);
  console.log(`[TICK] Current timeline: ${timeLineProgress}ms`);

  // Check if any newly-reached events should fire
  while (
    nextEventIndex < matchScript.length &&
    matchScript[nextEventIndex].timeSinceVideoStartedInMs <= timeLineProgress
  ) {
    const eventItem = matchScript[nextEventIndex];
    const actionChannel = eventItem.action.channel;
    const actionData = eventItem.action.data || {};
    const persist = eventItem.persistInHistory === true;

    // Fire this event (consider eventItem.repeat)
    const repeats = eventItem.repeat && eventItem.repeat > 0 ? eventItem.repeat : 1;
    for (let i = 0; i < repeats; i++) {
      publishMessage(actionChannel, actionData, persist);
    }

    nextEventIndex++;
  }

  // Move timeline forward
  timeLineProgress += 1000;

  // If end is reached, reset
  if (timeLineProgress > maxTime) {
    console.log("[VIDEO] End of script timeline");
    // Publish "video ended"
    const endMsg = {
      type: "STATUS",
      params: {
        playbackTime: maxTime,
        videoStarted: false,
        videoEnded: true
      }
    };
    publishMessage("game.client-video-control", endMsg);

    // Reset for next loop
    timeLineProgress = 0;
    nextEventIndex = 0;

    // Publish "video started" for next loop
    const restartMsg = {
      type: "STATUS",
      params: {
        playbackTime: timeLineProgress,
        videoStarted: true,
        videoEnded: false
      }
    };
    console.log("[VIDEO] Restarting video loop at 0");
    publishMessage("game.client-video-control", restartMsg);
  }
}, 1000);
