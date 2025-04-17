"use strict";

// Load environment variables
require("dotenv").config();

// Validate required environment variables
if (!process.env.PUBNUB_PUBLISH_KEY || !process.env.PUBNUB_SUBSCRIBE_KEY) {
  console.error("Missing PUBNUB_PUBLISH_KEY and/or PUBNUB_SUBSCRIBE_KEY in .env");
  process.exit(1);
}

// Initialize PubNub
const PubNub = require("pubnub");
const pubnub = new PubNub({
  publishKey: process.env.PUBNUB_PUBLISH_KEY,
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY,
  userId: "game-server"
});

// Import modules
const { chat } = require("./game-data/chat.js");
const { commentary } = require("./game-data/commentary.js");
const { polls } = require("./game-data/polls.js");
const { reactions } = require("./game-data/reactions.js");
const { stats } = require("./game-data/stats.js");

// Merge data into a single sorted array
let matchScript = [...chat, ...commentary, ...polls, ...reactions, ...stats];
matchScript.sort(
  (a, b) => a.timeSinceVideoStartedInMs - b.timeSinceVideoStartedInMs
);

// Track current playback time (in ms) and the current index in matchScript
let currentTime = 0;
let eventIndex = 0;
const totalDuration = matchScript.length
  ? matchScript[matchScript.length - 1].timeSinceVideoStartedInMs
  : 0;

// Run-loop: repeats once every second
setInterval(() => {
  console.log("Video timeline tick:", currentTime);

  // Publish periodic video status message so clients can stay in sync
  pubnub
    .publish({
      channel: "game.client-video-control",
      message: {
        type: "STATUS",
        params: {
          playbackTime: currentTime,
          videoStarted: currentTime === 0,
          videoEnded: false
        }
      }
    })
    .then(() => {
      console.log("Published STATUS for playbackTime:", currentTime);
    })
    .catch((err) => {
      console.error("Error publishing STATUS:", err);
    });

  // Check for any events that should fire at or before currentTime
  while (
    eventIndex < matchScript.length &&
    matchScript[eventIndex].timeSinceVideoStartedInMs <= currentTime
  ) {
    const scriptItem = matchScript[eventIndex];
    console.log("Event triggered:", scriptItem);

    const storeInHistory = scriptItem.persistInHistory === true;
    const actionChannel = scriptItem.action.channel;
    const actionMessage = scriptItem.action.data;
    const repeatCount =
      scriptItem.repeat && typeof scriptItem.repeat === "number"
        ? scriptItem.repeat
        : 1;

    // Publish this scriptItem action 'repeatCount' times
    for (let i = 0; i < repeatCount; i++) {
      pubnub
        .publish({
          channel: actionChannel,
          message: actionMessage,
          storeInHistory: storeInHistory
        })
        .then((response) => {
          console.log(
            `Published to ${actionChannel} =>`,
            actionMessage,
            response
          );
        })
        .catch((err) => {
          console.error("Publish error:", err);
        });
    }

    eventIndex++;
  }

  // Check if we've reached the end of the script
  if (currentTime >= totalDuration) {
    console.log("End of match script timeline. Restarting...");

    // Publish final "videoEnded" status
    pubnub
      .publish({
        channel: "game.client-video-control",
        message: {
          type: "STATUS",
          params: {
            playbackTime: currentTime,
            videoStarted: false,
            videoEnded: true
          }
        }
      })
      .then(() => {
        console.log("Published final videoEnded STATUS.");
      })
      .catch((err) => {
        console.error("Error publishing final videoEnded STATUS:", err);
      });

    // Reset timeline
    currentTime = 0;
    eventIndex = 0;
  } else {
    // Move timeline forward by 1000ms
    currentTime += 1000;
  }
}, 1000);
