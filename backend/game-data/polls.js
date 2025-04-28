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

//  Game ends at 1200000 (20m)

//  Players mentioned:
//  Joe Rodon (Leeds Utd)
//  Joël Piroe (Leeds Utd)
//  Sam Byram (Leeds Utd)
//  Glen Kamara (Leeds Utd)
//  Pascal Struijk (Leeds)
//  Ethan Ampadu (Leeds)
//  Adam Armstrong (Soton FC)
//  Ryan Manning (Soton FC)
//  Romeo Lavia (Soton FC)
//  Kyle Walker-Peters (Soton FC)
//  Jack Stevens (Soton FC)
//  Sékou Mara (Soton FC)

//  Questions:
//  1:  [Ends at     48s] Who will score the first goal?
//    Options: Joël Piroe (Leeds Utd)*, Daniel James (Leeds Utd), Sékou Mara (Soton FC)
//  2:  [ends at  1m 30s] Will there be a penalty in the first half? (Yes)
//    Options: Yes*, No
//  3:  [ends at  2m 39s] Who will score the second goal?
//    Options: James Ward-Prowse (Soton FC), Georginio Rutter (Leeds Utd)*, Joël Piroe (Leeds Utd)
//  4:  [ends at  3m 23s] Which team will score next?
//    Options: Southampton, Leeds*
//  5:  [ends at  4m 30s] Who will get the second yellow card
//    Options: Pascal Struijk (Leeds)*, Adam Armstrong (Soton FC), Ryan Manning (Soton FC)
//  6:  [ends at  5m 17s] Who will be Southampton's first scorer?
//    Options:  Sékou Mara (Soton FC), James Ward-Prowse (Soton FC)*, They won't score!
//  7:  [ends at  6m 16s] Will the match go to extra time?
//    Options: Yes, No
//  8:  [ends at  7m 16s] Who will be man of the match?
//    Options: Jack Stevens (Soton FC), Joël Piroe (Leeds Utd),  Glen Kamara (Leeds Utd)
//  9:  [ends at  8m 17s] Which team has the most wins in previous head-to-heads
//    Options: Southampton, Leeds*
//  10: [ends at  9m 18s] Previous head-to-heads: Who has scored more at St. Marys?
//    Options: Southampton*, Leeds
//  11: [ends at 10m 39s] Who will get a yellow card next?
//    Options: Ethan Ampadu (Leeds)*, Joe Rodon (Leeds Utd), Kyle Walker-Peters (Soton FC)
//  12: [ends at 11m 19s] Who will score next?
//    Options: Daniel James (Leeds Utd)* , Joël Piroe (Leeds Utd), Sékou Mara (Soton FC)
//  13: [ends at 12m 20s] Will the next goal be a header?
//    Options: Yes, No
//  14: [ends at 13m 47s] Which team will get a yellow next?
//    Options: Southampton*, Leeds
//  15: [ends at 14m 20s] Will there be a goal in the next 10 minutes?
//    Options: Yes, No
//  16: [ends at 15m 20s] Who will score next for Leeds?
//    Options: Joël Piroe (Leeds Utd)*, Georginio Rutter (Leeds Utd), Daniel James (Leeds Utd)
//  17: [ends at 16m 08s] Who will get the first red card?
//    Options: Adam Armstrong (Soton FC), Ethan Ampadu (Leeds), Joe Rodon (Leeds Utd)*
//  18: [ends at 17m 33s] Next player to get 2 yellow cards?
//    Options: Pascal Struijk, Joël Piroe, Ethan Ampadu*
//  19: [ends at 18m 17s] Will Southampton make a comeback?
//    Options: Yes, No*, Maybe
//  20: [ends at 19m 16s] Who will score next for Southampton?
//    Options: James Ward-Prowse (Soton FC), Sékou Mara (Soton FC)*, Nobody - the first one was a fluke
//  21: [ends at 20m 00s] What was the most exciting moment of the match?
//    Options: Joël Piroe's hat trick, Ward-Prowse's Penalty, Creating real-time interactive apps*

exports.polls = [
  {
    timeSinceVideoStartedInMs: 2100,
    persistInHistory: true,
    action: {
      channel: "game.new-poll",
      data: {
        id: 0,
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
    timeSinceVideoStartedInMs: 2100,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 1,
        title: "Who will score the first goal?",
        victoryPoints: 2,
        pollType: "side",
        options: [
          { id: 1, text: "Joël Piroe (Leeds)" },
          { id: 2, text: "Daniel James (Leeds)" },
          { id: 3, text: "Sékou Mara (Soton)" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 48000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 1,
        correctOption: 1,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
          { id: 3, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 49000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 2,
        title: "Will there be a penalty in the first half?",
        victoryPoints: 2,
        pollType: "side",
        options: [
          { id: 1, text: "Yes" },
          { id: 2, text: "No" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 90000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 2,
        pollType: "side",
        correctOption: 1,
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 91000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 3,
        title: "Who will score the second goal?",
        victoryPoints: 2,
        pollType: "side",
        options: [
          { id: 1, text: "James Ward-Prowse (Soton)" },
          { id: 2, text: "Georginio Rutter (Leeds)" },
          { id: 3, text: "Joël Piroe (Leeds)" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 159000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 3,
        correctOption: 2,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
          { id: 3, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 160000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 4,
        title: "Which team will score next?",
        victoryPoints: 2,
        pollType: "side",
        options: [
          { id: 1, text: "Southampton" },
          { id: 2, text: "Leeds" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 203000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 4,
        correctOption: 2,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 204000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 5,
        title: "Who will get the second yellow card?",
        victoryPoints: 2,
        pollType: "side",
        options: [
          { id: 1, text: "Pascal Struijk (Leeds)" },
          { id: 2, text: "Adam Armstrong (Soton)" },
          { id: 3, text: "Ryan Manning (Soton)" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 270000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 5,
        correctOption: 1,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
          { id: 3, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 271000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 6,
        title: "Who will be Southampton's first scorer?",
        victoryPoints: 2,
        pollType: "side",
        options: [
          { id: 1, text: "Sékou Mara (Soton)" },
          { id: 2, text: "James Ward-Prowse (Soton)" },
          { id: 3, text: "They won't score!" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 317000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 6,
        correctOption: 2,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
          { id: 3, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 318000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 7,
        title: "Will the match go to extra time?",
        victoryPoints: 0,
        pollType: "side",
        options: [
          { id: 1, text: "Yes" },
          { id: 2, text: "No" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 376000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 7,
        correctOption: 0,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 377000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 8,
        title: "Who will be man of the match?",
        victoryPoints: 0,
        pollType: "side",
        options: [
          { id: 1, text: "Jack Stevens (Soton)" },
          { id: 2, text: "Joël Piroe (Leeds)" },
          { id: 3, text: "Glen Kamara (Leeds)" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 436000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 8,
        correctOption: 0,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
          { id: 3, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 437000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 9,
        title: "Which team has the most wins in previous head-to-heads",
        victoryPoints: 2,
        pollType: "side",
        options: [
          { id: 1, text: "Southampton FC" },
          { id: 2, text: "Leeds United" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 497000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 9,
        correctOption: 2,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 498000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 10,
        title: "Previous head-to-heads: Who has scored more at St. Marys?",
        victoryPoints: 2,
        pollType: "side",
        options: [
          { id: 1, text: "Southampton FC" },
          { id: 2, text: "Leeds United" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 558000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 10,
        correctOption: 1,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 559000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 11,
        title: "Who will get a yellow card next?",
        victoryPoints: 2,
        pollType: "side",
        options: [
          { id: 1, text: "Ethan Ampadu (Leeds)" },
          { id: 2, text: "Joe Rodon (Leeds)" },
          { id: 3, text: "Kyle Walker-Peters (Soton)" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 639000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 11,
        correctOption: 1,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
          { id: 3, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 640000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 12,
        title: "Who will score next?",
        victoryPoints: 2,
        pollType: "side",
        options: [
          { id: 1, text: "Daniel James (Leeds)" },
          { id: 2, text: "Joël Piroe (Leeds)" },
          { id: 3, text: "Sékou Mara (Soton)" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 679000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 12,
        correctOption: 1,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
          { id: 3, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 680000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 13,
        title: "Will the next goal be a header?",
        victoryPoints: 0,
        pollType: "side",
        options: [
          { id: 1, text: "Yes" },
          { id: 2, text: "No" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 740000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 13,
        correctOption: 0,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 741000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 14,
        title: "Which team will get a yellow next?",
        victoryPoints: 2,
        pollType: "side",
        options: [
          { id: 1, text: "Southampton" },
          { id: 2, text: "Leeds" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 827000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 14,
        correctOption: 1,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 828000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 15,
        title: "Will there be a goal in the next 10 minutes?",
        victoryPoints: 0,
        pollType: "side",
        options: [
          { id: 1, text: "Yes" },
          { id: 2, text: "No" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 860000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 15,
        correctOption: 0,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 861000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 16,
        title: "Who will score next for Leeds?",
        victoryPoints: 2,
        pollType: "side",
        options: [
          { id: 1, text: "Joël Piroe" },
          { id: 2, text: "Georginio Rutter" },
          { id: 3, text: "Daniel James" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 920000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 16,
        correctOption: 1,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
          { id: 3, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 921000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 17,
        title: "Who will get the first red card?",
        victoryPoints: 2,
        pollType: "side",
        options: [
          { id: 1, text: "Adam Armstrong (Soton)" },
          { id: 2, text: "Ethan Ampadu (Leeds)" },
          { id: 3, text: "Joe Rodon (Leeds)" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 968000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 17,
        correctOption: 3,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
          { id: 3, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 969000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 18,
        title: "Next player to get 2 yellow cards?",
        victoryPoints: 2,
        pollType: "side",
        options: [
          { id: 1, text: "Pascal Struijk (Leeds)" },
          { id: 2, text: "Joël Piroe (Leeds)" },
          { id: 3, text: "Ethan Ampadu (Soton)" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1053000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 18,
        correctOption: 3,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
          { id: 3, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1054000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 19,
        title: "Will Southampton make a comeback?",
        victoryPoints: 0,
        pollType: "side",
        options: [
          { id: 1, text: "Yes" },
          { id: 2, text: "No" },
          { id: 3, text: "Maybe" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1097000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 19,
        correctOption: 0,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
          { id: 3, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1098000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 20,
        title: "Who will score next for Southampton?",
        victoryPoints: 2,
        pollType: "side",
        options: [
          { id: 1, text: "James Ward-Prowse" },
          { id: 2, text: "Sékou Mara" },
          { id: 3, text: "Nobody, 1st one was a fluke" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1156000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 20,
        correctOption: 2,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
          { id: 3, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1157000,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 21,
        title: "What was the most exciting moment of the match?",
        victoryPoints: 10,
        pollType: "side",
        options: [
          { id: 1, text: "Joël Piroe's hat trick" },
          { id: 2, text: "Ward-Prowse's Penalty" },
          { id: 3, text: "Using PubNub" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1200000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 21,
        correctOption: 3,
        pollType: "side",
        options: [
          { id: 1, score: 10 },
          { id: 2, score: 10 },
          { id: 3, score: 10 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 1200000,
    persistInHistory: true,
    action: {
      channel: "game.poll-results",
      data: {
        id: 0,
        pollType: "match",
        correctOption: 1,
      },
    },
  },
];

/*  {
    timeSinceVideoStartedInMs: 3000,
    persistInHistory: false,
    action: {
      channel: "game.poll-votes",
      data: {
        pollId: 2,
        questionId: "1",
        choiceId: 1,
        pollType: "side",
      },
    },
  },
*/
