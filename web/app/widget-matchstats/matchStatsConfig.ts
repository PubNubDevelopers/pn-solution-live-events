export const enum BoxType {
  InfoBoxWithImageAndQuantity = 0,
  InfoBoxComparingTwoStatistics = 1,
  InfoBoxWithImageAndTwoData = 2,
  FeatureStats = 3,
}

export const matchStatsConfig = {
  statBox1: {
    type: BoxType.InfoBoxComparingTwoStatistics,
    title: "Score",
    info: [
      {
        stat: "0",
        imageUrl: "/matchstats/badge_leeds.svg",
        imageAlt: "Team Badge",
        imageWidth: 32,
        imageHeight: 32,
      },
      {
        stat: "0",
        imageUrl: "/matchstats/badge_southampton.svg",
        imageAlt: "Team Badge",
        imageWidth: 32,
        imageHeight: 32,
      },
    ],
  },
  statBox2: {
    type: BoxType.InfoBoxWithImageAndQuantity,
    title: "Yellow cards",
    info: [
      {
        stat: "0",
        imageUrl: "/matchstats/icon_yellowcard.png",
        imageAlt: "Yellow card",
        imageWidth: 31,
        imageHeight: 40,
      },
    ],
  },
  statBox3: {
    type: BoxType.InfoBoxWithImageAndTwoData,
    title: "Top Scorer",
    info: [
      {
        dataPrimary: "0",
        dataSecondary: "No goals yet",
        imageUrl: "/matchstats/playericon_anon.png",
        imageAlt: "",
        imageWidth: 48,
        imageHeight: 48,
      },
    ],
  },
  statBox4: {
    type: BoxType.InfoBoxComparingTwoStatistics,
    title: "Shots on Goal",
    info: [
      {
        stat: "0",
        imageUrl: "/matchstats/badge_leeds.svg",
        imageAlt: "Team Badge",
        imageWidth: 32,
        imageHeight: 32,
      },
      {
        stat: "0",
        imageUrl: "/matchstats/badge_southampton.svg",
        imageAlt: "Team Badge",
        imageWidth: 32,
        imageHeight: 32,
      },
    ],
  },
  statBox5: {
    type: BoxType.InfoBoxWithImageAndQuantity,
    title: "Red cards",
    info: [
      {
        stat: "0",
        imageUrl: "/matchstats/icon_redcard.png",
        imageAlt: "Red card",
        imageWidth: 31,
        imageHeight: 40,
      },
    ],
  },
  statBox6: {
    type: BoxType.InfoBoxComparingTwoStatistics,
    title: "Pass accuracy",
    info: [
      {
        stat: "0%",
        imageUrl: "/matchstats/badge_leeds.svg",
        imageAlt: "Team Badge",
        imageWidth: 32,
        imageHeight: 32,
      },
      {
        stat: "0%",
        imageUrl: "/matchstats/badge_southampton.svg",
        imageAlt: "Team Badge",
        imageWidth: 32,
        imageHeight: 32,
      },
    ],
  },
  featuredPlayers: [
    {
      type: BoxType.FeatureStats,
      title: "Player stats: Mara",
      imageUrl: "/matchstats/statsbox_header_mara.png",
      imageAlt: "Player Header",
      imageWidth: 142,
      imageHeight: 80,
      headerBackgroundColor: "#d0d0cc",
      info: [
        { heading: "Full name:", detail: "Sékou Mara" },
        { heading: "Nationality:", detail: "French" },
        { heading: "Position:", detail: "Forward" },
        { heading: "Height:", detail: "1.83m" },
      ],
      infoListItems: {
        title: "Senior Career",
        bullets: [
          "2022 - 2024: SFC (4 Gls)",
          "2020 - 2022: Bordeaux (7 Gls)",
          "2019 - 2020: Bordeaux B (5 Gls)",
        ],
      },
    },
    {
      type: BoxType.FeatureStats,
      title: "Player stats: Piroe",
      imageUrl: "/matchstats/statsbox_header_piroe.png",
      imageAlt: "Player Header",
      imageWidth: 142,
      imageHeight: 80,
      headerBackgroundColor: "#d0d0cc",
      info: [
        { heading: "Full name:", detail: "Joël Piroe" },
        { heading: "Nationality:", detail: "Dutch" },
        { heading: "Position:", detail: "Forward" },
        { heading: "Height:", detail: "1.85m" },
      ],
      infoListItems: {
        title: "Senior Career",
        bullets: [
          "2023 - Leeds United (29 Gls)",
          "2021 - 2023: Swansea (41 Gls)",
          "2019 - 2021: PSV",
        ],
      },
    },
  ],
};
