const fs = require("fs");
const PubNub = require("pubnub");
const gameCommentary = require("./game-data/commentary.js");
const gameStats = require("./game-data/stats.js");
const gamePolls = require("./game-data/polls.js");
const gameReactions = require("./game-data/reactions.js");
const gameChat = require("./game-data/chat.js");
const onDemandFanExcitement = require("./on-demand/fan-excitement.js");
const onDemandFanFrustration = require("./on-demand/fan-frustration.js");
const illuminatePolls = require("./illuminate/illuminate-polls.js");

//  Using my testing keyset
const pubnub = new PubNub({
  publishKey: "pub-c-787fb20a-4d32-42f5-aa55-f990979f5a0a",
  subscribeKey: "sub-c-f19c6fb1-c3a7-4a3b-bfaa-d424634e59e7",
  userId: "event-generator",
});

//  THIS FILE IS FOR TEST PURPOSES ONLY

//  START VIDEO AND PROVIDE STATUS
/*
(async function processEvents() {
  const videoDurationInMs = 10000
  //const videoDurationInMs = 1200000
  await publishPubNubMessage("game.client-video-control", {
    type: "START_STREAM",
    params: {},
  });
  let videoHead = 0;
  while (videoHead <= videoDurationInMs) {
    const pnMessage = {
      type: "STATUS",
      params: {
        playbackTime: videoHead,
        videoStarted: videoHead == 0,
        videoEnded: videoHead == videoDurationInMs,
      },
    }
    console.log(pnMessage)
    await publishPubNubMessage("game.client-video-control", pnMessage);
    videoHead += 500;
    //  Sleep - THIS WILL DRIFT - THIS IS TEST CODE ONLY
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
})();
*/

//  ILLUMINATE: POLLS

(async function processEvents() {
  for (const timedEvent of illuminatePolls.angry) {
    await publishPubNubMessage(
      timedEvent.action.channel,
      timedEvent.action.data
    );
    //  Sleep
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
  for (const timedEvent of illuminatePolls.cheer) {
    await publishPubNubMessage(
      timedEvent.action.channel,
      timedEvent.action.data
    );
    //  Sleep
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
})();

//  ON DEMAND: FAN EXCITEMENT
/*
(async function processEvents() {
    for (const timedEvent of onDemandFanExcitement.fanExcitement) {

    if (timedEvent.repeat && timedEvent.repeat > 0) {
      for (let i = 0; i < timedEvent.repeat; i++) {
      await publishPubNubMessage(
        timedEvent.action.channel,
        timedEvent.action.data
      );
      // Sleep between repeats
      await new Promise((resolve) => setTimeout(resolve, 100));
      }
    } else {
      await publishPubNubMessage(
      timedEvent.action.channel,
      timedEvent.action.data
      );
    }
    //  Sleep
    await new Promise((resolve) => setTimeout(resolve, 100));
    }
  })();
*/

//  ON DEMAND: FAN FRUSTRATION
/*
(async function processEvents() {
    for (const timedEvent of onDemandFanFrustration.fanFrustration) {

    if (timedEvent.repeat && timedEvent.repeat > 0) {
      for (let i = 0; i < timedEvent.repeat; i++) {
      await publishPubNubMessage(
        timedEvent.action.channel,
        timedEvent.action.data
      );
      // Sleep between repeats
      await new Promise((resolve) => setTimeout(resolve, 100));
      }
    } else {
      await publishPubNubMessage(
      timedEvent.action.channel,
      timedEvent.action.data
      );
    }
    //  Sleep
    await new Promise((resolve) => setTimeout(resolve, 100));
    }
  })();
*/

//  GAME DATA: CHAT
/*
(async function processEvents() {
  for (const timedEvent of gameChat.chat) {
    await publishPubNubMessage(
      timedEvent.action.channel,
      timedEvent.action.data
    );
    //  Sleep
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
})();
*/

//  GAME DATA: REACTIONS
/*
(async function processEvents() {

  for (const timedEvent of gameReactions.reactions) {

    if (timedEvent.repeat && timedEvent.repeat > 0) {
      for (let i = 0; i < timedEvent.repeat; i++) {
      await publishPubNubMessage(
        timedEvent.action.channel,
        timedEvent.action.data
      );
      // Sleep between repeats
      await new Promise((resolve) => setTimeout(resolve, 100));
      }
    } else {
      await publishPubNubMessage(
      timedEvent.action.channel,
      timedEvent.action.data
      );
    }
    //  Sleep
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
})();
*/

//  GAME DATA: POLLS
/*
(async function processEvents() {
    for (const timedEvent of gamePolls.polls) {
      await publishPubNubMessage(
        timedEvent.action.channel,
        timedEvent.action.data
      );
      //  Sleep
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  })();
*/

//  GAME DATA: STATS
/*
(async function processEvents() {
  for (const timedEvent of gameStats.stats) {
    await publishPubNubMessage(
      timedEvent.action.channel,
      timedEvent.action.data
    );
    //  Sleep
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
})();
*/

//  GAME DATA: COMMENTARY
/*
(async function processEvents() {
    for (const timedEvent of gameCommentary.commentary) {
      await publishPubNubMessage(
        timedEvent.action.channel,
        timedEvent.action.data
      );
      //  Sleep
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  })();
*/

async function publishPubNubMessage(channel, payload, persist = false) {
  await pubnub.publish({
    channel: channel,
    message: payload,
    storeInHistory: persist,
  });
}
