import UserStatus from './userStatus'
import ChatWidget from '../widget-chat/chatWidget'
import StreamWidget from '../widget-stream/streamWidget'
import MatchStatsWidget from '../widget-matchstats/matchStatsWidget'
import AdvertsWidget from '../widget-adverts/advertsWidget'
import PollsWidget from '../widget-polls/pollsWidget'
import BotWidget from '../widget-bot/botWidget'
import LiveCommentaryWidget from '../widget-liveCommentary/liveCommentaryWidget'

export default function PreviewTablet ({ chat }) {
  const defaultWidgetClasses =
    'rounded-lg border-1 border-navy200 bg-white shadow-sm'

  return (
    <div className='w-full border-4 border-navy100 rounded-3xl bg-black px-5 py-[14px] max-h-[780px]'>
      <div className='w-full rounded-2xl bg-navy50 text-neutral-900 h-full'>
        <TabletHeader />
        <div className='flex flex-row px-6 gap-3 w-full aspect-[529/352] max-h-[680px] overflow-y-auto overscroll-none rounded-b-2xl'>
          <div className='w-1/2 flex flex-col gap-4'>
            <StreamWidget className={`${defaultWidgetClasses}`} chat={chat} />
            <MatchStatsWidget
              className={`${defaultWidgetClasses}`}
              chat={chat}
            />
            <AdvertsWidget className={`${defaultWidgetClasses}`} chat={chat} />
          </div>
          <div className='w-1/2 flex flex-col gap-4'>
            <ChatWidget className={`${defaultWidgetClasses}`} chat={chat} />
            <PollsWidget className={`${defaultWidgetClasses}`} chat={chat} />
            <BotWidget className={`${defaultWidgetClasses}`} chat={chat} />
            <LiveCommentaryWidget
              className={`${defaultWidgetClasses}`}
              chat={chat}
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
        <UserStatus chat={chat} />
      </div>
    )
  }
}
