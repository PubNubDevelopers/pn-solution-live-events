"use strict";

/**
 * server.js
 * Run with "npm run start" (assuming your package.json has a start script pointing here)
 *
 * Requirements:
 *  1) Node server that loops once every second with setInterval.
 *  2) Synchronize a video timeline with events from matchScript (game-data.js) and chatMessagesForEvent (chat-data.js).
 *  3) Send chat messages, emoji reactions, polls, stats, push notifications, etc. over PubNub in sync with the video timeline.
 *  4) Respond to "Data Controls" (e.g. skip to time, start, end, extra excitement).
 *  5) Loop the timeline after it ends, forever.
 *  6) Print all actions/events to console.
 *  7) Use realistic random delays between simulated reactions and chats.
 *  8) Add extra reaction activity so it looks more exciting.
 *  9) PubNub user IDs set to random "bot-0X" for chat, "user-0X" for other channels.
 * 10) Start server on port 4000.
 */

require("dotenv").config();
const express = require("express");
const PubNub = require("pubnub");
const http = require("http");
const { matchScript } = require("./game-data.js");
const { chatMessagesForEvent } = require("./chat-data.js");

// Validate we have the required ENV vars
if (!process.env.PUBNUB_PUBLISH_KEY || !process.env.PUBNUB_SUBSCRIBE_KEY) {
  throw new Error("Missing PUBNUB_PUBLISH_KEY or PUBNUB_SUBSCRIBE_KEY in .env file");
}

// Reaction emojis for random excitement
const reactionEmojis = ["🎉", "🙌", "🔥", "😡", "👏", "😮", "😢"];

// Configure PubNub
const pubnub = new PubNub({
  publishKey: process.env.PUBNUB_PUBLISH_KEY,
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY,
  userId: "server-000", // Placeholder; will be overridden dynamically before each publish
});

// Basic Express server
const app = express();
app.use(express.json());

// Global timeline pointer (in milliseconds)
let videoTimeMs = 0;

// Keep track of last time we fired events so we don't re-fire them after looping
let lastFiredIndex = -1;

// We assume matchScript is sorted by timeSinceVideoStartedInMs ascending
const totalVideoDurationMs = matchScript[matchScript.length - 1].timeSinceVideoStartedInMs + 5000;

// Helper: random integer in range [min, max]
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Publish to PubNub with user identity logic
function publish(channel, data) {
  // If channel is "game.chat", pick a random "bot" user
  if (channel === "game.chat") {
    const botId = `bot-0${randInt(1, 9)}`;
    pubnub.setUserId(botId);
  } else {
    // Default server identity for other channels
    const userId = `user-0${randInt(1, 9)}`;
    pubnub.setUserId(userId);
  }
  return pubnub.publish({ channel, message: data })
    .then(() => {
      console.log(`Published to ${channel}:`, data);
    })
    .catch(err => {
      console.error(`Error publishing to ${channel}:`, err);
    });
}

// Send a periodic STATUS message for video synchronization
function sendStatusMessage() {
  const statusMsg = {
    type: "STATUS",
    params: {
      playbackTime: videoTimeMs,
      videoStarted: videoTimeMs === 0,            // True only if just started loop
      videoEnded: videoTimeMs >= totalVideoDurationMs, // True if we've ended loop
    },
  };
  publish("game.video-status", statusMsg);
  console.log("Video status tick:", statusMsg.params);
}

// Check and fire timeline events that are due
function checkTimelineEvents() {
  // Find all events that should have happened up to current videoTimeMs
  // We'll fire any events whose timeSinceVideoStartedInMs is <= videoTimeMs
  // But we track lastFiredIndex so we don't repeat them
  for (let i = 0; i < matchScript.length; i++) {
    const evt = matchScript[i];
    if (i <= lastFiredIndex) continue;
    if (evt.timeSinceVideoStartedInMs <= videoTimeMs) {
      lastFiredIndex = i;
      // Fire the event
      console.log("Firing event:", evt);
      const { channel, data } = evt.action;
      const randomDelayMs = randInt(200, 2000); // inject a small random delay
      setTimeout(() => {
        publish(channel, data);
        // Also print to console
        console.log("Event published (after delay):", evt);
      }, randomDelayMs);
    }
  }
}

// Possibly send random reaction or chat for excitement
function maybeSendExtraActivity() {
  // e.g. 1/5 chance each tick
  if (Math.random() < 0.2) {
    // Randomly decide chat or reaction
    const doChat = Math.random() < 0.5;
    if (doChat) {
      // Random chat from "Kick off" array just for fun (or any other category)
      const randomMessages = chatMessagesForEvent["Kick off"];
      if (randomMessages && randomMessages.length) {
        const idx = randInt(0, randomMessages.length - 1);
        const text = randomMessages[idx];
        setTimeout(() => {
          publish("game.chat", {
            user: "bot-01",
            text,
          });
          console.log("Extra random chat:", text);
        }, randInt(100, 1500));
      }
    } else {
      // Reaction
      const randomEmoji = reactionEmojis[randInt(0, reactionEmojis.length - 1)];
      setTimeout(() => {
        publish("game.streamreactions", { text: randomEmoji, type: "reaction" });
        console.log("Extra random reaction:", randomEmoji);
      }, randInt(100, 1500));
    }
  }
}

// Main loop: runs once every second
setInterval(() => {
  // Increment video time by 1000ms
  videoTimeMs += 1000;

  // Check if we've reached or passed the end
  if (videoTimeMs >= totalVideoDurationMs) {
    console.log("Video ended, restarting timeline to 0");
    // We'll do a final status publish with videoEnded = true
    sendStatusMessage();
    // Reset
    videoTimeMs = 0;
    lastFiredIndex = -1;
    console.log("Video timeline restarted");
  }

  // Publish status
  sendStatusMessage();

  // Fire any timeline events that are due
  checkTimelineEvents();

  // Maybe send random additional activity
  maybeSendExtraActivity();

}, 1000);

// Data Controls panel endpoints
// For demonstration, we handle a generic POST /controls with action in the body
app.post("/controls", (req, res) => {
  const { action, timeMs, eventType } = req.body;
  console.log("Data Controls request:", req.body);

  switch (action) {
    case "START_STREAM":
      // Send start stream message
      publish("game.video-status", { type: "START_STREAM", params: {} });
      console.log("START_STREAM triggered");
      // Optionally reset timeline
      videoTimeMs = 0;
      lastFiredIndex = -1;
      break;

    case "SEEK":
      // We skip to a new location in Ms
      if (typeof timeMs === "number") {
        videoTimeMs = timeMs;
        // Find the event index that is < timeMs
        let idx = -1;
        for (let i = 0; i < matchScript.length; i++) {
          if (matchScript[i].timeSinceVideoStartedInMs <= videoTimeMs) idx = i;
          else break;
        }
        lastFiredIndex = idx;
        // Publish the seek message
        publish("game.video-status", {
          type: "SEEK",
          params: { playbackTime: videoTimeMs },
        });
        console.log("SEEK triggered, new time:", videoTimeMs);
      }
      break;

    case "END_STREAM":
      // Send end stream message
      publish("game.video-status", { type: "END_STREAM", params: {} });
      console.log("END_STREAM triggered");
      // Optionally set timeline to end
      videoTimeMs = totalVideoDurationMs;
      break;

    // These next ones are sample usage for extra excitement, frustration, etc.
    // We'll send multiple reactions, chat messages, etc.
    case "FAN_EXCITEMENT":
      // e.g. send 20 celebratory emojis
      for (let i = 0; i < 20; i++) {
        const randomEmoji = Math.random() < 0.5 ? "🎉" : "🙌";
        const delay = randInt(100, 2000);
        setTimeout(() => {
          publish("game.streamreactions", { text: randomEmoji, type: "reaction" });
          console.log("FAN_EXCITEMENT reaction:", randomEmoji);
        }, delay);
      }
      // Also send random chat from "Fan excitement"
      if (chatMessagesForEvent["Fan excitement"]) {
        const messageArr = chatMessagesForEvent["Fan excitement"];
        const randomMsg = messageArr[randInt(0, messageArr.length - 1)];
        setTimeout(() => {
          publish("game.chat", { user: "bot-01", text: randomMsg });
          console.log("FAN_EXCITEMENT chat message:", randomMsg);
        }, randInt(200, 2500));
      }
      break;

    case "FAN_FRUSTRATION":
      // e.g. send 25 anger emojis
      for (let i = 0; i < 25; i++) {
        const randomFrustration = "😡";
        const delay = randInt(100, 2000);
        setTimeout(() => {
          publish("game.streamreactions", { text: randomFrustration, type: "reaction" });
          console.log("FAN_FRUSTRATION reaction:", randomFrustration);
        }, delay);
      }
      // Also send random chat from "Fan frustration"
      if (chatMessagesForEvent["Fan frustration"]) {
        const messageArr = chatMessagesForEvent["Fan frustration"];
        const randomMsg = messageArr[randInt(0, messageArr.length - 1)];
        setTimeout(() => {
          publish("game.chat", { user: "bot-01", text: randomMsg });
          console.log("FAN_FRUSTRATION chat message:", randomMsg);
        }, randInt(200, 2500));
      }
      break;

    case "TAG_USER_IN_MESSAGE":
      // Creates a message that tags current user
      // e.g. "Hello @currentUser"
      // We'll simulate the specialTaggedMessage scenario
      const userId = req.body.taggedUserId || "demoUser"; // or from request
      publish("game.chat", { user: "bot-01", specialTaggedMessage: true, taggedUserId: userId });
      console.log("TAG_USER_IN_MESSAGE triggered, for user:", userId);
      break;

    default:
      console.log("Unknown action:", action);
      break;
  }

  res.json({ ok: true });
});

// Start the HTTP server on port 4000
const server = http.createServer(app);
server.listen(4000, () => {
  console.log("Server started on http://localhost:4000");
});
