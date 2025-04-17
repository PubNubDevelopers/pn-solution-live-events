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

// Initialize PubNub
const pubnub = new PubNub({
  publishKey: process.env.PUBNUB_PUBLISH_KEY,
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY,
  userId: "game-server"
});

// Subscribe to control events from the UI
const CONTROL_CHANNEL = "game.server-video-control";
pubnub.subscribe({ channels: [CONTROL_CHANNEL] });
pubnub.addListener({
  message: async ({ channel, message }) => {
    if (channel === CONTROL_CHANNEL) {
      console.log("[Control] Received:", message);
      await handleControlMessage(message);
    }
  }
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
      matchScript = buildMatchScript();
      console.log("[Control] Timeline reset to start");
      break;
    case "SEEK": {
      const seekTime = msg.params.playbackTime;
      currentTime = seekTime;
      scriptIndex = matchScript.findIndex(
        ev => ev.timeSinceVideoStartedInMs >= currentTime
      );
      if (scriptIndex < 0) scriptIndex = matchScript.length;
      console.log(`[Control] Seek to ${currentTime}ms, next event index ${scriptIndex}`);
      break;
    }
    case "END_STREAM":
      currentTime = 1200000; // 20 minutes
      scriptIndex = matchScript.findIndex(
        ev => ev.timeSinceVideoStartedInMs >= currentTime
      );
      console.log("[Control] Timeline advanced to end");
      break;
    default:
      console.log("[Control] Unknown control type:", msg.type);
  }
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
          repeat: 1 // Mark as processed so we don’t expand again
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
  let merged = [
    ...chat,
    ...commentary,
    ...polls,
    ...reactions,
    ...stats
  ];

  // Expand repeats first
  let expanded = expandRepeatedEvents(merged);

  // Sort by timeSinceVideoStartedInMs
  expanded.sort((a, b) => a.timeSinceVideoStartedInMs - b.timeSinceVideoStartedInMs);

  return expanded;
}

// --------------------------------------------------------------------------------
// Main timeline logic
let matchScript = buildMatchScript();
let currentTime = 0;
let scriptIndex = 0;
const MS_INTERVAL = 1000;

// Identify the final time for resetting the timeline
const lastEventTime = matchScript.length > 0
  ? matchScript[matchScript.length - 1].timeSinceVideoStartedInMs
  : 0;

// Publish a message to PubNub
async function publishMessage(channel, message, persistInHistory = false) {
  console.log("[Publish]", { channel, message, persistInHistory });
  try {

    // Set User ID
    let userId = message.user || 'other';
    pubnub.setUUID(userId);
    await pubnub.publish({
      channel: channel,
      message: message,
      storeInHistory: persistInHistory
    });
  } catch (err) {
    console.error("Error publishing message:", err);
  }
}

// Send the current video time so clients can sync
async function publishVideoStatus() {
  const isStart = (currentTime === 0);
  // If we consider "end" as the final event time
  const isEnd = (currentTime >= lastEventTime);

  const message = {
    type: "STATUS",
    params: {
      playbackTime: currentTime,
      videoStarted: isStart,
      videoEnded: isEnd
    }
  };

  await publishMessage("game.client-video-control", message);
}

// We’ll run the timeline in a loop
async function runLoop() {
  // 1. Check if we have reached or passed the next event in matchScript
  while (scriptIndex < matchScript.length &&
         matchScript[scriptIndex].timeSinceVideoStartedInMs <= currentTime) {
    const eventObj = matchScript[scriptIndex];
    // Publish the event
    console.log("[Event Triggered]", eventObj);

    await publishMessage(
      eventObj.action.channel,
      eventObj.action.data,
      !!eventObj.persistInHistory
    );

    scriptIndex++;
  }

  // 2. Send a periodic video status message
  await publishVideoStatus();

  // 3. Increment the current time
  currentTime += MS_INTERVAL;

  // 4. If we’ve hit the end, reset everything
  if (currentTime > lastEventTime) {
    console.log("[Video Loop Complete] Restarting timeline from 0");
    currentTime = 0;
    scriptIndex = 0;

    // Re-build the script with new random expansions for repeats on each loop
    matchScript = buildMatchScript();
  }
}

// --------------------------------------------------------------------------------
// Run the loop every second
setInterval(() => {
  runLoop().catch(err => console.error("Error in runLoop:", err));
}, MS_INTERVAL);
