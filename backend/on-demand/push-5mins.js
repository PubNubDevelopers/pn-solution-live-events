exports.fiveMinutesRemaining = [
  {
    delayOffsetInMs: 0,
    persistInHistory: false,
    action: {
      channel: "game.push-sales", //  Only the sales-led demo supports this push message
      data: {
        text: 'PubNub Push Notification',
        pn_fcm: {
          data: {
            title: '5 Mins Left',
            body: "It's nearly all over for Southampton"
          }
        }
      },
    },
  },
];
