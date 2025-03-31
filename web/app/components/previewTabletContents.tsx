import UserStatus from './userStatus'
import ChatWidget from '../widget-chat/chatWidget'
import StreamWidget from '../widget-stream/streamWidget'
import MatchStatsWidget from '../widget-matchstats/matchStatsWidget'
import AdvertsWidget from '../widget-adverts/advertsWidget'
import AdvertsOfferWidget from '../widget-adverts/advertsOfferWidget'
import PollsWidget from '../widget-polls/pollsWidget'
import BotWidget from '../widget-bot/botWidget'
import LiveCommentaryWidget from '../widget-liveCommentary/liveCommentaryWidget'

export default function TabletContents ({
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide,
  logout,
  showDynamicAd,  //  todo testing only... this should come from PubNub, not from app state
  heightConstrained = true
}) {
  const defaultWidgetClasses =
    'rounded-lg border-1 border-navy200 bg-white shadow-md'

  return (
    <div className='w-full rounded-2xl bg-navy50 text-neutral-900 h-full overflow-y-auto overscroll-none'>
      <TabletHeader />
      <div
        className={`flex flex-row px-6 gap-3 w-full h-full ${
          heightConstrained && 'min-h-[680px] max-h-[680px]'
        } rounded-b-2xl`}
      >
        <div className='w-3/5 flex flex-col gap-4'>
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
        <div className='w-2/5 flex flex-col gap-4'>
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
