import { useState, useRef } from 'react'
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

export default function TabletContents ({
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide,
  logout,
  showDynamicAd, //  todo testing only... this should come from PubNub, not from app state
  heightConstrained = true
}) {
  const [notificationHeading, setNotificationHeading] = useState(null)
  const [notification, setNotification] = useState(null)
  const [notificationImageUrl, setNotificationImageUrl] = useState(null)
  const notificationTimer = useRef<any | null>(null)
  const defaultWidgetClasses =
    'rounded-lg border-1 border-navy200 bg-white shadow-md'

  //  todo listen for PN messages here to show a notification, and call this function when triggered.
  function showNotification (heading, message, imageUrl) {
    setNotificationHeading(heading)
    setNotification(message)
    setNotificationImageUrl(imageUrl)

    // Clear the existing timer if it exists
    if (notificationTimer.current) {
      clearTimeout(notificationTimer.current)
    }

    // Set a new timer to clear the notification after 5 seconds
    notificationTimer.current = setTimeout(() => {
      setNotificationHeading(null)
      setNotification(null)
      setNotificationImageUrl(null)
      notificationTimer.current = null // Reset the timer reference
    }, 3000)
  }

  return (
    <div className='w-full rounded-2xl bg-navy50 text-neutral-900 h-full overflow-y-auto overscroll-none'>
      {notification && (
        <Notification
          heading={notificationHeading}
          message={notification}
          imageUrl={notificationImageUrl}
          onClose={() => {
            setNotification(null)
            if (notificationTimer.current) {
              clearTimeout(notificationTimer.current)
              notificationTimer.current = null
            }
          }}
        />
      )}
      <TabletHeader />
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
            guidesShown={guidesShown}
            visibleGuide={visibleGuide}
            setVisibleGuide={setVisibleGuide}
          />
          <MatchStatsWidget
            className={`${defaultWidgetClasses}`}
            isMobilePreview={false}
            chat={chat}
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
          />
          <div className='min-h-3'></div>
        </div>
        <div className='w-full flex flex-col gap-4'>
          {showDynamicAd && (
            <AdvertsOfferWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={false}
              chat={chat}
              guidesShown={guidesShown}
              visibleGuide={visibleGuide}
              setVisibleGuide={setVisibleGuide}
              adUrl={'/ads/ad-offer2.png'}
            />
          )}
          <TestChatWidget
            className={`${defaultWidgetClasses}`}
            isMobilePreview={false}
            chat={chat}
            guidesShown={guidesShown}
            visibleGuide={visibleGuide}
            setVisibleGuide={setVisibleGuide}
          />
          <ChatWidget
            className={`${defaultWidgetClasses}`}
            isMobilePreview={false}
            chat={chat}
            guidesShown={guidesShown}
            visibleGuide={visibleGuide}
            setVisibleGuide={setVisibleGuide}
          />
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

  function TabletHeader ({}) {
    return (
      <div className='flex flex-row items-center justify-between w-full px-6 py-[11.5px]'>
        <div className='text-3xl font-bold'>Live Stream</div>
        <UserStatus chat={chat} logout={logout} />
      </div>
    )
  }
}
