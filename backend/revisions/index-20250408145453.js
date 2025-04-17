#!/usr/bin/env node

/**
 * server.js
 *
 * A Node.js server that:
 *  1. Loads timeline data from game-data.js (exports.matchScript).
 *  2. Runs a loop every 1 second to:
 *     - Publish the current playback time over PubNub (for video sync).
 *     - Check which timeline events should now fire (based on currentTime).
 *     - Trigger PubNub messages (commentary, reactions, chat, etc.) for each event.
 *     - Adds random simulated chat messages & reactions with realistic delay.
 *  3. When the timeline ends, it restarts from 0 and repeats forever.
 *
 *  All configuration is done via ENV variables using dotenv.
 *  Console logs everything that happens.
 *  Publishes messages to PubNub channels to simulate a live-synced stream.
 *
 * Usage:
 *   1) npm install dotenv pubnub
 *   2) node server.js   or   npm run start
 */

require("dotenv").config();
const PubNub = require("pubnub");

// -----------------------------------------------------------------------------
// PubNub Setup - Use environment variables for keys
// -----------------------------------------------------------------------------
const pubnub = new PubNub({
  publishKey: process.env.PUBNUB_PUBLISH_KEY || "demo",
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY || "demo",
  uuid: "server-simulator", // A unique identifier for this server
});

// -----------------------------------------------------------------------------
// Load Timeline Data
// -----------------------------------------------------------------------------
const { matchScript } = require("./game-data");

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------
const LOOP_INTERVAL_MS = 1000; // run once per second
// If you want to publish more frequently (500ms), you could shorten but keep 1s to match the spec.

let currentVideoTimeMs = 0;
const timelineEventsFired = new Set(); // store indices of events already fired

// When timeline ends, we restart. Let's figure out the final event time:
const maxTimelineTime = Math.max(...matchScript.map((evt) => evt.timeSinceVideoStartedInMs));

// -----------------------------------------------------------------------------
// Sample Chat/Reactions - 50+ random messages for different event contexts
// -----------------------------------------------------------------------------
const goalMessages = [
  "What a screamer!",
  "GOOOAALLL!!!",
  "Unbelievable strike!",
  "That was unstoppable!",
  "The crowd goes wild!",
  "Incredible finish!",
  "Pure class, absolute rocket!",
  "Keeper never stood a chance!",
  "He made that look so easy!",
  "The stadium is thunderous!",
  "That's world-class finishing right there!",
  "He'll remember this moment forever!",
  "The fans leap from their seats!",
  "Top bins, no question!",
  "Net ripper, unstoppable shot!",
  "What a volley, amazing technique!",
  "Clinical finish!",
  "That's a highlight reel moment!",
  "Skill + precision = GOAL!",
  "A real poacher’s effort!",
  "He read the game perfectly there!",
  "That was a bullet!",
  "Defenders left in the dust!",
  "The keeper is furious with his defense!",
  "They've broken the deadlock!",
  "Such composure in front of goal!",
  "He makes a habit of scoring like this!",
  "Prolific form continues!",
  "Absolute banger from the edge of the box!",
  "The fans are ecstatic!",
  "Fairytale moment for the player!",
  "You could see that coming a mile away!",
  "Textbook finish, brilliant!",
  "Feed him and he will score!",
  "He is on fire today!",
  "Magnificent near-post flick!",
  "This guy just can’t stop scoring!",
  "An absolute stunner from him!",
  "What a time to find the net!",
  "Rewriting the record books!",
  "Unstoppable once he’s in the box!",
  "That will be replayed for years!",
  "Silence from the away fans... stunned!",
  "He’s got a brace now!",
  "The manager must be delighted!",
  "He’s turning heads with that skill!",
  "The bench is up celebrating too!",
  "Ice cold under pressure!",
  "They've doubled their lead, unstoppable!",
  "Could this be the turning point of the match?",
];

// For "penalty", "foul", "yellow card", "frustration" type events
const foulPenaltyMessages = [
  "That tackle looked nasty!",
  "Ref's got a decision on his hands!",
  "Tempers are flaring!",
  "This is getting heated!",
  "He was nowhere near the ball!",
  "That was a reckless challenge!",
  "Studs up, dangerous play!",
  "Players are rushing the referee!",
  "Could see a card for that!",
  "No need for that level of aggression!",
  "The crowd is booing heavily!",
  "He’s definitely taken one for the team!",
  "The manager must be furious!",
  "That's a professional foul!",
  "He’s lucky to still be on the pitch!",
  "You can’t go diving in like that!",
  "Ref looks unimpressed, brace yourselves!",
  "The fans want a card!",
  "That was borderline assault on the pitch!",
  "He grabbed his shirt too!",
  "Expect a caution next time!",
  "That probably should have been a red!",
  "He’s going to be treading on thin ice now!",
  "We've got some drama here!",
  "Match is boiling over!",
  "Players are losing their discipline!",
  "He needs to keep his cool!",
  "A risky challenge in the box!",
  "That's a clumsy tackle from behind!",
  "He'll do well to avoid a booking next time!",
  "Could have ended in serious injury!",
  "The bench is on its feet complaining!",
  "VAR might have a look at that!",
  "He needs to calm down, big time!",
  "Loud whistles from the supporters!",
  "We might see a penalty here!",
  "Ref signals advantage, interesting!",
  "He’s letting them play on, maybe?",
  "That’s a cynical block!",
  "Never a dull moment in this match!",
  "It’s a physical battle today!",
  "Tension is building on the pitch!",
  "Words are being exchanged between players!",
  "Fans are going ballistic right now!",
  "He’s definitely stretching the rules!",
  "Blood boiling scenario out here!",
  "That challenge will be debated post-match!",
  "He’s walking on eggshells after that tackle!",
  "Reckless, borderline dangerous!",
  "Strong protests from the away supporters!",
];

// For "regular" commentary events or general chat
const generalMessages = [
  "Amazing footwork there!",
  "This match is intense!",
  "Loving this high-tempo play!",
  "What a beautiful day for football!",
  "He’s controlling the midfield effortlessly!",
  "The passing is so crisp!",
  "There’s definitely another goal in this!",
  "Can't believe how end-to-end this game is!",
  "Both teams are pushing forward!",
  "Well deserved break in play!",
  "The manager’s tactical changes seem spot on!",
  "Outstanding save from the keeper!",
  "This crowd is electric!",
  "He’s showing off some fancy footwork!",
  "Oh, that was so close to goal!",
  "Nerve-wracking stuff right now!",
  "It’s a real battle out here!",
  "We might be headed for a thriller!",
  "Wow, that buildup play was sublime!",
  "Ref is keeping a tight grip on the match!",
  "Midfield runs the show tonight!",
  "He’s truly a playmaker!",
  "Crowd chanting at full volume!",
  "So many near misses, I'd love a goal soon!",
  "The passing triangles are a joy to watch!",
  "Keeper’s distribution is spot on!",
  "This is why we love football!",
  "Not sure how that was defended!",
  "Incredible energy from both sides!",
  "He’s having the game of his life!",
  "We’re witnessing a classic here!",
  "Momentum keeps shifting!",
  "Who’s going to break through next?",
  "He’s reading the game brilliantly!",
  "Pinpoint crossfield pass!",
  "The fans sense something special!",
  "It’s all about patience now!",
  "Just need that final pass to click!",
  "Brilliant first touch there!",
  "They’re pressing high up the pitch!",
  "He’s orchestrating everything superbly!",
  "Look at that turn of pace!",
  "This referee is quite lenient today!",
  "Hard to pick a winner at this point!",
  "The defense is holding strong!",
  "Every pass is under scrutiny!",
  "The tension in the stadium is palpable!",
  "They need to capitalize on this momentum!",
  "The bench is warming up, subs incoming?",
  "Anything can happen in football!",
  "He’s bossing the midfield right now!",
];

// A helper to pick a random item from an array
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Determine if an event might be a "Goal" or "Penalty/Foul" or general by the commentary text
function getEventTypeFromAction(actionData) {
  if (!actionData.channel || !actionData.data) return "general";

  // If it's a recognized commentary with certain keywords
  const text = actionData.data.text || "";
  const lower = text.toLowerCase();

  if (lower.includes("penalty") || lower.includes("foul") || lower.includes("yellow card") || lower.includes("bad challenge")) {
    return "foul";
  }
  if (lower.includes("goal") || lower.includes("brace") || lower.includes("he put it away") || lower.includes("that's his") ) {
    return "goal";
  }

  // Otherwise general
  return "general";
}

// -----------------------------------------------------------------------------
// PubNub Publish Helpers
// -----------------------------------------------------------------------------
function publishMessage(channel, messageObj) {
  // In a real system we'd call pubnub.publish here
  // For this demo, just log that we "published"
  console.log(`[PUBNUB] Publishing to channel=${channel}, data=`, JSON.stringify(messageObj));
  /* Example:
  pubnub.publish({
    channel,
    message: messageObj,
  }).then(() => console.log("Publish successful"))
    .catch(err => console.error("Publish error:", err));
  */
}

// -----------------------------------------------------------------------------
// MAIN LOOP
// -----------------------------------------------------------------------------
function main() {
  console.log("Server starting...");

  setInterval(() => {
    // 1) Publish video status
    const videoStatusMsg = {
      type: "STATUS",
      params: {
        playbackTime: currentVideoTimeMs,
        videoStarted: currentVideoTimeMs === 0,
        videoEnded: false, // We might set this true at the final second if wanted
      },
    };
    publishMessage("game.control", videoStatusMsg);

    // 2) Log timeline tick
    console.log(`Tick: currentVideoTimeMs=${currentVideoTimeMs}`);

    // 3) Check timeline events & fire any that are now due
    matchScript.forEach((evt, idx) => {
      if (!timelineEventsFired.has(idx)) {
        if (currentVideoTimeMs >= evt.timeSinceVideoStartedInMs) {
          // Fire this event
          timelineEventsFired.add(idx);
          console.log("FIRING EVENT at", evt.timeSinceVideoStartedInMs, evt.action);

          // Publish the action
          publishMessage(evt.action.channel, evt.action.data);

          // Also queue up some random chats or reactions depending on event type
          const eventType = getEventTypeFromAction(evt.action);
          let chosenArray;
          if (eventType === "goal") {
            chosenArray = goalMessages;
          } else if (eventType === "foul") {
            chosenArray = foulPenaltyMessages;
          } else {
            chosenArray = generalMessages;
          }

          // Let's simulate between 2 - 5 random user chat messages for demonstration
          const messagesCount = Math.floor(Math.random() * 4) + 2;

          for (let i = 0; i < messagesCount; i++) {
            const randomDelay = Math.floor(Math.random() * 3000); // up to 3s
            setTimeout(() => {
              const randomUserIdx = Math.floor(Math.random() * 9) + 1; // 1..9
              const randomUser = `bot-${String(randomUserIdx).padStart(2, "0")}`;
              const text = pickRandom(chosenArray);

              console.log(`Simulated chat from ${randomUser}: "${text}"`);
              publishMessage("game.chat", { user: randomUser, text });
            }, randomDelay);
          }

          // Additionally, let's simulate 1 or 2 random reaction emojis
          const reactionCount = Math.floor(Math.random() * 2) + 1;
          const possibleReactions = ["🎉", "🙌", "🔥", "👏", "⚡", "😮", "💥"];
          for (let i = 0; i < reactionCount; i++) {
            const randomDelay = Math.floor(Math.random() * 3000); // up to 3s
            setTimeout(() => {
              const reaction = pickRandom(possibleReactions);
              console.log(`Simulated reaction: "${reaction}"`);
              publishMessage("game.stream-reactions", { text: reaction, type: "reaction" });
            }, randomDelay);
          }
        }
      }
    });

    // 4) Advance time
    currentVideoTimeMs += LOOP_INTERVAL_MS;

    // 5) If we've exceeded the maximum timeline time, loop back
    if (currentVideoTimeMs > maxTimelineTime + 3000) {
      // Mark the "video ended" in a real scenario, if you want
      console.log("Reached end of timeline. Restarting from 0...");
      // Publish a final 'video ended' message if needed
      publishMessage("game.control", {
        type: "STATUS",
        params: {
          playbackTime: currentVideoTimeMs,
          videoStarted: false,
          videoEnded: true,
        },
      });

      // Reset
      currentVideoTimeMs = 0;
      timelineEventsFired.clear();
      console.log("Timeline reset to 0.");
      // Publish a new 'video started' message if you want
      publishMessage("game.control", {
        type: "STATUS",
        params: {
          playbackTime: 0,
          videoStarted: true,
          videoEnded: false,
        },
      });
    }
  }, LOOP_INTERVAL_MS);
}

// -----------------------------------------------------------------------------
// Start
// -----------------------------------------------------------------------------
main();
