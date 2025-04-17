"use strict";

// server.js

/*
  To run:
  1) Set environment variables for PUBNUB_PUB_KEY, PUBNUB_SUB_KEY (and others if desired)
  2) npm install express pubnub dotenv
  3) npm run start (or node server.js)
*/

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const PubNub = require("pubnub");

// Set up PubNub (keys taken from ENV variables)
const pubnub = new PubNub({
  publishKey: process.env.PUBNUB_PUB_KEY || "demo",
  subscribeKey: process.env.PUBNUB_SUB_KEY || "demo",
  userId: "server-sender",
});

// Sample timeline array
// times are in seconds in this example, so convert to ms in logic
const timeline = [
  { time: 0.0, event: "Kick off" },
  { time: 15.0, event: "Fan excitement" },
  { time: 30.0, event: "Goal" },
  { time: 60.0, event: "Fan frustration" },
  { time: 120.0, event: "Fan excitement" },
  { time: 180.0, event: "Goal" },
  { time: 200.0, event: "Fan excitement" },
  { time: 280.0, event: "Five minutes remaining" },
  { time: 295.0, event: "Fan frustration" },
  { time: 300.0, event: "End match" },
];

// Example total duration (in seconds) for the "video"
const VIDEO_DURATION_SECS = 300;

// Helper to create "fan excitement" reaction array. (20 total for example)
function createFanExcitementReactions() {
  // 15 x 🎉 + 5 x 🙌
  const data = [];
  for (let i = 0; i < 15; i++) {
    data.push({
      channel: "game.stream-reactions",
      data: { text: "🎉", type: "reaction" },
    });
  }
  for (let i = 0; i < 5; i++) {
    data.push({
      channel: "game.stream-reactions",
      data: { text: "🙌", type: "reaction" },
    });
  }
  return data;
}

// Helper to create "fan frustration" reaction array. (25 total)
function createFanFrustrationReactions() {
  const data = [];
  for (let i = 0; i < 25; i++) {
    data.push({
      channel: "game.stream-reactions",
      data: { text: "😠", type: "reaction" },
    });
  }
  return data;
}

// Store current playback time in ms
let currentVideoTimeMs = 0;
// Store last check time in ms
let lastCheckTimeMs = 0;

// Flag to indicate if the video is playing
let videoPlaying = false;

// Publishes a single message to PubNub
function publish(channel, message) {
  pubnub.publish(
    {
      channel,
      message,
    },
    () => {}
  );
}

// Publishes a "status" type control message
function publishVideoStatus() {
  publish("game.video-controls", {
    type: "STATUS",
    params: {
      playbackTime: currentVideoTimeMs,
      videoStarted: currentVideoTimeMs === 0 && videoPlaying ? true : false,
      videoEnded:
        currentVideoTimeMs >= VIDEO_DURATION_SECS * 1000 && !videoPlaying
          ? true
          : false,
    },
  });
}

// Executes the timeline actions that fall between lastCheckTimeMs and currentVideoTimeMs
function checkTimelineEvents() {
  const startSec = lastCheckTimeMs / 1000.0;
  const endSec = currentVideoTimeMs / 1000.0;
  // find all events in that range
  timeline.forEach((item) => {
    if (item.time >= startSec && item.time < endSec) {
      // dispatch action based on the event name
      if (item.event === "Kick off") {
        publish("game.video-controls", { type: "START_STREAM", params: {} });
        videoPlaying = true;
      } else if (item.event === "End match") {
        publish("game.video-controls", { type: "END_STREAM", params: {} });
        videoPlaying = false;
      } else if (item.event === "Goal") {
        // sample message to chat
        publish("game.chat", {
          user: "bot-01",
          text: "GOOOOAAAALLLLL!",
        });
        // show a single reaction overlay
        publish("game.stream-reactions", {
          text: "⚽",
          type: "reaction",
        });
      } else if (item.event === "Fan excitement") {
        const arr = createFanExcitementReactions();
        arr.forEach((msg) => publish(msg.channel, msg.data));
      } else if (item.event === "Fan frustration") {
        const arr = createFanFrustrationReactions();
        arr.forEach((msg) => publish(msg.channel, msg.data));
      } else if (item.event === "Five minutes remaining") {
        // Example: publish commentary
        publish("game.commentary", {
          text: "Five minutes remaining in the match!",
          timeCode: "85:00",
        });
      }
    }
  });
}

// Main interval loop (1 second)
setInterval(() => {
  // Only run if video is "playing"
  if (videoPlaying) {
    lastCheckTimeMs = currentVideoTimeMs;
    currentVideoTimeMs += 1000;
    // Loop logic
    if (currentVideoTimeMs >= VIDEO_DURATION_SECS * 1000) {
      // End the video, then loop
      videoPlaying = false;
      publish("game.video-controls", { type: "END_STREAM", params: {} });
      currentVideoTimeMs = 0;
      lastCheckTimeMs = 0;
      // set videoPlaying = true since we want it to loop automatically
      videoPlaying = true;
      publish("game.video-controls", { type: "START_STREAM", params: {} });
    }
    // Check timeline events
    checkTimelineEvents();
  }
  // Publish a status message
  publishVideoStatus();
}, 1000);

// Express to handle data-control requests from a sales panel or other
const app = express();
app.use(bodyParser.json());

// Start Stream
app.post("/start", (req, res) => {
  currentVideoTimeMs = 0;
  lastCheckTimeMs = 0;
  videoPlaying = true;
  publish("game.video-controls", { type: "START_STREAM", params: {} });
  res.json({ success: true, message: "Stream started" });
});

// Seek
app.post("/seek", (req, res) => {
  const newTime = parseInt(req.body.playbackTime, 10) || 0;
  currentVideoTimeMs = newTime;
  lastCheckTimeMs = newTime;
  publish("game.video-controls", {
    type: "SEEK",
    params: { playbackTime: currentVideoTimeMs },
  });
  res.json({ success: true, message: `Video seeked to ${newTime} ms.` });
});

// End Stream
app.post("/end", (req, res) => {
  videoPlaying = false;
  publish("game.video-controls", { type: "END_STREAM", params: {} });
  res.json({ success: true, message: "Stream ended" });
});

// Example custom action: Fan excitement
app.post("/fan-excitement", (req, res) => {
  const arr = createFanExcitementReactions();
  arr.forEach((m) => publish(m.channel, m.data));
  res.json({ success: true, message: "Fan excitement triggered" });
});

// Example custom action: Fan frustration
app.post("/fan-frustration", (req, res) => {
  const arr = createFanFrustrationReactions();
  arr.forEach((m) => publish(m.channel, m.data));
  res.json({ success: true, message: "Fan frustration triggered" });
});

// Example custom action: Tag user in chat message
app.post("/tag-user", (req, res) => {
  // expects { user: 'bot-01', currentUserName: 'Alice' }
  const { user, currentUserName } = req.body;
  publish("game.chat", {
    user: user || "bot-01",
    specialTaggedMessage: true,
    text: `Hello @${currentUserName || "someone"}`,
  });
  res.json({ success: true, message: "Tagged user message sent" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});