exports.commentary = [
  {
    timeSinceVideoStartedInMs: 2000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "A stadium alive with atmosphere and two teams ready to commit themselves to excellence for 90 captivating minutes we're privileged to be here on an occasion that resonates with football fans everywhere and if you think you know who's going to win you are courageous indeed.",
        timeCode: "00:00",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 2100,
    persistInHistory: true,
    action: {
      channel: "game.new-poll",
      data: {
        id: 1,
        title: "Win 10 points for a correct prediction",
        victoryPoints: 10,
        pollType: "match", //  The poll appears below the stream
        options: [
          { id: 1, text: "Leeds United F.C." },
          { id: 2, text: "Southampton F.C." },
          { id: 3, text: "Draw" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 31000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Hello a warm welcome we've dropped anchor here on the South coast of England at St Mary's Stadium.",
        timeCode: "00:00",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 36000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "I'm Derek Ray in the commentary position and I'm joined for analysis by Stuart Robson and what we have coming up for you is live coverage",
        timeCode: "00:01",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 44000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Is this the moment... a surefire goal... surely",
        timeCode: "01:10",
      },
    },
  },
/*  {
    //  Goal 1
    timeSinceVideoStartedInMs: 48000,
    persistInHistory: true,
    action: {
      channel: "game.match-stats",
      data: {
        statBox1: {
          info: [
            {
              stat: `1`,
            },
            {
              stat: `0`,
            },
          ],
        },
      },
    },
  },
  */
  {
    timeSinceVideoStartedInMs: 48000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Oh a moment of pure class.. He had to catch it perfectly, and didn't he just!?",
        timeCode: "01:41",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 60000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well as you can see, he gets everything right here.  What a skillful volley that is",
        timeCode: "01:48",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 67000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And the ball moving again, what sort of response will we see from them now?",
        timeCode: "02:30",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 79000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Byram has the ball",
        timeCode: "03:37",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 83000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "He'll be delighted to have won the ball having made that difficult challenge",
        timeCode: "04:09",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 94000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Oh and he's left his marker for dead.   Now can he find someone at the far post?",
        timeCode: "05:33",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 99000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well capable of a better clearance than that",
        timeCode: "06:06",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 104000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well no way through in the end",
        timeCode: "06:49",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 110000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Take it away",
        timeCode: "07:31",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 114000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Bad challenge and now it's up to the referee in terms of what to do next",
        timeCode: "07:48",
      },
    },
  },
  /*
  {
    //  Yellow card to Mara
    timeSinceVideoStartedInMs: 119000,
    persistInHistory: true,
    action: {
      channel: "game.match-stats",
      data: {
        statBox2: {
          info: [
            {
              dataPrimary: `1`,
            },
          ],
        },
      },
    },
  },
  */
  {
    timeSinceVideoStartedInMs: 118000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well you don't really want to be picking up a caution so early in the game Stuart",
        timeCode: "07:48",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 122000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well he's going to be under pressure now, that was a reckless challenge.  He didn't need to make it at all",
        timeCode: "07:48",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 134000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Play has restarted",
        timeCode: "08:08",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 143000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Kamara has it",
        timeCode: "09:08",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 146000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Went there to intercept",
        timeCode: "09:30",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 156000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Able to skip past his man",
        timeCode: "10:46",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 159000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "well that's is it going to be... and a goal!!",
        timeCode: "11:05",
      },
    },
  },
  /*
  {
    //  Goal 2
    timeSinceVideoStartedInMs: 159000,
    persistInHistory: true,
    action: {
      channel: "game.match-stats",
      data: {
        statBox1: {
          info: [
            {
              stat: `2`,
            },
            {
              stat: `0`,
            },
          ],
        },
      },
    },
  },
  */
  {
    timeSinceVideoStartedInMs: 162000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "He's put it away... A celebratory moment",
        timeCode: "11:09",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 176000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well here we can see it again look at the way he glides past the defender to create space for himself and he makes the finish look so easy what a good goal that is",
        timeCode: "11:15",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 185000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Play restarts",
        timeCode: "11:40",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 186000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "2-0 here, and the ball is moving again",
        timeCode: "11:45",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 190000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Walker-Peters",
        timeCode: "12:12",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 197000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well it's a good looking position, is there a goal in their future?",
        timeCode: "13:09",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 202000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Can't miss, surely",
        timeCode: "13:42",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 203000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "That's his brace, they just can't keep him quiet",
        timeCode: "13:51",
      },
    },
  },
  /*
  {
    //  Goal 3
    timeSinceVideoStartedInMs: 203000,
    persistInHistory: true,
    action: {
      channel: "game.match-stats",
      data: {
        statBox1: {
          info: [
            {
              stat: `3`,
            },
            {
              stat: `0`,
            },
          ],
        },
      },
    },
  },
  */
  {
    timeSinceVideoStartedInMs: 214000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Just look at this again he moves the ball quickly he gets beyond his marker and he keeps his composure it's an excellent finish",
        timeCode: "13:51",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 224000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "well he's given it away",
        timeCode: "14:47",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 233000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Ward-Price has possession",
        timeCode: "15:55",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 242000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Armstrong has possession",
        timeCode: "17:05",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 245000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Stevens has possession",
        timeCode: "17:25",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 253000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Ryan Manning has possession",
        timeCode: "18:28",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 257000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Sekou Mara has possession",
        timeCode: "18:57",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 264000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And the referee says penalty",
        timeCode: "19:42",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 270000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "No card just a warning and a fair few protestations",
        timeCode: "19:48",
      },
    },
  },
  /*
  {
    //  Yellow card to Struijk
    timeSinceVideoStartedInMs: 270000,
    persistInHistory: true,
    action: {
      channel: "game.match-stats",
      data: {
        statBox2: {
          info: [
            {
              dataPrimary: `2`,
            },
          ],
        },
      },
    },
  },
  */
  {
    timeSinceVideoStartedInMs: 274000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well not every foul is a yellow card, i think the referee is right here",
        timeCode: "19:52",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 281000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And he's missed spectacularly. that's such a poor penalty he's missed that by a mile",
        timeCode: "20:09",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 293000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Made it look routine, but read it well",
        timeCode: "21:13",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 307000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "The defenders know they need to get tighter",
        timeCode: "22:56",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 310000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Great attacking play well that is how to play advantage",
        timeCode: "23:19",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 315000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "In position and now he must score",
        timeCode: "23:57",
      },
    },
  },
  /*
  {
    //  Goal 4
    timeSinceVideoStartedInMs: 317000,
    persistInHistory: true,
    action: {
      channel: "game.match-stats",
      data: {
        statBox1: {
          info: [
            {
              stat: `3`,
            },
            {
              stat: `1`,
            },
          ],
        },
      },
    },
  },
  */
  {
    timeSinceVideoStartedInMs: 317000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And a goal to delight the fans, just what they were hoping for",
        timeCode: "24:08",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 335000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well it's a decent goal but the defenders certainly played their part where were they they were absolutely all over the place",
        timeCode: "24:20",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 341000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Play has restarted",
        timeCode: "25:01",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 342000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "No shortage of goals in this match: 3-1",
        timeCode: "25:02",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 354000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well, that's how to beat your opponent",
        timeCode: "26:12",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 357000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Can he take the chance?",
        timeCode: "26:34",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 361000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And in range",
        timeCode: "27:11",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 365000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Kamara has possession",
        timeCode: "27:34",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 369000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Still possibilities",
        timeCode: "28:04",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 373500,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "But it just petered out",
        timeCode: "28:33",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 380000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Committed challenge",
        timeCode: "29:29",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 389000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And the lead's throw forthcoming",
        timeCode: "30:22",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 398000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Pascal Struijk has possession",
        timeCode: "31:23",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 403000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And Southampton regaining possession",
        timeCode: "31:51",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 411000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "No problems defensively",
        timeCode: "32:57",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 415000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well they haven't seen too many chances but the crowd sensing this could be a turning point.  They need a goal here.",
        timeCode: "33:03",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 425000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Trying to deliver it accurately.  The chance is on.",
        timeCode: "33:23",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 428000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And collected tidily, he had plenty to think about",
        timeCode: "33:48",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 440000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Romeo Lavia has possession",
        timeCode: "35:13",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 443000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Kyle Walker-Peters has it",
        timeCode: "35:38",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 447000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Back with Krauss",
        timeCode: "36:06",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 450000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Dangerous ball",
        timeCode: "36:30",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 452000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And he clears the danger",
        timeCode: "36:46",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 456000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "He read the situation defensively and did his job",
        timeCode: "37:14",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 469000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Waker-Peters",
        timeCode: "38:51",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 475000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Southampton sloppy in possession",
        timeCode: "39:35",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 482000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And slipped through beautifully",
        timeCode: "40:33",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 489000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Ryan Manning has possession",
        timeCode: "41:23",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 491000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And the upshot of that is offside",
        timeCode: "41:30",
      },
    },
  },
/*
  {
    //  Yellow card to Piroe
    timeSinceVideoStartedInMs: 492000,
    persistInHistory: true,
    action: {
      channel: "game.match-stats",
      data: {
        statBox2: {
          info: [
            {
              dataPrimary: `3`,
            },
          ],
        },
      },
    },
  },
*/
  {
    timeSinceVideoStartedInMs: 494000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well he needed to look elsewhere because the flag was always going to go up",
        timeCode: "41:30",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 499000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Good refereeing,  waiting for a natural pause before booking him",
        timeCode: "41:30",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 512000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Play has restarted",
        timeCode: "41:51",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 519000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Pass to Kamara",
        timeCode: "42:36",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 523000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Southampton losing possession here",
        timeCode: "43:04",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 536000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Intelligent threaded pass here",
        timeCode: "44:43",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 540000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "This could spell trouble with the referee having already shown the yellow card",
        timeCode: "45:15",
      },
    },
  },
  {
    //  Half Time
    timeSinceVideoStartedInMs: 562000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Half Time then, that brings the first half to a close here on the South coast",
        timeCode: "46:05",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 570000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well we're focusing on him for a reason, he's playing with real authority in attack Stuart",
        timeCode: "HT",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 575000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well you won't see too many better performances than this, he's been an absolute menace to these defenders today and of course he's taken his goals really well",
        timeCode: "HT",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 605000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Second half started",
        timeCode: "45:00",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 606000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "So back underway here into the second half",
        timeCode: "45:08",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 621000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Jack Stevens has Possession",
        timeCode: "46:29",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 624000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Manning has it",
        timeCode: "46:57",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 627000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Clean challenge",
        timeCode: "47:19",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 632000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Rutter with the ball",
        timeCode: "47:54",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 633000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Good looking move",
        timeCode: "48:07",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 635000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Oh really commanding goalkeeping",
        timeCode: "48:15",
      },
    },
  },
  /*
  {
    //  Yellow card to Ampadu
    timeSinceVideoStartedInMs: 637000,
    persistInHistory: true,
    action: {
      channel: "game.match-stats",
      data: {
        statBox2: {
          info: [
            {
              dataPrimary: `4`,
            },
          ],
        },
      },
    },
  },
  */
  {
    timeSinceVideoStartedInMs: 639000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And a retrospective yellow card is the referee's verdict",
        timeCode: "48:15",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 642000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well no doubt about it that earlier challenge was a definite booking",
        timeCode: "48:15",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 654000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Now sending us in and still a chance",
        timeCode: "48:39",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 661000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And he's kept it out, fully stretched, somehow reaching it",
        timeCode: "49:30",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 671000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Wonderful header; excellent goalkeeping",
        timeCode: "50:03",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 674000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And another corner, can they take advantage of this one",
        timeCode: "50:10",
      },
    },
  },
  /*
  {
    //  Goal 5
    timeSinceVideoStartedInMs: 679000,
    persistInHistory: true,
    action: {
      channel: "game.match-stats",
      data: {
        statBox1: {
          info: [
            {
              stat: `4`,
            },
            {
              stat: `1`,
            },
          ],
        },
      },
    },
  },
  */
  {
    timeSinceVideoStartedInMs: 679000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "A goal here giving his team precisely what they were looking for now he deserves to celebrate it",
        timeCode: "50:29",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 695000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well here you can see it again it's a superb cross just asking for someone to go and meet it and it ends up with a fairly simple finish certainly not much the goalkeeper can do about that",
        timeCode: "50:29",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 703000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Play restarted",
        timeCode: "50:30",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 704500,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Not too much defending going on in the grand scheme of things. 4-1",
        timeCode: "51:01",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 716000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Mara has the ball",
        timeCode: "52:29",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 717000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Determined defending",
        timeCode: "52:40",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 732000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Decent progress with the ball at his feet",
        timeCode: "54:34",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 737000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Ward-Prowse has it",
        timeCode: "55:06",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 740000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And they couldn't quite muster a real threat",
        timeCode: "55:30",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 744000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Rutter",
        timeCode: "56:04",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 747000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "James",
        timeCode: "56:24",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 750000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Beautiful pass",
        timeCode: "56:44",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 755000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And Southampton come away with it",
        timeCode: "57:22",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 760000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well breaking at pace is always a possibility",
        timeCode: "58:05",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 767000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And the Saints unable to hold on to the ball",
        timeCode: "58:54",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 774000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Carlos Alcarez",
        timeCode: "59:46",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 776000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Now, what can they produce on the flank?",
        timeCode: "60:05",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 779000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Able to skip past his man",
        timeCode: "60:26",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 781000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And fine goalkeeping",
        timeCode: "60:45",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 786000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Pressure applied... can they make something of it?",
        timeCode: "61:20",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 791000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Romeo Lavia has it",
        timeCode: "61:54",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 800000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Joe Rodon with the ball",
        timeCode: "63:04",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 803000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Extremely sloppy in possession",
        timeCode: "63:25",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 813000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Into the advanced position",
        timeCode: "64:41",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 817000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well didn't go to plan in the end",
        timeCode: "65:14",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 825000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Let's get the latest on the injury situation from our pitch side man Jeff Reeves",
        timeCode: "66:12",
      },
    },
  },
  /*
  {
    //  Yellow card to Armstrong
    timeSinceVideoStartedInMs: 827000,
    persistInHistory: true,
    action: {
      channel: "game.match-stats",
      data: {
        statBox2: {
          info: [
            {
              dataPrimary: `5`,
            },
          ],
        },
      },
    },
  },
  */
  {
    timeSinceVideoStartedInMs: 829000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "We'll have to wait and see the extent of this injury because his foot was trodden on in that last challenge so we'll have to wait and see as to how serious this is",
        timeCode: "66:12",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 837000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Cheers Jeff",
        timeCode: "66:12",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 840000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "They're setting up for the penalty",
        timeCode: "66:12",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 851000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "The crowd are uncertain",
        timeCode: "66:12",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 861000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Total concentration",
        timeCode: "66:52",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 871000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And nicely struck",
        timeCode: "67:00",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 874000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "All fairly run-of-the-mill in terms of what the keeper had to do",
        timeCode: "67:25",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 882000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "James with the ball",
        timeCode: "68:25",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 888000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Really good build-up but no end product",
        timeCode: "69:08",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 892000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "James has it again",
        timeCode: "70:26",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 902000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And leeds a bit sloppy in possession",
        timeCode: "70:53",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 915000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "That's a good ball",
        timeCode: "72:30",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 919000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Effective looking pass",
        timeCode: "73:00",
      },
    },
  },
  /*
  {
    //  Goal 6
    timeSinceVideoStartedInMs: 920000,
    persistInHistory: true,
    action: {
      channel: "game.match-stats",
      data: {
        statBox1: {
          info: [
            {
              stat: `5`,
            },
            {
              stat: `1`,
            },
          ],
        },
      },
    },
  },
  */
  {
    timeSinceVideoStartedInMs: 921000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And that's the hat trick.  Tearing apart this defense time and again they simply can't handle it",
        timeCode: "73:08",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 932000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well as you can see here it all starts with a perfectly weighted ball in behind the defenders and the finish is just as good.  That's an excellent goal",
        timeCode: "73:08",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 942000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Ryan Manning with it",
        timeCode: "73:59",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 946000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And it's Bednarek",
        timeCode: "74:28",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 949000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Carlos Alcaraz now",
        timeCode: "74:54",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 951000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "well lead's come away with it",
        timeCode: "75:08",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 957000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "We're inside the final quarter of an hour now",
        timeCode: "75:51",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 963000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "If you're going to challenge like that it has to be spot on.  What did the referee think of it?",
        timeCode: "76:32",
      },
    },
  },
  /*
  {
    //  Red card to Rodon
    timeSinceVideoStartedInMs: 964500,
    persistInHistory: true,
    action: {
      channel: "game.match-stats",
      data: {
        statBox5: {
          info: [
            {
              dataPrimary: `1`,
            },
          ],
        },
      },
    },
  },
  */
  {
    timeSinceVideoStartedInMs: 969000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well the referee produces the red card, an obvious one Stuart",
        timeCode: "76:32",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 973000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "They'll need to reorganize quickly here, he really has let them down with that challenge",
        timeCode: "76:32",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 986000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Setting up for the penalty",
        timeCode: "76:54",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 998000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "The crowd are silent",
        timeCode: "77:07",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1010000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well that didn't go exactly to plan and no wonder he's getting a few icy stairs from his teammates",
        timeCode: "77:29",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1017000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Yeah that's a complete waste, he was never going to score from there",
        timeCode: "77:51",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1024000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Intercepted effortlessly",
        timeCode: "78:47",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1027000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "and a clear foul but the referee letting the play flow",
        timeCode: "79:06",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1038000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Just 10 minutes remaining here",
        timeCode: "80:26",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1040000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Oh what a perfect ball now, how about this?",
        timeCode: "80:47",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1045000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And under pressure that was a fine claim",
        timeCode: "81:23",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1050000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Ryan Manning with it",
        timeCode: "82:01",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1053000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "now Armstrong",
        timeCode: "82:23",
      },
    },
  },
  /*
  {
    //  Second Yellow card to Ampadu
    timeSinceVideoStartedInMs: 1053500,
    persistInHistory: true,
    action: {
      channel: "game.match-stats",
      data: {
        statBox2: {
          info: [
            {
              dataPrimary: `6`,
            },
          ],
        },
        statBox5: {
          info: [
            {
              dataPrimary: `2`,
            },
          ],
        },
      },
    },
  },
  */
  {
    timeSinceVideoStartedInMs: 1054000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "This could spell trouble with the referee having already shown the yellow card",
        timeCode: "82:24",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1063000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And it is a second bookable offense, that's the end of the story for him",
        timeCode: "82:24",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1066000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And it doesn't surprise me Derek he's played on the edge today",
        timeCode: "82:24",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1094000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Now with Rutter",
        timeCode: "84:09",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1096000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well very effective play in possession",
        timeCode: "84:24",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1099000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Nothing comes of it, it looked promising",
        timeCode: "84:49",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1107000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "A lot of space to attack",
        timeCode: "85:44",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1110000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Will it be?",
        timeCode: "86:13",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1113000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Thwarted by the post",
        timeCode: "86:30",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1117000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "In a decent position now",
        timeCode: "87:03",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1120000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "It's looking promising",
        timeCode: "87:27",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1124000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Ward-Prowse... that was going in",
        timeCode: "87:53",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1134000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And there's the delivery, it could still be dangerous",
        timeCode: "88:31",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1142000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And problem solved for now",
        timeCode: "89:31",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1145000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Has eyes for goal",
        timeCode: "89:51",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1147000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "goalkeeper getting in the way.  Superb save",
        timeCode: "90:08",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1155000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Is this the moment?",
        timeCode: "90:34",
      },
    },
  },
  /*
  {
    //  Goal 7
    timeSinceVideoStartedInMs: 1156000,
    persistInHistory: true,
    action: {
      channel: "game.match-stats",
      data: {
        statBox1: {
          info: [
            {
              stat: `5`,
            },
            {
              stat: `2`,
            },
          ],
        },
      },
    },
  },
  */
  {
    timeSinceVideoStartedInMs: 1156000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And a goal at the second time of asking but the keeper has let his team down",
        timeCode: "90:36",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1162000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "The team are celebrating",
        timeCode: "90:36",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1171000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Well here's the replay, yes it's a decent shot but the goalkeeper has to do a lot better there, he's parried it out into a dangerous area and suddenly the ball's in the back of his net.  It's poor goalkeeping you have to say",
        timeCode: "90:36",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1186000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "There to intercept",
        timeCode: "91:46",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1191000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Dan James with the ball",
        timeCode: "92:28",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1193000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "now sliding in field.",
        timeCode: "92:49",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1193500,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "Oh a superb save",
        timeCode: "92:53",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1200000,
    persistInHistory: true,
    action: {
      channel: "game.poll-results",
      data: {
        id: 1,
        pollType: "match",
        correctOption: 1,
      },
    },
  },
  {
    //  Full Time
    timeSinceVideoStartedInMs: 1200000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "And there it is the final whistle this is not exactly what Southampton fans wanted to see in terms of the result a defeat here",
        timeCode: "93:26",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1208000,
    persistInHistory: false,
    action: {
      channel: "game.commentary",
      data: {
        text: "You're absolutely right Derek, while the result is poor the display was even worse.  They never got to grips with the opposition they were second best in every facet of the game, they need to do a lot improving before the next time out",
        timeCode: "93:26",
      },
    },
  },
];
