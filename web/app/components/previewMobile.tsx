import { useState, useRef } from 'react'
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

export default function PreviewMobile ({
  className,
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide,
  logout,
  showDynamicAd //  Testing only
}) {
  const [notification, setNotification] = useState<{
    heading: string
    message: string
    imageUrl: string
  } | null>(null)
  const [alert, setAlert] = useState<string | null>(null)
  const defaultWidgetClasses =
    'rounded-lg border-1 border-navy200 bg-white shadow-sm'

  //  todo listen for PN messages here to show a notification, and call this function when triggered.
  function showNotification (heading, message, imageUrl) {
    setNotification({ heading: heading, message: message, imageUrl: imageUrl })
  }

  function showAlert () {
    setAlert('Alert Text')
  }

  return (
    <div
      className={`${className} w-[460px] border-4 border-navy100 rounded-3xl bg-black px-2 py-[14px] h-full max-h-[954px]`}
    >
      <div className='w-full rounded-2xl bg-navy50 text-neutral-900 h-full pb-2'>
        <div className='w-full h-full overflow-y-auto overscroll-none'>
          {alert && (
            <Alert
              message={alert}
              onClose={() => {
                setAlert(null)
              }}
            />
          )}
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
                showNotification(
                  'Heading',
                  'Text',
                  '/notification/image-cup.png'
                )
              }}
            >
              TEST: SHOW NOTIFICATION
            </div>
          </div>

          <MobileHeader />
          <div className='flex flex-col px-2 gap-6 rounded-b-2xl'>
            <StreamWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={true}
              chat={chat}
              guidesShown={guidesShown}
              visibleGuide={visibleGuide}
              setVisibleGuide={setVisibleGuide}
            />
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
            <ChatWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={true}
              chat={chat}
              guidesShown={guidesShown}
              visibleGuide={visibleGuide}
              setVisibleGuide={setVisibleGuide}
            />
            <PollsWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={true}
              chat={chat}
              guidesShown={guidesShown}
              visibleGuide={visibleGuide}
              setVisibleGuide={setVisibleGuide}
            />
            <MatchStatsWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={true}
              chat={chat}
              guidesShown={guidesShown}
              visibleGuide={visibleGuide}
              setVisibleGuide={setVisibleGuide}
            />
            <BotWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={true}
              chat={chat}
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
              guidesShown={guidesShown}
              visibleGuide={visibleGuide}
              setVisibleGuide={setVisibleGuide}
            />
          </div>
        </div>
      </div>
    </div>
  )

  function MobileHeader ({}) {
    return (
      <div className='flex flex-col w-full px-4 py-[11.5px]'>
        <UserStatus chat={chat} logout={logout} />
        <div className='text-2xl font-bold'>Live Stream</div>
      </div>
    )
  }
}
