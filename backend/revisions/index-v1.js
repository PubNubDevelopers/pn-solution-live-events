const express = require('express');
const bodyParser = require('body-parser');
const PubNub = require('pubnub');

// ---------------------------------------------------------------------------
// 1. Setup: PubNub Keys / Configuration
//    (Replace with your actual keys: can be the "Testing" or "Self-Led" 
//     or "Sales-Led" keyset as needed.)
// ---------------------------------------------------------------------------
const pubnub = new PubNub({
  publishKey: 'pub-c-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  subscribeKey: 'sub-c-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  uuid: 'server-01', // some unique string to identify this Node server
});

// ---------------------------------------------------------------------------
// 2. Define the timeline of events.  
//    (time in seconds or ms, whichever you prefer; below uses seconds for brevity)
// ---------------------------------------------------------------------------
const timeline = [
  { time:   0.000, event: 'Kick off',              },
  { time:  15.000, event: 'Fan excitement',        },
  { time:  30.000, event: 'Goal',                  },
  { time:  60.000, event: 'Fan frustration'        },
  { time: 120.000, event: 'Fan excitement',        },
  { time: 180.000, event: 'Goal',                  },
  { time: 200.000, event: 'Fan excitement',        },
  { time: 280.000, event: 'Five minutes remaining' },
  { time: 295.000, event: 'Fan frustration',       },
  { time: 300.000, event: 'End match',             },
];

// The total duration (in seconds) of the “video” you want to simulate
const VIDEO_DURATION = 300; // 5 minutes

// ---------------------------------------------------------------------------
// 3. Maintain an internal “video time” (in seconds, for example).
//    We also keep track of which timeline entries have been triggered.
// ---------------------------------------------------------------------------
let currentVideoTime = 0;         // current position in the video
let lastUpdateTime = Date.now();  // for delta calculations
let triggeredEventIndices = new Set(); // track which timeline indexes have triggered

// For demonstration, we’ll run a loop to simulate playback
const TICK_INTERVAL_MS = 500; // check events every 500ms

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

// Publish a “video status” message so clients can sync/seek the video
function publishVideoStatus({ started = false, ended = false } = {}) {
  const statusMessage = {
    type: 'STATUS',
    params: {
      playbackTime: currentVideoTime * 1000, // in ms
      videoStarted: started,
      videoEnded: ended,
    },
  };
  pubnub.publish({
    channel: 'game.video-control', // or whichever channel you use for control
    message: statusMessage,
  });
}

// Publish an example message to a given channel
// This generic function is meant to illustrate how you might handle 
// different channels and data shapes. 
async function publishAction(channel, data, persistInHistory = false) {
  try {
    await pubnub.publish({
      channel,
      message: data,
      storeInHistory: persistInHistory, // optional, default is true
    });
    console.log(`Published to ${channel}:`, data);
  } catch (err) {
    console.error('Error publishing message:', err);
  }
}

// Send multiple “reaction” messages (e.g. 20 times for fan excitement)
function sendFanExcitementReactions() {
  const reactionArray = [];
  
  // Just an example: 15 “🎉” + 5 “🙌”
  for (let i = 0; i < 15; i++) {
    reactionArray.push({ text: '🎉', type: 'reaction' });
  }
  for (let i = 0; i < 5; i++) {
    reactionArray.push({ text: '🙌', type: 'reaction' });
  }

  // Publish each reaction individually or in bulk:
  reactionArray.forEach(async (item) => {
    await publishAction('game.stream-reactions', item);
  });
}

// Send multiple “frustration” reactions (e.g., 25 times “😡”)
function sendFanFrustrationReactions() {
  for (let i = 0; i < 25; i++) {
    publishAction('game.stream-reactions', { text: '😡', type: 'reaction' });
  }
}

// Some example chat messages
function sendBotChatMessage(text) {
  const chatMsg = {
    user: 'bot-01',
    text: text,
  };
  publishAction('game.chat', chatMsg);
}

function sendTagUserChatMessage(currentUserId) {
  // This message is “specialTaggedMessage” => 
  // requires the client to interpret it as “Hello @currentUser”
  const chatMsg = {
    user: 'bot-01',
    specialTaggedMessage: true,
    taggedUserId: currentUserId,
  };
  publishAction('game.chat', chatMsg);
}

// Insert your own logic for ‘Goal’, ‘Five minutes remaining’, etc.
// Example: goal updates match stats
function sendGoalEvents() {
  // chat mention
  sendBotChatMessage('GOAL!!!');
  
  // match stats update
  const matchStatsMsg = {
    statBox1: {
      info: [
        { stat: 'Shots on target up by 1' },
      ],
    },
  };
  publishAction('game.match-stats', matchStatsMsg);

  // maybe a “reaction” too
  publishAction('game.stream-reactions', { text: '⚽️', type: 'reaction' });
}

// “videoStarted” event
function onVideoStarted() {
  console.log('Video started from 0');
  publishVideoStatus({ started: true });
}

// “videoEnded” event
function onVideoEnded() {
  console.log('Video ended');
  publishVideoStatus({ ended: true });
}

// ---------------------------------------------------------------------------
// 4. Main Playback Loop
//    Every 500ms, we’ll check how much time has passed, advance currentVideoTime
//    accordingly, and trigger the relevant timeline events if we haven’t yet.
// ---------------------------------------------------------------------------
setInterval(() => {
  // Calculate how many seconds have elapsed since last update
  const now = Date.now();
  const delta = (now - lastUpdateTime) / 1000; // convert ms to s
  lastUpdateTime = now;

  currentVideoTime += delta;

  // If we exceed VIDEO_DURATION, loop it
  if (currentVideoTime >= VIDEO_DURATION) {
    // Mark that we have ended
    onVideoEnded();

    // Reset for a new loop
    currentVideoTime = 0;
    triggeredEventIndices.clear();
    onVideoStarted();
  }

  // Check timeline events
  timeline.forEach((entry, idx) => {
    // Has it not been triggered yet, and time is reached?
    if (!triggeredEventIndices.has(idx) && currentVideoTime >= entry.time) {
      triggeredEventIndices.add(idx);

      console.log(`Triggering event: ${entry.event} at t=${entry.time}s`);

      // Dispatch appropriate messages based on event
      switch (entry.event) {
        case 'Kick off':
          onVideoStarted();
          // Possibly send chat message
          sendBotChatMessage('And we are LIVE - Kick off!');
          break;

        case 'Fan excitement':
          sendFanExcitementReactions();
          break;

        case 'Goal':
          sendGoalEvents();
          break;

        case 'Fan frustration':
          sendFanFrustrationReactions();
          break;

        case 'Five minutes remaining':
          // Could do something else
          sendBotChatMessage(`Only 5 minutes left!`);
          break;

        case 'End match':
          onVideoEnded();
          // Then loop might begin again
          break;

        default:
          break;
      }
    }
  });

  // Periodically publish a “status” message so new joiners can sync
  // (You could do it every iteration, or e.g., only every 2 seconds)
  publishVideoStatus();
}, TICK_INTERVAL_MS);

// ---------------------------------------------------------------------------
// 5. Respond to requests initiated by the ‘Data Controls’ panel (sales-led demo)
//    We’ll define some simple HTTP endpoints that you can call from a 
//    “Data Controls” UI to manipulate playback or trigger extra messages.
// ---------------------------------------------------------------------------
const app = express();
app.use(bodyParser.json());

// Kick off: explicitly start the stream from 0
app.post('/controls/kickoff', (req, res) => {
  currentVideoTime = 0;
  triggeredEventIndices.clear();
  onVideoStarted();
  res.json({ status: 'OK', message: 'Video kicked off at 0' });
});

// End match
app.post('/controls/end-match', (req, res) => {
  currentVideoTime = VIDEO_DURATION;
  // Let the loop’s next tick handle calling onVideoEnded + loop
  res.json({ status: 'OK', message: 'Set video to end' });
});

// Skip to a certain time (in seconds or ms if you prefer)
app.post('/controls/seek', (req, res) => {
  const seekTo = req.body.playbackTime; // in ms or s
  // For example, consider "playbackTime" coming in as ms
  const newTimeInSeconds = seekTo / 1000;
  currentVideoTime = Math.min(newTimeInSeconds, VIDEO_DURATION);
  // Re-check triggered events
  triggeredEventIndices.clear();
  timeline.forEach((entry, idx) => {
    if (currentVideoTime >= entry.time) {
      triggeredEventIndices.add(idx);
    }
  });

  // Publish a “seek” message so clients can sync
  pubnub.publish({
    channel: 'game.video-control',
    message: {
      type: 'SEEK',
      params: {
        playbackTime: seekTo,
      },
    },
  });

  res.json({ status: 'OK', message: `Seeked to ${seekTo} ms` });
});

// For “Fan excitement”, “Fan frustration”, “Tag user in message”, etc. 
// we can define custom endpoints. Below are simple examples:

app.post('/controls/fan-excitement', (req, res) => {
  sendFanExcitementReactions();
  res.json({ status: 'OK', message: 'Sent fan excitement' });
});

app.post('/controls/fan-frustration', (req, res) => {
  sendFanFrustrationReactions();
  res.json({ status: 'OK', message: 'Sent fan frustration' });
});

app.post('/controls/tag-user', (req, res) => {
  // Suppose the “Data Controls” panel includes a “taggedUserId” 
  // that indicates who to mention in Chat. 
  const taggedUserId = req.body.taggedUserId || 'unknown-user';
  sendTagUserChatMessage(taggedUserId);
  res.json({ status: 'OK', message: `Tagged user ID ${taggedUserId}` });
});

// Goal skip scenario (ex: jump to a known “goal” time)
app.post('/controls/goal', (req, res) => {
  const goalSeekTime = req.body.playbackTime || 30000; // default 30s
  const newTimeInSeconds = goalSeekTime / 1000;
  currentVideoTime = Math.min(newTimeInSeconds, VIDEO_DURATION);

  triggeredEventIndices.clear();
  timeline.forEach((entry, idx) => {
    if (currentVideoTime >= entry.time) {
      triggeredEventIndices.add(idx);
    }
  });

  pubnub.publish({
    channel: 'game.video-control',
    message: {
      type: 'SEEK',
      params: {
        playbackTime: goalSeekTime,
      },
    },
  });

  res.json({ status: 'OK', message: `Video jumped to goal at ${goalSeekTime} ms` });
});

// ---------------------------------------------------------------------------
// 6. Start the HTTP server
// ---------------------------------------------------------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});