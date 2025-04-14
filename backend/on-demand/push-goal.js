exports.goalScored = [
  {
    delayOffsetInMs: 0,
    persistInHistory: false,
    action: {
      channel: "game.push-sales",   //  Only the sales-led demo supports this push message
      data: {
        text: 'PubNub Push Notification',
        pn_fcm: {
          data: {
            title: 'SOU 1 - 3 LEE',
            body: 'Southampton Score!'
          }
        }
      },
    },
  },
];
