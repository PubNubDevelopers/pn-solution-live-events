/////////////////////////////////////////////////////////////////
// server.js
/////////////////////////////////////////////////////////////////
/*
  To use:
  1) Create a .env file in the same directory with:
       PUBNUB_PUBLISH_KEY=your-publish-key
       PUBNUB_SUBSCRIBE_KEY=your-subscribe-key
  2) Place the game-data.js file (containing exports.matchScript) in the same directory.
  3) npm install express pubnub dotenv
  4) npm run (or node server.js)
*/

require("dotenv").config();
const express = require("express");
const PubNub = require("pubnub");
const { matchScript } = require("./game-data.js"); // contains exports.matchScript

const {
  PUBNUB_PUBLISH_KEY,
  PUBNUB_SUBSCRIBE_KEY
} = process.env;

// Ensure ENV vars are present
if (!PUBNUB_PUBLISH_KEY || !PUBNUB_SUBSCRIBE_KEY) {
  console.error("Error: PUBNUB_PUBLISH_KEY or PUBNUB_SUBSCRIBE_KEY missing in .env.");
  process.exit(1);
}

// Initialize PubNub
const pubnub = new PubNub({
  publishKey: PUBNUB_PUBLISH_KEY,
  subscribeKey: PUBNUB_SUBSCRIBE_KEY,
  userId: "server-01" // A default userId; will be changed dynamically before publish
});

// Create an Express server
const app = express();
app.use(express.json());

// -----------------------------------------------------------
// STATE
// -----------------------------------------------------------
let currentVideoTimeMs = 0;       // Tracks our "video" time in ms
let lastCheckTime = 0;            // For grabbing events between intervals
let timelineIndex = 0;            // Where we are in matchScript
let isVideoPlaying = true;        // Basic toggle to demonstrate start/stop
const VIDEO_LOOP_END_MS = 600000; // Just a buffer beyond last script entry

// Random chat messages (50+ for variety). You can expand these as desired.
const randomChatMessages = [
  "What a play, unbelievable!",
  "That tackle was intense!",
  "I'm loving this match!",
  "Do you think there's another goal coming?",
  "Defense looks shaky today.",
  "The crowd is electric right now!",
  "Wow, didn't see that coming!",
  "Red card incoming?",
  "This referee is tough!",
  "Incredible save by the keeper!",
  "That was a near miss!",
  "I'm cheering so loudly my neighbors can hear!",
  "Who else is on the edge of their seat?",
  "That striker is unstoppable!",
  "VAR decision incoming, oh boy!",
  "Imagine if they'd scored that!",
  "Nothing beats a last-minute goal.",
  "Cheers from the UK!",
  "Anyone else think they've got this in the bag?",
  "Great pass, brilliant finish!",
  "This formation is really working.",
  "The manager must be furious.",
  "I can hardly breathe, it's so tense!",
  "They're totally dominating possession.",
  "His pace is unreal!",
  "Come on, we want a goal!",
  "I'm calling a hat-trick!",
  "Soul-crushing miss!",
  "They're outplaying them in midfield.",
  "Okay, I'm officially a fan now!",
  "Switched to watch on my phone, can't miss a second!",
  "Pure heartbreak for the losing side.",
  "The fans are going wild in the stands.",
  "No words for that kind of footwork!",
  "A masterclass in attacking football!",
  "Hope there's extra time, I'm not ready for this to end!",
  "Comeback is on, watch this space!",
  "Keep the momentum going!",
  "That linesman deserves a raise!",
  "Why didn't they cross earlier?",
  "Medics are on the pitch—hope he's okay!",
  "Stamina is key in these final minutes!",
  "Yes, yes, yes—GOAL!",
  "So close, that was inches away!",
  "That rabona was cheeky!",
  "They need fresh legs from the bench!",
  "Hard luck for the goalie!",
  "This team is unstoppable tonight!",
  "Can't believe we get to watch this live!",
  "Glad I'm here for this massive showdown!"
];

// Reaction emojis (cheers, frustration, etc.)
const reactionEmojis = ["🎉", "🙌", "⚽", "🔥", "😡", "👏", "💥", "🥳", "😮", "🤯"];

// -----------------------------------------------------------
// HELPER FUNCTIONS
// -----------------------------------------------------------

// Returns a random integer between min and max (inclusive).
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Safely set userId based on channel, per instructions
function setPubNubUserIdForChannel(channel) {
  if (channel === "game.stream-reactions") {
    pubnub.setUserId(`bot-0${randInt(1, 9)}`);
  } else if (channel === "game.chat") {
    pubnub.setUserId(`user-0${randInt(1, 9)}`);
  } else {
    // default server identity
    pubnub.setUserId(`server-01`);
  }
}

function publishMessage(channel, data) {
  // Per instructions, set user ID before publish
  setPubNubUserIdForChannel(channel);

  pubnub
    .publish({
      channel,
      message: data,
      storeInHistory: data.persistInHistory || false // default false if not specified
    })
    .then(() => {
      console.log(`Published to channel [${channel}] =>`, data);
    })
    .catch((err) => {
      console.error("PubNub publish error:", err);
    });
}

// Slight random delay to add "realistic" offset (0-1000 ms).
function publishWithRandomDelay(channel, data) {
  setTimeout(() => {
    publishMessage(channel, data);
  }, randInt(0, 1000));
}

// Periodically send out the current video status
function publishVideoStatus() {
  const statusMessage = {
    type: "STATUS",
    params: {
      playbackTime: currentVideoTimeMs,
      videoStarted: currentVideoTimeMs === 0,
      // We'll consider "videoEnded" if we are near the looping threshold
      videoEnded: currentVideoTimeMs > (VIDEO_LOOP_END_MS - 2000)
    }
  };
  publishMessage("game.video-status", statusMessage);
  console.log("Video status update =>", statusMessage);
}

// Check timeline events in the matchScript to see which ones should fire
function checkTimelineEvents() {
  // We look for any events whose timeSinceVideoStartedInMs
  // is between lastCheckTime (excluded) and currentVideoTimeMs (included).
  while (
    timelineIndex < matchScript.length &&
    matchScript[timelineIndex].timeSinceVideoStartedInMs <= currentVideoTimeMs
  ) {
    const event = matchScript[timelineIndex];
    // Fire this event
    console.log("Firing timeline event =>", event);
    publishWithRandomDelay(event.action.channel, {
      ...event.action.data,
      persistInHistory: !!event.persistInHistory
    });
    timelineIndex += 1;
  }
}

// We can spontaneously add random chat messages or reactions
// simulating additional user activity.
function spontaneousUserActivity() {
  // 30% chance to send a random chat
  if (Math.random() < 0.3) {
    const randomIndex = randInt(0, randomChatMessages.length - 1);
    const chatText = randomChatMessages[randomIndex];
    publishWithRandomDelay("game.chat", {
      user: `user-0${randInt(1, 9)}`,
      text: chatText
    });
  }

  // 20% chance for a random reaction
  if (Math.random() < 0.2) {
    const rxIndex = randInt(0, reactionEmojis.length - 1);
    const reaction = reactionEmojis[rxIndex];
    publishWithRandomDelay("game.stream-reactions", {
      text: reaction,
      type: "reaction"
    });
  }
}

// If timeline is finished, loop back
function checkForVideoLoop() {
  // For simplicity, let's decide the loop threshold is
  // the maximum time in matchScript or some fixed end.
  const lastScriptTime = matchScript[matchScript.length - 1].timeSinceVideoStartedInMs;
  if (currentVideoTimeMs > lastScriptTime + 2000) {
    // We consider that the video ended. Loop again
    console.log("Video timeline ended. Restarting to 0...");
    currentVideoTimeMs = 0;
    timelineIndex = 0;
  }
}

// -----------------------------------------------------------
// MAIN INTERVAL LOOP
// -----------------------------------------------------------
// Runs once every second
setInterval(() => {
  if (!isVideoPlaying) {
    // If "paused", do nothing except keep sending status
    publishVideoStatus();
    return;
  }

  // Update time
  lastCheckTime = currentVideoTimeMs;
  currentVideoTimeMs += 1000; // one second passed

  // Check timeline
  checkTimelineEvents();

  // Periodic random user activity
  spontaneousUserActivity();

  // Send periodic video status
  publishVideoStatus();

  // Check for loop
  checkForVideoLoop();
}, 1000);

// -----------------------------------------------------------
// EXPRESS ENDPOINTS (Data Controls Panel simulation)
// -----------------------------------------------------------
app.get("/", (req, res) => {
  res.send("Live Events Demo Backend is running.");
});

// 1) Start stream
app.post("/start-stream", (req, res) => {
  console.log("Received request: Start Stream");
  isVideoPlaying = true;
  currentVideoTimeMs = 0;
  timelineIndex = 0;
  const msg = { type: "START_STREAM", params: {} };
  publishMessage("game.video-control", msg);
  console.log("Start Stream message published.");
  res.json({ success: true });
});

// 2) End stream
app.post("/end-stream", (req, res) => {
  console.log("Received request: End Stream");
  isVideoPlaying = false;
  const msg = { type: "END_STREAM", params: {} };
  publishMessage("game.video-control", msg);
  console.log("End Stream message published.");
  res.json({ success: true });
});

// 3) Skip to position in the video (in ms)
app.post("/seek", (req, res) => {
  const { playbackTime } = req.body; // expecting JSON body {playbackTime: number}
  console.log(`Received request: Seek => ${playbackTime} ms`);
  currentVideoTimeMs = playbackTime;
  // Adjust timelineIndex to point to the correct place:
  // find the earliest script index whose timeSinceVideoStartedInMs >= playbackTime
  timelineIndex = matchScript.findIndex(ev => ev.timeSinceVideoStartedInMs >= playbackTime);
  if (timelineIndex < 0) timelineIndex = matchScript.length; // or ended
  const msg = {
    type: "SEEK",
    params: { playbackTime }
  };
  publishMessage("game.video-control", msg);
  console.log("Seek message published =>", msg);
  res.json({ success: true });
});

// 4) Fan excitement => 20 "cheer" or "applause"
// This simulates an immediate flurry of emojis
app.post("/fan-excitement", (req, res) => {
  console.log("Received request: Fan Excitement");
  for (let i = 0; i < 20; i++) {
    const reaction = Math.random() < 0.5 ? "🎉" : "🙌";
    publishWithRandomDelay("game.stream-reactions", {
      text: reaction,
      type: "reaction"
    });
  }
  res.json({ success: true });
});

// 5) Fan frustration => 25 "anger" emojis
app.post("/fan-frustration", (req, res) => {
  console.log("Received request: Fan Frustration");
  for (let i = 0; i < 25; i++) {
    publishWithRandomDelay("game.stream-reactions", {
      text: "😡",
      type: "reaction"
    });
  }
  res.json({ success: true });
});

// 6) Tag user in message => specialTaggedMessage
// Example request body: { tagUserId: "someUser" }
app.post("/tag-user-message", (req, res) => {
  console.log("Received request: Tag user in message");
  const { tagUserId } = req.body;
  // In a real scenario, we'd pass that user ID to the chat SDK,
  // constructing something like "Hello @tagUserId". 
  // Here we simulate it:
  publishWithRandomDelay("game.chat", {
    user: `user-0${randInt(1, 9)}`,
    specialTaggedMessage: true,
    tagUserId: tagUserId || "currentUser"
  });
  res.json({ success: true });
});

// Example poll triggers, if needed:
// 7) Trigger a new poll
app.post("/new-poll", (req, res) => {
  console.log("Received request: New Poll");
  const newPollData = {
    id: randInt(100, 999),
    title: "Which team has the momentum?",
    victoryPoints: 5,
    pollType: "side", // or "match"
    alertText: "New Poll!",
    options: [
      { id: 1, text: "Home" },
      { id: 2, text: "Away" }
    ]
  };
  publishMessage("game.new-poll", newPollData);
  res.json({ success: true, poll: newPollData });
});

// 8) Reset (Sales Demo) - Stub
// This is where you'd call out to your "Illuminate" or other system to reset
// Because credentials are sensitive, do it in the backend only.
app.post("/reset-demo", (req, res) => {
  console.log("Received request: Reset Demo");
  // Stub logic here, e.g. call external API with stored credentials.
  console.log("All Illuminate objects reset to default.");
  res.json({ success: true });
});

// -----------------------------------------------------------
// START THE SERVER
// -----------------------------------------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
