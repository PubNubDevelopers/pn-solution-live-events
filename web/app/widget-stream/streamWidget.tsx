import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { streamReactionsChannelId } from '../data/testData'
import { PlayCircle } from '../side-menu/sideMenuIcons'

export default function StreamWidget ({
  className,
  isMobilePreview,
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide
}) {
  //const [activeChannel, setActiveChannel] = useState<Channel | null>(null)
  const [occupancy, setOccupancy] = useState(1)

  useEffect(() => {
    if (!chat) return
    const channel = chat.sdk.channel(streamReactionsChannelId)
    const subscription = channel.subscription({ receivePresenceEvents: false })
    subscription.onMessage = messageEvent => {
      messageReceived(messageEvent)
    }
    subscription.subscribe()
    return () => {
      subscription.unsubscribe()
    }
  }, [chat])

  function messageReceived (messageEvent) {
    if (messageEvent.message.type == 'reaction') {
      //  Somebody has sent a reaction (including myself)
      const emojiElement = document.createElement('div')
      emojiElement.textContent = messageEvent.message.text
      emojiElement.className =
        'absolute text-3xl pointer-events-none animate-float-up'
      emojiElement.style.left = `${Math.random() * 80 + 10}%`
      emojiElement.style.top = '80%' // Start near the bottom
      emojiElement.style.position = 'absolute'
      const container = document.getElementById(
        `live-stream-${isMobilePreview}`
      )
      container?.appendChild(emojiElement)
      emojiElement.addEventListener('animationend', () => {
        container?.removeChild(emojiElement)
      })
      //  Catch all (if switch between tablet and mobile views)
      setTimeout(() => {
        try {
          container?.removeChild(emojiElement)
        } catch {}
      }, 2000)
    } else if (messageEvent.message.type == 'occupancyControl') {
      setOccupancy(+messageEvent.message.text)
    }
  }

  async function emojiClicked (emoji) {
    if (!chat) return
    await chat.sdk.publish({
      message: { text: `${emoji}`, type: 'reaction' },
      channel: streamReactionsChannelId
    })
  }

  return (
    <div className={`${className}`}>
      <div className='relative'>
        <div
          id={`live-stream-${isMobilePreview}`}
          className='text-5xl bg-neutral200 min-h-96'
        >
          I am the Streaming Widget
        </div>
        <div className='absolute top-0 right-0'>
          <LiveOccupancyCount />
        </div>
      </div>
      <ReactionsBar />
    </div>
  )

  function ReactionsBar () {
    return (
      <div className='flex flex-row gap-2 items-center justify-center bg-navy900 py-2 px-4  '>
        <Reaction emoji='🙌' />
        <Reaction emoji='😭' />
        <Reaction emoji='😡' />
        <Reaction emoji='😴' />
        <Reaction emoji='🔥' />
        <Reaction emoji='🎉' />
      </div>
    )
  }

  function Reaction ({ emoji }) {
    return (
      <div
        className={`bg-white/10 ${
          isMobilePreview ? 'w-8 h-8 text-xl' : 'w-10 h-10 text-2xl'
        } rounded-full px-1.5 pt-1 text-center cursor-pointer`}
        onClick={e => {
          emojiClicked(emoji)
          e.stopPropagation()
        }}
      >
        {emoji}
      </div>
    )
  }

  function LiveOccupancyCount () {
    return (
      <div className='flex flex-row h-7 text-white bg-cherry shadow-md rounded-l-full rounded-r-full'>
        <div className='flex flex-row px-2 py-1 gap-1 items-center'>
          <PlayCircle width={20} height={20} />
          LIVE
        </div>
        <div className='flex flex-row px-2 py-1 gap-1 items-center border-l-2 border-white/20'>
          <RemoveRedEye />{occupancy.toLocaleString(undefined, {maximumFractionDigits:2})}
        </div>
      </div>
    )
  }


}

const RemoveRedEye = props => {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      height='20'
      role='presentation'
      viewBox='0 0 20 20'
      width='20'
      {...props}
    >
      <g id='remove_red_eye'>
        <path
          id='Vector'
          d='M10.0007 5.41667C13.159 5.41667 15.9757 7.19167 17.3507 10C15.9757 12.8083 13.1673 14.5833 10.0007 14.5833C6.83398 14.5833 4.02565 12.8083 2.65065 10C4.02565 7.19167 6.84232 5.41667 10.0007 5.41667ZM10.0007 3.75C5.83398 3.75 2.27565 6.34167 0.833984 10C2.27565 13.6583 5.83398 16.25 10.0007 16.25C14.1673 16.25 17.7257 13.6583 19.1673 10C17.7257 6.34167 14.1673 3.75 10.0007 3.75ZM10.0007 7.91667C11.1507 7.91667 12.084 8.85 12.084 10C12.084 11.15 11.1507 12.0833 10.0007 12.0833C8.85065 12.0833 7.91732 11.15 7.91732 10C7.91732 8.85 8.85065 7.91667 10.0007 7.91667ZM10.0007 6.25C7.93398 6.25 6.25065 7.93333 6.25065 10C6.25065 12.0667 7.93398 13.75 10.0007 13.75C12.0673 13.75 13.7507 12.0667 13.7507 10C13.7507 7.93333 12.0673 6.25 10.0007 6.25Z'
          fill='currentColor'
        />
      </g>
    </svg>
  )
}
