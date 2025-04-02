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
import Alert from './alert'

export default function TabletContents ({
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide,
  logout,
  showDynamicAd, //  todo testing only... this should come from PubNub, not from app state
  heightConstrained = true
}) {
  const [notification, setNotification] = useState<{
    heading: string
    message: string
    imageUrl: string
  } | null>(null)
  const [alert, setAlert] = useState<string | null>(null)
  const defaultWidgetClasses =
    'rounded-lg border-1 border-navy200 bg-white shadow-md'

  //  todo listen for PN messages here to show a notification, and call this function when triggered.
  function showNotification (heading, message, imageUrl) {
    setNotification({heading: heading, message: message, imageUrl: imageUrl})
  }

  function showAlert () {
    setAlert("Alert Text")
  }

  return (
    <div className='w-full rounded-2xl bg-navy50 text-neutral-900 h-full overflow-y-auto overscroll-none'>
      {alert && <Alert message={alert} onClose={() => {setAlert(null)}}/>}
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
      {/* todo : Remove this test div.  Alerts should show at the correct time, as a result of actions (PN messages)*/}
      <div className='relative'>
        <div
          className='absolute left-10 top-0 text-sm z-50 font-semibold text-cherry cursor-pointer'
          onClick={() => {
            showAlert()
          }}
        >
          TEST: SHOW ALERT
        </div>
        <div
          className='absolute left-10 top-5 text-sm z-50 font-semibold text-cherry cursor-pointer'
          onClick={() => {
            showNotification('Heading', 'Text', '/notification/image-cup.png')
          }}
        >
          TEST: SHOW NOTIFICATION
        </div>

      </div>
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
