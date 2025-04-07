"use strict";

/**
 * server.js
 * 
 * Node.js demo backend for a synchronized live events experience.
 * 
 * 1) Periodically checks a timeline array to trigger events in sync with
 *    a playing video (loops when it ends).
 * 2) Responds to requests from a 'Data Controls' panel (e.g. skip video, 
 *    trigger fan excitement, etc.).
 * 3) Publishes messages to PubNub channels for the frontend to handle 
 *    (chat, reactions, polls, match stats, video control messages, etc.).
 * 4) API keys, config loaded via .env.
 */

require("dotenv").config();
const express = require("express");
const PubNub = require("pubnub");

// -- PubNub Initialization --
const pubnub = new PubNub({
  publishKey: process.env.PUBNUB_PUBLISH_KEY || "demo",
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY || "demo",
  uuid: "backend-server-" + Date.now()
});

// -- Express App --
const app = express();
app.use(express.json());

// -- Example timeline of events in seconds (for demonstration) --
const timeline = [
  { time:   0.000, event: "Kick off" },
  { time:  15.000, event: "Fan excitement" },
  { time:  30.000, event: "Goal" },
  { time:  60.000, event: "Fan frustration" },
  { time: 120.000, event: "Fan excitement" },
  { time: 180.000, event: "Goal" },
  { time: 200.000, event: "Fan excitement" },
  { time: 280.000, event: "Five minutes remaining" },
  { time: 295.000, event: "Fan frustration" },
  { time: 300.000, event: "End match" }
];

// -- Configuration --
const VIDEO_LOOP = true; // If true, video loops when it ends
const TICK_INTERVAL_MS = 1000; // Run-loop interval
const PUBLISH_CHANNEL = "game.video-status"; // Channel for video status
const EVENT_CHANNEL = "game.events"; // Generic channel for timeline events
const STREAM_REACTIONS_CHANNEL = "game.stream-reactions";
const CHAT_CHANNEL = "game.chat";

// -- In-memory state --
let currentVideoTime = 0;    // in seconds
let lastCheckTime = 0;       // reference for timeline checks
let timelineIndex = 0;       // which timeline event is next
let videoActive = false;     // is the video playing or has it ended?

// For random bot users
const botUsers = [
  "bot-01","bot-02","bot-03","bot-04","bot-05",
  "bot-06","bot-07","bot-08","bot-09"
];

// Helper to publish a message
function publishMessage(channel, message) {
  return new Promise((resolve, reject) => {
    pubnub.publish({ channel, message }, (status, response) => {
      if (status.error) {
        console.error("PubNub publish error:", status);
        return reject(status);
      }
      resolve(response);
    });
  });
}

// Helper to send a "reaction" emoji
function sendReaction(emoji) {
  return publishMessage(STREAM_REACTIONS_CHANNEL, {
    text: emoji,
    type: "reaction"
  });
}

// Helper to send random chat text from random bots
function sendRandomChat(messageText) {
  const randBot = botUsers[Math.floor(Math.random() * botUsers.length)];
  return publishMessage(CHAT_CHANNEL, {
    user: randBot,
    text: messageText || "Hello from " + randBot
  });
}

// Send "video status" to let front end sync
async function sendVideoStatus({ videoStarted=false, videoEnded=false }={}) {
  await publishMessage(PUBLISH_CHANNEL, {
    type: "STATUS",
    params: {
      playbackTime: Math.floor(currentVideoTime * 1000), // in ms
      videoStarted,
      videoEnded
    }
  });
}

// Process actions based on timeline events
async function handleTimelineEvent(evt) {
  /**
   * In a real implementation, we'd map each event (Goal, Fan excitement, etc.)
   * to its respective PubNub calls or data actions. For demonstration, we'll
   * do simple messages to a single channel or call helper functions.
   */
  switch (evt.event) {
    case "Kick off":
      videoActive = true;
      await publishMessage(EVENT_CHANNEL, { type: "START_STREAM", params: {} });
      await sendVideoStatus({ videoStarted: true });
      console.log("[Timeline] Kick off");
      break;
    case "Fan excitement":
      // Example: Send multiple 🎉 reactions
      for (let i = 0; i < 5; i++) {
        await sendReaction("🎉");
      }
      console.log("[Timeline] Fan excitement triggered");
      break;
    case "Fan frustration":
      // Example: Send multiple 😡 reactions
      for (let i = 0; i < 5; i++) {
        await sendReaction("😡");
      }
      console.log("[Timeline] Fan frustration triggered");
      break;
    case "Goal":
      // Example: Send "Goal!" in chat from random bot
      await sendRandomChat("GOAL!!!");
      console.log("[Timeline] Goal");
      break;
    case "Five minutes remaining":
      // Possibly skip or do another action, here we'll just chat
      await sendRandomChat("Only five minutes left!");
      console.log("[Timeline] Five minutes remaining");
      break;
    case "End match":
      videoActive = false;
      await publishMessage(EVENT_CHANNEL, { type: "END_STREAM", params: {} });
      await sendVideoStatus({ videoEnded: true });
      console.log("[Timeline] End match");
      break;
    default:
      console.log("[Timeline] Unhandled event:", evt.event);
      break;
  }
}

// Periodic check
async function tick() {
  if (!videoActive) {
    return; // If the match ended, do nothing unless it loops
  }

  // Advance current video time by TICK_INTERVAL_MS
  currentVideoTime += TICK_INTERVAL_MS / 1000; // seconds

  // Check if we've reached the next timeline event
  while (
    timelineIndex < timeline.length &&
    currentVideoTime >= timeline[timelineIndex].time
  ) {
    const evt = timeline[timelineIndex];
    await handleTimelineEvent(evt);
    timelineIndex++;
    if (timelineIndex >= timeline.length && VIDEO_LOOP) {
      // We've reached the end, loop back
      timelineIndex = 0;
      currentVideoTime = 0;
      await sendVideoStatus({ videoStarted: true });
      console.log("[Timeline] Looping video back to start");
      break;
    }
  }

  // Send continuous video status updates so new joiners can sync
  await sendVideoStatus();
}

// -- Express Routes (Data Controls / External Triggers) --

// Kick Off
app.post("/kickoff", async (req, res) => {
  videoActive = true;
  timelineIndex = 0;
  currentVideoTime = 0;
  await publishMessage(EVENT_CHANNEL, { type: "START_STREAM", params: {} });
  await sendVideoStatus({ videoStarted: true });
  console.log("[Control] Kick off triggered");
  res.json({ success: true, message: "Kick off triggered" });
});

// Skip to a specific position in ms
app.post("/seek", async (req, res) => {
  const { playbackTime } = req.body; // in ms
  if (typeof playbackTime !== "number") {
    return res.status(400).json({ error: "playbackTime (ms) required" });
  }
  if (!videoActive) videoActive = true;
  
  // Update our time, find correct timelineIndex
  currentVideoTime = playbackTime / 1000;
  timelineIndex = timeline.findIndex(e => e.time >= currentVideoTime);
  if (timelineIndex < 0) {
    // If we skip beyond the last event, either end or loop
    timelineIndex = timeline.length;
  }
  await publishMessage(EVENT_CHANNEL, {
    type: "SEEK",
    params: { playbackTime }
  });
  await sendVideoStatus();
  
  console.log(`[Control] Seek to ${playbackTime} ms`);
  res.json({ success: true, message: `Seeked to ${playbackTime} ms` });
});

// End match
app.post("/end", async (req, res) => {
  videoActive = false;
  timelineIndex = timeline.length; // no more events
  await publishMessage(EVENT_CHANNEL, { type: "END_STREAM", params: {} });
  await sendVideoStatus({ videoEnded: true });
  console.log("[Control] End match triggered");
  res.json({ success: true, message: "Match ended" });
});

// Fan excitement
app.post("/fan-excitement", async (req, res) => {
  // Example: 20 cheers
  for (let i = 0; i < 20; i++) {
    await sendReaction("🎉");
  }
  // Could also include "🙌"
  for (let i = 0; i < 5; i++) {
    await sendReaction("🙌");
  }
  console.log("[Control] Fan excitement triggered");
  res.json({ success: true, message: "Fan excitement triggered" });
});

// Fan frustration
app.post("/fan-frustration", async (req, res) => {
  // Example: 25 anger
  for (let i = 0; i < 25; i++) {
    await sendReaction("😡");
  }
  console.log("[Control] Fan frustration triggered");
  res.json({ success: true, message: "Fan frustration triggered" });
});

// Tag user in message
app.post("/tag-user", async (req, res) => {
  /**
   * Example body:
   * {
   *   "botUser": "bot-02",
   *   "currentUserId": "someUser"
   * }
   * This triggers a special chat message that says "Hello @someUser"
   */
  const { botUser, currentUserId } = req.body;
  if (!botUser || !currentUserId) {
    return res.status(400).json({ error: "botUser and currentUserId required" });
  }
  // In a real implementation, we'd do more checks to ensure botUser is valid.
  await publishMessage(CHAT_CHANNEL, {
    user: botUser,
    specialTaggedMessage: true,
    text: `Hello @${currentUserId}`
  });
  console.log(`[Control] Tag user, from ${botUser} to @${currentUserId}`);
  res.json({ success: true, message: "User tagged" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);

  // Start the periodic run-loop
  setInterval(() => {
    tick().catch(err => {
      console.error("Tick error:", err);
    });
  }, TICK_INTERVAL_MS);
});