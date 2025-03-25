import UserStatus from './userStatus'
import ChatWidget from '../widget-chat/chatWidget'
import StreamWidget from '../widget-stream/streamWidget'
import MatchStatsWidget from '../widget-matchstats/matchStatsWidget'
import AdvertsWidget from '../widget-adverts/advertsWidget'
import PollsWidget from '../widget-polls/pollsWidget'
import BotWidget from '../widget-bot/botWidget'
import LiveCommentaryWidget from '../widget-liveCommentary/liveCommentaryWidget'

export default function PreviewMobile ({ chat }) {
  const defaultWidgetClasses =
    'rounded-lg border-1 border-navy200 bg-white shadow-sm'

  return (
    <div className='w-[420px] border-4 border-navy100 rounded-3xl bg-black px-2 py-[14px] h-[874px] max-h-[874px]'>
      <div className='w-full rounded-2xl bg-navy50 text-neutral-900 h-full'>
        <MobileHeader />
        <div className='flex flex-col px-2 gap-6 w-full max-h-[744px] overflow-y-auto overscroll-none rounded-b-2xl'>
          <StreamWidget className={`${defaultWidgetClasses}`} chat={chat} />
          <ChatWidget className={`${defaultWidgetClasses}`} chat={chat} />
          <PollsWidget className={`${defaultWidgetClasses}`} chat={chat} />
          <MatchStatsWidget className={`${defaultWidgetClasses}`} chat={chat} />
          <BotWidget className={`${defaultWidgetClasses}`} chat={chat} />
          <LiveCommentaryWidget
            className={`${defaultWidgetClasses}`}
            chat={chat}
          />
          <AdvertsWidget className={`${defaultWidgetClasses}`} chat={chat} />
        </div>
      </div>
    </div>
  )

  function MobileHeader ({}) {
    return (
      <div className='flex flex-col w-full px-4 py-[11.5px]'>
        <UserStatus chat={chat} />
        <div className='text-2xl font-bold'>Live Stream</div>
      </div>
    )
  }
}
