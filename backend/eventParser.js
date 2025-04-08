const PubNub = require('pubnub')
const game = require('./game-data.js')
//  Using my testing keyset
const pubnub = new PubNub({
    publishKey: "pub-c-787fb20a-4d32-42f5-aa55-f990979f5a0a",
    subscribeKey: "sub-c-f19c6fb1-c3a7-4a3b-bfaa-d424634e59e7",
    userId: "event-generator",
  });
  

  //console.log(game.matchScript)

(async function processEvents() {
    for (const timedEvent of game.matchScript) {
        console.log(timedEvent.action);
        await publishPubNubMessage(timedEvent.action.channel, timedEvent.action.data);
        //  Sleep
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
})();

async function publishPubNubMessage(channel, payload, persist = false)
{
    await pubnub.publish({channel: channel, message: payload, storeInHistory: persist})

}