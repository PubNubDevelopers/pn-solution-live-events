//  Goals happen at the following timestamps:
//  Goal 1 at 48000   (0m 48s) by Joël Piroe (Leeds United)
//  Goal 2 at 159000  (2m 39s) by Georginio Rutter (Leeds United)
//  Goal 3 at 203000  (3m 23s) by Joël Piroe (Leeds United)
//  Goal 4 at 317000  (5m 17s) by James Ward-Prowse (Soton FC)
//  Goal 5 at 679000  (11m 19s) by Daniel James (Leeds United)
//  Goal 6 at 920000  (15m 20s) by Joël Piroe (Leeds United)
//  Goal 7 at 1156000 (19m 16s) by Sékou Mara (Soton FC)
//  Yellow card at 117000  ( 1m 57s) to Sekou Mara (Soton FC)
//  Yellow card at 270000  ( 4m 30s) to Pascal Struijk (Leeds)
//  Yellow card at 492000  ( 8m 12s) to Joël Piroe (Leeds United)
//  Yellow card at 637000  (10m 39s) to Ethan Ampadu (Leeds)
//  Yellow card at 827000  (13m 47s) to Adam Armstrong (Soton FC)
//  Red    card at 964500  (16m 04s) to Joe Rodon (Leeds United)
//  Yellow card at 1053500 (17m 33s) to Ethan Ampadu (Leeds) (his second, resulting in a red)

//  Game ends at 1200000 (20m)

//  Illuminate actions get triggered by 10 or more cheer emoji, (other emoji are higher)

exports.reactions = [
  //  Goal 1
  {
    timeSinceVideoStartedInMs: 48000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `👏`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 48000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `🔥`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 48000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `🎉`, type: "reaction" },
    },
    repeat: 4,
  },
  //  Yellow card 1
  {
    timeSinceVideoStartedInMs: 117000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😢`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 117000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😡`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 117000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😮`, type: "reaction" },
    },
    repeat: 4,
  },
  //  Goal 2
  {
    timeSinceVideoStartedInMs: 159000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `👏`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 159000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `🔥`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 159000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `🎉`, type: "reaction" },
    },
    repeat: 4,
  },
  //  Goal 3
  {
    timeSinceVideoStartedInMs: 203000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `👏`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 203000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `🔥`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 203000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `🎉`, type: "reaction" },
    },
    repeat: 4,
  },
  //  Yellow card 2
  {
    timeSinceVideoStartedInMs: 270000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😢`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 270000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😡`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 270000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😮`, type: "reaction" },
    },
    repeat: 4,
  },
  //  Goal 4
  {
    timeSinceVideoStartedInMs: 317000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `👏`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 317000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `🔥`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 317000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `🎉`, type: "reaction" },
    },
    repeat: 4,
  },
  //  Yellow card 3
  {
    timeSinceVideoStartedInMs: 492000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😢`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 492000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😡`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 492000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😮`, type: "reaction" },
    },
    repeat: 4,
  }, //  Yellow card 4
  {
    timeSinceVideoStartedInMs: 637000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😢`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 637000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😡`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 637000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😮`, type: "reaction" },
    },
    repeat: 4,
  },
  //  Goal 5
  {
    timeSinceVideoStartedInMs: 679000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `👏`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 679000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `🔥`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 679000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `🎉`, type: "reaction" },
    },
    repeat: 4,
  },
  //  Yellow card 5
  {
    timeSinceVideoStartedInMs: 827000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😢`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 827000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😡`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 827000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😮`, type: "reaction" },
    },
    repeat: 4,
  },
  //  Goal 6
  {
    timeSinceVideoStartedInMs: 920000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `👏`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 920000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `🔥`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 920000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `🎉`, type: "reaction" },
    },
    repeat: 4,
  },
  //  Red card 1
  {
    timeSinceVideoStartedInMs: 964500,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😢`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 964500,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😡`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 964500,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😮`, type: "reaction" },
    },
    repeat: 4,
  },
  //  Yellow card 6 / Red card 2
  {
    timeSinceVideoStartedInMs: 1053500,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😢`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 1053500,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😡`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 1053500,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `😮`, type: "reaction" },
    },
    repeat: 4,
  },
  //  Goal 7
  {
    timeSinceVideoStartedInMs: 1156000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `👏`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 1156000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `🔥`, type: "reaction" },
    },
    repeat: 4,
  },
  {
    timeSinceVideoStartedInMs: 1156000,
    persistInHistory: false,
    action: {
      channel: "game.stream-reactions",
      data: { text: `🎉`, type: "reaction" },
    },
    repeat: 4,
  },
];
