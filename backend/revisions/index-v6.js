"use strict";

// ------------------------------
// server.js
// ------------------------------
//
// Node.js server that:
// 1. Runs an interval loop at 1-second intervals
// 2. Triggers actions based on a timeline of events
// 3. Publishes periodic sync messages to PubNub
// 4. Simulates user chat, reactions, and other events
//
// Usage:
//   1) Create a .env file with the following (example):
//       PUBNUB_PUBLISH_KEY=your-pub-key
//       PUBNUB_SUBSCRIBE_KEY=your-sub-key
//   2) npm install pubnub dotenv
//   3) npm run start (or node server.js)
//
// ------------------------------

require("dotenv").config();
const PubNub = require("pubnub");

// PubNub config via ENV
const pubnub = new PubNub({
  publishKey: process.env.PUBNUB_PUBLISH_KEY || "demo",
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY || "demo",
  uuid: "server-simulator",
});

// Timeline of events (seconds used for time field)
const timeline = [
  { time: 0,   event: "Kick off" },
  { time: 15,  event: "Fan excitement" },
  { time: 30,  event: "Goal" },
  { time: 60,  event: "Fan frustration" },
  { time: 120, event: "Fan excitement" },
  { time: 180, event: "Goal" },
  { time: 200, event: "Fan excitement" },
  { time: 280, event: "Five minutes remaining" },
  { time: 295, event: "Fan frustration" },
  { time: 300, event: "End match" },
];

// -------------------------------------------------
// Large arrays of 50 unique messages per event type
// -------------------------------------------------
const chatMessages = {
  "Kick off": [
    "Ready for an amazing match!",
    "Let's get the show on the road!",
    "Here we go, everyone!",
    "Big cheers for the start!",
    "The game begins now!",
    "Match time, let's do this!",
    "Start your engines!",
    "Everybody watch closely!",
    "Game on, folks!",
    "It all starts right here!",
    "Championship vibes already!",
    "All players look anxious!",
    "The whistle just blew!",
    "Will this be a historic match?",
    "Let's keep our eyes peeled!",
    "So excited to see them play!",
    "We've been waiting for this!",
    "The crowd is amped!",
    "And the ball is in motion!",
    "Come on, let's see a good game!",
    "It's time to show some skills!",
    "Anybody else feeling the hype?",
    "Hope everyone's ready for action!",
    "All eyes on the field!",
    "Yes! Kick off at last!",
    "The hype is real!",
    "YYEEESSS! It's started!",
    "Let the match commence!",
    "Early predictions might be risky!",
    "Game time, baby!",
    "This is so thrilling!",
    "I'm already on the edge of my seat!",
    "Anyone want to make a friendly bet?",
    "Let's get some goals!",
    "Coach must be proud right now!",
    "Stadium is roaring!",
    "Absolute goosebumps right now!",
    "Miracles can happen now!",
    "All the best to both teams!",
    "And so it begins!",
    "Nerves are high already!",
    "You can feel the energy!",
    "Here we go, unstoppable now!",
    "We are live, folks!",
    "This is going to be intense!",
    "Cheers from the stands!",
    "Can't wait for the first shot!",
    "The tension is incredible!",
    "I'm so pumped right now!",
    "Eager to see how they start!",
    "Best of luck, teams!",
  ],
  "Fan excitement": [
    "Wow! That passing was on point!",
    "Woohoo! Gotta love this team!",
    "Can't believe how fast they move!",
    "This is absolutely amazing!",
    "My heart is racing!",
    "Spectacular play!",
    "They're really bringing the energy!",
    "This is what I live for!",
    "The teamwork is next level!",
    "I'm jumping out of my seat!",
    "That sequence was legendary!",
    "Keep it going, guys!",
    "Best match I've seen in a while!",
    "So much excitement!",
    "It just keeps getting better!",
    "Unbelievable speed!",
    "Non-stop thrills, oh my!",
    "Fantastic strategy so far!",
    "Defense? Not today!",
    "This crowd is electric!",
    "Cheering so loud right now!",
    "I can't even blink!",
    "They are unstoppable!",
    "Heart-pounding stuff here!",
    "They’re on fire!",
    "I'm losing my voice screaming!",
    "This is a dream match!",
    "Go go go!",
    "They deserve all the cheers!",
    "Look at them go!",
    "Complete exhilaration!",
    "Brace yourselves, more to come!",
    "Such skill, wow!",
    "They just won't quit!",
    "Incredible footwork out there!",
    "No one can slow them down!",
    "Mad respect for this performance!",
    "Can't believe my eyes!",
    "My adrenaline is off the charts!",
    "They're dominating this game!",
    "Knocking on the door of victory!",
    "Pride of the fans right here!",
    "This is top-tier excitement!",
    "Love seeing them thrive!",
    "Fists in the air for that play!",
    "Can't get enough of this!",
    "The crowd is losing it!",
    "Irresistible excitement right now!",
    "They are beasting out there!",
    "Woohoo, unstoppable momentum!",
  ],
  "Fan frustration": [
    "Oh come on, ref!",
    "That was a blatant foul!",
    "Can't believe this is happening!",
    "So disappointing right now!",
    "They're messing this up big time!",
    "Argh, the frustration is real!",
    "Where's the defense?!",
    "We need a wake-up call here!",
    "This is painful to watch!",
    "Heads are dropping on the field!",
    "Give me a break!",
    "We're throwing chances away!",
    "Ugh, so many mistakes!",
    "The ref is blind!",
    "Not our best moment!",
    "This is pure agony!",
    "Stop turning over the ball!",
    "Our shots are so off!",
    "Why can't we keep possession?!",
    "This is driving me nuts!",
    "We're letting them walk all over us!",
    "Is anyone even trying?!",
    "I'm groaning over here!",
    "Tensions are running high!",
    "This is not what we trained for!",
    "Wake up, guys!",
    "Feels like we're giving up!",
    "Zero creativity right now!",
    "They better fix this, ASAP!",
    "I'm pulling my hair out!",
    "We can't blame the weather now!",
    "They look lost out there!",
    "Too many turnovers, it’s embarrassing!",
    "Ref calls are hurting us!",
    "Where is the passion?!",
    "It’s so sloppy!",
    "Conditions were better in practice!",
    "Time is running out, come on!",
    "We need better tactics!",
    "Are we even playing the same sport?!",
    "Frustrated doesn't even cut it!",
    "I'm speechless with disappointment!",
    "Time to step it up or go home!",
    "We've got to do better!",
    "Cannot believe these errors!",
    "They keep missing opportunities!",
    "No team coordination at all!",
    "This game is slipping away!",
    "We were supposed to dominate!",
    "Ready to throw my remote!",
  ],
  "Goal": [
    "GOOOOOAL!!!",
    "That shot was insane! GOAL!",
    "Wow, unstoppable power!",
    "We scored! Unbelievable!",
    "The net is shaking!",
    "What a strike, man!",
    "They're unstoppable now!",
    "That was a rocket!",
    "Back of the net, baby!",
    "Craziest goal I've seen!",
    "Incredible finish!",
    "Keeper stood no chance!",
    "That's how it's done!",
    "Net-buster, oh my!",
    "Crowd is going wild!",
    "Worth every cheer!",
    "Another mark on the scoreboard!",
    "They’re unstoppable at this point!",
    "Boom, straight in!",
    "Marvelous moment right there!",
    "They found a gap and nailed it!",
    "Explosive goal, I'm stoked!",
    "Absolute bullet shot!",
    "Eruption of cheers!",
    "We needed that so bad!",
    "There's no stopping them now!",
    "Yes, the breakthrough!",
    "Wooo, we are on top!",
    "That was pure class!",
    "An epic display of accuracy!",
    "Instant highlight reel!",
    "Keeper is stunned!",
    "They've cracked the defense open!",
    "Marvelous technique!",
    "We are winning this, obviously!",
    "Outplayed the defense big time!",
    "He threaded that needle perfectly!",
    "Awesome team play right there!",
    "What a lovely pass and finish!",
    "The entire stadium erupted!",
    "This might be a turning point!",
    "I have goosebumps!",
    "That is the definition of a goal!",
    "I just jumped out of my seat!",
    "Cue the fireworks!",
    "They absolutely deserve it!",
    "Pure precision on that shot!",
    "That moment was magical!",
    "Unbelievable culmination of skill!",
    "We’re on the scoreboard!",
  ],
  "Five minutes remaining": [
    "We’re down to the last 5!",
    "Time is ticking fast!",
    "Crunch time people!",
    "5 minutes, can we pull it off?",
    "We need a big push now!",
    "Every second counts now!",
    "Five minutes left, hold on tight!",
    "It's do-or-die time!",
    "Seize the moment, team!",
    "Final stretch approaching!",
    "We can’t let up now!",
    "Come on, keep the intensity!",
    "Last chance to make a mark!",
    "We gotta close this match strong!",
    "This is edge-of-seat territory!",
    "Five more minutes of hustle!",
    "The clock is not our friend!",
    "Keep possession, no mistakes!",
    "Focus, focus, focus!",
    "Time to make every play count!",
    "The tension is unbelievable!",
    "We need one more goal!",
    "No room for error here!",
    "All hands on deck now!",
    "This is the big push!",
    "They must keep the defense tight!",
    "We need some last-minute magic!",
    "Almost out of time!",
    "Last ditch efforts, come on!",
    "It's going to the wire!",
    "We must stay sharp!",
    "Everything is on the line now!",
    "So close, just hold on!",
    "5 minutes can change everything!",
    "We can’t let them score now!",
    "Eyes on the clock!",
    "Hang in there, guys!",
    "Next goal could kill it!",
    "We’re literally in the final moments!",
    "Push forward, team!",
    "We have to secure the lead!",
    "Time is not stopping for us!",
    "Don’t slow down!",
    "We’re almost there!",
    "We have to keep fighting!",
    "Final push for victory!",
    "Come on, one last burst!",
    "Don’t lose heart now!",
    "We should leave it all on the field!",
    "Let’s get it done!",
  ],
  "End match": [
    "That's the end, folks!",
    "Match finished. Phew!",
    "Game over, wow!",
    "What a finish!",
    "Can't believe it's ended!",
    "That was quite something!",
    "Hope you enjoyed the show!",
    "Final whistle has blown!",
    "All done. Great match!",
    "Time to breathe!",
    "We gave it our all!",
    "Time to celebrate or commiserate!",
    "Wrap it up, that’s a game!",
    "I’m still buzzing with adrenaline!",
    "That final minute was nuts!",
    "It’s all in the books now!",
    "And we have our final result!",
    "Cheers to both teams!",
    "What a memorable event!",
    "Absolute craziness at the end!",
    "Congrats to the victors!",
    "Hats off to the supporters!",
    "We can finally relax now!",
    "No more nails to bite off!",
    "I need a replay already!",
    "That match was intense!",
    "Victory for one side, heartbreak for the other!",
    "Sign me up for the post-game analysis!",
    "I’m exhausted just watching!",
    "What a whirlwind from start to finish!",
    "They’ll talk about that for years!",
    "So many highlights to recap!",
    "It ended too soon!",
    "Time for the trophy ceremony?",
    "Take a bow, players!",
    "Time to see the final stats!",
    "Everybody played their hearts out!",
    "The crowd’s still roaring!",
    "We’ll see you next match!",
    "Was an epic showdown!",
    "Looking forward to the after-party!",
    "That’s all, folks!",
    "Everybody can exhale now!",
    "An unforgettable match indeed!",
    "Truly a great spectacle!",
    "Congrats to the winning side!",
    "Both teams put on a show!",
    "Nothing but respect for that hustle!",
    "Farewell until next time!",
    "Signing off now. Thanks for watching!",
  ],
};

// A few event->emoji sets
// (Used for game.stream-reactions channel)
const eventEmojis = {
  "Fan excitement": ["🎉", "🙌", "✨", "👍"],
  "Fan frustration": ["😡", "🤬", "🙄", "😠"],
  "Goal": ["⚽", "🥅", "🏆"],
  "Kick off": ["🚀", "🎉"],
  "Five minutes remaining": ["⏰", "🤔"],
  "End match": ["🏁", "✅"],
};

// For random bot assignment
function getRandomBot() {
  const bots = [
    "bot-01","bot-02","bot-03","bot-04","bot-05",
    "bot-06","bot-07","bot-08","bot-09",
  ];
  return bots[Math.floor(Math.random() * bots.length)];
}

// Helper to publish messages on PubNub
function publishMessage(channel, messageObj) {
  pubnub.publish(
    {
      channel: channel,
      message: messageObj,
    },
    (status) => {
      if (status.error) {
        console.error(`Error publishing to ${channel}`, status);
      }
    }
  );
}

// Send "video status" message each second to keep front-end in sync
function sendVideoStatus(playbackTime, started=false, ended=false) {
  const statusMsg = {
    type: "STATUS",
    params: {
      playbackTime: playbackTime * 1000, // ms
      videoStarted: started,
      videoEnded: ended,
    },
  };
  console.log(`Video STATUS => time: ${playbackTime}s, started: ${started}, ended: ${ended}`);
  publishMessage("game.control", statusMsg);
}

// If the event is "Kick off", "Goal", etc., we do control messages
function handleControlEvent(eventName) {
  if (eventName === "Kick off") {
    // Publish start stream
    const msg = { type: "START_STREAM", params: {} };
    console.log(`Control => START_STREAM`);
    publishMessage("game.control", msg);
  }
  else if (eventName === "Goal") {
    // Publish a "video seek" message
    // Let's pretend we skip to random "celebration" time like 31s
    const msg = {
      type: "SEEK",
      params: {
        playbackTime: 31000 // ms
      },
    };
    console.log(`Control => SEEK to 31s for 'Goal' replay effect`);
    publishMessage("game.control", msg);
  }
  else if (eventName === "Five minutes remaining") {
    // Publish a "video seek" message simulating jump to 295s:
    const msg = {
      type: "SEEK",
      params: {
        playbackTime: 295000, // ms
      },
    };
    console.log(`Control => SEEK to 295s for 'Five minutes remaining' effect`);
    publishMessage("game.control", msg);
  }
  else if (eventName === "End match") {
    // Publish end stream
    const msg = { type: "END_STREAM", params: {} };
    console.log(`Control => END_STREAM`);
    publishMessage("game.control", msg);
  }
  else if (eventName === "Fan excitement" || eventName === "Fan frustration") {
    // Example of immediate "chat" or other messages we might do, though
    // the big load is done in scheduleChatAndReactions
    // We won't do control messages for these, primarily emoji & chat.
  }
}

// For adding random delays between chat messages and reactions
function scheduleChatAndReactions(eventName) {
  // Number of total items to send (some chat, some reactions)
  // We'll do around 20 for "Fan excitement", 25 for "Fan frustration", etc.
  let totalCount = 0;
  switch (eventName) {
    case "Fan excitement": totalCount = 20; break;
    case "Fan frustration": totalCount = 25; break;
    case "Goal": totalCount = 10; break;
    case "Kick off": totalCount = 5; break;
    case "Five minutes remaining": totalCount = 5; break;
    case "End match": totalCount = 5; break;
    default: totalCount = 5; break;
  }

  // We'll pick from the chatMessages pool, or just skip if none
  const messagesPool = chatMessages[eventName] || [];
  const emojisPool = eventEmojis[eventName] || ["🔥"];

  // We'll schedule messages across ~ totalCount steps
  for (let i = 0; i < totalCount; i++) {
    const delay = Math.floor(Math.random() * 500 * (i+1)); // random 0..(500*(i+1)) ms
    setTimeout(() => {
      // 50% chance chat, 50% chance emoji reaction
      if (Math.random() < 0.5 && messagesPool.length > 0) {
        // Chat
        const randomMsgIndex = Math.floor(Math.random() * messagesPool.length);
        const text = messagesPool[randomMsgIndex];
        const user = getRandomBot();

        console.log(`CHAT => [${user}]: ${text}`);
        publishMessage("game.chat", {
          user,
          text,
        });
      } else {
        // Reaction
        const randomEmojiIndex = Math.floor(Math.random() * emojisPool.length);
        const emoji = emojisPool[randomEmojiIndex];

        console.log(`REACTION => ${emoji} for event '${eventName}'`);
        publishMessage("game.stream-reactions", {
          text: emoji,
          type: "reaction",
        });
      }
    }, delay);
  }
}

// Keep track which timeline events we've triggered
let timelineIndex = 0;
let currentSeconds = 0;

// The total video length in seconds (for loop simulation if needed)
const TOTAL_VIDEO_DURATION = 300; // 300s = 5 minutes, matching last event

// Start the periodic loop (1s)
setInterval(() => {
  // Send video status each second
  let started = (currentSeconds === 0);
  let ended = false;
  if (currentSeconds === TOTAL_VIDEO_DURATION) {
    ended = true;
  }
  sendVideoStatus(currentSeconds, started, ended);

  // If we've ended at 300, let's loop or keep going:
  // We'll just keep going without looping, but you could reset here if desired
  // if (ended) currentSeconds = 0; // uncomment if you'd like to loop
  // else currentSeconds++;

  // Check timeline for events
  while (
    timelineIndex < timeline.length &&
    Math.floor(timeline[timelineIndex].time) === currentSeconds
  ) {
    const evt = timeline[timelineIndex];
    console.log(`EVENT TRIGGER => ${evt.event} at ${evt.time}s`);

    // Perform control messages or other special actions
    handleControlEvent(evt.event);
    // Schedule chat + reaction spam
    scheduleChatAndReactions(evt.event);

    timelineIndex++;
  }

  currentSeconds++;
}, 1000);

console.log("Server started. Timeline simulation running...");