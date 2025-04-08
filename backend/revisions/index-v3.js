"use strict";

//---------------------------------------------------------
// server.js
// A Node.js server that:
// 1. Runs a loop to synchronize an ongoing "video" timeline.
// 2. Triggers actions from a predefined timeline array.
// 3. Publishes timecode and event data via PubNub for frontend sync.
// 4. Responds to "data control" requests to manipulate stream state.
//
// To run:
// 1) Ensure you have "pubnub" and "express" dependencies (e.g. npm install pubnub express).
// 2) Set environment variables for your PubNub keys (e.g. PUBNUB_PUBLISH_KEY, PUBNUB_SUBSCRIBE_KEY).
// 3) Run "node server.js" or use an npm script in package.json.
//
//---------------------------------------------------------

const express = require("express");
const PubNub = require("pubnub");

// Load environment variables (publish keys, subscribe keys, etc.)
const PUBNUB_PUBLISH_KEY = process.env.PUBNUB_PUBLISH_KEY || "demo- publish-key";
const PUBNUB_SUBSCRIBE_KEY = process.env.PUBNUB_SUBSCRIBE_KEY || "demo-subscribe-key";
const PORT = process.env.PORT || 3000;

// PubNub client initialization
const pubnub = new PubNub({
  publishKey: PUBNUB_PUBLISH_KEY,
  subscribeKey: PUBNUB_SUBSCRIBE_KEY,
  uuid: "backend-server-uuid"
});

// Example timeline of events
// time is in seconds for simplicity; we convert it to ms in code
const timeline = [
  { time: 0.000,   event: "Kick off" },
  { time: 15.000,  event: "Fan excitement" },
  { time: 30.000,  event: "Goal" },
  { time: 60.000,  event: "Fan frustration" },
  { time: 120.000, event: "Fan excitement" },
  { time: 180.000, event: "Goal" },
  { time: 200.000, event: "Fan excitement" },
  { time: 280.000, event: "Five minutes remaining" },
  { time: 295.000, event: "Fan frustration" },
  { time: 300.000, event: "End match" }
];

// Track video timeline in ms
// For demo, we'll assume we "start" the video the moment the server starts
let videoStartTime = Date.now();
let currentEventIndex = 0;
let loopingEnabled = true;

// Helper: publish a message to a PubNub channel
function publishMessage(channel, message) {
  pubnub.publish({ channel, message }, (status) => {
    if (status.error) {
      console.error("PubNub publish error:", status);
    }
  });
}

// Helper: send repeated reaction messages (e.g. "Fan excitement")
function sendMultipleReactions(emoji, count) {
  for (let i = 0; i < count; i++) {
    publishMessage("game.stream-reactions", {
      text: emoji,
      type: "reaction"
    });
  }
}

// Helper: handle an event from the timeline
function handleTimelineEvent(tEvent) {
  switch (tEvent.event) {
    case "Kick off":
      // Example: publish a "START_STREAM" message
      publishMessage("game.control", {
        type: "START_STREAM",
        params: {}
      });
      break;

    case "Goal":
      // Example: send a quick chat message from a random bot
      // and maybe a reaction
      publishMessage("game.chat", {
        user: pickRandomBot(),
        text: "GOOOAAAALLL!!!"
      });
      publishMessage("game.stream-reactions", {
        text: "⚽",
        type: "reaction"
      });
      break;

    case "Fan excitement":
      // Example: send multiple cheers
      sendMultipleReactions("🎉", 10);
      sendMultipleReactions("🙌", 10);
      break;

    case "Fan frustration":
      // Example: send multiple anger emojis
      sendMultipleReactions("😡", 10);
      sendMultipleReactions("😤", 15);
      break;

    case "Five minutes remaining":
      // Could be a convenient place to skip if needed,
      // but we'll just do a quick notice in commentary
      publishMessage("game.commentary", {
        text: "Clock says 5 minutes left!",
        timeCode: "MM:ss"
      });
      break;

    case "End match":
      // Example: publish an "END_STREAM" message
      publishMessage("game.control", {
        type: "END_STREAM",
        params: {}
      });
      break;

    default:
      // No special logic; just log or do minimal
      console.log("Unhandled timeline event:", tEvent.event);
      break;
  }
}

// Helper: pick a random bot name
function pickRandomBot() {
  const bots = ["bot-01","bot-02","bot-03","bot-04","bot-05","bot-06","bot-07","bot-08","bot-09"];
  return bots[Math.floor(Math.random() * bots.length)];
}

// Periodic check function (runs every 1 second by default)
function checkTimeline() {
  const now = Date.now();
  const elapsedMs = now - videoStartTime; // how long since we started

  // Send periodic status message for new joiners to sync video
  publishMessage("game.control", {
    type: "STATUS",
    params: {
      playbackTime: elapsedMs,
      videoStarted: currentEventIndex === 0,
      videoEnded: false
    }
  });

  // Check if we need to fire timeline events
  // timeline stores "time" in seconds, so convert to ms for comparison
  while (
    currentEventIndex < timeline.length &&
    timeline[currentEventIndex].time * 1000 <= elapsedMs
  ) {
    handleTimelineEvent(timeline[currentEventIndex]);
    currentEventIndex++;
  }

  // If we've reached the end and looping is enabled, reset
  if (loopingEnabled && currentEventIndex >= timeline.length) {
    publishMessage("game.control", {
      type: "STATUS",
      params: {
        playbackTime: elapsedMs,
        videoStarted: false,
        videoEnded: true
      }
    });
    // Looping scenario: start over
    videoStartTime = Date.now();
    currentEventIndex = 0;
  }
}

// Set up the periodic loop
setInterval(checkTimeline, 1000); // 1 second intervals

// Express app to handle "data controls" requests
const app = express();
app.use(express.json());

// Endpoint to handle external commands from a "data controls" panel
app.post("/control", (req, res) => {
  const action = req.body.action;
  const payload = req.body.payload || {};

  switch (action) {
    case "kickOff":
      // Start from beginning
      videoStartTime = Date.now();
      currentEventIndex = 0;
      publishMessage("game.control", {
        type: "START_STREAM",
        params: {}
      });
      break;

    case "endMatch":
      publishMessage("game.control", {
        type: "END_STREAM",
        params: {}
      });
      break;

    case "seek":
      // e.g. payload.playbackTime (ms)
      if (typeof payload.playbackTime === "number") {
        videoStartTime = Date.now() - payload.playbackTime;
        // Also adjust currentEventIndex
        currentEventIndex = findEventIndexByMs(payload.playbackTime);
        publishMessage("game.control", {
          type: "SEEK",
          params: { playbackTime: payload.playbackTime }
        });
      }
      break;

    case "fanExcitement":
      // Trigger 20 cheers, for example
      sendMultipleReactions("🎉", 15);
      sendMultipleReactions("🙌", 5);
      break;

    case "fanFrustration":
      // Trigger 25 anger emojis
      sendMultipleReactions("😡", 10);
      sendMultipleReactions("😤", 15);
      break;

    case "goal":
      // Example: skip to "goal" timeline moment in ms
      // Or just forcibly send "Goal" event logic
      videoStartTime = Date.now() - (30 * 1000); // Jump to 30s
      currentEventIndex = findEventIndexByMs(30000);
      publishMessage("game.control", {
        type: "SEEK",
        params: { playbackTime: 30000 }
      });
      break;

    case "tagUserInMessage":
      // For demonstration, we generate a special chat message from a random bot
      publishMessage("game.chat", {
        user: pickRandomBot(),
        specialTaggedMessage: true
      });
      break;

    default:
      console.log("Received unknown control action:", action);
      break;
  }

  res.json({ status: "OK", action });
});

// Helper: find the correct event index based on a target ms
function findEventIndexByMs(ms) {
  // timeline times are in seconds
  for (let i = 0; i < timeline.length; i++) {
    if (timeline[i].time * 1000 > ms) {
      return i;
    }
  }
  return timeline.length; // if beyond last
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});