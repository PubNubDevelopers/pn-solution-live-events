exports.angry = [
  {
    timeSinceVideoStartedInMs: 2100,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 101,
        title: "Which team is playing the dirtiest?",
        victoryPoints: 0,
        alertText: "Take your frustration out on this poll",
        pollType: "side",
        options: [
          { id: 1, text: "Leeds United" },
          { id: 2, text: "Southampton FC" },
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
        id: 101,
        correctOption: 0,
        pollType: "side",
        options: [
          { id: 1, score: 50 },
          { id: 2, score: 50 },
        ],
      },
    },
  },
];

exports.cheer = [
  {
    timeSinceVideoStartedInMs: 2100,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 102,
        title: "Which team’s fans are celebrating the hardest?",
        victoryPoints: 0,
        alertText: "Only winners unlock this poll",
        pollType: "side",
        options: [
          { id: 1, text: "Leeds United" },
          { id: 2, text: "Southampton FC" },
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
        id: 102,
        correctOption: 0,
        pollType: "side",
        options: [
          { id: 1, score: 50 },
          { id: 2, score: 50 },
        ],
      },
    },
  },
];
