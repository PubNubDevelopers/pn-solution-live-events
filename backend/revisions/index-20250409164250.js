"use strict";

/*
  server.js
  1) Runs a Node server on port 4000.
  2) Periodically (once every second) checks a "matchScript" timeline of events and triggers PubNub broadcasts at the correct time offsets.
  3) Publishes regular video "status" messages to keep front-end clients synchronized.
  4) When the timeline ends, it loops back to 0.
  5) Sends extra simulated chat and reactions with random delays to appear more exciting.
  6) Responds to basic data-control actions (e.g., skipping to a new time) via a simple POST endpoint.
*/

require("dotenv").config();
const http = require("http");
const PubNub = require("pubnub");
const url = require("url");

// -----------------------------------------------------------------------------
// PubNub setup using ENV keys
// -----------------------------------------------------------------------------
const pubnub = new PubNub({
  publishKey: process.env.PUBNUB_PUBLISH_KEY,
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY,
  userId: "user-01", // default placeholder, will be set dynamically per message
});

// -----------------------------------------------------------------------------
// Simulated chat data - random messages
// -----------------------------------------------------------------------------
const chatMessagesForEvent = {
  "Kick off": [
    "Let's get this party started!",
    "Here we go, the match begins!",
    "So excited for today's game!",
    "Who's ready for a showdown?",
    "Kick off hype!",
  ],
  "Fan excitement": [
    "Wow, that was amazing!",
    "Yesss! Loving the energy!",
    "So much hype right now!",
    "Keep it coming!",
    "Absolutely brilliant!",
  ],
  Goal: [
    "GOOOOAAALLL!!",
    "He found the net! Incredible shot!",
    "That's how you do it!",
    "They're celebrating like crazy!",
    "Absolutely clinical finishing!",
  ],
  "Fan frustration": [
    "What was that?!",
    "Come on, ref, open your eyes!",
    "So frustrating!",
    "Not again... so frustrating!",
    "The crowd is angry!",
  ],
  "Five minutes remaining": [
    "Just five more minutes, let's go!",
    "Almost at the end, push through!",
    "We need a late goal here!",
    "Time is running out!",
    "Give it all you've got!",
  ],
  "End match": [
    "That's the final whistle!",
    "The game is over, folks!",
    "GG everyone!",
    "Final score locked in!",
    "It's a wrap, folks!",
  ],
};

// -----------------------------------------------------------------------------
// Reaction emojis to spice things up
// -----------------------------------------------------------------------------
const reactionEmojis = ["🎉", "🙌", "🔥", "😡", "👏", "😮", "😢"];

// -----------------------------------------------------------------------------
// Match script from game-data.js
// -----------------------------------------------------------------------------
const matchScript = [
  {
    timeSinceVideoStartedInMs: 2000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "A stadium alive with atmosphere and two teams ready...",
        timeCode: "00:00",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 2100,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "it's live next on EA TV",
        timeCode: "00:00",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 3100,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Hello a warm welcome we've dropped anchor here...",
        timeCode: "00:00",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 3600,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "I'm Derek Ray in the commentary position...",
        timeCode: "00:01",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 44000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Is this the moment... a surefire goal... surely",
        timeCode: "01:10",
      },
    },
  },
  {
    // Goal 1
    timeSinceVideoStartedInMs: 48000,
    persistInHistory: true,
    action: {
      channel: "game.match-stats",
      data: {
        statBox1: {
          info: [{ stat: "1" }, { stat: "0" }],
        },
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 48000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Oh a moment of pure class.. He had to catch it perfectly...",
        timeCode: "01:41",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 60000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well as you can see, he gets everything right here...",
        timeCode: "01:48",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 67000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And the ball moving again, what sort of response...",
        timeCode: "02:30",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 79000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Byram",
        timeCode: "03:37",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 83000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "He'll be delighted to have won the ball having...",
        timeCode: "04:09",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 94000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Oh and he's left his marker for dead...",
        timeCode: "05:33",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 99000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well capable of a better clearance than that",
        timeCode: "06:06",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 104000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well no way through in the end",
        timeCode: "06:49",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 110000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Take it away",
        timeCode: "07:31",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 114000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Bad challenge and now it's up to the referee...",
        timeCode: "07:48",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 118000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well you don't really want to be picking up a caution so early...",
        timeCode: "07:48",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 122000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well he's going to be under pressure now...",
        timeCode: "07:48",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 134000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Play has restarted",
        timeCode: "08:08",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 143000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Kamara",
        timeCode: "09:08",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 146000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Went there to intercept",
        timeCode: "09:30",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 156000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Able to skip past his man",
        timeCode: "10:46",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 159000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "well that's is it going to be... and a goal!!",
        timeCode: "11:05",
      },
    },
  },
  {
    // Goal 2
    timeSinceVideoStartedInMs: 159000,
    persistInHistory: true,
    action: {
      channel: "game.match-stats",
      data: {
        statBox1: {
          info: [{ stat: "2" }, { stat: "0" }],
        },
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 162000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "He's put it away... A celebratory moment",
        timeCode: "11:09",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 176000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well here we can see it again look at the way he glides...",
        timeCode: "11:15",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 185000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Play restarts",
        timeCode: "11:40",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 186000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "2-0 here, and the ball is moving again",
        timeCode: "11:45",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 190000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Walker-Peters",
        timeCode: "12:12",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 197000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well it's a good looking position, is there a goal in their future?",
        timeCode: "13:09",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 202000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Can't miss, surely",
        timeCode: "13:42",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 203000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "That's his brace, they just can't keep him quiet",
        timeCode: "13:51",
      },
    },
  },
  {
    // Goal 3
    timeSinceVideoStartedInMs: 203000,
    persistInHistory: true,
    action: {
      channel: "game.match-stats",
      data: {
        statBox1: {
          info: [{ stat: "3" }, { stat: "0" }],
        },
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 214000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Just look at this again he moves the ball quickly...",
        timeCode: "13:51",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 224000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "well he's given it away",
        timeCode: "14:47",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 233000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Ward-Price has possession",
        timeCode: "15:55",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 242000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Armstrong has possession",
        timeCode: "17:05",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 245000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Stevens has possession",
        timeCode: "17:25",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 253000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Ryan Manning has possession",
        timeCode: "18:28",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 257000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Sekou Mara has possession",
        timeCode: "18:57",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 264000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And the referee says penalty",
        timeCode: "19:42",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 270000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "No card just a warning and a fair few protestations",
        timeCode: "19:48",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 274000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well not every foul is a yellow card, i think the referee...",
        timeCode: "19:52",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 281000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And he's missed spectacularly...",
        timeCode: "20:09",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 293000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Made it look routine, but read it well",
        timeCode: "21:13",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 307000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "The defenders know they need to get tighter",
        timeCode: "22:56",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 310000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Great attacking play well that is how to play advantage",
        timeCode: "23:19",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 315000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "In position and now he must score",
        timeCode: "23:57",
      },
    },
  },
  {
    // Opponent Goal
    timeSinceVideoStartedInMs: 317000,
    persistInHistory: true,
    action: {
      channel: "game.match-stats",
      data: {
        statBox1: {
          info: [{ stat: "3" }, { stat: "1" }],
        },
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 317000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And a goal to delight the fans, just what they were hoping for",
        timeCode: "24:08",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 335000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well it's a decent goal but the defenders...",
        timeCode: "24:20",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 341000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Play has restarted",
        timeCode: "25:01",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 342000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "No shortage of goals in this match: 3-1",
        timeCode: "25:02",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 354000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well, that's how to beat your opponent",
        timeCode: "26:12",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 357000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Can he take the chance?",
        timeCode: "26:34",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 361000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And in range",
        timeCode: "27:11",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 365000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Kamara has possession",
        timeCode: "27:34",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 369000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Still possibilities",
        timeCode: "28:04",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 373500,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "But it just petered out",
        timeCode: "28:33",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 380000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Committed challenge",
        timeCode: "29:29",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 389000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And the lead's throw forthcoming",
        timeCode: "30:22",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 398000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Pascal Struijk has possession",
        timeCode: "31:23",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 403000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And Southampton regaining possession",
        timeCode: "31:51",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 411000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "No problems defensively",
        timeCode: "32:57",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 415000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well they haven't seen too many chances but the crowd sensing...",
        timeCode: "33:03",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 425000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Trying to deliver it accurately. The chance is on.",
        timeCode: "33:23",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 428000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And collected tidily, he had plenty to think about",
        timeCode: "33:48",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 440000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Romeo Lavia has possession",
        timeCode: "35:13",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 443000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Kyle Waker Peters has it",
        timeCode: "35:38",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 447000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Back with Krauss",
        timeCode: "36:06",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 450000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Dangerous ball",
        timeCode: "36:30",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 452000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And he clears the danger",
        timeCode: "36:46",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 456000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "He read the situation defensively and did his job",
        timeCode: "37:14",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 469000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Waker-Peters",
        timeCode: "38:51",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 475000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Southampton sloppy in possession",
        timeCode: "39:35",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 482000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And slipped through beautifully",
        timeCode: "40:33",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 489000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Ryan Manning has possession",
        timeCode: "41:23",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 491000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And the upshot of that is offside",
        timeCode: "41:30",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 494000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well he needed to look elsewhere because the flag...",
        timeCode: "41:30",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 499000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Good refereeing, waiting for a natural pause before booking him",
        timeCode: "41:30",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 512000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Play has restarted",
        timeCode: "41:51",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 519000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Pass to Kamara",
        timeCode: "42:36",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 523000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Southampton losing possession here",
        timeCode: "43:04",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 536000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Intelligent threaded pass here",
        timeCode: "44:43",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 540000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "This could spell trouble with the referee having already shown the yellow card",
        timeCode: "45:15",
      },
    },
  },
  {
    // Half Time
    timeSinceVideoStartedInMs: 562000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Half Time then, that brings the first half to a close...",
        timeCode: "46:05",
      },
    },
  },
];

// -----------------------------------------------------------------------------
// Helper functions
// -----------------------------------------------------------------------------

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomItem(arr) {
  return arr[randInt(0, arr.length - 1)];
}

// A simple function to publish a message to a given channel with dynamic user ID.
function publishToChannel(channel, message) {
  // Set userId for pubnub, per instructions
  if (channel === "game.chat") {
    pubnub.setUserId(`bot-0${randInt(1, 9)}`);
  } else {
    pubnub.setUserId(`user-0${randInt(1, 9)}`);
  }
  console.log(`Publishing to ${channel}:`, message);
  pubnub.publish(
    {
      channel,
      message,
    },
    (status) => {
      if (status.error) {
        console.log("Publish error:", status);
      }
    }
  );
}

// Simple function that triggers extra random emojis with random delays
function triggerExtraReactions() {
  const count = randInt(3, 6); // number of reaction emojis to publish
  for (let i = 0; i < count; i++) {
    const delay = randInt(0, 800); // up to 800ms
    setTimeout(() => {
      // pick random emoji
      const emoji = randomItem(reactionEmojis);
      publishToChannel("game.stream-reactions", {
        text: emoji,
        type: "reaction",
      });
    }, delay);
  }
}

// For "goal" events, send random chat from chatMessagesForEvent["Goal"]
// Otherwise send from chatMessagesForEvent["Fan excitement"]
function triggerAssociatedChat(isGoal) {
  const category = isGoal ? "Goal" : "Fan excitement";
  const msg = randomItem(chatMessagesForEvent[category]);
  // add small random delay
  const delay = randInt(0, 800);
  setTimeout(() => {
    publishToChannel("game.chat", {
      user: "bot-01",
      text: msg,
    });
  }, delay);
}

// Find the maximum time in the script to define our main loop length
const totalVideoDurationMs = Math.max(...matchScript.map((e) => e.timeSinceVideoStartedInMs)) + 2000; // buffer

let currentTimeMs = 0;
let lastTimeMs = 0;

// -----------------------------------------------------------------------------
// Main timeline loop (once every second)
// -----------------------------------------------------------------------------
setInterval(() => {
  // console.log the heartbeat
  console.log(`Video timeline tick: ${currentTimeMs} ms`);

  // Check newly triggered events since lastTimeMs
  const eventsNow = matchScript.filter(
    (ev) =>
      ev.timeSinceVideoStartedInMs > lastTimeMs &&
      ev.timeSinceVideoStartedInMs <= currentTimeMs
  );

  // Fire those events
  for (const ev of eventsNow) {
    const { channel, data } = ev.action;
    console.log("Event triggered:", ev);

    // Publish main event
    publishToChannel(channel, data);

    // If it's commentary or stats, inject random reactions & chat
    // For 'persistInHistory' = true, assume it's a goal
    if (channel === "game.commentary" || channel === "game.match-stats") {
      triggerExtraReactions();
      triggerAssociatedChat(!!ev.persistInHistory);
    }
  }

  // Publish "video status" message
  publishToChannel("game.stream-reactions", {
    type: "STATUS",
    params: {
      playbackTime: currentTimeMs,
      videoStarted: currentTimeMs === 0,
      videoEnded: false,
    },
  });

  // Update time
  lastTimeMs = currentTimeMs;
  currentTimeMs += 1000;

  // If we reached or surpassed totalVideoDurationMs, loop back
  if (currentTimeMs >= totalVideoDurationMs) {
    console.log("Video ended, restarting timeline...");
    // Final status message indicating video ended
    publishToChannel("game.stream-reactions", {
      type: "STATUS",
      params: {
        playbackTime: totalVideoDurationMs,
        videoStarted: false,
        videoEnded: true,
      },
    });

    currentTimeMs = 0;
    lastTimeMs = 0;
    console.log("Timeline reset to 0");
    // Also send a new "video started" message
    publishToChannel("game.stream-reactions", {
      type: "STATUS",
      params: {
        playbackTime: currentTimeMs,
        videoStarted: true,
        videoEnded: false,
      },
    });
  }
}, 1000);

// -----------------------------------------------------------------------------
// Basic HTTP server to respond to control actions
// e.g. skip to a new playback time, fan excitement, etc.
// -----------------------------------------------------------------------------
const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/controls") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        console.log("Data Controls request received:", data);

        if (data.type === "START_STREAM") {
          console.log("Received START_STREAM");
          currentTimeMs = 0;
          lastTimeMs = 0;
          publishToChannel("game.stream-reactions", {
            type: "START_STREAM",
            params: {},
          });
        } else if (data.type === "END_STREAM") {
          console.log("Received END_STREAM");
          // Jump near to end
          currentTimeMs = totalVideoDurationMs - 1;
          publishToChannel("game.stream-reactions", {
            type: "END_STREAM",
            params: {},
          });
        } else if (data.type === "SEEK") {
          console.log("Received SEEK:", data.params);
          if (data.params && typeof data.params.playbackTime === "number") {
            currentTimeMs = data.params.playbackTime;
            lastTimeMs = data.params.playbackTime - 1;
            publishToChannel("game.stream-reactions", {
              type: "SEEK",
              params: { playbackTime: currentTimeMs },
            });
          }
        } else if (data.type === "FAN_EXCITEMENT") {
          console.log("Received FAN_EXCITEMENT");
          // Trigger about 20 random reaction emojis
          for (let i = 0; i < 20; i++) {
            const delay = randInt(0, 1000);
            setTimeout(() => {
              publishToChannel("game.stream-reactions", {
                text: randomItem(["🎉", "🙌"]),
                type: "reaction",
              });
            }, delay);
          }
          // Also add some random chat lines from "Fan excitement"
          for (let i = 0; i < 5; i++) {
            const delay = randInt(0, 1500);
            setTimeout(() => {
              publishToChannel("game.chat", {
                user: "bot-01",
                text: randomItem(chatMessagesForEvent["Fan excitement"]),
              });
            }, delay);
          }
        } else if (data.type === "FAN_FRUSTRATION") {
          console.log("Received FAN_FRUSTRATION");
          // Trigger about 25 anger emojis
          for (let i = 0; i < 25; i++) {
            const delay = randInt(0, 1000);
            setTimeout(() => {
              publishToChannel("game.stream-reactions", {
                text: "😡",
                type: "reaction",
              });
            }, delay);
          }
          // Also random chat from "Fan frustration"
          for (let i = 0; i < 5; i++) {
            const delay = randInt(0, 1500);
            setTimeout(() => {
              publishToChannel("game.chat", {
                user: "bot-01",
                text: randomItem(chatMessagesForEvent["Fan frustration"]),
              });
            }, delay);
          }
        } else if (data.type === "TAG_USER_IN_MESSAGE") {
          console.log("Received TAG_USER_IN_MESSAGE");
          // This uses specialTaggedMessage = true
          publishToChannel("game.chat", {
            user: "bot-01",
            specialTaggedMessage: true,
          });
        } else {
          console.log("Unknown action type", data.type);
        }
      } catch (err) {
        console.log("Error parsing JSON in /controls:", err);
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ status: "OK" }));
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server is running");
  }
});

server.listen(4000, () => {
  console.log("Server started on port 4000");
});
