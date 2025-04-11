//  Goals happen at the following timestamps:
//  Goal 1 at 48000   (0m 48s) by Joël Piroe (Leeds Utd)
//  Goal 2 at 159000  (2m 39s) by Georginio Rutter (Leeds Utd)
//  Goal 3 at 203000  (3m 23s) by Joël Piroe (Leeds Utd)
//  Goal 4 at 317000  (5m 17s) by James Ward-Prowse (Soton FC)
//  Goal 5 at 679000  (11m 19s) by Daniel James (Leeds Utd)
//  Goal 6 at 920000  (15m 20s) by Joël Piroe (Leeds Utd)
//  Goal 7 at 1156000 (19m 16s) by Sékou Mara (Soton FC)
//  Yellow card at 117000  ( 1m 57s) to Sekou Mara (Soton FC)
//  Yellow card at 270000  ( 4m 30s) to Pascal Struijk (Leeds)
//  Yellow card at 492000  ( 8m 12s) to Joël Piroe (Leeds Utd)
//  Yellow card at 637000  (10m 39s) to Ethan Ampadu (Leeds)
//  Yellow card at 827000  (13m 47s) to Adam Armstrong (Soton FC)
//  Red    card at 964500  (16m 04s) to Joe Rodon (Leeds Utd)
//  Yellow card at 1053500 (17m 33s) to Ethan Ampadu (Leeds) (his second, resulting in a red)

//  First kick at 35000 (35s)
//  Goal 1 48000 until 65000
//  Regular play from 65000 to 117000
//  First yellow card 117000 to 133000
//  Regular play from 133000 to 159000
//  Goal 2 from 159000 to 183000
//  Regular play from 183000 to 203000
//  Goal 3 from 203000 to 217000
//  Regular play from 217000 to 263000
//  Discussion with Ref from 263000 to 268000
//  Penalty (Ward-Prowse) from 268000 to 280000 (Penalty Missed)
  //  Yellow card 2 happens as part of the above discussion
//  Regular play from 280000 to 317000
//  Goal 4 from 317000 to 339000
//  Regular play from 339000 to 413000
//  Corner kick (Ward-Prowse) from 413000 to 425000
//  Regular play from 425000 to 492000
//  Yellow card 3 from 492000 to 508000
//  Regular play from 508000 to 542000
//  Play stopped and the goal keeper kicked it from 542000 to 555000
//  Regular play from 555000 to 564000
//  Half time from 564000 to 598000
//  Regular play from 598000 to 613000
//  Throw in from 613000 to 618000
//  Regular play from 618000 to 637000
//  Yellow card 4 from 637000 to 650000
//  Regular play from 650000 to 679000
//  Goal 5 from 679000 to 702000
//  Regular play from 702000 to  827000
//  Yellow card 5 from 827000 to 840000
//  Setting up and taking penalty from 840000 to 874000 (taken by Struijk and missed)
//  Regular play from 874000 to 920000
//  Goal 6 from 920000 to 936000
//  Regular play from 936000 to 964500
//  Red card from 964500 to 984000
//  Setting up and taking penalty from 984000 to 1011000 (taken by Ward-Prowse and missed)
//  Regular play from 1011000 to 1053500
//  Yellow card from 1053500 to 1081000
//  Regular play from 1081000 to 1156000
//  Goal 7 from 1156000 to 1178000
//  Regular play from 1178000 to 1200000
//  Full time at 1200000
//  Video ends at 1228000


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
    timeSinceVideoStartedInMs: 964500,
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
