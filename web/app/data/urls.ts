export const urls = {
  instructions: {
    account: "demo@pubnub.com",
    appName: "Guided Demos",
    keysetName: "Live Events",
  },
  bizOpsWorkspace: {
    userManagement: {
      selfLed:
        "https://demo-admin.pubnub.com/user/627747/account/632313/app/35517029/key/1268872/bizops-dashboard/users/",
      salesLed: "https://admin.pubnub.com/bizops/",
    },
    channelManagement: {
      //  todo does this change for the read-only portal
      selfLed:
        "https://demo-admin.pubnub.com/user/627747/account/632313/app/35517029/key/1268872/bizops-dashboard/channels/",
      salesLed: "https://admin.pubnub.com/bizops/",
    },
  },
  chatAndModeration: {
    translation: {
      //  todo update this after the function has been created (currently points to top level, but should point to actual function)
      selfLed:
        "https://demo-admin.pubnub.com/user/627747/account/632313/functions-v2",
      salesLed:
        "https://admin.pubnub.com/functions/",
    },
    moderation: {
      //  ToDo: Navigating directly to the specific channel to be moderated was unreliable
      selfLed:
        "https://demo-admin.pubnub.com/user/627747/account/632313/app/35517029/key/1268872/moderation/",
      salesLed: "https://admin.pubnub.com/bizops/",
    },
  },
  illuminate: {
    customEmoji: {
      selfLed: "https://demo-admin.pubnub.com/user/627747/account/632313/illuminate/decisions/5fc334e8-480e-4d65-94b2-aa6cffd89a0a",
      salesLed:
        "https://admin.pubnub.com/illuminate/",
    },
    dynamicAd: {
      //  todo update this after the function has been created
      selfLed: "https://demo-admin.pubnub.com/user/627747/account/632313/illuminate/decisions/5fc334e8-480e-4d65-94b2-aa6cffd89a0a",
      //  todo update this after the function has been created
      salesLed: "https://admin.pubnub.com/illuminate/",
    },
    dynamicPoll: {
      //  todo update this after the function has been created
      selfLed: "https://demo-admin.pubnub.com/user/627747/account/632313/illuminate/decisions/81eeed3a-1f33-4530-818f-3e57a73414e3",
      salesLed:
        "https://admin.pubnub.com/illuminate/",
    },
    dashboard: {
      selfLed: "https://demo-admin.pubnub.com/user/627747/account/632313/illuminate/dashboards/559b2088-f7e0-40b9-bb95-c70f8d9d872a",
      salesLed: "https://admin.pubnub.com/illuminate/",
    }
  },
  functions: {
    scoreSummary: {
      //  todo update this after the function has been created
      selfLed: "https://pubnub.com",
      salesLed:
        "https://admin.pubnub.com/functions/",
    },
  },
  popoutView: "./popout/",
};
