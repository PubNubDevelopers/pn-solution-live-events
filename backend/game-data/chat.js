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

//  Pre-game from 0 until 35000
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

exports.chat = [
  {
    timeSinceVideoStartedInMs: 2000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Let's make history!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 2100,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Let's go!!!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 3000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "The atmosphere is electric!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 4000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Let's make some noise!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 5000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "Let's get the win!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 6000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Let's go, team!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 7000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "Let's crush them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 8000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "Let's hear it for the team!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 9000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Let's crush them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 10000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "We believe in you!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 11000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "We got this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 12000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Come on, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 13000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "The energy is unreal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 14000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "This is our year!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 15000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "All the way to the top!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 16000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "The atmosphere is electric!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 17000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Show them what we're made of!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 18000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "The crowd is ready!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 19000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Let's make history!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 20000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "We believe in you!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 21000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "Let's go, team!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 22000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "We won't back down!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 23000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "Come on, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 24000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "The crowd is ready!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 25000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "Let's make history!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 26000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "The energy is unreal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 27000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Come on, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 28000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Make us proud!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 29000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "Let's make some noise!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 30000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "All the way to the top!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 31000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Bring it home!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 32000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "This is our house!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 33000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "All the way to the top!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 34000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "All the way to the top!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 35000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "Come on, we need a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 36000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Don't lose focus!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 37000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "What a cross!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 38000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "What a pass!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 39000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "What a cross!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 40000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 41000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Come on, press them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 42000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "What a cross!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 43000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "Track back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 44000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Watch the counter!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 45000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Stay onside!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 46000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Hold the line!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 47000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 48000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "That's the winning spirit!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 48500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "We're making history!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 49000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "We're going all the way!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 49500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Let's go, team!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 50000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Keep the momentum!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 50500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "Keep it coming!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 51000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "We're the pride of the league!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 51500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "We're unstoppable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 52000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "We're not done yet!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 52500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "That's the magic we needed!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 53000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "Yes! Get in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 53500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "We're dominating!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 54000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "What a moment!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 54500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "We're winning this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 55000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "That's the winning spirit!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 55500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "Pure class!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 56000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "We're unstoppable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 56500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "That's the turning point!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 57000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "Top corner magic!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 57500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Ole, ole, ole!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 58000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Come on, let's keep it up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 58500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "That's how it's done!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 59000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "This is our game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 59500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "We're going all the way!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 60000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "We're taking the lead!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 60500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Bring it home!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 61000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "We're unstoppable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 61500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Unbelievable strike!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 62000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "This is our house!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 62500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Yes! Get in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 63000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Unbelievable strike!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 63500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "What a finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 64000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "We're winning this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 64500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "That's why we love this team!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 65000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "That's the winning spirit!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 65000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 66000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 68000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 69000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Stay compact!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 70000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "What a pass!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 71000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Don't lose focus!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 72000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Come on, we need more urgency!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 73000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Stay calm, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 74000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Come on, we need more urgency!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 75000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Watch the counter!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 76000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "Get it out of there!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 77000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Come on, show some fight!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 78000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "That's ours, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 79000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "What a tackle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 80000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 81000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Come on, we need more urgency!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 82000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "Stay compact!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 83000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "Mark your man!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 84000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Come on, we need a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 85000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Great save, keeper!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 86000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "That's ours, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 87000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Come on, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 88000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "Time-wasting already?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 89000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Stay calm, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 90000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "Shoot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 91000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "Come on, show some fight!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 92000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Come on, lads, keep pushing!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 93000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Cross it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 94000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "Mark your man!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 95000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Go on, take him on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 96000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 97000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Man on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 98000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "That's ours, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 99000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Pass it, pass it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 100000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "Keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 101000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Pass it, pass it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 102000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 103000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 104000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "Push up, push up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 105000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "That's ours, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 106000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Push up, push up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 107000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Don't lose focus!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 108000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "Keep possession!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 109000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Play it wide!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 110000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Get it out of there!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 111000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "Look for the overlap!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 112000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "That's a world-class finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 113000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "Go on, take him on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 114000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Come on, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 115000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Keep possession!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 116000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Blow the whistle, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 117000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "Get some glasses, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 117000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 117750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "What are you thinking, ref?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 118500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Let them play, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 119250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "He got the ball!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 120000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Are you blind, ref?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 120750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Let the game flow!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 121500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "Unbelievable decision!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 122250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "You're ruining the spectacle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 123000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Be consistent, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 123750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Unbelievable decision!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 124500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "You're having a laugh, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 125250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "He got the ball!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 126000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "You're too card-happy, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 126750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Let the game flow!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 127500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "That's not football!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 128250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "That's a terrible yellow!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 129000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "You're too card-happy, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 129750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Come on, ref, wake up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 130500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "You're ruining the game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 131250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "That's not fair!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 132000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "He got the ball!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 132750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "He barely touched him!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 133000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "That's ours, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 134000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "Cross it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 135000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 136000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Come on, we need a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 137000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Take the shot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 138000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 139000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "What a pass!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 140000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Unbelievable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 141000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Come on, we need a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 142000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Track back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 143000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Stay compact!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 144000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "Track back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 145000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Time-wasting already?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 146000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 147000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "That's ours, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 148000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "That's it, keep going!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 149000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "What a pass!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 150000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Get stuck in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 151000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 152000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Look for the overlap!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 153000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 154000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Come on, press them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 155000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "Shoot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 156000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Stay calm, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 157000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "Get it out of there!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 158000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Get stuck in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 159000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Let's go, team!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 159000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Defend, defend!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 159500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "We're the pride of the league!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 160000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Come on, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 160500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "Let's crush them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 161000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Bring it home!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 161500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "We're the champions!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 162000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "Keep it coming!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 162500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "We're dominating!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 163000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "What a strike!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 163500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "Let's crush them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 164000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Bring it home!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 164500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "We're winning this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 165000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Unbelievable strike!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 165500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "We're making history!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 166000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "What a finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 166500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "We're the pride of the league!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 167000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "That's how you do it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 167500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "That's why we're the best!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 168000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "What a screamer!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 168500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Beautiful finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 169000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "That's how it's done!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 169500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Back of the net!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 170000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "We're the pride of the league!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 170500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Keep it coming!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 171000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 171500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 172000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "We're unstoppable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 172500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Keep the momentum!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 173000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "That's the turning point!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 173500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "Let's make it two!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 174000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "One more, let's go!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 174500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "That's the spirit!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 175000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Let's hear it for the team!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 175500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "That's what I'm talking about!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 176000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "We're the champions!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 176500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Unbelievable strike!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 177000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Unstoppable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 177500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Unstoppable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 178000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "That's why we're the best!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 178500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "This is our game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 179000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "What a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 179500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "One more, let's go!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 180000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Beautiful finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 180500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "We're winning this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 181000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Back of the net!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 181500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "What a screamer!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 182000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "We're taking the lead!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 182500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "That's why we love this team!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 183000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "This is our game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 183000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Mark your man!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 184000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 185000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "That's our throw!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 186000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Hold the line!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 187000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "Push up, push up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 188000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 189000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "That's a world-class finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 190000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "Track back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 191000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Hold the line!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 192000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Keep it tight at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 193000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 194000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Push up, push up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 195000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Come on, we need a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 196000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Time-wasting already?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 197000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Pass it, pass it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 198000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Great save, keeper!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 199000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Get stuck in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 200000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Great save, keeper!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 201000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Come on, we need a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 202000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Track back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 203000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Stay onside!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 203000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "We're the pride of the league!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 203500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Pure class!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 204000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "What a strike!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 204500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "That's why we're here!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 205000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 205500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "We're making history!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 206000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Ole, ole, ole!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 206500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Let's hear it for the team!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 207000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "That's why we're here!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 207500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "We're on fire!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 208000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Let's go, team!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 208500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "That's the spirit!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 209000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "Come on, keep pushing!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 209500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "What a strike!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 210000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "We're going all the way!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 210500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "What a screamer!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 211000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "That's what we needed!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 211500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Keep it coming!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 212000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 212500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "Unstoppable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 213000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Let's keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 213500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "We're the pride of the league!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 214000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "Let's keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 214500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Yes! Get in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 215000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "That's what I'm talking about!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 215500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "This is our game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 216000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "We're winning this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 216500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "That's the winning spirit!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 217000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "That's what we needed!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 217000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Pass it, pass it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 218000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Spread the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 219000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 220000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "Come on, show some fight!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 221000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Watch the counter!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 222000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Come on, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 223000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 224000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 225000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "What a tackle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 226000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Man on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 227000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Unbelievable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 228000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Stay calm, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 229000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 230000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Don't lose focus!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 231000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Defend, defend!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 232000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Hold the line!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 233000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "That's ours, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 234000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Get stuck in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 235000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Stay calm, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 236000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 237000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Go on, take him on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 238000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Pass it, pass it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 239000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Man on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 240000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "What a cross!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 241000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Come on, lads, keep pushing!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 242000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 243000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "What a tackle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 244000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Cross it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 245000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Come on, lads, keep pushing!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 246000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Look for the overlap!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 247000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "That's our throw!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 248000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Come on, show some fight!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 249000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Track back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 250000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Great save, keeper!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 251000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Come on, we need a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 252000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "That's it, keep going!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 253000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Keep it tight at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 254000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Come on, we need a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 255000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Look for the overlap!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 256000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Track back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 257000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Go on, take him on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 258000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "What a pass!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 259000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Great save, keeper!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 260000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 261000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "Keep possession!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 262000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Spread the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 263000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "That's ours, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 263000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "You're killing the game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 264000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Get some glasses, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 265000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "What are you waiting for?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 266000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Come on, ref, make the call!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 267000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "You're losing control, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 268000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "We all saw it, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 268000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "You got this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 268500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "This is your chance!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 269000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Make it count!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 269500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Come on, you can do it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 270000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "Keeper, stand tall!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 270500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "This is your chance!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 271000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Come on, put it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 271500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Hit it hard!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 272000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Straight down the middle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 272500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Come on, stay calm!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 273000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "Top corner, let's go!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 273500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "Come on, stay calm!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 274000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "Come on, put it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 274500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Hit it hard!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 275000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "All eyes on you!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 275500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "No pressure!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 276000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "This is it, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 276500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Send the keeper the wrong way!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 277000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "Keeper, you're the hero!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 277500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "Come on, stay calm!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 278000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Take your time!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 278500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Don't overthink it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 279000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Come on, ref, hurry up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 279500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "We believe in you!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 280000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "Push up, push up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 280000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Don't miss this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 281000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "What a tackle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 282000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "Spread the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 283000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "That's a world-class finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 284000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Shoot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 285000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 286000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Get stuck in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 287000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Man on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 288000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 289000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Time-wasting already?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 290000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "What a pass!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 291000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "Come on, we need a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 292000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "Keep possession!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 293000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "That's our throw!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 294000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 295000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "What a cross!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 296000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Come on, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 297000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 298000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Keep possession!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 299000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Blow the whistle, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 300000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Shoot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 301000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Great save, keeper!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 302000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 303000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Come on, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 304000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 305000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 306000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "That's a world-class finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 307000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "What a tackle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 308000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Keep possession!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 309000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Shoot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 310000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "Get it out of there!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 311000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 312000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Hold the line!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 313000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "Look for the overlap!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 314000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "Come on, we need more urgency!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 315000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "Watch the counter!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 316000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "What a tackle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 317000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Come on, let's keep it up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 317000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Come on, we need more urgency!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 317500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "That's the magic we needed!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 318000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "We're unstoppable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 318500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "That's how it's done!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 319000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "We're unstoppable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 319500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "That's what we needed!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 320000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "Let's crush them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 320500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "Let's go, team!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 321000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "That's why we love this team!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 321500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "That's why we're the best!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 322000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Keep the momentum!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 322500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Let's go, team!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 323000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "That's the magic we needed!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 323500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "What a moment!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 324000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Let's make it two!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 324500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "Come on, let's keep it up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 325000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "That's the winning spirit!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 325500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "That's why we're here!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 326000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "We're the pride of the league!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 326500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "That's what we needed!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 327000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Keep it coming!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 327500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Come on, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 328000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Back of the net!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 328500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "Let's crush them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 329000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "That's the magic we needed!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 329500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Unstoppable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 330000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Pure class!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 330500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "This is our game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 331000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Come on, let's keep it up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 331500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "This is our game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 332000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "What a screamer!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 332500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Let's go, team!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 333000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "We're not done yet!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 333500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "Top corner magic!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 334000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Pure class!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 334500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "We're going all the way!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 335000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "That's the magic we needed!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 335500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "We're taking the lead!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 336000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Come on, keep pushing!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 336500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "We're on fire!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 337000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "That's the turning point!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 337500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "That's the turning point!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 338000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "We're not done yet!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 338500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Bring it home!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 339000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Unstoppable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 339000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 340000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Shoot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 341000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "That's ours, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 342000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "Get it out of there!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 343000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 344000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Play it wide!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 345000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Stay compact!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 346000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Stay onside!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 347000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "What a tackle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 348000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "That's ours, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 349000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 350000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Track back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 351000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 352000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 353000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "Push up, push up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 354000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Time-wasting already?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 355000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 356000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Shoot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 357000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 358000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Cross it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 359000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "Come on, we need more urgency!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 360000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Stay calm, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 361000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 362000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Push up, push up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 363000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 364000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 365000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Come on, show some fight!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 366000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Get it out of there!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 367000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Come on, we need more urgency!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 368000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "Go on, take him on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 369000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Shoot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 370000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 371000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "Pass it, pass it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 372000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 373000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "Defend, defend!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 374000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "Defend, defend!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 375000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Pass it, pass it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 376000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Come on, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 377000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 378000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "Unbelievable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 379000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "What a tackle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 380000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 381000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 382000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Come on, we need more urgency!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 383000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Great save, keeper!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 384000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Hold the line!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 385000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Watch the counter!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 386000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Push up, push up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 387000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 388000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 389000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Play it wide!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 390000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "Get stuck in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 391000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 392000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 393000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Play it wide!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 394000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Stay calm, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 395000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Come on, press them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 396000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Spread the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 397000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Look for the overlap!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 398000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 399000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 400000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Defend, defend!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 401000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 402000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "Come on, we need more urgency!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 403000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Great save, keeper!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 404000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Stay calm, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 405000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 406000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 407000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Pass it, pass it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 408000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Come on, lads, keep pushing!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 409000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Stay compact!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 410000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 411000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "Come on, we need a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 412000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Come on, press them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 413000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Come on, lads, rise up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 413000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "What a cross!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 413750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Near post, near post!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 414500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Whip it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 415250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Get it in the mixer!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 416000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Find the target!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 416750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "This is our chance!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 417500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "Attack the ball!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 418250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Come on, ref, keep it fair!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 419000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Let's go, team!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 419750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "Go for goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 420500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Come on, lads, rise up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 421250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Get it in the box!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 422000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Stay alert, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 422750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Get ready for the rebound!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 423500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Come on, keeper, claim it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 424250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "Make it dangerous!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 425000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "Come on, ref, keep it fair!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 425000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Get stuck in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 426000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "That's it, keep going!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 427000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "Pass it, pass it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 428000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 429000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "Watch the counter!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 430000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Come on, press them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 431000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 432000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Get stuck in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 433000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Keep it tight at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 434000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 435000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Get it out of there!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 436000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "That's ours, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 437000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 438000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Time-wasting already?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 439000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 440000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "That's it, keep going!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 441000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 442000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 443000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Man on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 444000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 445000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 446000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "What a cross!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 447000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Stay onside!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 448000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Unbelievable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 449000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Mark your man!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 450000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Take the shot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 451000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Come on, press them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 452000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "Great save, keeper!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 453000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 454000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Pass it, pass it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 455000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 456000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "Come on, press them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 457000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Stay calm, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 458000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Go on, take him on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 459000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "That's a world-class finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 460000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Great save, keeper!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 461000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "Keep possession!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 462000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Keep possession!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 463000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Hold the line!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 464000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 465000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 466000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Watch the counter!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 467000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "Get it out of there!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 468000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 469000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Unbelievable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 470000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "What a pass!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 471000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "Hold the line!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 472000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Watch the counter!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 473000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Keep possession!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 474000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Great save, keeper!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 475000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Push up, push up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 476000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Track back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 477000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Great save, keeper!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 478000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 479000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Look for the overlap!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 480000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Shoot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 481000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "Keep possession!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 482000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "Track back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 483000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Stay calm, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 484000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Spread the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 485000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Get stuck in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 486000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Look for the overlap!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 487000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 488000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "What a tackle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 489000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 490000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "Come on, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 491000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Come on, lads, keep pushing!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 492000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "That's our throw!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 492000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "You're ruining the match!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 492750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "Be consistent, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 493500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "What game are you watching, ref?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 494250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "That's not fair!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 495000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "How much are they paying you, ref?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 495750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "That's not how you ref a game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 496500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "That's a joke, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 497250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Let the game flow!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 498000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "That's not fair!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 498750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 499500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "You're too card-happy, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 500250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "That's a poor decision!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 501000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "You're killing the game, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 501750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "That's never a yellow!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 502500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "That's a bad call!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 503250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "How is that a yellow?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 504000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "That's embarrassing!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 504750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "You're losing control, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 505500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "What are you thinking, ref?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 506250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "That's embarrassing!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 507000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "You're ruining the spectacle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 507750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "You're ruining it for everyone!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 508000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "What a cross!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 509000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Defend, defend!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 510000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Man on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 511000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Come on, lads, keep pushing!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 512000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Come on, show some fight!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 513000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Stay calm, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 514000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 515000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Get stuck in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 516000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 517000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Cross it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 518000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Watch the counter!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 519000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 520000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Play it wide!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 521000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 522000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "Look for the overlap!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 523000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Come on, show some fight!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 524000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "Play it wide!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 525000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Stay compact!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 526000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 527000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Cross it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 528000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Get stuck in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 529000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 530000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Play it wide!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 531000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 532000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 533000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 534000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Go on, take him on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 535000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Get it out of there!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 536000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "Come on, press them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 537000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Push up, push up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 538000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Go on, take him on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 539000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "Watch the counter!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 540000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Great save, keeper!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 541000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Get it out of there!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 542000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Hit it hard!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 542000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 543000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "This is it, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 544000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "No pressure!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 545000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Don't overthink it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 546000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Top corner, let's go!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 547000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Come on, stay calm!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 548000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "All eyes on you!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 549000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "Don't overthink it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 550000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Come on, ref, hurry up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 551000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Come on, stay calm!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 552000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Make it count!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 553000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "You got this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 554000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Let's go, finish it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 555000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "You got this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 555000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 556000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Unbelievable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 557000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "That's ours, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 558000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Spread the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 559000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Come on, show some fight!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 560000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Shoot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 561000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Shoot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 562000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Stay calm, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 563000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "Unbelievable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 564000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "We need to step it up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 564000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Come on, lads, keep pushing!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 565000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Keep it up, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 566000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "What a game so far!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 567000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "What a save in the first half!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 568000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "We believe in you!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 569000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Come on, we need more in the second half!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 570000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Make some changes, coach!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 571000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "We need to tighten up at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 572000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Don't let them back in the game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 573000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "We need to tighten up at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 574000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Make some changes, coach!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 575000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Stay calm and composed!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 576000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "We need to tighten up at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 577000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Keep the pressure on after the break!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 578000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "Don't let them back in the game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 579000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "Come on, let's make history!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 580000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Don't lose focus!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 581000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Make some changes, coach!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 582000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Come on, we need more in the second half!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 583000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Make some changes, coach!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 584000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Stay focused for the second half!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 585000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Stay calm and composed!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 586000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Keep the pressure on after the break!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 587000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "We need to tighten up at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 588000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Let's take control in the second half!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 589000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Don't let them back in the game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 590000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Come on, lads, we can do this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 591000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "We need a goal after the break!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 592000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Make some changes, coach!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 593000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "What a game so far!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 594000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "Let's go for the win!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 595000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Stay sharp after the break!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 596000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "Sort it out, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 597000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "What a game so far!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 598000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "What a save in the first half!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 598000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Go on, take him on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 599000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Man on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 600000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Watch the counter!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 601000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Unbelievable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 602000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Great save, keeper!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 603000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Come on, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 604000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "Go on, take him on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 605000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 606000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Keep it tight at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 607000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Get it out of there!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 608000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Mark your man!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 609000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Come on, we need a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 610000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Spread the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 611000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "Take the shot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 612000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 613000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Come on, make it count!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 613000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "That's it, keep going!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 614000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Go for the flick-on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 615000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Come on, let's go!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 616000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Throw it long!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 617000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "Make it quick!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 618000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Cross it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 618000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Quick throw, quick throw!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 619000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Defend, defend!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 620000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "Watch the counter!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 621000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "What a cross!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 622000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Stay onside!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 623000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 624000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Come on, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 625000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Blow the whistle, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 626000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Spread the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 627000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Defend, defend!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 628000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Unbelievable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 629000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Pass it, pass it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 630000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Come on, we need a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 631000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "Come on, show some fight!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 632000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "Stay onside!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 633000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Mark your man!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 634000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Get stuck in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 635000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 636000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "Stay onside!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 637000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 637000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "That's a poor decision!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 637750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "That's never a foul!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 638500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "Sort it out, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 639250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Come on, ref, wake up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 640000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Come on, ref, that's harsh!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 640750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "How is that a yellow?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 641500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "That's not even close!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 642250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "You're ruining the spectacle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 643000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "That's a terrible yellow!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 643750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Let them play, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 644500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "That's not fair!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 645250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "What are you thinking, ref?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 646000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "You're ruining the flow of the game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 646750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "That's not how you ref a game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 647500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "You're having a laugh, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 648250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "You're ruining the match!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 649000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Are you blind, ref?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 649750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "That's a bad call!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 650000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Stay onside!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 651000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 652000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Come on, we need more urgency!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 653000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Man on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 654000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "Great save, keeper!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 655000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Stay calm, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 656000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "Blow the whistle, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 657000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "What a tackle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 658000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Keep possession!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 659000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Keep it tight at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 660000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 661000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 662000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Go on, take him on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 663000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 664000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "That's a world-class finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 665000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "What a tackle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 666000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "Come on, show some fight!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 667000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Hold the line!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 668000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "Stay onside!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 669000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Stay compact!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 670000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Come on, we need more urgency!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 671000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 672000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "Push up, push up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 673000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Defend, defend!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 674000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "Hold the line!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 675000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "What a pass!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 676000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Unbelievable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 677000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Keep it tight at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 678000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "What a pass!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 679000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "We're going all the way!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 679000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "Keep it tight at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 679500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "That's the magic we needed!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 680000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "That's the magic we needed!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 680500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "Keep it coming!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 681000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Keep it coming!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 681500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Let's crush them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 682000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "We're not done yet!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 682500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "That's how you do it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 683000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "That's why we love this team!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 683500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "That's how you do it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 684000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Beautiful finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 684500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "Back of the net!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 685000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "That's why we're here!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 685500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Come on, keep pushing!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 686000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "That's why we're here!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 686500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "Unbelievable strike!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 687000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Let's crush them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 687500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "That's why we're the best!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 688000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Yes! Get in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 688500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "One more, let's go!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 689000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "Come on, let's keep it up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 689500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "That's how you do it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 690000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "One more, let's go!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 690500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Beautiful finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 691000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "We're winning this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 691500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Come on, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 692000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "Ole, ole, ole!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 692500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "We're dominating!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 693000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Back of the net!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 693500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "That's how you do it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 694000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "What a strike!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 694500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "One more, let's go!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 695000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "That's what I'm talking about!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 695500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "That's why we're here!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 696000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Come on, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 696500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Let's make it two!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 697000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Beautiful finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 697500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "This is our house!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 698000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "We're winning this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 698500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Back of the net!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 699000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "Unbelievable strike!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 699500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Top corner magic!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 700000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "That's the spirit!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 700500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Come on, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 701000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "What a screamer!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 701500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "We're going all the way!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 702000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "That's what I'm talking about!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 702000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "Keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 703000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Cross it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 704000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "That's our throw!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 705000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Time-wasting already?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 706000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "What a tackle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 707000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Man on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 708000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 709000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 710000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 711000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Cross it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 712000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "Watch the counter!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 713000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Come on, press them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 714000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "Stay compact!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 715000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Come on, show some fight!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 716000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Unbelievable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 717000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "That's it, keep going!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 718000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "Come on, we need a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 719000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "What a pass!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 720000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Look for the overlap!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 721000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 722000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Take the shot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 723000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 724000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 725000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Hold the line!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 726000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "Go on, take him on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 727000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Come on, show some fight!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 728000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Come on, lads, keep pushing!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 729000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 730000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "Go on, take him on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 731000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Track back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 732000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Go on, take him on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 733000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Look for the overlap!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 734000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Stay calm, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 735000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Spread the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 736000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Hold the line!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 737000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Get it out of there!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 738000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Pass it, pass it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 739000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 740000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "Keep it tight at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 741000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Play it wide!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 742000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Stay compact!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 743000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Blow the whistle, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 744000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Come on, lads, keep pushing!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 745000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Cross it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 746000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "That's a world-class finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 747000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "Stay compact!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 748000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "What a tackle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 749000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Take the shot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 750000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Great save, keeper!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 751000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Play it wide!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 752000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "Stay compact!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 753000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "That's ours, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 754000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Come on, we need a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 755000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "Take the shot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 756000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 757000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 758000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Great save, keeper!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 759000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Pass it, pass it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 760000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Get it out of there!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 761000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 762000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Cross it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 763000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 764000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Blow the whistle, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 765000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Shoot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 766000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 767000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 768000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Push up, push up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 769000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Time-wasting already?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 770000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 771000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Stay onside!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 772000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "That's it, keep going!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 773000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "Push up, push up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 774000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "What a tackle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 775000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Spread the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 776000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 777000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Come on, we need more urgency!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 778000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 779000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 780000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "That's our throw!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 781000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Track back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 782000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "What a cross!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 783000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "That's our throw!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 784000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "That's a world-class finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 785000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "What a pass!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 786000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Stay onside!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 787000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Don't lose focus!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 788000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Mark your man!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 789000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Time-wasting already?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 790000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Shoot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 791000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Stay onside!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 792000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 793000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "Take the shot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 794000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Mark your man!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 795000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "That's our throw!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 796000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 797000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Come on, we need more urgency!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 798000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Watch the counter!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 799000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 800000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "Come on, we need a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 801000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Keep possession!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 802000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "That's a world-class finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 803000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 804000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Spread the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 805000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "That's a world-class finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 806000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "Come on, we need more urgency!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 807000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Stay calm, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 808000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "Blow the whistle, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 809000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Don't lose focus!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 810000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 811000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Hold the line!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 812000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Get stuck in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 813000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "Stay calm, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 814000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Don't lose focus!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 815000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 816000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Get stuck in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 817000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Hold the line!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 818000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Track back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 819000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "That's it, keep going!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 820000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Man on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 821000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Hold the line!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 822000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Keep it tight at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 823000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Blow the whistle, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 824000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Man on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 825000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Cross it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 826000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Stay calm, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 827000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 827000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "That's ridiculous!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 827750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "You're out of your depth, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 828500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "You're having a laugh, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 829250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "That's never a yellow!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 830000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "What are you thinking, ref?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 830750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "You're giving them everything!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 831500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "You're ruining the match!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 832250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "That's not a booking!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 833000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "That's not a booking!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 833750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "That's not how you ref a game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 834500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "Be consistent, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 835250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "You're losing control, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 836000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "You're out of your depth, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 836750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "He didn't even touch him!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 837500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "What game are you watching, ref?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 838250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "That's a soft yellow!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 839000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "That's a soft yellow!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 839750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "How is that a yellow?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 840000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Hit it hard!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 840500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Bury it in the net!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 841000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Don't miss this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 841500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Keeper, dive right!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 842000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Hit it hard!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 842500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Keeper, dive right!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 843000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "Keeper, you're the hero!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 843500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Straight down the middle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 844000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "Focus, focus!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 844500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "No pressure!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 845000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "This is your moment!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 845500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "This is the decider!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 846000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "This is the decider!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 846500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Take your time!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 847000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "All eyes on you!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 847500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "This is your chance!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 848000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "You got this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 848500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "This is it, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 849000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "All eyes on you!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 849500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "Don't bottle it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 850000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "Send the keeper the wrong way!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 850500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Come on, put it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 851000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "You got this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 851500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "Come on, stay calm!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 852000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Don't overthink it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 852500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Hit it hard!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 853000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Keeper, you're the hero!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 853500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Don't overthink it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 854000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "We believe in you!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 854500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "Keeper, stand tall!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 855000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "Keeper, stand tall!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 855500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "Send the keeper the wrong way!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 856000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Focus, focus!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 856500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "This is your moment!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 857000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Don't bottle it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 857500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Let's go, finish it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 858000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "All eyes on you!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 858500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Come on, stay calm!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 859000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Keeper, you're the hero!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 859500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "This is it, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 860000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "This is it, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 860500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Come on, stay calm!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 861000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "You got this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 861500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "We believe in you!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 862000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "Keeper, save this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 862500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Come on, smash it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 863000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "Come on, stay calm!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 863500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Top corner, let's go!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 864000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Let's go, finish it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 864500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "You got this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 865000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Keeper, save this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 865500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "You got this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 866000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Hit it hard!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 866500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Don't miss this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 867000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Top corner, let's go!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 867500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "Don't miss this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 868000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "This is your chance!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 868500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Hit it hard!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 869000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "No pressure!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 869500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Hit it hard!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 870000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Come on, smash it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 870500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "This is your moment!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 871000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "No pressure!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 871500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "This is your moment!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 872000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "No pressure!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 872500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Come on, put it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 873000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "You got this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 873500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Come on, ref, hurry up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 874000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "No pressure!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 874000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Stay compact!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 875000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 876000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Come on, press them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 877000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "Don't lose focus!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 878000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 879000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Get it out of there!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 880000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Keep possession!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 881000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "What a tackle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 882000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Cross it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 883000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Blow the whistle, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 884000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 885000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Blow the whistle, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 886000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 887000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Spread the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 888000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 889000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Get it out of there!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 890000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Mark your man!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 891000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "Defend, defend!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 892000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Come on, show some fight!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 893000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "Come on, we need more urgency!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 894000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "That's our throw!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 895000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "What a tackle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 896000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "Look for the overlap!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 897000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "Go on, take him on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 898000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 899000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Spread the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 900000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "That's it, keep going!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 901000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "Blow the whistle, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 902000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 903000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 904000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Look for the overlap!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 905000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "Come on, press them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 906000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 907000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 908000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "Keep it tight at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 909000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 910000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Play it wide!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 911000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Shoot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 912000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Keep it tight at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 913000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Play it wide!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 914000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Come on, we need more urgency!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 915000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "Come on, we need a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 916000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 917000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "That's a world-class finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 918000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Come on, show some fight!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 919000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Get it out of there!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 920000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Keep it tight at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 920000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "That's the spirit!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 920500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "We're making history!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 921000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Come on, let's keep it up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 921500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "What a moment!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 922000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "That's world-class!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 922500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Keep the momentum!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 923000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Let's crush them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 923500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "We're making history!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 924000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "We're dominating!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 924500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "Come on, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 925000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "That's world-class!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 925500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "We're going all the way!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 926000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "That's what I'm talking about!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 926500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Pure class!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 927000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "We're going all the way!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 927500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Yes! Get in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 928000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "We're the pride of the league!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 928500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Keep the momentum!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 929000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Come on, keep pushing!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 929500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Bring it home!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 930000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "That's what I'm talking about!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 930500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "We're on fire!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 931000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "What a finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 931500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "We're on fire!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 932000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "That's the winning spirit!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 932500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "We're unstoppable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 933000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "Let's make it two!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 933500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Unbelievable strike!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 934000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "That's the winning spirit!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 934500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "This is our game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 935000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "What a moment!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 935500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Unbelievable strike!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 936000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 936000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "What a strike!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 937000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Push up, push up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 938000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Come on, we need more urgency!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 939000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "Hold the line!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 940000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 941000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 942000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 943000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "Unbelievable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 944000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 945000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "Stay compact!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 946000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Spread the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 947000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Stay calm, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 948000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Come on, press them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 949000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "That's a world-class finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 950000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Stay onside!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 951000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Push up, push up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 952000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Don't lose focus!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 953000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 954000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Track back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 955000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Come on, show some fight!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 956000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Come on, press them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 957000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 958000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Mark your man!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 959000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Get it out of there!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 960000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Unbelievable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 961000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Come on, press them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 962000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Track back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 963000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "Mark your man!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 964000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Go on, take him on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 964500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "That's a disgrace!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 965250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "He's been sent off!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 966000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "That's violent conduct!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 966750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "He's lost the plot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 967500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "He's left us in trouble!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 968250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "See you later!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 969000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "What a reckless move!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 969750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "That's a blatant red!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 970500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "What a reckless move!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 971250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "He's cost us the game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 972000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "What a reckless move!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 972750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "That's a big mistake!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 973500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Dirty play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 974250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "That's violent conduct!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 975000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "What a disaster!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 975750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "What a disaster!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 976500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "That's a straight red!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 977250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "What a stupid foul!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 978000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "That's dangerous!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 978750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "He's been sent off!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 979500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "He's lost his head!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 980250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "That's unacceptable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 981000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "You can't argue with that!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 981750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "That's a moment of madness!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 982500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "That's violent conduct!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 983250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "He's left us in trouble!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 984000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "See you later!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 984000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "Keeper, dive right!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 984500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Put it away!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 985000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "This is the decider!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 985500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Let's go, finish it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 986000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "We believe in you!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 986500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "Hit it hard!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 987000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "Don't miss this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 987500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Make it count!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 988000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "This is your moment!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 988500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Straight down the middle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 989000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "This is the decider!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 989500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Focus, focus!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 990000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "This is it, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 990500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "All eyes on you!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 991000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "This is it, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 991500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Keeper, stand tall!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 992000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Top corner, let's go!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 992500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "This is your moment!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 993000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Come on, stay calm!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 993500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Take your time!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 994000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Take your time!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 994500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Come on, stay calm!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 995000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Make it count!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 995500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "This is your moment!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 996000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "Come on, you can do it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 996500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "Come on, stay calm!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 997000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Keeper, stand tall!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 997500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "We believe in you!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 998000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "This is the decider!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 998500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Send the keeper the wrong way!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 999000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Don't bottle it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 999500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "Top corner, let's go!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1000000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "Send the keeper the wrong way!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1000500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "This is the decider!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1001000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "This is your moment!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1001500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Come on, smash it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1002000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "This is the decider!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1002500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Don't miss this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1003000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Don't bottle it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1003500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "Bury it in the net!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1004000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "This is the decider!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1004500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "No pressure!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1005000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "This is your chance!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1005500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Don't miss this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1006000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "Come on, ref, hurry up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1006500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "Come on, stay calm!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1007000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Straight down the middle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1007500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Make it count!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1008000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Keeper, save this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1008500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "This is your moment!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1009000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "No pressure!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1009500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Top corner, let's go!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1010000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Don't overthink it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1010500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Keeper, stand tall!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1011000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Keep possession!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1011000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "Send the keeper the wrong way!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1012000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "That's our throw!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1013000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "That's it, keep going!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1014000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1015000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "What a pass!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1016000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "That's a world-class finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1017000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "Stay onside!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1018000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "That's a world-class finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1019000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1020000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Keep it tight at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1021000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Mark your man!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1022000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "That's our throw!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1023000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Unbelievable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1024000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Man on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1025000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "Come on, lads, keep pushing!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1026000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "What a cross!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1027000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Spread the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1028000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "What a cross!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1029000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1030000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Take the shot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1031000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "What a tackle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1032000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Time-wasting already?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1033000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "Defend, defend!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1034000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Come on, press them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1035000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Keep it tight at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1036000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Take the shot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1037000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Mark your man!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1038000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Come on, show some fight!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1039000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1040000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Track back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1041000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "Great save, keeper!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1042000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Man on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1043000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Come on, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1044000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "That's a world-class finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1045000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "Keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1046000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Keep it tight at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1047000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Stay onside!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1048000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Watch the counter!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1049000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "Come on, press them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1050000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1051000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "What a pass!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1052000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Hold the line!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1053000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Come on, press them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1053500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "You're giving them everything!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1054250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Are you blind, ref?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1055000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "That's not a booking!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1055750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Get some glasses, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1056500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1057250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "That's a bad call!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1058000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "You're ruining the game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1058750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "You're out of your depth, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1059500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Unbelievable decision!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1060250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "Let them play, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1061000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "That's not a yellow, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1061750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "That's a poor decision!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1062500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Come on, ref, that's harsh!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1063250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "That's embarrassing!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1064000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "That's a shocking decision!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1064750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "That's a poor decision!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1065500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "That's never a foul!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1066250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Unbelievable decision!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1067000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "He barely touched him!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1067750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "He got the ball!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1068500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "You're too card-happy, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1069250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "You're having a laugh, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1070000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "That's not a booking!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1070750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Come on, ref, be fair!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1071500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Unbelievable decision!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1072250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "That's a bad call!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1073000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "What game are you watching, ref?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1073750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "You're killing the game, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1074500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "That's not a booking!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1075250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "That's not football!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1076000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "You're a joke, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1076750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Come on, ref, be fair!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1077500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "You're giving them everything!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1078250,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "That's a joke, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1079000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "You're biased, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1079750,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Be consistent, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1080500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "What are you thinking, ref?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1081000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1082000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Shoot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1083000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "Mark your man!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1084000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1085000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "Come on, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1086000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Keep possession!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1087000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1088000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1089000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Defend, defend!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1090000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1091000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Man on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1092000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1093000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Look for the overlap!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1094000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "That's a world-class finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1095000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "Hold the line!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1096000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "What a cross!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1097000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "What a run!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1098000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1099000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Hold the line!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1100000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Blow the whistle, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1101000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1102000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1103000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-25",
        text: "Spread the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1104000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Man on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1105000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "What a pass!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1106000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "Push up, push up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1107000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Keep the tempo up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1108000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Come on, lads, keep pushing!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1109000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Keep it tight at the back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1110000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1111000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1112000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-08",
        text: "Come on, show some fight!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1113000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "That's ours, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1114000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1115000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Take the shot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1116000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "Spread the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1117000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "Keep possession!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1118000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Take the shot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1119000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Man on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1120000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-21",
        text: "What a pass!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1121000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1122000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Go on, take him on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1123000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Time-wasting already?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1124000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Man on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1125000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "Defend, defend!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1126000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "We can still win this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1127000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Unbelievable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1128000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Defend, defend!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1129000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "Track back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1130000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Stay onside!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1131000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1132000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "What a cross!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1133000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "Cross it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1134000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "What a pass!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1135000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1136000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "What a cross!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1137000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "Come on, we need a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1138000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1139000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Push up, push up!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1140000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1141000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "That's a world-class finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1142000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Time-wasting already?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1143000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Get it out of there!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1144000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Cross it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1145000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1146000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Come on, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1147000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Man on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1148000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Stay calm, lads!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1149000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Mark your man!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1150000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-06",
        text: "Stay onside!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1151000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1152000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Track back!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1153000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "Go on, take him on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1154000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "Counterattack, now!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1155000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "That's a dive!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1156000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "That's what I'm talking about!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1156000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1156500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "What a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1157000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Unstoppable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1157500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "This is our game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1158000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Top corner magic!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1158500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "Let's keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1159000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "We're the pride of the league!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1159500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "This is our game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1160000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "Beautiful finish!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1160500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "We're unstoppable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1161000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "That's how it's done!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1161500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "That's why we're the best!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1162000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "Unbelievable strike!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1162500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "We're unstoppable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1163000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "We're on fire!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1163500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Ole, ole, ole!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1164000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "That's why we love this team!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1164500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Unstoppable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1165000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Top corner magic!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1165500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "That's world-class!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1166000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Top corner magic!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1166500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "We're winning this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1167000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-26",
        text: "We're dominating!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1167500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Yes! Get in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1168000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-02",
        text: "That's what I'm talking about!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1168500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-22",
        text: "That's how it's done!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1169000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "Keep it coming!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1169500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-40",
        text: "What a screamer!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1170000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "We're dominating!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1170500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "We're winning this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1171000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "That's why we're the best!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1171500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Unstoppable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1172000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "We're going all the way!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1172500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "We're unstoppable!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1173000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Back of the net!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1173500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-37",
        text: "That's the magic we needed!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1174000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "We're on fire!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1174500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "We're not done yet!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1175000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "That's how you do it!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1175500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-13",
        text: "Ole, ole, ole!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1176000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-35",
        text: "This is our game!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1176500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "That's the turning point!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1177000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-15",
        text: "Yes! Get in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1177500,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "We're winning this!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1178000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Let's hear it for the team!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1178000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1179000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "What a cross!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1180000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "That's ours, ref!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1181000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-09",
        text: "That's our throw!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1182000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Come on, press them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1183000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Time-wasting already?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1184000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "What a tackle!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1185000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-19",
        text: "Come on, we need a goal!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1186000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Don't lose focus!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1187000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-11",
        text: "Keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1188000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Get it out of there!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1189000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "What a pass!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1190000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-27",
        text: "Defend, defend!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1191000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-38",
        text: "Keep the pressure on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1193000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-30",
        text: "Spread the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1194000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-14",
        text: "We need a substitution!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1195000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-17",
        text: "Go on, take him on!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1196000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Shoot!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1197000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-34",
        text: "Cross it in!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1198000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Switch the play!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1199000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "We're all over them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1200000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "We're by far the greatest team, the world has ever seen!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1200000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Time-wasting already?",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1201000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-01",
        text: "Can you hear the [Opposition] sing? No, no!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1202000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-03",
        text: "We are the champions!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1203000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-07",
        text: "Ole, Ole, Ole, Ole!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1204000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "We're by far the greatest team, the world has ever seen!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1205000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "Everywhere we go, people wanna know, who we are, so we tell them!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1206000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-10",
        text: "Championés, championés, olé, olé, olé!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1207000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-18",
        text: "We are the champions!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1208000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "You're not singing anymore!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1209000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-16",
        text: "We want six! We want six!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1210000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "We love you Leeds, we do!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1211000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "We are the champions!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1212000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "We love you Leeds, we do!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1213000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-23",
        text: "Na na na na, na na na na, hey hey hey, goodbye!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1214000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-32",
        text: "Ole, Ole, Ole, Ole!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1215000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-31",
        text: "We love you Leeds, we do!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1216000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-33",
        text: "Championés, championés, olé, olé, olé!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1217000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-28",
        text: "We're by far the greatest team, the world has ever seen!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1218000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-36",
        text: "Championés, championés, olé, olé, olé!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1219000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-12",
        text: "Na na na na, na na na na, hey hey hey, goodbye!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1220000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-04",
        text: "Championés, championés, olé, olé, olé!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1221000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-05",
        text: "Ole, Ole, Ole, Ole!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1222000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-29",
        text: "Ole, Ole, Ole, Ole!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1224000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-24",
        text: "We're by far the greatest team, the world has ever seen!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1225000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-20",
        text: "You're not singing anymore!",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1226000,
    persistInHistory: false,
    action: {
      channel: "game.chat",
      data: {
        user: "bot-39",
        text: "We are the champions!",
      },
    },
  },
];
