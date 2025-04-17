"use strict";

/*
  To run this file:
  1) Create a .env file with your environment variables (PUBNUB_PUBLISH_KEY, PUBNUB_SUBSCRIBE_KEY, etc).
  2) Run: npm install pubnub dotenv
  3) Start with: node server.js  (or add a "start" script in your package.json)
*/

require("dotenv").config();
const PubNub = require("pubnub");

const pubnub = new PubNub({
  publishKey: process.env.PUBNUB_PUBLISH_KEY || "demo",
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY || "demo",
  uuid: "server-uuid",
});

// Example timeline in seconds:
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

// Arrays of possible chat messages (50 each) for demonstration:
const fanExcitementMessages = [
  "Woohoo! This is amazing!",
  "Let's go! So hyped!",
  "Come on team, keep it up!",
  "Yes, yes, yes!!!",
  "I can't believe this! Awesome!",
  "Incredible performance!",
  "They are on fire!",
  "Unbelievable score!",
  "This match is lit!",
  "Amazing teamwork!",
  "Wow, so exciting!",
  "This is the best day ever!",
  "Fantastic strike!",
  "What a moment!",
  "Sensational!",
  "This crowd is loving it!",
  "I can't sit still, let's go!",
  "Pumped up to the max!",
  "So good right now!",
  "Woo! Party time!",
  "I love this game!",
  "This is unbelievable!",
  "Victory seems close!",
  "Incredible technique!",
  "Pure brilliance!",
  "Wow, so much energy!",
  "Go team, go!",
  "This is next level!",
  "Celebration everywhere!",
  "They are unstoppable!",
  "Cheering so loud right now!",
  "I'm losing my voice from cheering!",
  "This is too good!",
  "I'm on the edge of my seat!",
  "Yes, keep going!",
  "Woohoo, let's do this!",
  "Absolutely electric atmosphere!",
  "They must be so proud!",
  "Fans are roaring here!",
  "Oh my goodness, yes!",
  "Beyond epic!",
  "Chills! This is hype!",
  "We're unstoppable!",
  "Haha this is so fun!",
  "I can't contain my excitement!",
  "Keep that energy going!",
  "This is a dream come true!",
  "Legends in the making!",
  "No way they can lose now!",
  "This is raw adrenaline!",
  "Cheer upon cheer, unstoppable!",
];

const fanFrustrationMessages = [
  "Ugh, come on!",
  "This is so disappointing!",
  "What are they doing?!",
  "That's it, I'm losing hope.",
  "We can't keep missing chances!",
  "Where's the defense?!",
  "Totally frustrating game!",
  "I can't believe this sloppy play!",
  "Is anyone even trying??",
  "This is a disaster!",
  "I expected more from this team!",
  "Not again, we gave it away!",
  "They're throwing the match away!",
  "The ref is blind!",
  "Stop messing around!",
  "This is so rough to watch!",
  "Frustration level is maxed out!",
  "Argh, we keep messing up!",
  "We need a miracle now!",
  "Why can't we score?!",
  "No energy, no passion!",
  "Time is slipping away!",
  "Tense and aggravating!",
  "I feel the pain here!",
  "Come on, do something!",
  "This is unacceptable!",
  "We can't finish any attack!",
  "So close, yet so far!",
  "Stop turning over possession!",
  "I'm losing my mind here!",
  "This is heartbreaking!",
  "Unbelievable mistakes!",
  "Went from bad to worse!",
  "Where is the teamwork?",
  "Fans are so annoyed!",
  "This is a total meltdown!",
  "We need to do better, quickly!",
  "The mood is sour now!",
  "I can't watch this anymore!",
  "Ref is missing it all!",
  "Blowing chance after chance!",
  "Absolute heartbreak!",
  "They look asleep out there!",
  "No wake-up call yet?",
  "We're going nowhere fast!",
  "Something has to change!",
  "Fuming right now!",
  "This is so unfair!",
  "It's just not our day!",
  "I want a refund on these tickets!",
];

const goalMessages = [
  "What a GOOOOAL!",
  "GOOOOOOAAAAAALLLLL!",
  "I can't believe that strike!",
  "That shot was unstoppable!",
  "Goal! Finally!",
  "They did it! Incredible!",
  "Yes! It's in!",
  "Top bins beauty!",
  "Breathtaking finish!",
  "That's the way to score!",
  "Goaaaaaaal!",
  "The crowd goes wild!",
  "I'm screaming in joy!",
  "That was perfect placement!",
  "Outstanding goal!",
  "We knew they had it in them!",
  "This is so hype!",
  "They deserve that goal!",
  "A moment of pure class!",
  "What a moment, unbelievable!",
  "Finally on the scoresheet!",
  "Absolutely brilliant finish!",
  "The stadium ignites!",
  "They left the goalie helpless!",
  "I'm losing it, that was epic!",
  "Yes, yes, yes, get in!",
  "That strike was surgical!",
  "A masterclass in finishing!",
  "The net is shaking!",
  "Major breakthrough!",
  "Now that's how you do it!",
  "Clean and clinical shot!",
  "Goal machine engaged!",
  "The fans are in heaven now!",
  "Never doubted them for a second!",
  "Eruption of joy in the stands!",
  "Couldn't have placed it better!",
  "They can't stop scoring!",
  "That's one for the highlight reel!",
  "Truly unstoppable rocket!",
  "Keeper had no chance!",
  "I'm speechless... just wow!",
  "This changes everything!",
  "They're unstoppable now!",
  "Boom! Just like that!",
  "Football at its finest!",
  "Magnificent strike!",
  "Skill + power = perfect goal!",
  "Instant goosebumps!",
  "Can't wait to see the replay!",
  "Historic moment right here!",
];

const fiveMinutesRemainingMessages = [
  "Just five minutes left, let's go!",
  "Time is ticking!",
  "We're so close to the end!",
  "Final stretch, hold on!",
  "Five minutes to make something happen!",
  "Anything can happen in these last minutes!",
  "We need that final push!",
  "This game is going down to the wire!",
  "It's crunch time!",
  "It's now or never!",
  "Let's finish strong!",
  "These last moments are intense!",
  "We can't afford any mistakes now!",
  "One more goal, come on!",
  "Tensions are rising!",
  "Every second counts now!",
  "Stay focused, team!",
  "We can't let them score!",
  "Hold onto the lead!",
  "We need a miracle, do it!",
  "Moments away from the whistle!",
  "C'mon, finalize this!",
  "One last chance for glory!",
  "Pulse pounding right now!",
  "This is so nerve wracking!",
  "Dig deep and push on!",
  "Flashes of brilliance needed!",
  "If there's a time, it's now!",
  "Let's shock them in the final minutes!",
  "Captain, lead us home!",
  "The tension is unreal!",
  "Will we see a last minute goal?!",
  "Praying for that big finish!",
  "Crowd is going crazy now!",
  "They can't let up, not yet!",
  "Keep going until the final whistle!",
  "Ref, check your watch carefully!",
  "These five minutes will be epic!",
  "We can do this, believe!",
  "Everybody is on edge!",
  "Come on, just a bit more effort!",
  "Never give up, fight to the end!",
  "These are precious moments!",
  "Final push is everything!",
  "We can still turn this around!",
  "One last push, let's fight!",
  "No regrets, leave it all on the field!",
  "Yes, five minutes can change everything!",
  "This is do-or-die!",
  "Show your heart, let's go!",
];

const endMatchMessages = [
  "That's it, match over!",
  "What a game, it's done!",
  "The final whistle!",
  "We've reached the end!",
  "Match finished, unbelievable moments!",
  "That's all, folks!",
  "Time's up, game ended!",
  "Nothing more to do, final result!",
  "Full time, thanks for watching!",
  "End of an epic showdown!",
  "Ref calls it, the game is complete!",
  "Final outcomes are locked in!",
  "All that excitement, now it's over!",
  "What a finish to the match!",
  "Closing the chapter on a thrilling game!",
  "The scoreboard is final now!",
  "And we are done for the day!",
  "Time to celebrate or commiserate!",
  "Absolute rollercoaster of a game!",
  "This was an intense match!",
  "Game over, folks!",
  "We gave it our all, fantastic game!",
  "Thank you for tuning in!",
  "Final whistle has blown!",
  "It's a wrap!",
  "Phew, I'm out of breath!",
  "What a journey that was!",
  "Well played, both sides!",
  "No more action left!",
  "It's concluded at last!",
  "Score sealed and done!",
  "Let the post-match analysis begin!",
  "End credits rolling now!",
  "This game was one for the books!",
  "A true spectacle from start to finish!",
  "We hope you enjoyed the show!",
  "All good things must come to an end!",
  "Applause to the teams and the fans!",
  "Time to exit the stadium!",
  "Thank you, see you next time!",
  "A perfect example of sports drama!",
  "Time to rest, players!",
  "Such an emotional ride!",
  "Final handshake from the teams!",
  "That's a wrap from me!",
  "Signing off now!",
  "No more comebacks possible!",
  "The crowd begins to disperse!",
  "Good night, everyone!",
];

function getRandomBotUser() {
  // bot-01 through bot-09
  const idx = Math.floor(Math.random() * 9) + 1;
  return `bot-0${idx}`;
}

function getRandomDelay() {
  // random delay up to 3 seconds for demonstration
  return Math.floor(Math.random() * 3000);
}

function sendPubNubMessage(channel, messageObj) {
  // Publish a message on a specific channel
  pubnub.publish(
    {
      channel,
      message: messageObj,
    },
    (status, response) => {
      if (status.error) {
        console.log("PubNub publish error:", status);
      } else {
        // console.log("PubNub publish success:", response);
      }
    }
  );
}

function sendVideoStatus(playbackTimeMs, started = false, ended = false) {
  // This is the "control" message that the front end can use to sync
  const messageObj = {
    type: "STATUS",
    params: {
      playbackTime: playbackTimeMs,
      videoStarted: started,
      videoEnded: ended,
    },
  };
  console.log(`Video status => playbackTime:${playbackTimeMs}ms started:${started} ended:${ended}`);
  sendPubNubMessage("game.videoStatus", messageObj);
}

// Utility to send multiple chat messages with random delays
function sendBulkChatMessages(channel, messagesArray) {
  messagesArray.forEach((msg) => {
    const user = getRandomBotUser();
    const text = msg;
    const delay = getRandomDelay();
    setTimeout(() => {
      console.log(`[CHAT] ${user}: ${text}`);
      sendPubNubMessage(channel, { user, text });
    }, delay);
  });
}

// Utility to send multiple stream reactions
function sendBulkReactions(emoji, count) {
  for (let i = 0; i < count; i++) {
    const delay = getRandomDelay();
    setTimeout(() => {
      console.log(`[REACTION] ${emoji}`);
      sendPubNubMessage("game.stream-reactions", { text: emoji, type: "reaction" });
    }, delay);
  }
}

function handleTimelineEvent(eventName) {
  console.log(`>>> Timeline event triggered: ${eventName}`);

  switch (eventName) {
    case "Kick off":
      // Send start stream message
      console.log("[CONTROL] Start stream");
      sendPubNubMessage("game.videoStatus", {
        type: "START_STREAM",
        params: {},
      });
      // Also send some chat messages
      sendBulkChatMessages("game.chat", [
        "Match is starting, get ready!",
        "Here we go, let the fun begin!",
        "Kick off time, best of luck to both teams!",
        "Everyone settle in, big match ahead!",
        "All eyes on the field now!",
      ]);
      break;

    case "Fan excitement":
      // This triggers ~20 cheer emoji plus random chat messages (50)
      console.log("[ACTION] Fan excitement triggered");
      sendBulkReactions("🎉", 15);
      sendBulkReactions("🙌", 5);
      // plus 50 chat messages from fanExcitementMessages
      sendBulkChatMessages("game.chat", getRandom50(fanExcitementMessages));
      break;

    case "Fan frustration":
      // ~25 anger emoji plus random chat messages (50)
      console.log("[ACTION] Fan frustration triggered");
      sendBulkReactions("😡", 25);
      sendBulkChatMessages("game.chat", getRandom50(fanFrustrationMessages));
      break;

    case "Goal":
      // Could simulate a mini celebration,
      // e.g. 10 random "GOAL" messages and 20 confetti, plus 50 chat messages
      console.log("[ACTION] GOAL triggered");
      sendBulkReactions("🎉", 20);
      sendBulkChatMessages("game.chat", getRandom50(goalMessages));
      break;

    case "Five minutes remaining":
      // 50 chat messages about "5 minutes left"
      console.log("[ACTION] 5 minutes left triggered");
      sendBulkChatMessages("game.chat", getRandom50(fiveMinutesRemainingMessages));
      break;

    case "End match":
      // Send end stream
      console.log("[CONTROL] End stream");
      sendPubNubMessage("game.videoStatus", {
        type: "END_STREAM",
        params: {},
      });
      // 50 chat messages about end of match
      sendBulkChatMessages("game.chat", getRandom50(endMatchMessages));
      break;

    default:
      break;
  }
}

// Helper function to choose 50 random messages from a larger array (without repetition):
function getRandom50(sourceArr) {
  // If the array is exactly 50 or less, just return it
  if (sourceArr.length <= 50) {
    return shuffleArray(sourceArr.slice());
  }
  // Otherwise, pick 50 unique
  const shuffled = shuffleArray(sourceArr.slice());
  return shuffled.slice(0, 50);
}

// Simple shuffle
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let currentTimelineIndex = 0; // indexes into timeline
let currentSeconds = 0;       // track our "video" time
let isFirstLoop = true;

// Sort timeline by time ascending (just in case)
timeline.sort((a, b) => a.time - b.time);

const totalDuration = timeline[timeline.length - 1].time; // the last event's time, e.g. 300

function mainLoop() {
  // Every second, increment the "video" time
  currentSeconds += 1;

  // Publish a status every iteration
  let started = false;
  let ended = false;

  // If we just started
  if (currentSeconds === 1 && isFirstLoop) {
    started = true;
  }

  // Check if we've passed any events
  while (
    currentTimelineIndex < timeline.length &&
    timeline[currentTimelineIndex].time <= currentSeconds
  ) {
    const { event } = timeline[currentTimelineIndex];
    handleTimelineEvent(event);
    currentTimelineIndex += 1;

    if (event === "End match") {
      // Mark ended
      ended = true;
      // Then reset the timeline
      currentSeconds = 0;
      currentTimelineIndex = 0;
      isFirstLoop = false;
      break; // break so we skip sending a second status after resetting
    }
  }

  // Send a status message for sync
  sendVideoStatus(currentSeconds * 1000, started, ended);
}

// Run main loop once every 1 second
setInterval(mainLoop, 1000);

console.log("Node server is running with a 1-second interval loop...");