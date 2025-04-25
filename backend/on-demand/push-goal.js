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
            title: 'SOU 0 - 2 LEE',
            body: 'Leeds Score!'
          },
          android: {
            priority: 'high',
          }
        }
      },
    },
  },
];
