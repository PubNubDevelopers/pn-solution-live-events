import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { streamReactionsChannelId } from '../data/testData'
import { PlayCircle } from '../side-menu/sideMenuIcons'
import ReactPlayer from 'react-player'

export default function StreamWidget ({
  className,
  isMobilePreview,
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide
}) {
  //  ToDo: Currently this is only the occupancy from the Data Controls - need to add any other real presence count (including ourselves)
  const [occupancy, setOccupancy] = useState(0)
  const [videoUrl, setVideoUrl] = useState(
    'https://v.ftcdn.net/05/31/66/96/700_F_531669685_zuA1YSiPFLmRrPPzBG2iryBnmDkfYqzS_ST.mp4'
  )
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [videoProgress, setVideoProgress] = useState(0)
  const playerRef = useRef<ReactPlayer>(null)

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

  function onVideoReady (ev) {
    console.log('Video ready')
    console.log(ev)
  }

  function onVideoStart() {
    console.log('Video starting')
  }

  function onVideoPlay() {
    console.log('Video playing')
    playerRef.current?.seekTo(videoProgress, 'seconds')
  }

  function onVideoProgress (ev) {
    console.log(ev)
    console.log(`Played (seconds): ${ev.playedSeconds}`)
    setVideoProgress(ev.playedSeconds)
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
          className='absolute left-0 top-0 text-sm text-cherry bg-white/70 cursor-pointer font-semibold'
          onClick={() => {
            setIsVideoPlaying(!isVideoPlaying)
          }}
        >
          {`TEST: ${isVideoPlaying ? 'PAUSE' : 'START'} VIDEO STREAM`}
        </div>

        <div
          id={`live-stream-${isMobilePreview}`}
          className={`bg-neutral200 ${
            isMobilePreview ? '' : ''
          } pointer-events-none`}
        >
          {isVideoPlaying == true ? (
            <ReactPlayer
              ref={playerRef}
              url={videoUrl}
              playing={isVideoPlaying}
              controls={false}
              width={isMobilePreview ? 418 : 698}
              height={isMobilePreview ? 235 : 393}
              loop={true}
              muted={true}
              pip={false}
              onReady={ev => onVideoReady(ev)}
              onStart={() => onVideoStart()}
              onPlay={() => onVideoPlay()}
              onProgress={ev => onVideoProgress(ev)}
              progressInterval={1000}
            />
          ) : (
            <div
              className={`flex flex-row items-center justify-center ${
                isMobilePreview ? 'w-[418px]' : 'w-[698px]'
              } ${isMobilePreview ? 'h-[235px]' : 'h-[393px]'}`}
            >
              <div className='flex flex-col items-center'>
                <LiveStreamIcon />{' '}
                <div className='font-medium text-lg'>Waiting for stream...</div>
              </div>
            </div>
          )}
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
          <RemoveRedEye />
          {occupancy.toLocaleString(undefined, { maximumFractionDigits: 2 })}
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

const LiveStreamIcon = props => {
  return (
    <svg
      id='Icons'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      width='100'
      height='100'
      {...props}
    >
      <defs>
        <style>
          {
            '.cls-1,.cls-2{stroke:#161c2d;fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}.cls-2{stroke:#cd2026}'
          }
        </style>
      </defs>
      <ellipse className='cls-2' cx={50.63} cy={47.63} rx={19.24} ry={19.48} />
      <path
        className='cls-1'
        d='M45.96 40.8L45.96 55.27 58.83 48.03 45.96 40.8z'
      />
      <path className='cls-2' d='M34.91 79.81L34.91 88.39 39.97 88.39' />
      <path
        className='cls-2'
        d='M67.55 79.81L62.49 79.81 62.49 88.39 67.55 88.39'
      />
      <path className='cls-2' d='M45.03 79.81L45.03 88.39' />
      <path className='cls-2' d='M63.02 83.55L66.24 83.55' />
      <path className='cls-2' d='M49.95 79.88L53.41 88.39 56.87 79.81' />
      <path
        className='cls-1'
        d='M73.44 82.67c7.04-2.96 12-9.97 12-18.15V31.26c0-10.85-8.71-19.65-19.46-19.65H34.02c-10.75 0-19.46 8.8-19.46 19.65v33.26c0 8.19 4.97 15.21 12.03 18.16'
      />
    </svg>
  )
}
