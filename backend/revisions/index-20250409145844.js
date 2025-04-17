"use strict";

require("dotenv").config();
const PubNub = require("pubnub");
const { matchScript } = require("./game-data.js");

// PubNub client
const pubnub = new PubNub({
  publishKey: process.env.PUBNUB_PUBLISH_KEY,
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY,
  restore: true,
});

// ----------------------------------------------------
// Random user IDs
// ----------------------------------------------------
function getRandomBotUserId() {
  const idx = Math.floor(Math.random() * 9) + 1; // 1..9
  return `bot-0${idx}`;
}

function getRandomUserUserId() {
  const idx = Math.floor(Math.random() * 9) + 1;
  return `user-0${idx}`;
}

// ----------------------------------------------------
// Large arrays of at least 50 different chat messages (by event type)
// For brevity, repeated placeholders are used here; you'd customize them.
// ----------------------------------------------------
const chatMessagesByType = {
  goal: [
    "What a fantastic goal!",
    "GOOOAAALLL!!!",
    "That's a stunner!",
    "Back of the net!",
    "He smashed it!",
    "Pure brilliance!",
    "Incredible finish!",
    "Breathtaking shot!",
    "Keeper had no chance!",
    "He buried it home!",
    "They deserve that lead!",
    "He found the space!",
    "Goal of the season?",
    "Absolutely unstoppable!",
    "Thunderous strike!",
    "Clinical finishing!",
    "Sublime technique!",
    "A rocket of a shot!",
    "Hats off to the striker!",
    "Net-busting volley!",
    "The fans go wild!",
    "Took it like a pro!",
    "On fire today!",
    "Total domination!",
    "That's how it's done!",
    "They've been threatening!",
    "Goal at last!",
    "No stopping him today!",
    "He read the game well!",
    "Brilliant movement!",
    "Masterclass in finishing!",
    "He shot from distance!",
    "The crowd erupts!",
    "Epic celebration!",
    "Textbook accuracy!",
    "Once in a lifetime strike!",
    "Keeper is furious!",
    "Highlight reel moment!",
    "How do you stop that?!",
    "Gorgeous volley!",
    "Unbelievable power!",
    "Goal mania!",
    "Up and over the line!",
    "Championship material!",
    "Nothing left to do but score!",
    "Electric atmosphere!",
    "Genuine class on display!",
    "Worthy of the highlight reel!",
    "This match is on fire!",
    "Beyond impressive!",
  ],
  penalty: [
    "They've won a penalty!",
    "Ref points to the spot!",
    "This is a spot-kick drama!",
    "Huge moment in the game!",
    "Will he convert?",
    "Mind games with the keeper!",
    "Keeper guesses which way?",
    "Pressure is on!",
    "Penalties can be cruel!",
    "Big chance coming up!",
    "Was that a dive?",
    "Massive call by the ref!",
    "They need to capitalize!",
    "Will it go top bins?",
    "This could turn the match!",
    "The tension is unreal!",
    "Fans hold their breath!",
    "High stakes now!",
    "Hope they don’t bottle it!",
    "All eyes on the taker!",
    "Here comes the penalty!",
    "He’s lining it up!",
    "So much pressure!",
    "Might define the result!",
    "He can't miss this!",
    "This is nerve-wracking!",
    "Will it be saved?",
    "The crowd is roaring!",
    "Fingers crossed!",
    "One-on-one showdown!",
    "A possible game-changer!",
    "Will regret a miss here!",
    "He’s given the keeper the eyes!",
    "Gotta keep composure!",
    "Drama at its finest!",
    "The taker looks confident!",
    "He must bury this!",
    "Fans can’t watch!",
    "Countless hours of practice!",
    "Don’t overthink it!",
    "A hush around the stadium!",
    "Ref blows the whistle!",
    "He steps up…",
    "Nail-biting moment!",
    "They’re praying for a goal!",
    "Absolute heartbreak or ecstasy!",
    "Come on, ref, hurry!",
    "Let's see if he scores!",
    "This is everything right now!",
    "Penalties are brutal!",
  ],
  yellow: [
    "That’s a booking!",
    "He’s in the ref’s book!",
    "Yellow card brandished!",
    "He has to watch himself now!",
    "Ref has had enough!",
    "No messing from the referee!",
    "Careless challenge there!",
    "That was reckless!",
    "Lucky to avoid red!",
    "Needs more discipline!",
    "He has to tread carefully!",
    "That could cost them later!",
    "Temperature is rising!",
    "Need to stay calm!",
    "He’s walking a tightrope now!",
    "Horrible tackle!",
    "He must keep composed!",
    "Deserved caution!",
    "Ref setting the tone!",
    "He’s on thin ice!",
    "No complaints from the player!",
    "Caught him late!",
    "Has to be smarter!",
    "He lost his head there!",
    "Should apologize for that!",
    "Studs showing, dangerous play!",
    "The bench is furious!",
    "Crowd wants more punishment!",
    "Must be careful next time!",
    "Ref’s patience ran out!",
    "Poor timing in the tackle!",
    "Need to keep discipline!",
    "Silly booking to get!",
    "He’s in trouble now!",
    "That was avoidable!",
    "Should have stayed on his feet!",
    "Coach will be unhappy!",
    "He’s risking a second yellow!",
    "Foul after foul, and that’s it!",
    "Ref is consistent at least!",
    "Grab a seat in the book!",
    "A card out of frustration!",
    "Match is getting heated!",
    "He might regret that later!",
    "Better decision-making needed!",
    "He’s letting the team down!",
    "An easy call for the ref!",
    "Overly aggressive challenge!",
    "That’s definitely a caution!",
    "He just had to show the card!",
  ],
  commentary: [
    "That pass was sublime!",
    "They need more possession!",
    "Holding midfield is key here!",
    "Great energy on the pitch!",
    "Press is relentless!",
    "He’s controlling the tempo!",
    "Defenders on high alert!",
    "So much space on the wings!",
    "They look solid at the back!",
    "He’s reading the game well!",
    "Tempo has slowed down!",
    "Crowd urging them on!",
    "He’s orchestrating moves!",
    "Passing triangles look sharp!",
    "Solid shape in midfield!",
    "Team looks cohesive!",
    "They’re shifting defense fast!",
    "Forcing a high press!",
    "They want to break lines!",
    "That’s a clever overlap!",
    "Tight marking in the box!",
    "He’s waiting for an opening!",
    "They’re maintaining possession well!",
    "That’s a quick counter!",
    "Tactical switch in midfield!",
    "He’s looking for the through ball!",
    "Fullbacks pressing high!",
    "They’re starving them of the ball!",
    "Both teams are battling hard!",
    "Crowd is chanting!",
    "He loses the ball cheaply!",
    "They need to find that final pass!",
    "An excellent interception!",
    "The manager is on his feet!",
    "Brilliant footwork!",
    "Shots have been lacking though!",
    "Is a goal on the way?",
    "He’s open in the box!",
    "Movement off the ball is good!",
    "They’re wearing the opponent down!",
    "He just dribbled past two defenders!",
    "They’re building from the back!",
    "This match is still wide open!",
    "Creative play in midfield!",
    "That’s superb technique!",
    "Could see a substitution soon!",
    "Ref having a word there!",
    "Great awareness on show!",
    "He tries a long pass forward!",
    "Both sides still pushing!",
  ],
};

// ----------------------------------------------------
// A small set of emojis for reactions
// We'll randomly choose from these to send to game.stream-reactions
// ----------------------------------------------------
const reactionEmojis = [
  "🎉",
  "🙌",
  "🔥",
  "👀",
  "👏",
  "💥",
  "⚡",
  "😮",
  "🤩",
  "😍",
  "😱",
  "😎",
  "👍",
  "🫡",
];

// ----------------------------------------------------
// Helper to get random item from an array
// ----------------------------------------------------
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ----------------------------------------------------
// Scheduling with random delays
// ----------------------------------------------------
function publishWithRandomDelay(channel, data, userId, minDelay = 200, maxDelay = 2000) {
  const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
  setTimeout(() => {
    pubnub.setUserId(userId);
    pubnub
      .publish({ channel, message: data })
      .then(() => {
        console.log(`Published to ${channel} with userId=${userId}:`, JSON.stringify(data));
      })
      .catch((err) => console.error("Publish error:", err));
  }, delay);
}

// ----------------------------------------------------
// Main timeline loop
// ----------------------------------------------------
let iterationStart = Date.now();
let currentTimeMs = 0;
let scriptIndex = 0;

const totalEvents = matchScript.length;
const lastEventTimeMs = matchScript[totalEvents - 1].timeSinceVideoStartedInMs;
const tickInterval = 1000; // 1 second

function resetTimeline() {
  console.log("Timeline ended. Restarting...");
  currentTimeMs = 0;
  scriptIndex = 0;
  iterationStart = Date.now();
}

function tick() {
  const now = Date.now();
  currentTimeMs = now - iterationStart;

  // Send STATUS message on each tick
  let videoStarted = false;
  let videoEnded = false;
  if (currentTimeMs < tickInterval * 2) {
    videoStarted = scriptIndex === 0;
  }
  if (currentTimeMs >= lastEventTimeMs && scriptIndex >= totalEvents) {
    videoEnded = true;
  }

  pubnub.setUserId("status-bot");
  pubnub
    .publish({
      channel: "game.control",
      message: {
        type: "STATUS",
        params: {
          playbackTime: currentTimeMs,
          videoStarted,
          videoEnded,
        },
      },
    })
    .then(() => {
      console.log(
        `STATUS published => playbackTime=${currentTimeMs}, videoStarted=${videoStarted}, videoEnded=${videoEnded}`
      );
    })
    .catch((err) => console.error("Publish error:", err));

  // Check if we are at an event
  while (scriptIndex < totalEvents && currentTimeMs >= matchScript[scriptIndex].timeSinceVideoStartedInMs) {
    const evt = matchScript[scriptIndex];
    const { channel, data } = evt.action;
    const persistFlag = evt.persistInHistory ? true : false;

    // Publish the timeline event itself
    pubnub.setUserId("timeline-bot");
    pubnub
      .publish({
        channel,
        storeInHistory: persistFlag,
        message: data,
      })
      .then(() => {
        console.log(
          `Timeline event published to ${channel} (persist=${persistFlag}):`,
          JSON.stringify(data)
        );
      })
      .catch((err) => console.error("Publish error:", err));

    // Decide if we want to generate additional chat messages or reactions
    // We'll look for keywords in the commentary text to pick chat type
    let detectedType = "commentary";
    if (typeof data.text === "string") {
      const lower = data.text.toLowerCase();
      if (lower.includes("goal")) {
        detectedType = "goal";
      } else if (lower.includes("penalty")) {
        detectedType = "penalty";
      } else if (lower.includes("yellow") || lower.includes("card")) {
        detectedType = "yellow";
      }
    }

    // Publish a random chat message
    const chatMsg = getRandomItem(chatMessagesByType[detectedType] || chatMessagesByType.commentary);
    publishWithRandomDelay(
      "game.chat",
      { user: getRandomUserUserId(), text: chatMsg },
      getRandomUserUserId()
    );

    // Also publish a random reaction
    const reactionEmoji = getRandomItem(reactionEmojis);
    publishWithRandomDelay(
      "game.stream-reactions",
      { text: reactionEmoji, type: "reaction" },
      getRandomBotUserId()
    );

    scriptIndex++;
  }

  // If we've passed the end, restart
  if (currentTimeMs > lastEventTimeMs && scriptIndex >= totalEvents) {
    // Publish that the video ended
    pubnub.setUserId("status-bot");
    pubnub
      .publish({
        channel: "game.control",
        message: {
          type: "STATUS",
          params: {
            playbackTime: currentTimeMs,
            videoStarted: false,
            videoEnded: true,
          },
        },
      })
      .then(() => console.log("Video ended event published"))
      .catch((err) => console.error("Publish error:", err));

    resetTimeline();
  }
}

// ----------------------------------------------------
// Start the interval
// ----------------------------------------------------
console.log("Server started. Timeline loop running...");
setInterval(tick, tickInterval);
