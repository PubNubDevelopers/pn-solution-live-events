"use strict";

/**
 * server.js
 *
 * NodeJS server demo that:
 * 1. Uses a timeline array of events to simulate a live video playback loop.
 * 2. Emits synchronized actions (chat messages, emojis, etc.) matching timeline events.
 * 3. Responds to "Data Controls" requests for skipping to time, starting/stopping stream, sending bursts of emojis, etc.
 * 4. Prints all actions to console and publishes video time sync messages periodically.
 * 5. Uses random delays, random bot users, random chat messages for each event type, etc.
 * 6. Loops timeline back to 0 at the end.
 * 7. Loads configuration from ENV vars with require("dotenv").config().
 */

require("dotenv").config();
const express = require("express");
const app = express();

/*
  ===========================================================================
  PUBNUB SETUP (placeholder)
  In a real environment, you would import and configure the PubNub SDK here.
  The example .env might include:
  PUBNUB_PUBLISH_KEY=...
  PUBNUB_SUBSCRIBE_KEY=...
  etc.
  For demo, we'll stub out publish calls.
  ===========================================================================
*/

// Stub "publish" function to mimic sending messages to PubNub.
// Replace with real PubNub code, e.g.:
// const PubNub = require('pubnub');
// const pubnub = new PubNub({
//   publishKey: process.env.PUBNUB_PUBLISH_KEY,
//   subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY,
//   uuid: "server-uuid"
// });
// function publish(channel, message) {
//   return pubnub.publish({ channel, message });
// }

async function publish(channel, message) {
  // Placeholder that logs to console, simulating a PubNub publish.
  console.log(`[PUBNUB SIM] Publishing to channel "${channel}":`, message);
}

/*
  ===========================================================================
  TIMELINE SETUP
  This timeline is in seconds. (We can do floating point for partial seconds.)
  The user asked for an example timeline. We'll follow their example.
  We'll store times in seconds for simplicity.
  ===========================================================================
*/

const timeline = [
  { time: 0.0, event: "Kick off" },
  { time: 15.0, event: "Fan excitement" },
  { time: 30.0, event: "Goal" },
  { time: 60.0, event: "Fan frustration" },
  { time: 120.0, event: "Fan excitement" },
  { time: 180.0, event: "Goal" },
  { time: 200.0, event: "Fan excitement" },
  { time: 280.0, event: "Five minutes remaining" },
  { time: 295.0, event: "Fan frustration" },
  { time: 300.0, event: "End match" }
];

/*
  ===========================================================================
  SIMULATED CHAT MESSAGES
  We need at least 50 different chat messages for each event type.
  We'll store them in arrays and randomly pick from them.
  ===========================================================================
*/

const chatMessagesForEvent = {
  "Kick off": [
    "Let's get this party started!",
    "Here we go, the match begins!",
    "So excited for today's game!",
    "Time to see who's the best!",
    "Kick off hype!",
    "I got my popcorn, let's do this!",
    "Who's ready for a showdown?",
    "GL HF everyone!",
    "Here we go, zero to zero, anything can happen!",
    "The tension is real right now.",
    "I'm cheering for the home team!",
    "The atmosphere is electric here!",
    "Can't wait to see some great plays!",
    "Ready for an action-packed match!",
    "Go teams, let's go!",
    "Don't blink. This is going to be good.",
    "Oh yeah, big day for soccer!",
    "Let's see who scores first!",
    "Take your seats, folks, it's starting!",
    "I've been waiting all week for this match!",
    "Heard both teams have been training hard!",
    "Coach said they're trying new tactics!",
    "I hope we see an early goal!",
    "Huge crowd in the stadium today!",
    "Drinks and snacks on the table, let's do it!",
    "The energy is amazing!",
    "Match of the year? Possibly!",
    "Fingers crossed for a fair match!",
    "Here come the players on the pitch!",
    "The ref gets us underway!",
    "Can't believe it's finally here!",
    "Ready for the biggest rivalry of the season!",
    "Everyone's eyes on the ball now!",
    "Testing the waters in these first minutes!",
    "Go big or go home!",
    "Been a fan for years, so excited!",
    "This is going to be epic!",
    "Will we see an early defensive slip?",
    "Hoping for a solid performance!",
    "Counting down, and...Started!",
    "Teams are pumped, let's go!",
    "My heart is pounding already!",
    "All eyes on the center circle!",
    "They huddle, let's see if that helps!",
    "Come on, let's get a decisive start!",
    "No second chances, let's do this right!",
    "Stadium looks packed!",
    "It's showtime!",
    "Is it me, or is the energy at 100%?",
    "We are live, folks!"
  ],
  "Fan excitement": [
    "Wow, that was amazing!",
    "Yesss! Loving the energy!",
    "Can't believe that just happened!",
    "So much hype right now!",
    "Keep it coming!",
    "This is what we came to see!",
    "Absolutely brilliant!",
    "Buzzing right now, best atmosphere ever!",
    "I'm on the edge of my seat!",
    "This crowd is incredible!",
    "The fans are going wild!",
    "Never seen such unity in the stands!",
    "They're chanting so loud!",
    "My adrenaline is through the roof!",
    "That play was sensational!",
    "Hands in the air, wave them like we don't care!",
    "The tension just skyrocketed!",
    "Pure euphoria right now!",
    "These supporters are unstoppable!",
    "That moment had me jumping!",
    "So much passion in one place!",
    "This is peak entertainment!",
    "Almost knocked over my drink cheering!",
    "What a moment to witness!",
    "Words can't describe how I feel!",
    "The stadium is a sea of excitement!",
    "Deafening roar from the stands!",
    "Chills all over my body!",
    "My heart is racing right now!",
    "Just when you think it can't get better!",
    "Give me more of this hype!",
    "Cameras flashing everywhere!",
    "Unbelievable rally from the fans!",
    "I love seeing this level of support!",
    "That was a goosebumps moment!",
    "I can feel the vibration through the TV!",
    "Anyone else freaking out right now?",
    "Nothing beats a live crowd!",
    "They must feel unstoppable with this backing!",
    "This is next-level support!",
    "Ref can barely hear the whistle!",
    "Raising the roof with these cheers!",
    "Absolutely on fire!",
    "Incredible energy, can't put it into words!",
    "That's how you show your love for the team!",
    "Electrifying crowd, oh my!",
    "Nobody's sitting down now!",
    "My living room is shaking from the cheers!",
    "No place I'd rather be right now!"
  ],
  "Goal": [
    "GOOOOAAALLL!!",
    "He found the net! Incredible shot!",
    "That's how you do it!",
    "Top corner, unstoppable!",
    "What a strike, unstoppable rocket!",
    "They're celebrating like crazy!",
    "That was pure class right there!",
    "Goal of the season candidate, maybe?",
    "The crowd erupts in celebration!",
    "Keeper stood no chance!",
    "That's one for the highlight reel!",
    "Boom! Just like that, they're ahead!",
    "Finally, a breakthrough!",
    "That pass was perfect, the finish even better!",
    "I've never seen a goal like that before!",
    "Absolutely clinical finishing!",
    "They carved open the defense!",
    "Speechless, that was beautiful!",
    "Team synergy pays off big time!",
    "The fans are going ballistic!",
    "A real poacher's goal!",
    "Well-deserved lead, they've been pushing!",
    "Schoolyard skills on display!",
    "Strike from distance, unstoppable rocket!",
    "Keeper is furious with the defense!",
    "Everyone's hugging in the stands!",
    "Pure pandemonium on the pitch!",
    "This changes everything!",
    "Pinpoint accuracy from the forward!",
    "Yes! I've been waiting for that moment!",
    "All that pressure finally pays off!",
    "He hits the net, game on!",
    "Unbelievable technique there!",
    "The stadium is roaring!",
    "Great build-up, perfect finish!",
    "Coach is ecstatic on the sideline!",
    "What a time to score!",
    "So calm under pressure!",
    "That might seal the deal!",
    "Caught the defense sleeping!",
    "At last, we see the deadlock broken!",
    "This is what the fans came to see!",
    "He read the defense like a book!",
    "The bench is celebrating wild!",
    "So many cheers all around!",
    "They needed that spark, here it is!",
    "Massive goal, unstoppable!",
    "Takes the lead, unstoppable finish!",
    "The scoreboard is lighting up!"
  ],
  "Fan frustration": [
    "What was that?!",
    "Come on, ref, open your eyes!",
    "This is unbelievable!",
    "We need a better performance!",
    "Not again... so frustrating!",
    "I'm losing my patience here!",
    "The crowd is angry, me included!",
    "That's a complete disaster!",
    "Worst call I've seen all season!",
    "Nothing is going our way...",
    "How could we miss that chance?!",
    "The defense is crumbling!",
    "We need a change now, coach!",
    "Can someone fix this mess?",
    "So many sloppy passes!",
    "Tensions are boiling over!",
    "This is painful to watch!",
    "Zero focus out there!",
    "I'm about to rage quit!",
    "We can do better than this!",
    "Fans are booing so loud!",
    "We deserved more from that play!",
    "Rough day on the pitch, folks!",
    "That was a fiasco!",
    "We're getting robbed here!",
    "Why can't we hold possession?!",
    "I can't believe what I'm seeing!",
    "Heads need to roll for this!",
    "Stop giving the ball away!",
    "This is absolutely dire!",
    "The frustration is real!",
    "We've lost all momentum!",
    "We look so disorganized!",
    "No fight left in them, apparently!",
    "Where's the passion?!",
    "I might switch the channel soon!",
    "This is heartbreak city!",
    "Everything going wrong at once!",
    "I'm steaming mad right now!",
    "We need a miracle to turn this around!",
    "Anyone got a backup plan?",
    "Enough with the sloppy mistakes!",
    "Fans are not happy, booing everywhere!",
    "That shot was way off! Ugh!",
    "What are we even doing?!",
    "This is embarrassing!",
    "We can't catch a break!",
    "Somebody fix this meltdown!"
  ],
  "Five minutes remaining": [
    "Just five more minutes, let's go!",
    "Almost at the end, push through!",
    "Come on, final stretch!",
    "We need a late goal here!",
    "This is it, everything on the line!",
    "Time is running out!",
    "Desperation time, folks!",
    "Every second counts now!",
    "We can't afford any mistakes!",
    "The clock is ticking fast!",
    "One last surge, let's do it!",
    "Give it all you've got!",
    "Final push for the win!",
    "Let's see who's got the stamina!",
    "Clutch time, no holding back!",
    "Last chance to turn this around!",
    "So tense, can't handle this pressure!",
    "Ref... let them play, no more calls!",
    "This is going down to the wire!",
    "They're going to throw everything forward!",
    "Bracing ourselves for a dramatic ending!",
    "One moment of magic could change it all!",
    "Hold on to your seats!",
    "Don't blink, final moments here!",
    "We need some heroics now!",
    "Come on, let's not lose hope!",
    "We've come this far, finish strong!",
    "The tension is through the roof now!",
    "One goal could seal the deal!",
    "I'm biting my nails here!",
    "They better keep their heads cool!",
    "Let's not concede in the dying minutes!",
    "This is the big test of nerves!",
    "Five minutes is an eternity in soccer!",
    "Attack or defend? Big call, coach!",
    "No regrets, leave it all on the field!",
    "Fans are chanting like crazy now!",
    "Lung-busting runs incoming!",
    "We can do this, believe!",
    "I'd hate extra time, let's finish now!",
    "Who's stepping up to be the hero?",
    "The final countdown has started!",
    "Shake off the fatigue, keep going!",
    "Don't let them snatch it away!",
    "One last chance to make it count!",
    "Time is almost up, do something!"
  ],
  "End match": [
    "That's the final whistle!",
    "The game is over, folks!",
    "Well, that was intense!",
    "What a match, I'm exhausted!",
    "GG everyone, thanks for watching!",
    "Can't believe it's done!",
    "Some game that was, wow!",
    "Final score locked in!",
    "It all ends here!",
    "What a rollercoaster of emotions!",
    "Time to celebrate or commiserate!",
    "Hands shaken, heads held high!",
    "Till next time, folks!",
    "That was one for the books!",
    "What a finish to a thrilling match!",
    "Sigh of relief on both sides!",
    "Final scoreboard doesn't lie!",
    "We gave it our best shot!",
    "Victory for one, heartbreak for another!",
    "End of the road for now!",
    "Thanks for the memories, team!",
    "I'll catch you all next match!",
    "I'm still buzzing from all that action!",
    "They left it all on the pitch!",
    "Time to wrap it up, see ya!",
    "That was a showstopper!",
    "Ref calls time, game over!",
    "Such drama until the last second!",
    "The fans are either celebrating or in tears!",
    "Appreciate the effort from both teams!",
    "I need to catch my breath!",
    "Let's talk about that next time!",
    "We saw some incredible plays!",
    "Closing time, folks!",
    "All that's left is the post-match analysis!",
    "We can only imagine next week's rematch!",
    "So much to unpack after that match!",
    "Signing off, the match is done!",
    "We have our result: done and dusted!",
    "Hope you all enjoyed that!",
    "Game, set, match, brilliant stuff!",
    "No more to see, folks!",
    "We'll see you again soon!",
    "Everyone can relax now, phew!",
    "It's a wrap, folks!",
    "And that's all she wrote!",
    "Well played, time for a break!"
  ]
};

/*
  ===========================================================================
  BOT USERS
  We'll simulate random messages from "bot-01" to "bot-09".
  ===========================================================================
*/

const botUsers = [
  "bot-01",
  "bot-02",
  "bot-03",
  "bot-04",
  "bot-05",
  "bot-06",
  "bot-07",
  "bot-08",
  "bot-09"
];

/*
  ===========================================================================
  HELPER FUNCTIONS
  ===========================================================================
*/

// Return a random item from an array
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Sleep helper to introduce random delays
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Format time in mm:ss for demonstration
function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? "0" + s : s}`;
}

/*
  ===========================================================================
  VIDEO SIMULATION STATE
  We'll track currentTime in seconds, run a setInterval, etc.
  We'll also handle skipping times via the data controls.
  ===========================================================================
*/

let currentTime = 0; // in seconds
let timelineDuration = timeline[timeline.length - 1].time; // 300 in our example
let isPlaying = false; // if video is actively "playing" or not

// For quick lookups: eventMap[second] = [event objects...]
const eventMap = {};
timeline.forEach((item) => {
  const sec = Math.floor(item.time);
  if (!eventMap[sec]) eventMap[sec] = [];
  eventMap[sec].push(item);
});

/*
  ===========================================================================
  PERIODIC VIDEO LOOP & EVENT CHECK
  We'll run every 1 second. We'll also publish a video status message ~2x per second (or 0.5s).
  For demonstration, we'll simplify and do it once per second here.
  ===========================================================================
*/

// We also want some random user activity surrounding each event. We'll handle that in the handleEvent logic.

async function handleEvent(event) {
  // event is something like {time: 15, event: 'Fan excitement'}
  const eType = event.event;
  console.log(`[EVENT TRIGGERED] Time=${currentTime}s, Event="${eType}"`);

  // Print or publish event. Let's do a console.log and/or simulate a PubNub publish
  await publish("game.video-events", {
    type: "TIMELINE_EVENT",
    params: {
      time: currentTime,
      event: eType
    }
  });

  // For each event, we simulate chat activity. We'll pick a random number of messages, or at least 1.
  // We also handle special "End match" or "Kick off" logic.
  if (chatMessagesForEvent[eType]) {
    // We'll send up to 3 random chat messages from random bots with random short delays
    const howMany = 3;
    for (let i = 0; i < howMany; i++) {
      const randomMessage = pickRandom(chatMessagesForEvent[eType]);
      const randomBot = pickRandom(botUsers);
      // Random delay between 200ms and 1000ms
      const delay = 200 + Math.floor(Math.random() * 800);
      await sleep(delay);
      console.log(`[CHAT] <${randomBot}>: ${randomMessage}`);
      await publish("game.chat", {
        user: randomBot,
        text: randomMessage
      });
    }
  }

  // If "Fan excitement", we also want to simulate some emojis
  if (eType === "Fan excitement") {
    const reactionCount = 5 + Math.floor(Math.random() * 15); // 5-19 random
    for (let i = 0; i < reactionCount; i++) {
      // random small delay (100-400ms)
      const delay = 100 + Math.floor(Math.random() * 300);
      await sleep(delay);
      const emoji = Math.random() < 0.5 ? "🎉" : "🙌";
      console.log(`[EMOJI] ${emoji}`);
      await publish("game.stream-reactions", {
        text: emoji,
        type: "reaction"
      });
    }
  }

  // If "Fan frustration", let's do 25 anger emojis or so
  if (eType === "Fan frustration") {
    const reactionCount = 25;
    for (let i = 0; i < reactionCount; i++) {
      const delay = 50 + Math.floor(Math.random() * 200);
      await sleep(delay);
      console.log("[EMOJI] 😡");
      await publish("game.stream-reactions", {
        text: "😡",
        type: "reaction"
      });
    }
  }

  // If "End match", let's pause or reset
  if (eType === "End match") {
    // We'll simulate an "end stream" message
    console.log("[ACTION] End Stream");
    await publish("game.video-control", {
      type: "END_STREAM",
      params: {}
    });
    // For demonstration, let's also set isPlaying=false and jump to 0 if we want to loop.
    // The user wants the timeline to loop. We'll do that automatically after this event.
    isPlaying = false;
  }

  // If "Kick off", let's start stream
  if (eType === "Kick off") {
    console.log("[ACTION] Start Stream");
    await publish("game.video-control", {
      type: "START_STREAM",
      params: {}
    });
    isPlaying = true;
  }
}

// We'll do a setInterval of 1 second to manage the timeline
setInterval(async () => {
  if (!isPlaying) {
    // Not playing, but let's still broadcast status if needed
    await sendVideoStatus(false);
    return;
  }

  // Increase current time by 1 second
  currentTime += 1;
  console.log(`[TICK] currentTime=${currentTime}s`);

  // Check if we have events at this second
  const events = eventMap[Math.floor(currentTime)];
  if (events) {
    for (let ev of events) {
      // We'll handle them asynchronously
      await handleEvent(ev);
    }
  }

  // If we've reached the end of the timeline, loop back to 0
  if (currentTime >= timelineDuration) {
    // Loop
    console.log("[LOOP] Reached end of timeline, looping back to 0");
    currentTime = 0;
    // We'll also announce that the video ended, then start again
    await publish("game.video-control", {
      type: "STATUS",
      params: {
        playbackTime: currentTime,
        videoEnded: true,
        videoStarted: false
      }
    });
    // Then we simulate Kick off again for looping
    await handleEvent({ time: 0, event: "Kick off" });
  } else {
    // Send video status
    await sendVideoStatus();
  }
}, 1000);

/*
  ===========================================================================
  PERIODIC STATUS MESSAGES
  We encapsulate it in a function we can call after each tick or while paused.
  ===========================================================================
*/

async function sendVideoStatus(override = true) {
  // We'll send a message type=STATUS with currentTime, videoStarted or ended
  // For now, videoStarted is only when time=0 or we call handleEvent("Kick off").
  // If override = false, we skip spamming. But let's publish anyway to demonstrate.
  await publish("game.video-control", {
    type: "STATUS",
    params: {
      playbackTime: currentTime,
      videoStarted: false,
      videoEnded: false
    }
  });
}

/*
  ===========================================================================
  EXPRESS SERVER FOR DATA CONTROLS
  We'll create endpoints that the salesperson can call to:
    - Kick off
    - End match
    - Seek X seconds
    - Fan excitement
    - Fan frustration
    - Tag user in message
    - Five minutes remaining
  etc.

  For simplicity, we'll do /data-control?type=kickoff or so.
  And optional param "time" for skipping times.
  We'll just do a get and parse query. In production, you'd probably do post w/ JSON.
  ===========================================================================
*/

app.get("/data-control", async (req, res) => {
  const { type, time, user } = req.query;
  console.log("[DATA CONTROL] Received:", req.query);

  try {
    switch (type) {
      case "kickoff": {
        // Immediately simulate Kick off event
        await handleEvent({ time: currentTime, event: "Kick off" });
        break;
      }
      case "endMatch": {
        await handleEvent({ time: currentTime, event: "End match" });
        break;
      }
      case "seek": {
        // time in seconds
        const seekTime = parseFloat(time || "0");
        console.log(`[ACTION] Seeking to ${seekTime}s`);
        currentTime = seekTime;
        await publish("game.video-control", {
          type: "SEEK",
          params: {
            playbackTime: currentTime
          }
        });
        break;
      }
      case "fanExcitement": {
        // Trigger the "Fan excitement" block
        await handleEvent({ time: currentTime, event: "Fan excitement" });
        break;
      }
      case "fanFrustration": {
        // Trigger the "Fan frustration" block
        await handleEvent({ time: currentTime, event: "Fan frustration" });
        break;
      }
      case "fiveMinutesRemaining": {
        // Seek to 300 - 5 = 295 if you like, or just handle event
        console.log("[ACTION] Setting time to an approximate 5 minutes remaining event");
        currentTime = 295;
        await publish("game.video-control", {
          type: "SEEK",
          params: {
            playbackTime: currentTime
          }
        });
        // Then trigger
        await handleEvent({ time: currentTime, event: "Five minutes remaining" });
        break;
      }
      case "tagUserInMessage": {
        // We'll simulate a chat message from a bot that tags the user
        if (!user) {
          console.log("[WARNING] No user specified to tag");
        }
        const randomBot = pickRandom(botUsers);
        const message = `Hello @${user || "currentUser"}`;
        console.log(`[CHAT] <${randomBot}>: ${message} (tag user in message)`);
        await publish("game.chat", {
          user: randomBot,
          specialTaggedMessage: true,
          originalTaggedName: user || "currentUser"
        });
        break;
      }
      default:
        console.log("[DATA CONTROL] Unknown type:", type);
        break;
    }
    res.json({ ok: true, message: "Data control action completed." });
  } catch (err) {
    console.error("Error in data control handling:", err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

/*
  ===========================================================================
  START EXPRESS SERVER
  ===========================================================================
*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log("Use /data-control?type=kickoff or others to simulate data controls.");
});

/*
  ===========================================================================
  INITIAL LOG & README
  ===========================================================================
*/

console.log("Live Events Demo Backend");
console.log("Starting timeline simulation...");  

// Optional: automatically start the timeline by simulating Kick off event.
(async () => {
  await handleEvent({ time: 0, event: "Kick off" });
})();
// Now the setInterval loop will drive the timeline.