//  Goals happen at the following timestamps:
//  Goal 1 at 48000   (0m 48s) by Joël Piroe (Leeds Utd)
//  Goal 2 at 159000  (2m 39s) by Georginio Rutter (Leeds Utd)
//  Goal 3 at 203000  (3m 23s) by Joël Piroe (Leeds Utd)
//  Goal 4 at 317000  (5m 17s) by James Ward-Prowse (Soton FC)
//  Goal 5 at 679000  (11m 19s) by Daniel James (Leeds Utd)
//  Goal 6 at 920000  (15m 20s) by Joël Piroe (Leeds Utd)
//  Goal 7 at 1156000 (19m 16s) by Sékou Mara (Soton FC)
//  Yellow card at 270000  ( 4m 30s) to Pascal Struijk (Leeds)
//  Yellow card at 492000  ( 8m 12s) to Joël Piroe (Leeds Utd)
//  Yellow card at 637000  (10m 39s) to Ethan Ampadu (Leeds)
//  Yellow card at 827000  (13m 47s) to Adam Armstrong (Soton FC)
//  Red    card at 968500  (16m 08s) to Joe Rodon (Leeds Utd)
//  Yellow card at 1053500 (17m 33s) to Ethan Ampadu (Leeds) (his second, resulting in a red)

//  Game ends at 1200000 (20m)

//  TODO: THIS OBJECT ARRAY HAS NOT BEEN TESTED AND NEEDS ADDITIONAL OBJECTS

exports.chat = [
  {
    timeSinceVideoStartedInMs: 2100,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: { user: `bot-01`, text: "Let's go!!!" },
    },
  },
  //  Goal 1
  {
    timeSinceVideoStartedInMs: 48000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: { user: `bot-02`, text: "Yes!  Well done Piroe" },
    },
  },
  //  Goal 2
  {
    timeSinceVideoStartedInMs: 159000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: { user: `bot-03`, text: "That's another one for Leeds" },
    },
  },
  //  Goal 3
  {
    timeSinceVideoStartedInMs: 203000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: `bot-04`,
        text: "And a third goal for Leeds!  It's a walkover",
      },
    },
  },
  //  Yellow card 1
  {
    timeSinceVideoStartedInMs: 270000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: { user: `bot-09`, text: "Yes, he deserved that yellow card" },
    },
  },
  //  Goal 4
  {
    timeSinceVideoStartedInMs: 317000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: `bot-05`,
        text: "Finally, Southampton have a score on the board",
      },
    },
  },
  //  Yellow card 2
  {
    timeSinceVideoStartedInMs: 492000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: { user: `bot-10`, text: "Unfair!  No way was that a yellow card" },
    },
  },
  //  Yellow card 3
  {
    timeSinceVideoStartedInMs: 637000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: `bot-11`,
        text: "That's mad, how did the Ref think that's worth a yellow card?",
      },
    },
  },
  //  Goal 5
  {
    timeSinceVideoStartedInMs: 679000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: `bot-06`,
        text: "Goal 4 for Leeds.  This just isn't funny anymore",
      },
    },
  },
  //  Yellow card 4
  {
    timeSinceVideoStartedInMs: 827000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: { user: `bot-12`, text: "To be fair, that was pretty blatant" },
    },
  },
  //  Goal 6
  {
    timeSinceVideoStartedInMs: 920000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: `bot-07`,
        text: "That's the Hat Trick for Piroe and fifth goal for Leeds!",
      },
    },
  },
  //  Red card 1
  {
    timeSinceVideoStartedInMs: 968500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: { user: `bot-13`, text: "You're not singing anymore!" },
    },
  },
  //  Yellow card 5 / red card 2
  {
    timeSinceVideoStartedInMs: 1053500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: { user: `bot-14`, text: "Bye bye now Ampadu" },
    },
  },
  //  Goal 7
  {
    timeSinceVideoStartedInMs: 1156000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: `bot-08`,
        text: "At least Southampton clawed something back with a second goal in injury time",
      },
    },
  },
];
