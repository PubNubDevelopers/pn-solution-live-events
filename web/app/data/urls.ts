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
    determinePoints: {
      //  todo update this after the function has been created)
      selfLed: "https://pubnub.com",
      salesLed:
        "https://admin.pubnub.com/illuminate/",
    },
    customAds: {
      //  todo update this after the function has been created
      selfLed: "https://pubnub.com",
      //  todo update this after the function has been created
      salesLed: "https://pubnub.com",
    },
    createNew: {
      //  todo update this after the function has been created
      selfLed: "https://pubnub.com",
      salesLed:
        "https://admin.pubnub.com/illuminate/",
    },
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
