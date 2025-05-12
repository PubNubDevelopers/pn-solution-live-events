import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  streamReactionsChannelId,
  clientVideoControlChannelId,
  serverVideoControlChannelId,
  illuminateUpgradeReaction,
  dataControlOccupancyChannelId,
  AlertType,
  streamUrl
} from '../data/constants'
import { PlayCircle } from '../side-menu/sideMenuIcons'
import Alert from '../components/alert'
import GuideOverlay from '../components/guideOverlay'
import LiveStreamPoll from '../widget-polls/liveStreamPoll'
import ReactPlayer from 'react-player'
import { actionCompleted } from 'pubnub-demo-integration'

export default function StreamWidget ({
  className,
  isMobilePreview,
  chat,
  isGuidedDemo,
  guidesShown,
  visibleGuide,
  setVisibleGuide,
  awardPoints
}) {
  const [occupancy, setOccupancy] = useState(0)
  const [realOccupancy, setRealOccupancy] = useState(0)
  const [alert, setAlert] = useState<{
    points: number | null
    body: string
  } | null>(null)
  const emojiMap = {
    '👏': '🙌',
    '😢': '😭',
    '😡': '🤬',
    '😮': '🤯',
    '🔥': '😎',
    '🎉': '🥳'
  }

  const [reactions, setReactions] = useState<
    { emoji: string; upgraded: boolean }[]
  >([
    { emoji: '👏', upgraded: false },
    { emoji: '😢', upgraded: false },
    { emoji: '😡', upgraded: false },
    { emoji: '😮', upgraded: false },
    { emoji: '🔥', upgraded: false },
    { emoji: '🎉', upgraded: false }
  ])
  const [videoUrl, setVideoUrl] = useState(streamUrl)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isVideoStarted, setIsVideoStarted] = useState(false)
  const actualVideoProgressRef = useRef(0)
  const [requestedVideoProgress, setRequestedVideoProgress] = useState(0)
  const [muted, setMuted] = useState(true)
  const playerRef = useRef<ReactPlayer>(null)

  useEffect(() => {
    //  Handle all types of message other than video control
    if (!chat) return
    //  Reactions
    const reactionsChannel = chat.sdk.channel(streamReactionsChannelId)
    const reactionsSubscription = reactionsChannel.subscription({
      receivePresenceEvents: true
    })
    reactionsSubscription.onMessage = messageEvent => {
      handleReaction(messageEvent)
    }
    reactionsSubscription.onPresence = (presenceEvent: any) => {
      if (presenceEvent?.occupancy > 0) {
        setRealOccupancy(presenceEvent.occupancy)
      }
    }
    chat.sdk
      .hereNow({ channels: [streamReactionsChannelId] })
      .then(hereNowResult => {
        if (hereNowResult) {
          setRealOccupancy(hereNowResult.totalOccupancy + 1)
        }
      })
    reactionsSubscription.subscribe()

    //  Occupancy updates from Data Controls
    const occupancyChannel = chat.sdk.channel(dataControlOccupancyChannelId)
    const occupancySubscription = occupancyChannel.subscription({
      receivePresenceEvents: false
    })
    occupancySubscription.onMessage = messageEvent => {
      setOccupancy(+messageEvent.message.streamOccupancy)
    }
    occupancySubscription.subscribe()

    //  Illuminate: Upgrade emoji
    const illuminateEmojiChannel = chat.sdk.channel(illuminateUpgradeReaction)
    const illuminateEmojiSubscription = illuminateEmojiChannel.subscription({
      receivePresenceEvents: false
    })
    illuminateEmojiSubscription.onMessage = messageEvent => {
      //  Received a request to upgrade a specific emoji
      const emojiToUpgrade = messageEvent.message.emoji
      const replacementEmoji = messageEvent.message.replacementEmoji
      upgradeEmoji(emojiToUpgrade, replacementEmoji)
    }
    illuminateEmojiSubscription.subscribe()
    return () => {
      reactionsSubscription.unsubscribe()
      occupancySubscription.unsubscribe()
      illuminateEmojiSubscription.unsubscribe()
    }
  }, [chat])

  useEffect(() => {
    if (!chat) return
    //  Video control
    const videoControlChannel = chat.sdk.channel(clientVideoControlChannelId)
    const videoControlSubscription = videoControlChannel.subscription({
      receivePresenceEvents: false
    })
    videoControlSubscription.onMessage = messageEvent => {
      handleVideoControl(
        messageEvent,
        isVideoPlayingRef.current,
        isVideoStartedRef.current
      )
    }
    videoControlSubscription.subscribe()
    return () => {
      videoControlSubscription.unsubscribe()
    }
  }, [chat])

  const isVideoPlayingRef = useRef(isVideoPlaying)
  const isVideoStartedRef = useRef(isVideoStarted)
  useEffect(() => {
    isVideoPlayingRef.current = isVideoPlaying
    isVideoStartedRef.current = isVideoStarted
  }, [isVideoPlaying, isVideoStarted])

  const previousReactionsRef = useRef(reactions)

  useEffect(() => {
    const previousReactions = previousReactionsRef.current
    const hasChanged = reactions.some(
      (reaction, index) =>
        reaction.emoji !== previousReactions[index]?.emoji ||
        reaction.upgraded !== previousReactions[index]?.upgraded
    )

    if (hasChanged) {
      newEmojiAlert()
    }

    previousReactionsRef.current = reactions
  }, [reactions])

  function handleReaction (messageEvent) {
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
    }
  }

  function handleVideoControl (messageEvent, isVideoPlaying, isVideoStarted) {
    if (messageEvent.message.type == 'START_STREAM') {
      actualVideoProgressRef.current = 0
      setIsVideoPlaying(true)
    } else if (messageEvent.message.type == 'STATUS') {
      if (messageEvent.message.params.videoStarted) {
        setIsVideoPlaying(true)
        setRequestedVideoProgress(0)
        playerRef.current?.seekTo(0, 'seconds')
      }
      if (messageEvent.message.params.videoEnded) {
        //  FYI video is about to loop
        setIsVideoPlaying(false)
      }
      actualVideoProgressRef.current =
        messageEvent.message.params.playbackTime / 1000
      if (!isVideoPlaying) {
        setIsVideoPlaying(true)
      }
      if (!isVideoStarted) {
        //  The video is not playing locally, but the stream is running on the back end.  Join game in progress
        setRequestedVideoProgress(actualVideoProgressRef.current)
      }
      //console.log(actualVideoProgressRef.current)
      //console.log(messageEvent.message.params.playbackTime / 1000)
    } else if (messageEvent.message.type == 'END_STREAM') {
      setIsVideoPlaying(false)
      setIsVideoStarted(false)
      actualVideoProgressRef.current = 0
      setRequestedVideoProgress(0)
    } else if (messageEvent.message.type == 'SEEK') {
      const requestedTime = messageEvent.message.params.playbackTime / 1000
      if (requestedTime) {
        setRequestedVideoProgress(requestedTime)
        if (isVideoPlaying) {
          playerRef.current?.seekTo(requestedTime, 'seconds')
        }
      }
    }
  }

  function onVideoReady (ev) {
    //console.log('Video ready')
  }

  function onVideoStart () {
    setIsVideoStarted(true)
    if (requestedVideoProgress > 0) {
      playerRef.current?.seekTo(requestedVideoProgress, 'seconds')
    }
  }

  function onVideoPlay () {
    //console.log('Video playing')
    //  Note: Get an onVideoPlay every time you seek
  }

  function onVideoProgress (ev) {
    //actualVideoProgressRef.current = ev.playedSeconds
  }

  function upgradeEmoji (
    emoji: string,
    overrideDefaultEmoji: string | null = null
  ) {
    setReactions(prevReactions =>
      prevReactions.map(reaction =>
        reaction.emoji === emoji
          ? {
              ...reaction,
              emoji:
                overrideDefaultEmoji ||
                (emojiMap[reaction.emoji] ?? reaction.emoji), // Add fallback for undefined emojiMap value
              upgraded: true
            }
          : reaction
      )
    )
  }

  async function emojiClicked (emoji) {
    if (!chat) return
    await chat.sdk.publish({
      message: { text: `${emoji}`, type: 'reaction' },
      channel: streamReactionsChannelId
    })
  }

  function newEmojiAlert () {
    setAlert({ points: null, body: 'New emoji unlocked' })
  }

  return (
    <div className={`${className}`}>
      <div className='relative'>
        <div
          id={`live-stream-${isMobilePreview}`}
          className={`bg-neutral200 ${isMobilePreview ? '' : ''}`}
        >
          {isVideoPlaying == true ? (
            <div className='pointer-events-none'>
              <ReactPlayer
                ref={playerRef}
                url={videoUrl}
                playing={isVideoPlaying}
                controls={false}
                width={isMobilePreview ? 418 : 698}
                height={isMobilePreview ? 235 : 393}
                loop={false}
                muted={isMobilePreview ? true : muted}
                pip={false}
                onReady={ev => onVideoReady(ev)}
                onStart={() => onVideoStart()}
                onPlay={() => onVideoPlay()}
                onProgress={ev => onVideoProgress(ev)}
                progressInterval={1000}
              />
            </div>
          ) : (
            <div
              className={`flex flex-row items-center justify-center ${
                isMobilePreview ? 'w-[418px]' : 'w-[698px]'
              } ${isMobilePreview ? 'h-[235px]' : 'h-[393px]'}`}
            >
              <div
                className={`flex flex-col items-center ${
                  isGuidedDemo && 'cursor-pointer'
                }`}
                onClick={() => {
                  if (isGuidedDemo) {
                    chat.sdk.publish({
                      message: {
                        type: 'START_STREAM'
                      },
                      channel: serverVideoControlChannelId
                    })
                  }
                }}
              >
                <LiveStreamIcon />{' '}
                <div className='font-medium text-lg'>Waiting for stream...</div>
              </div>
            </div>
          )}
        </div>
        <div className='absolute top-2 right-1'>
          <GuideOverlay
            id={'streamPresence'}
            guidesShown={guidesShown}
            visibleGuide={visibleGuide}
            setVisibleGuide={setVisibleGuide}
            text={
              <span>
                <span className='font-semibold'>Presence</span> provides you
                with offline and online user / device status as well as channel
                occupancy, meaning you can see how many users are present in a
                chat room or watching a live stream.
              </span>
            }
            xOffset={`right-[100px]`}
            yOffset={'top-[20px]'}
            flexStyle={'flex-row items-start'}
          />
          <LiveOccupancyCount />
        </div>
        {!isMobilePreview && (
          <div className='absolute bottom-4 right-4 z-50'>
            <VolumeButton />
          </div>
        )}
      </div>
      <GuideOverlay
        id={'reactionsBar1'}
        guidesShown={guidesShown}
        visibleGuide={visibleGuide}
        setVisibleGuide={setVisibleGuide}
        text={
          <span>
            If enough reactions are received you will trigger a{' '}
            <span className='font-semibold'>PubNub Illuminate</span> action to{' '}
            <span className='font-semibold'>upgrade the emoji</span>. PubNub
            Illuminate allows you to take action immediately when predefined
            conditions are reached, allowing you to experiment in real-time and
            gain actionable insights in milliseconds.
          </span>
        }
        xOffset={`left-[100px]`}
        yOffset={'bottom-[10px]'}
        flexStyle={'flex-row items-end'}
      />
      <GuideOverlay
        id={'reactionsBar2'}
        guidesShown={guidesShown}
        visibleGuide={visibleGuide}
        setVisibleGuide={setVisibleGuide}
        text={
          <span>
            Some emoji (😡) are configured to{' '}
            <span className='font-semibold'>
              trigger dynamic polls, or serve dynamic ads
            </span>{' '}
            - this is all handled by{' '}
            <span className='font-semibold'>PubNub Illuminate</span> which
            tracks the number of events in real-time, and who is making those
            events, allowing you to quickly refine your engagement strategy.
          </span>
        }
        xOffset={`right-[100px]`}
        yOffset={'bottom-[10px]'}
        flexStyle={'flex-row items-end'}
      />

      <ReactionsBar />

      <LiveStreamPoll
        isMobilePreview={isMobilePreview}
        chat={chat}
        isGuidedDemo={isGuidedDemo}
        guidesShown={guidesShown}
        visibleGuide={visibleGuide}
        setVisibleGuide={setVisibleGuide}
        awardPoints={awardPoints}
      />
    </div>
  )

  function ReactionsBar () {
    return (
      <>
        {alert && (
          <Alert
            type={AlertType.NEW_EMOJI}
            message={alert}
            onClose={() => {
              setAlert(null)
            }}
          />
        )}
        <div className='flex flex-row gap-2 items-center justify-center bg-navy900 py-2 px-4 text-'>
          {reactions.map((reaction, index) => (
            <Reaction
              key={index}
              emoji={reaction.emoji}
              upgraded={reaction.upgraded}
            />
          ))}
        </div>
      </>
    )
  }

  function Reaction ({ emoji, upgraded }) {
    return (
      <div
        className={`flex flex-row items-center justify-center ${
          upgraded ? 'bg-appYellow1/40' : 'bg-white/10'
        } ${
          isMobilePreview ? 'w-8 h-8 text-2xl' : 'w-10 h-10 text-3xl'
        } rounded-full px-1.5 pt-1 text-center cursor-pointer`}
        onClick={e => {
          emojiClicked(emoji)
          if (!isGuidedDemo) {
            //  This code is only used by the PubNub website
            actionCompleted({
              action: 'React to the stream with an emoji',
              blockDuplicateCalls: false,
              debug: false
            })
          }
          e.stopPropagation()
        }}
      >
        {emoji}
      </div>
    )
  }

  function LiveOccupancyCount () {
    const displayOccupancy = occupancy + realOccupancy
    useEffect(() => {
      if (occupancy > 50) {
        const interval = setInterval(() => {
          const randomPercentage = (Math.random() * 4 - 2) / 100 // Random value between -0.02 and +0.02
          setOccupancy(prev =>
            Math.max(0, Math.round(prev * (1 + randomPercentage)))
          )
        }, 3000)

        return () => clearInterval(interval)
      }
    }, [occupancy])
    return (
      <div className='flex flex-row h-7 text-white bg-cherry shadow-md rounded-l-full rounded-r-full'>
        <div className='flex flex-row px-2 py-1 gap-1 items-center'>
          <PlayCircle width={20} height={20} />
          LIVE
        </div>
        <div className='flex flex-row px-2 py-1 gap-1 items-center border-l-2 border-white/20 min-w-14'>
          <RemoveRedEye />
          {displayOccupancy.toLocaleString(undefined, {
            maximumFractionDigits: 2
          })}
        </div>
      </div>
    )
  }

  function VolumeButton () {
    return (
      <div
        className='text-white cursor-pointer'
        onClick={e => {
          e.stopPropagation()
          setMuted(!muted)
        }}
      >
        {muted ? <VolumeOffIcon /> : <VolumeOnIcon />}
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

const VolumeOffIcon = props => {
  return (
    <svg
      id='Icons'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      {...props}
    >
      <path
        d='M4.34005 2.93506L2.93005 4.34506L7.29005 8.70506L7.00005 9.00506H3.00005V15.0051H7.00005L12.0001 20.0051V13.4151L16.1801 17.5951C15.5301 18.0851 14.8001 18.4751 14.0001 18.7051V20.7651C15.3401 20.4651 16.5701 19.8451 17.6101 19.0151L19.6601 21.0651L21.0701 19.6551L4.34005 2.93506ZM10.0001 15.1751L7.83005 13.0051H5.00005V11.0051H7.83005L8.71005 10.1251L10.0001 11.4151V15.1751ZM19.0001 12.0051C19.0001 12.8251 18.8501 13.6151 18.5901 14.3451L20.1201 15.8751C20.6801 14.7051 21.0001 13.3951 21.0001 12.0051C21.0001 7.72506 18.0101 4.14506 14.0001 3.23506V5.29506C16.8901 6.15506 19.0001 8.83506 19.0001 12.0051ZM12.0001 4.00506L10.1201 5.88506L12.0001 7.76506V4.00506ZM16.5001 12.0051C16.5001 10.2351 15.4801 8.71506 14.0001 7.97506V9.76506L16.4801 12.2451C16.4901 12.1651 16.5001 12.0851 16.5001 12.0051Z'
        fill='currentColor'
      />
    </svg>
  )
}

const VolumeOnIcon = props => {
  return (
    <svg
      id='Icons'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      {...props}
    >
      <path
        d='M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM10 8.82998V15.17L7.83 13H5V11H7.83L10 8.82998ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z'
        fill='currentColor'
      />
    </svg>
  )
}
