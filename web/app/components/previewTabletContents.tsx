import { useState, useEffect, useRef } from 'react'
import UserStatus from './userStatus'
import ChatWidget from '../widget-chat/chatWidget'
//  todo delete the test chat widget
import TestChatWidget from '../widget-chat/testOnlyChatWidget'
import StreamWidget from '../widget-stream/streamWidget'
import MatchStatsWidget from '../widget-matchstats/matchStatsWidget'
import AdvertsWidget from '../widget-adverts/advertsWidget'
import AdvertsOfferWidget from '../widget-adverts/advertsOfferWidget'
import PollsWidget from '../widget-polls/pollsWidget'
import BotWidget from '../widget-bot/botWidget'
import LiveCommentaryWidget from '../widget-liveCommentary/liveCommentaryWidget'
import Notification from './notification'
import Alert from './alert'
import { CommonMessageHandler, AwardPoints } from '../commonLogic'
import {
  pushChannelSelfId,
  pushChannelSalesId,
  dynamicAdChannelId,
  AlertType
} from '../data/constants'

export default function TabletContents ({
  chat,
  isGuidedDemo,
  guidesShown,
  visibleGuide,
  setVisibleGuide,
  logout,
  currentScore,
  heightConstrained = true
}) {
  const [notification, setNotification] = useState<{
    heading: string
    message: string
    imageUrl: string
  } | null>(null)
  const [alert, setAlert] = useState<{ points: number; body: string } | null>(
    null
  )
  const [dynamicAd, setDynamicAd] = useState<{
    adId: string
    clickPoints: number
  } | null>(null)
  const pushChannelId = isGuidedDemo ? pushChannelSalesId : pushChannelSelfId
  const defaultWidgetClasses =
    'rounded-lg border-1 border-navy200 bg-white shadow-md'

  useEffect(() => {
    if (!chat) return
    //const channel = chat.sdk.channel(pushChannelId)
    //const subscription = channel.subscription({ receivePresenceEvents: false })
    const subscriptionSet = chat.sdk.subscriptionSet({
      channels: [pushChannelId, dynamicAdChannelId]
    })
    subscriptionSet.onMessage = messageEvent => {
      CommonMessageHandler(
        isGuidedDemo,
        messageEvent,
        data => {
          setNotification(data)
        },
        data => setDynamicAd(data)
      )
    }
    subscriptionSet.subscribe()
    return () => {
      subscriptionSet.unsubscribe()
    }
  }, [chat])

  function showNewPointsAlert (points, message) {
    setAlert({ points: points, body: message })
  }

  return (
    <div className='w-full rounded-2xl bg-navy50 text-neutral-900 h-full overflow-y-auto overscroll-none '>
      <div className='relative'>
        <div className='absolute w-1/2 right-0'>
          {alert && (
            <Alert
              type={AlertType.POINTS}
              message={alert}
              onClose={() => {
                setAlert(null)
              }}
            />
          )}
        </div>
      </div>
      {notification && (
        <Notification
          heading={notification.heading}
          message={notification.message}
          imageUrl={notification.imageUrl}
          onClose={() => {
            setNotification(null)
          }}
        />
      )}
      <TabletHeader currentScore={currentScore} />
      <div
        className={`flex flex-row px-6 gap-3 w-full h-full ${
          heightConstrained && 'min-h-[680px] max-h-[680px]'
        } rounded-b-2xl`}
      >
        <div className={`w-[700px] flex flex-col gap-4`}>
          <StreamWidget
            className={`${defaultWidgetClasses}`}
            isMobilePreview={false}
            chat={chat}
            isGuidedDemo={isGuidedDemo}
            guidesShown={guidesShown}
            visibleGuide={visibleGuide}
            setVisibleGuide={setVisibleGuide}
          />
          <MatchStatsWidget
            className={`${defaultWidgetClasses}`}
            isMobilePreview={false}
            chat={chat}
            isGuidedDemo={isGuidedDemo}
            guidesShown={guidesShown}
            visibleGuide={visibleGuide}
            setVisibleGuide={setVisibleGuide}
          />
          <AdvertsWidget
            className={`${defaultWidgetClasses}`}
            isMobilePreview={false}
            chat={chat}
            guidesShown={guidesShown}
            visibleGuide={visibleGuide}
            setVisibleGuide={setVisibleGuide}
            onAdClick={points => {
              AwardPoints(chat, points, currentScore, showNewPointsAlert)
            }}
          />
          <div className='min-h-3'></div>
        </div>
        <div className='w-full flex flex-col gap-4'>
          {dynamicAd && (
            <AdvertsOfferWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={false}
              chat={chat}
              guidesShown={guidesShown}
              visibleGuide={visibleGuide}
              setVisibleGuide={setVisibleGuide}
              adId={dynamicAd.adId}
              clickPoints={dynamicAd.clickPoints}
              onAdClick={(points, adId) => {
                AwardPoints(chat, points, currentScore, showNewPointsAlert)
                //  Prevent clicking on both Mobile and tablet previews
                chat?.sdk.publish({
                  message: {},
                  channel: dynamicAdChannelId
                })
              }}
            />
          )}
          <ChatWidget
            className={`${defaultWidgetClasses}`}
            isMobilePreview={false}
            chat={chat}
            guidesShown={guidesShown}
            visibleGuide={visibleGuide}
            setVisibleGuide={setVisibleGuide}
          />
          {/*<TestChatWidget*/}
          {/*  className={`${defaultWidgetClasses}`}*/}
          {/*  isMobilePreview={false}*/}
          {/*  chat={chat}*/}
          {/*  guidesShown={guidesShown}*/}
          {/*  visibleGuide={visibleGuide}*/}
          {/*  setVisibleGuide={setVisibleGuide}*/}
          {/*/>*/}
          <PollsWidget
            className={`${defaultWidgetClasses}`}
            isMobilePreview={false}
            chat={chat}
            guidesShown={guidesShown}
            visibleGuide={visibleGuide}
            setVisibleGuide={setVisibleGuide}
          />
          <BotWidget
            className={`${defaultWidgetClasses}`}
            isMobilePreview={false}
            chat={chat}
            guidesShown={guidesShown}
            visibleGuide={visibleGuide}
            setVisibleGuide={setVisibleGuide}
          />
          <LiveCommentaryWidget
            className={`${defaultWidgetClasses}`}
            isMobilePreview={false}
            chat={chat}
            guidesShown={guidesShown}
            visibleGuide={visibleGuide}
            setVisibleGuide={setVisibleGuide}
          />
          <div className='min-h-3'></div>
        </div>
      </div>
    </div>
  )

  function TabletHeader ({ currentScore }) {
    return (
      <div className='flex flex-row items-center justify-between w-full px-6 py-[11.5px]'>
        <div className='text-3xl font-bold'>Live Stream</div>
        <UserStatus chat={chat} logout={logout} currentScore={currentScore} />
      </div>
    )
  }
}
