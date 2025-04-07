"use strict";

/*
  To run:
  1) Create a .env file or set environment variables for:
     PUBNUB_PUBLISH_KEY, PUBNUB_SUBSCRIBE_KEY
  2) npm install pubnub dotenv
  3) npm run start (or node server.js)

  This demo:
  - Loads environment variables
  - Periodically increments a local "video playback time" every second
  - Publishes a 'STATUS' message to PubNub (sync the front-end seek position)
  - Checks a timeline array to see if an event should be triggered
  - On triggering, it prints to console and publishes relevant messages via PubNub
  - Simulates user chat with bot-01..bot-09
  - Loops video after it ends at 300 seconds (5 minutes)

  NOTE: Replace placeholder actions/payloads with actual usage in your environment
*/

require("dotenv").config();
const PubNub = require("pubnub");

// PubNub configuration from ENV
const pubnub = new PubNub({
  publishKey: process.env.PUBNUB_PUBLISH_KEY || "demo",
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY || "demo",
  uuid: "server-simulator",
});

const timeline = [
  { time: 0.0,   event: "Kick off" },
  { time: 15.0,  event: "Fan excitement" },
  { time: 30.0,  event: "Goal" },
  { time: 60.0,  event: "Fan frustration" },
  { time: 120.0, event: "Fan excitement" },
  { time: 180.0, event: "Goal" },
  { time: 200.0, event: "Fan excitement" },
  { time: 280.0, event: "Five minutes remaining" },
  { time: 295.0, event: "Fan frustration" },
  { time: 300.0, event: "End match" },
];

const BOT_USERS = [
  "bot-01","bot-02","bot-03","bot-04","bot-05",
  "bot-06","bot-07","bot-08","bot-09"
];

// We track the current playbackTime in seconds
let playbackTime = 0;
let nextTimelineIndex = 0;

console.log("Server started. Beginning video loop simulation.");

/**
 * Publish a message to a PubNub channel.
 * @param {string} channel PubNub channel
 * @param {Object} message The object to publish
 */
function publishMessage(channel, message) {
  pubnub.publish({
    channel,
    message
  }, (status, response) => {
    if (status.error) {
      console.log("PubNub publish error:", status);
    } else {
      console.log(`PubNub publish success to '${channel}':`, message);
    }
  });
}

/**
 * Handle timeline event logic
 * @param {string} event
 */
function handleTimelineEvent(event) {
  console.log(`Handling event: ${event}`);

  switch (event) {
    case "Kick off":
      // Send a "start stream" message
      publishMessage("game.control", {
        type: "START_STREAM",
        params: {}
      });
      console.log("Video stream started (Kick off).");
      break;

    case "Fan excitement":
      // Simulate 20 reaction emojis
      for (let i = 0; i < 20; i++) {
        const randomBot = BOT_USERS[Math.floor(Math.random() * BOT_USERS.length)];
        publishMessage("game.stream-reactions", {
          user: randomBot,
          text: i % 2 === 0 ? "🎉" : "🙌",
          type: "reaction"
        });
      }
      console.log("Fan excitement triggered multiple reaction emojis.");
      break;

    case "Goal":
      // Could do a stat update or a chat message
      // For demonstration, publish a chat from a random bot
      {
        const randomBot = BOT_USERS[Math.floor(Math.random() * BOT_USERS.length)];
        publishMessage("game.chat", {
          user: randomBot,
          text: "GOOOAAALLL!!!"
        });
        // Also optionally update match stats
        publishMessage("game.match-stats", {
          statBox1: {
            info: [
              { stat: "Shots on Target: 5" },
              { stat: "Goals: 1" }
            ]
          }
        });
      }
      console.log("Goal event, chat and match-stats published.");
      break;

    case "Fan frustration":
      // 25 anger emojis
      for (let i = 0; i < 25; i++) {
        const randomBot = BOT_USERS[Math.floor(Math.random() * BOT_USERS.length)];
        publishMessage("game.stream-reactions", {
          user: randomBot,
          text: "😡",
          type: "reaction"
        });
      }
      console.log("Fan frustration triggered multiple anger reaction emojis.");
      break;

    case "Five minutes remaining":
      // Could do a video seek or a special chat
      publishMessage("game.control", {
        type: "SEEK",
        params: {
          playbackTime: playbackTime * 1000
        }
      });
      console.log("Notified: Five minutes remaining. Possibly a seek or status update.");
      break;

    case "End match":
      // Send an end stream message
      publishMessage("game.control", {
        type: "END_STREAM",
        params: {}
      });
      console.log("Video stream ended.");
      break;

    default:
      console.log(`No specific handler for event '${event}'`);
      break;
  }
}

/**
 * Main loop (runs every second)
 * - Increments time
 * - Publishes video status
 * - Checks timeline events
 */
setInterval(() => {
  // 1) Publish a video status message
  publishMessage("game.control", {
    type: "STATUS",
    params: {
      playbackTime: playbackTime * 1000,
      videoStarted: playbackTime === 0,
      videoEnded: playbackTime >= 300
    }
  });
  console.log(`Tick: playbackTime=${playbackTime}`);

  // 2) Check timeline events
  while (
    nextTimelineIndex < timeline.length &&
    playbackTime >= timeline[nextTimelineIndex].time
  ) {
    const currEvent = timeline[nextTimelineIndex].event;
    handleTimelineEvent(currEvent);
    nextTimelineIndex++;
  }

  // 3) If we've hit or passed the end, loop the video
  if (playbackTime >= 300) {
    console.log("Looping video back to start.");
    playbackTime = 0;
    nextTimelineIndex = 0;
    return; // skip increment below so we remain at 0 next iteration
  }

  // Increment playback time (simulate 1 second)
  playbackTime++;
}, 1000);