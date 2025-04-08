"use strict";

require("dotenv").config();
const PubNub = require("pubnub");
const { matchScript } = require("./game-data");

// PubNub setup (API keys via ENV)
const pubnub = new PubNub({
  publishKey: process.env.PUBNUB_PUBLISH_KEY || "demo",
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY || "demo",
  uuid: process.env.PUBNUB_UUID || "server-simulator",
});

// Bot users
const botUsers = [
  "bot-01","bot-02","bot-03","bot-04","bot-05",
  "bot-06","bot-07","bot-08","bot-09"
];

// Emoji reactions
const emojiReactions = [
  "⚽️","🔥","👏","😀","😡","🙌","🤩","👍","🥳","😱"
];

// 50 chat messages for each type, repeated or varied to fill up
const commentaryMessages = [
  "Wow, this match is on fire!",
  "Spectacular tackle!",
  "Unbelievable skill from the players!",
  "They are giving it their all today!",
  "The crowd is loving this!",
  "It's still anyone's game out here!",
  "That was a close call!",
  "Such a tense moment!",
  "I'm on the edge of my seat!",
  "Impressive teamwork so far!",
  "They have to keep the pressure on!",
  "What an intense showdown!",
  "I'm loving the back-and-forth!",
  "Both teams look strong right now!",
  "They can't afford any mistakes!",
  "There's still plenty of time left!",
  "High energy from both squads!",
  "The fans are going wild!",
  "We’re seeing some top-notch play!",
  "Hard to predict a winner yet!",
  "That was a dangerous cross!",
  "Remarkable save by the keeper!",
  "I can’t believe that pass!",
  "This is a thrilling match!",
  "The atmosphere is electric!",
  "The manager's strategy is spot on!",
  "What a display of skill!",
  "They're dominating possession!",
  "This referee is letting them play!",
  "Non-stop action here!",
  "Central midfield battle is fierce!",
  "Every second counts now!",
  "This is a masterclass in teamwork!",
  "These players are unstoppable!",
  "The chance conversion is critical!",
  "Incredible speed on the counter!",
  "They'll need fresh legs soon!",
  "Keep the momentum going!",
  "Nobody wants to lose this one!",
  "I've never seen anything like it!",
  "They've got to stay focused!",
  "The defense is rock solid!",
  "The fans deserve this excitement!",
  "Pressure is mounting here!",
  "Who will break the deadlock?",
  "That was nearly a goal!",
  "One tiny error can change everything!",
  "This match is living up to expectations!",
  "The intensity just won't let up!",
  "Heart-stopping moments all around!"
];

const goalMessages = [
  "GOAL! That was a rocket!",
  "He smashed it into the net!",
  "What a superb finish!",
  "Unstoppable shot from that range!",
  "Absolute screamer of a goal!",
  "The keeper had no chance!",
  "Amazing strike into the corner!",
  "They made that look so easy!",
  "Clinical finishing at its best!",
  "He won't score a better goal all season!",
  "Breathtaking shot—top bins!",
  "Goal of the season contender!",
  "The fans are in absolute jubilation!",
  "He’s on fire today!",
  "They've broken the deadlock now!",
  "The stadium has erupted!",
  "Skillful volley into the net!",
  "The defense was left in the dust!",
  "And the floodgates have opened!",
  "Beautiful piece of finishing!",
  "He hit that with real venom!",
  "This could be a major turning point!",
  "And just like that, they've scored!",
  "He's celebrating in style!",
  "That's how you take a shot!",
  "A fantastic team goal!",
  "Impossible angle, but he made it count!",
  "Keeper can't believe it!",
  "Pure magic on the pitch!",
  "He’s got a brace now!",
  "He made it look so effortless!",
  "Look at the joy in the stands!",
  "The replay will be shown for days!",
  "That was unstoppable!",
  "He’s thrilled with that finish!",
  "He knew exactly where to place it!",
  "Total pandemonium among supporters!",
  "He placed it perfectly away from the keeper!",
  "He’s going for the hat trick next!",
  "Nobody saw that coming!",
  "Picture-perfect strike!",
  "He’ll remember this for a lifetime!",
  "Now they’re in control!",
  "That’s a statement goal!",
  "Keeper's left helpless!",
  "Back of the net—no mercy!",
  "They never gave up on that build-up!",
  "The fans are chanting his name!",
  "What a clinical team display!",
  "He read that opportunity perfectly!"
];

const penaltyMessages = [
  "That's a big call from the ref!",
  "Tense moment—is he going to convert?",
  "High pressure situation for the taker!",
  "Keeper trying mind games here!",
  "Will they keep their nerve from the spot?",
  "This could change the whole match!",
  "That's some controversy right there!",
  "He stepped up confidently... let's see!",
  "A massive chance to score now!",
  "Ref has pointed to the spot!",
  "The crowd can't watch!",
  "That must be nerve-racking!",
  "Foul in the box—no doubt!",
  "This is a golden opportunity!",
  "The tension is palpable!",
  "He’s lining it up very carefully!",
  "All eyes on the penalty taker!",
  "So much riding on this shot!",
  "One kick can change everything!",
  "That’s definitely a pen!",
  "He’ll be replaying this moment in his head!",
  "Keeper is reading his eyes!",
  "Will it be top corner or low drive?",
  "Time seems to have stood still here!",
  "Referee had no choice—clear penalty!",
  "Protest from the defenders is huge!",
  "VAR might have confirmed that!",
  "Huge roar from the away fans!",
  "He’s under some serious pressure now!",
  "This is their chance to get back in the game!",
  "If he scores, it’s a lifeline!",
  "If he misses, it’ll haunt him!",
  "He better not slip now!",
  "Keeper looks ready for it!",
  "It’s time for a calm, composed strike!",
  "Silence in the stadium. Penalty awaits!",
  "He’s got the crowd’s hopes pinned on him!",
  "A hush has fallen over the fans!",
  "Anything can happen now!",
  "He could level the score here!",
  "All the practice comes down to this!",
  "The drama is off the charts!",
  "What an opportunity to go ahead!",
  "He’s aiming to the left, I guess?",
  "Players on edge at the box line!",
  "He steps up…",
  "Is the keeper guessing right?",
  "Edge-of-your-seat moment!",
  "He must keep a cool head!"
];

const yellowCardMessages = [
  "That's definitely a booking!",
  "He’s lost his composure there!",
  "The ref had to pull out a card!",
  "That's a late challenge—no surprises!",
  "A silly tackle to be honest!",
  "He’ll need to be careful now!",
  "Ref has no tolerance for that!",
  "He can't argue with that one!",
  "That was reckless—yellow card out!",
  "He’s put his team under pressure!",
  "One more foul and he's off!",
  "A harsh but fair call!",
  "He’s lucky that wasn’t red!",
  "Refs are cracking down this season!",
  "He should've gone for the ball!",
  "Players are protesting the call!",
  "Tough break for the player!",
  "He's got to watch himself now!",
  "The manager won't be happy!",
  "Poor challenge, definitely a yellow!",
  "The tension is getting to them!",
  "He came in way too late!",
  "A well-deserved booking!",
  "He's losing the plot out there!",
  "Could have been worse!",
  "He knew what he was doing!",
  "No complaints on that decision!",
  "That was a high boot!",
  "He’s living dangerously now!",
  "That’s going to slow him down!",
  "He'll need to calm down quickly!",
  "No excuse for that tackle!",
  "He’s earned the referee’s wrath!",
  "That’s not how you want your name mentioned!",
  "He’ll remember this match for the wrong reasons!",
  "He can’t keep doing that!",
  "This ref is keeping control with cards!",
  "He better avoid any further fouls!",
  "A big risk to keep him on now!",
  "He’s walking a tightrope!",
  "He’s been warned earlier too!",
  "Could’ve easily turned into a red!",
  "Players must keep discipline now!",
  "He’s let frustration get the best of him!",
  "Hot tempers on the field!",
  "He took one for the team there!",
  "That was borderline dangerous!",
  "Needs to keep his head in the game!",
  "The bench is furious with that call!"
];

const halfTimeMessages = [
  "What a first half that was!",
  "Time for a breather!",
  "Players heading to the locker rooms!",
  "So much action, we need a break!",
  "The crowd enjoyed that half!",
  "Analysis will be crucial now!",
  "Managers will deliver big talk!",
  "It was a mixed performance so far!",
  "They'll need to regroup quickly!",
  "The fans are buzzing during half-time!",
  "Can they keep up this intensity?",
  "So far so good, but second half awaits!",
  "That half flew by!",
  "They need to come out stronger!",
  "Stadium atmosphere is electric!",
  "Time to refresh and refocus!",
  "Plenty of positives to take away!",
  "Some tactical changes might be needed!",
  "What a roller coaster half!",
  "That half-time whistle came just in time!",
  "Players look exhausted already!",
  "Did you expect this scoreline?",
  "The next half could be even more dramatic!",
  "No one is leaving their seats!",
  "A chance to get some fluids, folks!",
  "Both teams have fight left in them!",
  "Missed chances might haunt them!",
  "Goals on display for sure!",
  "This is far from over!",
  "Can they maintain the momentum?",
  "Brace yourselves for the second half!",
  "Let's see what adjustments are made!",
  "Half-time stats will be interesting!",
  "They need to tighten that defense!",
  "We’ll see if they can keep it up!",
  "The fans want even more goals!",
  "We're in for a treat after half-time!",
  "That whistle will spark debate!",
  "They're heading off for a pep talk!",
  "End-to-end action—love it!",
  "Coach has to rally the troops!",
  "Expect changes on the restart!",
  "They might need fresh legs soon!",
  "An enthralling first half indeed!",
  "Will the second half live up to this?",
  "No shortage of talking points here!",
  "What drama in just 45 minutes!",
  "Hold tight for an epic second half!",
  "That was just the appetizer, folks!"
];

// Helper to get event type from commentary text
function getEventType(text) {
  const t = text.toLowerCase();
  if (t.includes("goal")) return "goal";
  if (t.includes("penalty")) return "penalty";
  if (t.includes("yellow card") || t.includes("bad challenge")) return "yellowCard";
  if (t.includes("half time")) return "halfTime";
  return "commentary";
}

function getRandomArrayItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Handle random chat messages and emoji after an event triggers
function simulateUserActivity(eventType) {
  // Number of random user chat messages to simulate
  const chatCount = Math.floor(Math.random() * 5) + 1; // 1-5 messages

  // Pick the chat array based on event type
  let chatArray;
  switch (eventType) {
    case "goal": chatArray = goalMessages; break;
    case "penalty": chatArray = penaltyMessages; break;
    case "yellowCard": chatArray = yellowCardMessages; break;
    case "halfTime": chatArray = halfTimeMessages; break;
    default: chatArray = commentaryMessages; break;
  }

  for (let i = 0; i < chatCount; i++) {
    const randomDelay = Math.floor(Math.random() * 3000) + 500; // 500-3500 ms
    setTimeout(() => {
      const user = getRandomArrayItem(botUsers);
      const chatMsg = getRandomArrayItem(chatArray);
      console.log(`[CHAT] ${user} says: "${chatMsg}"`);
      // Also random emoji reaction
      const maybeEmoji = Math.random() > 0.5 ? getRandomArrayItem(emojiReactions) : null;
      if (maybeEmoji) {
        console.log(`[EMOJI] ${user} reacts with: ${maybeEmoji}`);
      }
    }, randomDelay);
  }
}

let currentTimeMs = 0;

// Sort the script just in case (it looks sorted but let's be sure)
matchScript.sort((a, b) => a.timeSinceVideoStartedInMs - b.timeSinceVideoStartedInMs);

let eventIndex = 0;
const totalDuration = matchScript[matchScript.length - 1].timeSinceVideoStartedInMs;

// Main loop runs every second
setInterval(() => {
  currentTimeMs += 1000;

  // Publish video time for front-end to sync
  pubnub.publish({
    channel: "video-sync",
    message: { timeSinceVideoMs: currentTimeMs }
  })
  .then(() => {
    console.log(`[VIDEO] Published currentTime: ${currentTimeMs} ms`);
  })
  .catch((err) => {
    console.log("[VIDEO] Publish error:", err);
  });

  // Trigger any events that match or are overdue
  while (eventIndex < matchScript.length &&
         matchScript[eventIndex].timeSinceVideoStartedInMs <= currentTimeMs) {

    const evt = matchScript[eventIndex];
    const { channel, data } = evt.action;
    console.log(`[EVENT] Time ${evt.timeSinceVideoStartedInMs} ms => channel: ${channel}, data:`, data);

    // Determine event type from commentary text if available
    const commentaryText = data?.text || "";
    const eventType = getEventType(commentaryText);
    simulateUserActivity(eventType);

    eventIndex++;
  }

  // If we've reached the end of the timeline, reset
  if (currentTimeMs > totalDuration) {
    console.log("[VIDEO] Reached end of timeline, restarting...");
    // Reset
    currentTimeMs = 0;
    eventIndex = 0;
  }
}, 1000);

console.log("Server is running...");
