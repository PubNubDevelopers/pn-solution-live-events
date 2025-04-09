"use strict";

// ------------------------
// server.js
// ------------------------
// Run with:  npm install express pubnub dotenv
// Then:       npm run start
//
// This server demonstrates a "live events demo" backend:
//  • Periodically publishes video time status via PubNub (1 Hz).
//  • Executes scripted timeline events from game-data.js in sync with video playback.
//  • Loops the timeline forever.
//  • Offers endpoints for skipping video time, fan excitement/frustration, tagging users, etc.
//  • Randomly simulates chat messages & reactions from bot-01..bot-09 with realistic delays.
//  • Logs everything to console.
// ------------------------

require("dotenv").config();
const express = require("express");
const PubNub = require("pubnub");
const { matchScript } = require("./game-data.js");

// Configure PubNub from ENV
const pubnub = new PubNub({
  publishKey: process.env.PUBNUB_PUBLISH_KEY || "demo",
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY || "demo",
  userId: "server-simulator", // or uuid
});

// Simple server
const app = express();
app.use(express.json());

// ---------------------------------------------------
// Random chat utilities
// ---------------------------------------------------
const randomDelay = () => 500 + Math.floor(Math.random() * 3000); // 0.5s - 3.5s

const randomBot = () => {
  const num = 1 + Math.floor(Math.random() * 9);
  return `bot-0${num}`;
};

// 50+ messages for "goal" events
const goalMessages = [
  "GOAL! That was unstoppable!",
  "What a rocket into the top corner!",
  "They've scored again, unbelievable scenes!",
  "Absolutely stunning! Another goal!",
  "The net is shaking from that shot!",
  "Incredible finish for the highlight reel!",
  "That strike was pure magic!",
  "The crowd goes wild after that goal!",
  "What a volley! The keeper had no chance!",
  "Net buster! Couldn’t ask for more!",
  "Precise and deadly. Gotta love good finishing!",
  "Boom! The scoreboard changes rapidly!",
  "He made it look so easy—pure class!",
  "Talk about composure in front of goal!",
  "They’ve doubled their lead in style!",
  "Goal scorers living the dream tonight!",
  "He just can’t stop scoring!",
  "This is turning into a rout!",
  "Follow up on that rebound was brilliant!",
  "Clinical, unstoppable, unstoppable!",
  "He’s on a hat-trick now, watch out!",
  "Goal spree alert, unstoppable force!",
  "That’s how you finish under pressure!",
  "Keeper left rooted to the spot!",
  "What a brilliantly worked goal!",
  "Pure euphoria for the fans!",
  "He even surprised himself with that strike!",
  "Eyes on the ball, perfect technique!",
  "A real screamer from outside the box!",
  "Old-school finishing meets new-age flair!",
  "They’re tearing the defense apart right now!",
  "Keep feeding him passes, he’s on fire!",
  "Beautiful interplay to set up that finish!",
  "The defense is all at sea after that strike!",
  "Keeper will have nightmares about this shot!",
  "Sublime first touch leading to a top finish!",
  "Brilliant flick and finished perfectly!",
  "He whipped that ball in like a guided missile!",
  "He’s having a field day in front of goal!",
  "That’s a statement goal if ever I saw one!",
  "Cute move, lethal shot, unstoppable!",
  "They couldn’t close him down in time!",
  "Tiki-taka at its finest culminating in a goal!",
  "He’s beaten the offside trap perfectly!",
  "Big moment on the biggest stage—goal!",
  "Give that man a medal for finishing!",
  "A real demonstration of firepower today!",
  "Just unstoppable from that range!",
  "Another notch on the scoreboard!",
  "He’s got ice in his veins with that finish!",
];

// 50+ messages for "foul"/"card" events
const foulMessages = [
  "Oof, that tackle looked nasty!",
  "The ref had no choice but to blow the whistle!",
  "Tempers flaring on the pitch now.",
  "That challenge was on the edge—lucky to escape a red!",
  "Brutal collision, hope everyone’s okay!",
  "The ref’s going to reach for a card here!",
  "Someone’s losing their cool out there.",
  "That was a late and clumsy challenge!",
  "He can have no complaints seeing yellow!",
  "That tackle will leave a bruise, for sure!",
  "Stoppage in play, they’re checking on injuries.",
  "How did the referee not see that elbow?!",
  "He’s walking a tightrope on a caution now!",
  "Reckless challenge! Could’ve been worse.",
  "Studs up is always risky—he’s lucky!",
  "Serious situation, the bench is furious!",
  "That looked malicious—cards must come out!",
  "No excuse for that kind of tackle!",
  "Blood boiling on the field, it’s tense!",
  "He’s flirting with a sending-off here!",
  "Standing on his foot, that’s not going unpunished!",
  "The ref is calling him over for a stern talk!",
  "That tackle was nowhere near the ball!",
  "This could impact how he plays the rest of the match!",
  "We might see the medical team come on.",
  "Pressure rising, the ref’s losing patience!",
  "That foul might change the game’s momentum.",
  "Calculated or just clumsy? Hard to say!",
  "VAR might have a look at that challenge!",
  "He’ll need to calm down and avoid a second card!",
  "The crowd is booing relentlessly now!",
  "Yes, the referee has brandished a card!",
  "That could’ve ended in a serious injury!",
  "He’s lucky it’s just a yellow, that was harsh!",
  "Definite free kick, no question about it!",
  "Two-footed challenge? That’s borderline red!",
  "Cynical foul to stop the counter!",
  "Referee’s note-taking is in overdrive now!",
  "Rash challenge at this stage of the game!",
  "He just lunged in without control!",
  "This match is getting very physical!",
  "Tactical foul or pure frustration?",
  "The bench is protesting vociferously!",
  "This is becoming a card-fest!",
  "We warned you about discipline, here we go!",
  "He’s heading into dangerous territory with the ref!",
  "Spectators love the intensity, but that’s a foul!",
  "He’ll be walking on eggshells after that card!",
  "He’s in the ref’s notebook—no more second chances!",
];

// 50+ messages for general commentary or neutral events
const generalMessages = [
  "What a brilliant pass, they’re progressing well!",
  "He’s showing great technique on the ball.",
  "The keeper’s distribution has been on point!",
  "Loving the energy in the stadium so far!",
  "The defense is holding firm under pressure.",
  "They’re so compact, hard to break down!",
  "Beautiful cross-field switch, opening up space!",
  "He’s dancing past defenders like they’re cones!",
  "You can feel the crowd’s anticipation mounting!",
  "Oh, nearly a perfect through ball!",
  "They’re taking control in midfield right now.",
  "Still anyone’s game—so much to play for!",
  "They need to pick up the tempo a bit here.",
  "Just a bit more composure needed in the box!",
  "That was a crucial interception, well-timed!",
  "Plenty of possession, but lacking the end product.",
  "Beautiful diagonal run, can he find a teammate?",
  "He’s reading the game so well tonight!",
  "This fixture never disappoints—always drama!",
  "Pinpoint passing, the fans are loving this build-up!",
  "He’s covering every blade of grass out there!",
  "The manager’s urging them to push forward!",
  "Spectators on the edge of their seats now!",
  "The midfield battle is so intense right now!",
  "A real tactical chess match unfolding here!",
  "They need more movement upfront to create space.",
  "He nearly sold the keeper there with a dummy!",
  "End-to-end action—this is entertaining!",
  "That’s a whipped cross, just needed a final touch!",
  "Good idea, but the execution let him down.",
  "They’re rotating positions very fluidly!",
  "He’s taking on defenders at will right now!",
  "So close to a scoring chance, if not for that last tackle!",
  "The home crowd is roaring them on!",
  "That’s a clever flick, can they capitalize?",
  "Racking up corners, pressure is mounting!",
  "He’s full of running and not giving up!",
  "Outside of the foot pass, that’s flair!",
  "No let-up in intensity as we approach half time!",
  "This game could use a spark to get the goals flowing.",
  "He’s scanning for options, waiting for a run!",
  "The pace is frantic, end-to-end stuff!",
  "What a powerful run, unstoppable on the dribble!",
  "The referee’s letting them play, good advantage!",
  "Superb one-touch interplay in midfield!",
  "They’re prodding and probing, looking for an opening!",
  "The back line is staying organized and disciplined!",
  "He’s so confident under pressure, classy stuff!",
  "Will we see a late twist in this half?",
  "The match is finely poised—could go either way!",
];

// Helper to guess an event type from commentary text
function getEventType(text = "") {
  const lower = text.toLowerCase();
  if (
    lower.includes("goal") ||
    lower.includes("brace") ||
    lower.includes("scored")
  ) {
    return "goal";
  } else if (
    lower.includes("foul") ||
    lower.includes("card") ||
    lower.includes("challenge") ||
    lower.includes("penalty")
  ) {
    return "foul";
  } else {
    return "general";
  }
}

// Publish helper
function publishMessage(channel, messageObj) {
  console.log(
    `→ PUBNUB PUBLISH to channel="${channel}":`,
    JSON.stringify(messageObj)
  );
  pubnub.publish({ channel, message: messageObj }, (status) => {
    if (status.error) {
      console.log("Publish Error:", status);
    }
  });
}

// Send a random chat message from some bot with random delay
function sendRandomChat(eventType) {
  let messages;
  if (eventType === "goal") messages = goalMessages;
  else if (eventType === "foul") messages = foulMessages;
  else messages = generalMessages;

  const msgIndex = Math.floor(Math.random() * messages.length);
  const text = messages[msgIndex];
  const user = randomBot();

  setTimeout(() => {
    console.log(
      `Event Chat [${eventType.toUpperCase()}] from ${user}: "${text}"`
    );
    publishMessage("game.chat", {
      user,
      text,
    });
  }, randomDelay());
}

// Send a random reaction with random delay
function sendRandomReaction(eventType) {
  let reactionEmoji = "🤔";
  if (eventType === "goal") reactionEmoji = "🎉";
  else if (eventType === "foul") reactionEmoji = "🤬";

  setTimeout(() => {
    console.log(`Event Reaction [${eventType.toUpperCase()}]: ${reactionEmoji}`);
    publishMessage("game.stream-reactions", {
      text: reactionEmoji,
      type: "reaction",
    });
  }, randomDelay());
}

// ---------------------------------------------------
// Timeline & Video Playback
// ---------------------------------------------------
let videoStartTime = Date.now(); // real-world start
let timelineIndex = 0;
let videoJustStarted = true;
let videoIsRunning = true;

// Return current "time since video started" in ms
function getCurrentVideoMs() {
  if (!videoIsRunning) return 0;
  return Date.now() - videoStartTime;
}

// Publish "START_STREAM" once at beginning
function doStartStream() {
  console.log(">>> START_STREAM requested <<<");
  publishMessage("game.video-status", {
    type: "START_STREAM",
    params: {},
  });
  videoStartTime = Date.now();
  timelineIndex = 0;
  videoIsRunning = true;
  videoJustStarted = true;
}

// Publish "END_STREAM"
function doEndStream() {
  console.log(">>> END_STREAM requested <<<");
  publishMessage("game.video-status", {
    type: "END_STREAM",
    params: {},
  });
  videoIsRunning = false;
}

// Publish "SEEK" to a new location in ms
function doSeek(ms) {
  console.log(`>>> SEEK requested to ${ms}ms <<<`);
  publishMessage("game.video-status", {
    type: "SEEK",
    params: {
      playbackTime: ms,
    },
  });
  // Adjust timeline so that we effectively move to ms
  videoStartTime = Date.now() - ms;

  // Move timelineIndex to nearest upcoming event
  let idx = matchScript.findIndex((ev) => ev.timeSinceVideoStartedInMs >= ms);
  if (idx === -1) idx = matchScript.length - 1;
  timelineIndex = idx;
}

// This function loops the timeline forever.
function checkTimeline() {
  if (!videoIsRunning) return;

  const currentMs = getCurrentVideoMs();

  // If we've reached the end of script, loop back
  if (timelineIndex >= matchScript.length) {
    console.log("Video ended. Looping back to 0.");
    publishMessage("game.video-status", {
      type: "STATUS",
      params: {
        playbackTime: currentMs,
        videoEnded: true,
      },
    });
    // Restart
    doStartStream();
    return;
  }

  // Check if we should fire the next timeline event
  const nextEvent = matchScript[timelineIndex];
  if (currentMs >= nextEvent.timeSinceVideoStartedInMs) {
    // Fire the event
    console.log(
      `Timeline event #${timelineIndex} at ${nextEvent.timeSinceVideoStartedInMs}ms =>`,
      JSON.stringify(nextEvent.action)
    );

    // Publish the event
    publishMessage(nextEvent.action.channel, nextEvent.action.data);

    // Possibly also send random chat & random reaction
    if (nextEvent.action.channel === "game.commentary") {
      const eventType = getEventType(nextEvent.action.data.text);
      sendRandomChat(eventType);
      sendRandomReaction(eventType);
    }

    timelineIndex++;
  }

  // Also periodically publish a STATUS message so front end can sync
  publishMessage("game.video-status", {
    type: "STATUS",
    params: {
      playbackTime: currentMs,
      videoStarted: videoJustStarted,
      videoEnded: false,
    },
  });
  videoJustStarted = false;
}

// ---------------------------------------------------
// Endpoints for Data Controls
// ---------------------------------------------------
app.post("/start", (req, res) => {
  doStartStream();
  res.json({ ok: true, message: "Stream started" });
});

app.post("/end", (req, res) => {
  doEndStream();
  res.json({ ok: true, message: "Stream ended" });
});

app.post("/seek", (req, res) => {
  const ms = parseInt(req.body.playbackTime || "0", 10);
  doSeek(ms);
  res.json({ ok: true, message: `Seeked to ${ms}ms` });
});

app.post("/fanExcitement", (req, res) => {
  console.log(">>> Fan Excitement triggered <<<");
  // Trigger ~20 cheer emojis
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      console.log("Fan Excitement Reaction: 🎉");
      publishMessage("game.stream-reactions", { text: "🎉", type: "reaction" });
    }, randomDelay());
  }
  res.json({ ok: true, message: "Fan Excitement triggered" });
});

app.post("/fanFrustration", (req, res) => {
  console.log(">>> Fan Frustration triggered <<<");
  // Trigger ~25 anger emojis
  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      console.log("Fan Frustration Reaction: 😡");
      publishMessage("game.stream-reactions", { text: "😡", type: "reaction" });
    }, randomDelay());
  }
  res.json({ ok: true, message: "Fan Frustration triggered" });
});

app.post("/tagUser", (req, res) => {
  console.log(">>> Tag User in Message triggered <<<");
  // For demonstration, from random bot user
  const user = randomBot();
  // We'll assume the front-end includes chat.currentUser.id as "taggedUser"
  const taggedUser = req.body.taggedUser || "currentUser";
  const chatMsg = `Hello @${taggedUser}`;
  console.log(`Tag user message from ${user}: ${chatMsg}`);
  publishMessage("game.chat", {
    user,
    specialTaggedMessage: true,
    text: chatMsg, // included for clarity, though the front-end might parse differently
  });
  res.json({ ok: true, message: "Tagged user message sent." });
});

// Just a convenience GET to test server is running
app.get("/", (req, res) => {
  res.send("Live Events Demo backend is running.");
});

// ---------------------------------------------------
// Start server & the 1-second interval
// ---------------------------------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});

// Periodic main loop (every 1 second)
setInterval(() => {
  checkTimeline();
}, 1000);
