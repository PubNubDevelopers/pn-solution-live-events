import { useState, useEffect, useRef } from 'react'
import UserStatus from './userStatus'
import ChatWidget from '../widget-chat/chatWidget'
import StreamWidget from '../widget-stream/streamWidget'
import MatchStatsWidget from '../widget-matchstats/matchStatsWidget'
import AdvertsWidget from '../widget-adverts/advertsWidget'
import AdvertsOfferWidget from '../widget-adverts/advertsOfferWidget'
import PollsWidget from '../widget-polls/pollsWidget'
import BotWidget from '../widget-bot/botWidget'
import LiveCommentaryWidget from '../widget-liveCommentary/liveCommentaryWidget'
import Notification from './notification'
import Alert from './alert'
import GuideOverlay from './guideOverlay'
import { CommonMessageHandler, AwardPoints } from '../commonLogic'
import {
  pushChannelSelfId,
  pushChannelSalesId,
  dynamicAdChannelId,
  AlertType
} from '../data/constants'

export default function PreviewMobile ({
  className,
  chat,
  isGuidedDemo,
  guidesShown,
  visibleGuide,
  setVisibleGuide,
  logout,
  currentScore
}) {
  const [notification, setNotification] = useState<{
    heading: string
    message: string
    imageUrl: string | null
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
    'rounded-lg border-1 border-navy200 bg-white shadow-sm'

  const currentScoreRef = useRef(currentScore)
  useEffect(() => {
    currentScoreRef.current = currentScore
  }, [currentScore])

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
    <div
      className={`${className} w-[460px] border-4 border-navy100 rounded-3xl bg-black px-2 py-[14px] h-full max-h-[954px]`}
    >
      <div className='w-full rounded-2xl bg-navy50 text-neutral-900 h-full pb-[90px]'>
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
        <MobileHeader currentScore={currentScore} />
        <GuideOverlay
          id={'userPoints'}
          guidesShown={guidesShown}
          visibleGuide={visibleGuide}
          setVisibleGuide={setVisibleGuide}
          text={
            <span>
              User details and their points are securely stored in{' '}
              <span className='font-semibold'>App Context</span>, a flexible
              data store for user & app data. This allows{' '}
              <span className='font-semibold'>per-user personalization</span>{' '}
              and gamification.
            </span>
          }
          xOffset={`right-[60px]`}
          yOffset={'-top-[40px]'}
          flexStyle={'flex-row items-start'}
        />
        <div className='w-full h-full overflow-y-auto overscroll-none'>
          <div className='flex flex-col px-2 gap-6 rounded-b-2xl'>
            <StreamWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={true}
              chat={chat}
              isGuidedDemo={isGuidedDemo}
              guidesShown={guidesShown}
              visibleGuide={visibleGuide}
              setVisibleGuide={setVisibleGuide}
              awardPoints={(points, message) => {
                AwardPoints(
                  chat,
                  points,
                  message,
                  currentScoreRef.current,
                  showNewPointsAlert
                )
              }}
            />
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
                  AwardPoints(
                    chat,
                    points,
                    null,
                    currentScoreRef.current,
                    showNewPointsAlert
                  )
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
              isMobilePreview={true}
              chat={chat}
              isGuidedDemo={isGuidedDemo}
              guidesShown={guidesShown}
              visibleGuide={visibleGuide}
              setVisibleGuide={setVisibleGuide}
              userMentioned={messageText => {
                setNotification({
                  heading: 'You were mentioned',
                  message: messageText,
                  imageUrl: null
                })
              }}
            />
            <PollsWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={true}
              chat={chat}
              isGuidedDemo={isGuidedDemo}
              guidesShown={guidesShown}
              visibleGuide={visibleGuide}
              setVisibleGuide={setVisibleGuide}
              awardPoints={(points, message) => {
                AwardPoints(
                  chat,
                  points,
                  message,
                  currentScoreRef.current,
                  showNewPointsAlert
                )
              }}
            />
            <MatchStatsWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={true}
              chat={chat}
              isGuidedDemo={isGuidedDemo}
              guidesShown={guidesShown}
              visibleGuide={visibleGuide}
              setVisibleGuide={setVisibleGuide}
            />
            <BotWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={true}
              chat={chat}
              isGuidedDemo={isGuidedDemo}
              guidesShown={guidesShown}
              visibleGuide={visibleGuide}
              setVisibleGuide={setVisibleGuide}
            />
            <LiveCommentaryWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={true}
              chat={chat}
              guidesShown={guidesShown}
              visibleGuide={visibleGuide}
              setVisibleGuide={setVisibleGuide}
            />
            <AdvertsWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={true}
              chat={chat}
              isGuidedDemo={isGuidedDemo}
              guidesShown={guidesShown}
              visibleGuide={visibleGuide}
              setVisibleGuide={setVisibleGuide}
              onAdClick={points => {
                AwardPoints(
                  chat,
                  points,
                  null,
                  currentScoreRef.current,
                  showNewPointsAlert
                )
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )

  function MobileHeader ({ currentScore }) {
    return (
      <div className='flex flex-col w-full px-4 py-[11.5px]'>
        <UserStatus chat={chat} logout={logout} currentScore={currentScore} />
        <div className='text-2xl font-bold'>Live Stream</div>
      </div>
    )
  }
}
