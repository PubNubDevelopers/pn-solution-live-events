export const urls = {
  bizOpsWorkspace: {
    userManagement: {
      //  todo does this change for the read-only portal
      selfLed:
        "https://admin.pubnub.com/user/590466/account/632313/app/35517029/key/1268872/bizops-dashboard/users/",
      salesLed:
        "https://admin.pubnub.com/user/590466/account/618626/app/35498368/key/1269143/bizops-dashboard/users/",
    },
    channelManagement: {
      //  todo does this change for the read-only portal
      selfLed:
        "https://admin.pubnub.com/user/590466/account/632313/app/35517029/key/1268872/bizops-dashboard/channels/",
      salesLed:
        "https://admin.pubnub.com/user/590466/account/618626/app/35498368/key/1269143/bizops-dashboard/channels/",
    },
  },
  chatAndModeration: {
    translation: {
      //  todo does this change for the read-only portal
      //  todo update this after the function has been created (currently pointing at test account)
      selfLed:
        "https://admin.pubnub.com/user/590466/account/487898/app/35517145/key/1269058/function-modules/69583/editor/135491",
      //  todo update this after the function has been created (currently pointing at test account)
      salesLed:
        "https://admin.pubnub.com/user/590466/account/487898/app/35517145/key/1269058/function-modules/69583/editor/135491",
    },
    moderation: {
      //  todo does this change for the read-only portal
      selfLed:
        "https://admin.pubnub.com/user/590466/account/632313/app/35517029/key/1268872/moderation/chat?channels=",
      salesLed:
        "https://admin.pubnub.com/user/590466/account/618626/app/35498368/key/1269143/moderation/chat?channels=",
    },
  },
  illuminate: {
    determinePoints: {
      //  todo does this change for the read-only portal
      //  todo update this after the function has been created)
      selfLed: "https://pubnub.com",
      //  todo update this after the function has been created)
      salesLed: "https://pubnub.com",
    },
    customAds: {
      //  todo does this change for the read-only portal
      //  todo update this after the function has been created
      selfLed: "https://pubnub.com",
      //  todo update this after the function has been created
      salesLed: "https://pubnub.com",
    },
    createNew: {
      //  todo does this change for the read-only portal
      //  todo update this after the function has been created
      selfLed: "https://pubnub.com",
      //  todo update this after the function has been created
      salesLed: "https://pubnub.com",
    },
  },
  functions: {
    scoreSummary: {
      //  todo does this change for the read-only portal
      //  todo update this after the function has been created
      selfLed: "https://pubnub.com",
      //  todo update this after the function has been created
      salesLed: "https://pubnub.com",
    },
  },
};

//  todo is this the final channel name?  It's also defined in the testPublicChannels object :/
export const channelId = "public-euro2024";
