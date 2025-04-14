import {
  pushChannelSelfId,
  pushChannelSalesId,
  dynamicAdChannelId,
} from "./data/constants";

export async function CommonMessageHandler(
  isGuidedDemo,
  messageEvent,
  onSetNotification,
  onSetDynamicAd
) {
  const pushChannelId = isGuidedDemo ? pushChannelSalesId : pushChannelSelfId;
  if (messageEvent.channel === pushChannelId) {
    //  Received a message representing a Mobile Push Message, simulate this notification
    const pushData = messageEvent.message.pn_fcm.data;
    const title = pushData.title ?? "Missing title";
    const body = pushData.body ?? "Missing body";
    let imageUrl = "/notification/image-cup.png";
    if (body.indexOf("mentioned") > -1) {
      //  Bit lazy but match the logic of the Android app when selecting notification image
      imageUrl = "/notification/image-messages.png";
    }
    onSetNotification({ heading: title, message: body, imageUrl: imageUrl });
  } else if (messageEvent.channel === dynamicAdChannelId) {
    const adId = messageEvent.message.adId;
    const clickPoints = messageEvent.message.clickPoints;
    if (adId && clickPoints) {
      onSetDynamicAd({ adId: adId, clickPoints: clickPoints });
    } else {
      onSetDynamicAd(null);
    }
  } else {
    //  Unrecognized message
    console.error("Unrecognized message channel");
  }
}

export async function AwardPoints(
  chat,
  pointsToAward,
  customMessage,
  currentScore,
  awardPointsAnimation
) {
  if (!chat) return;
  
  const newScore = currentScore + pointsToAward;
  const message = customMessage
    ? customMessage
    : `Point${Math.abs(pointsToAward) > 1 ? "s" : ""} Awarded`;
  awardPointsAnimation(pointsToAward, message);
  await chat.currentUser.update({
    custom: {
      score: newScore,
    },
  });
}
