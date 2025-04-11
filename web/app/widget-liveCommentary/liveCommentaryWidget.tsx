import { useState, useEffect, useRef } from 'react'
import { liveCommentaryChannelId } from '../data/constants'
import GuideOverlay from '../components/guideOverlay'
import { Channel, Message as pnMessage } from '@pubnub/chat'

export default function LiveCommentaryWidget ({
  className,
  isMobilePreview,
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide
}) {
  const liveCommentaryScrollRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<any[]>([])
  const [scrolledToBottom, setScrolledToBottom] = useState(true)

  useEffect(() => {
    if (!chat) return
    const channel = chat.sdk.channel(liveCommentaryChannelId)
    const subscription = channel.subscription({ receivePresenceEvents: false })
    subscription.onMessage = messageEvent => {
      setMessages(messages => {
        return uniqueById([...messages, messageEvent])
      })
    }
    subscription.subscribe()
    return () => {
      subscription.unsubscribe()
    }
  }, [chat])

  useEffect(() => {
    //  Scroll the message list when a new message is received
    if (!liveCommentaryScrollRef.current) return
    if (!scrolledToBottom) return

    setTimeout(() => {
      if (liveCommentaryScrollRef.current) {
        liveCommentaryScrollRef.current.scrollTop =
          liveCommentaryScrollRef.current?.scrollHeight
      }
    }, 10) //  Some weird timing issue
  }, [messages])

  function handleScroll (e) {
    const scrollTop = e.currentTarget.scrollTop
    const scrollHeight = e.currentTarget.scrollHeight
    const clientHeight = e.currentTarget.clientHeight
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setScrolledToBottom(true)
    } else {
      setScrolledToBottom(false)
    }
  }

  function uniqueById (items) {
    const set = new Set()
    return items.filter(item => {
      const isDuplicate = set.has(item.timetoken)
      set.add(item.timetoken)
      return !isDuplicate
    })
  }

  return (
    <div className={`${className} px-6 pt-3 pb-4`}>
      <div className='font-semibold text-base pb-3'>Live Commentary</div>
      <GuideOverlay
        id={'liveCommentary'}
        guidesShown={guidesShown}
        visibleGuide={visibleGuide}
        setVisibleGuide={setVisibleGuide}
        text={
          <span>
            PubNub Core Services includes a{' '}
            <span className='font-semibold'>Pub/Sub Event API</span>, allowing
            for{' '}
            <span className='font-semibold'>
              unlimited channels, message persistence, channel groups and
              multiplexing
            </span>
            . Live commentary is delivered to any number of subscribed users as
            they happen.
          </span>
        }
        xOffset={`right-[50px]`}
        yOffset={'top-[10px]'}
        flexStyle={'flex-row items-start'}
      />

      {!scrolledToBottom && (
        <SkipToLatestButton liveCommentaryScrollRef={liveCommentaryScrollRef} />
      )}
      <div
        className='flex flex-col gap-3 min-h-64 max-h-64 overflow-y-auto overscroll-none'
        onScroll={handleScroll}
        ref={liveCommentaryScrollRef}
      >
        {messages.map(message => {
          return (
            <CommentaryRow
              key={message.timetoken}
              text={message.message.text}
              timeCode={message.message.timeCode}
            />
          )
        })}
      </div>
    </div>
  )
}

function CommentaryRow ({ text, timeCode }) {
  return (
    <div className='flex flex-row gap-2 items-center justify-between font-normal text-sm'>
      <div className=''>{text}</div>
      <div className='text-neutral500'>{timeCode}</div>
    </div>
  )
}

function SkipToLatestButton ({ liveCommentaryScrollRef }) {
  function scrollToBottom (e) {
    if (liveCommentaryScrollRef.current) {
      liveCommentaryScrollRef.current.scrollTop =
        liveCommentaryScrollRef.current?.scrollHeight
    }
    e.stopPropagation()
  }
  return (
    <div className='relative w-full'>
      <div className='absolute w-full'>
        <div className='flex justify-center'>
          <div
            className='px-3 py-1 w-fit min-h-8 max-h-8 font-medium text-sm bg-navy50 border-1 border-navy300 rounded-md shadow-sm cursor-pointer'
            onClick={e => scrollToBottom(e)}
          >
            Skip to latest
          </div>{' '}
        </div>
      </div>
    </div>
  )
}
