export const enum BoxType {
  InfoBoxWithImageAndQuantity = 0,
  InfoBoxComparingTwoStatistics = 1,
  InfoBoxWithImageAndTwoData = 2,
  FeatureStats = 3,
}

export const matchStatsConfig = {
  statBox1: {
    type: BoxType.InfoBoxComparingTwoStatistics,
    title: "Possession",
    info: [
      {
        stat: "58%",
        imageUrl: "/matchstats/badge_manc.png",
        imageAlt: "Team Badge",
        imageWidth: 32,
        imageHeight: 32,
      },
      {
        stat: "42%",
        imageUrl: "/matchstats/badge_mcf.png",
        imageAlt: "Team Badge",
        imageWidth: 24,
        imageHeight: 32,
      },
    ],
  },
  statBox2: {
    type: BoxType.InfoBoxWithImageAndQuantity,
    title: "Yellow cards",
    info: [
      {
        stat: "5",
        imageUrl: "/matchstats/icon_yellowcard.png",
        imageAlt: "Yellow card",
        imageWidth: 31,
        imageHeight: 40,
      },
    ],
  },
  statBox3: {
    type: BoxType.InfoBoxWithImageAndTwoData,
    title: "Most touches",
    info: [
      {
        dataPrimary: "85",
        dataSecondary: "Bernardo Silva",
        imageUrl: "/matchstats/playericon_silva.png",
        imageAlt: "Bernardo Silva",
        imageWidth: 42,
        imageHeight: 42,
      },
    ],
  },
  statBox4: {
    type: BoxType.InfoBoxComparingTwoStatistics,
    title: "Distance covered",
    info: [
      {
        stat: "112km",
        imageUrl: "/matchstats/badge_manc.png",
        imageAlt: "Team Badge",
        imageWidth: 32,
        imageHeight: 32,
      },
      {
        stat: "118km",
        imageUrl: "/matchstats/badge_mcf.png",
        imageAlt: "Team Badge",
        imageWidth: 24,
        imageHeight: 32,
      },
    ],
  },
  statBox5: {
    type: BoxType.InfoBoxWithImageAndTwoData,
    title: "Top speed",
    info: [
      {
        dataPrimary: "38kph",
        dataSecondary: "Mbappe",
        imageUrl: "/matchstats/playericon_mbappe.png",
        imageAlt: "Mbappe",
        imageWidth: 42,
        imageHeight: 48,
      },
    ],
  },
  statBox6: {
    type: BoxType.InfoBoxComparingTwoStatistics,
    title: "Shots on target",
    info: [
      {
        stat: "3",
        imageUrl: "/matchstats/badge_manc.png",
        imageAlt: "Team Badge",
        imageWidth: 32,
        imageHeight: 32,
      },
      {
        stat: "4",
        imageUrl: "/matchstats/badge_mcf.png",
        imageAlt: "Team Badge",
        imageWidth: 24,
        imageHeight: 32,
      },
    ],
  },
  featuredPlayer: {
    type: BoxType.FeatureStats,
    title: "Player stats: Rodri",
    imageUrl: "/matchstats/statsbox_header_rodri.png",
    imageAlt: "Player Header",
    imageWidth: 142,
    imageHeight: 80,
    headerBackgroundColor: "#1F80C4",
    info: [
      {
        heading: "Current teams:",
        detail:
          "Manchester City F.C. (#16 / Midfielder), Spain national football team (#16 / Midfielder)",
      },
      { heading: "Full name:", detail: "Rodrigo Hernández " },
      { heading: "Nationality:", detail: "Spanish" },
    ],
    infoListItems: {
      title: "This match",
      bullets: ["7 lost possessions", "1 yellow card", "92% pass accuracy"],
    },
  },
};
