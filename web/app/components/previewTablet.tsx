import UserStatus from './userStatus'
import ChatWidget from '../widget-chat/chatWidget'
import StreamWidget from '../widget-stream/streamWidget'
import MatchStatsWidget from '../widget-matchstats/matchStatsWidget'
import AdvertsWidget from '../widget-adverts/advertsWidget'
import PollsWidget from '../widget-polls/pollsWidget'
import BotWidget from '../widget-bot/botWidget'
import LiveCommentaryWidget from '../widget-liveCommentary/liveCommentaryWidget'

export default function PreviewTablet ({ chat, guidesShown, logout }) {
  const defaultWidgetClasses =
    'rounded-lg border-1 border-navy200 bg-white shadow-sm'

  return (
    <div className='w-full border-4 border-navy100 rounded-3xl bg-black px-5 py-[14px] sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px] max-h-[780px]'>
      <div className='w-full rounded-2xl bg-navy50 text-neutral-900 h-full overflow-y-auto overscroll-none'>
        <TabletHeader />
        <div className='flex flex-row px-6 gap-3 w-full h-full max-h-[680px] rounded-b-2xl'>
          <div className='w-3/5 flex flex-col gap-4'>
            <StreamWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={false}
              chat={chat}
              guidesShown={guidesShown}
            />
            <MatchStatsWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={false}
              chat={chat}
              guidesShown={guidesShown}
            />
            <AdvertsWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={false}
              chat={chat}
              guidesShown={guidesShown}
            />
          </div>
          <div className='w-2/5 flex flex-col gap-4'>
            <ChatWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={false}
              chat={chat}
              guidesShown={guidesShown}
            />
            <PollsWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={false}
              chat={chat}
              guidesShown={guidesShown}
            />
            <BotWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={false}
              chat={chat}
              guidesShown={guidesShown}
            />
            <LiveCommentaryWidget
              className={`${defaultWidgetClasses}`}
              isMobilePreview={false}
              chat={chat}
              guidesShown={guidesShown}
            />
          </div>
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
