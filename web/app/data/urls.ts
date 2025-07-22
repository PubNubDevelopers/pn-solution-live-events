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
      selfLed:
        "https://demo-admin.pubnub.com/user/627747/account/632313/app/35517029/key/1268872/bizops-dashboard/channels/",
      salesLed: "https://admin.pubnub.com/bizops/",
    },
  },
  chatAndModeration: {
    translation: {
      selfLed:
        "https://www.pubnub.com/integrations/",
      salesLed:
        "https://www.pubnub.com/integrations/",
    },
    moderation: {
      //selfLed:
      //  "https://demo-admin.pubnub.com/user/627747/account/632313/app/35517029/key/1268872/moderation",
      selfLed: "https://www.pubnub.com/docs/bizops-workspace/channel-monitor",
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
      selfLed: "https://demo-admin.pubnub.com/user/627747/account/632313/illuminate/decisions/5fc334e8-480e-4d65-94b2-aa6cffd89a0a",
      salesLed: "https://admin.pubnub.com/illuminate/",
    },
    dynamicPoll: {
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
    demo: {
      selfLed: {
        view: "https://demo-admin.pubnub.com/user/627747/account/632313/functions-v2",
        endpoint: "https://ps.pndsn.com/v1/blocks/sub-key/sub-c-11080239-8b55-4fa1-81ec-5af6c716e59a/demo"
      },
      salesLed: {
        view: "https://admin.pubnub.com/functions/",
        endpoint: "https://ps.pndsn.com/v1/blocks/sub-key/sub-c-fa08eb13-6d22-48f9-91a4-1d6eae913127/demo"
      }
    },
  },
  popoutView: "./popout/",
  wiki: "https://pubnub.atlassian.net/wiki/spaces/GROW/pages/4415029276/Live+Events+Showcase+Pillar+Demo#Illuminate-Configuration",
  hostedUrls: {
    selfLed: "https://pn-solution-live-events.netlify.app/",
    //  The following URLs are ONLY designed for use by the PubNub sales team
    salesLed1: "https://pn-solution-live-events-guided.netlify.app/",
    salesLed2: "https://pn-solution-live-events-guided-2.netlify.app/",
  }
};
