import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  streamReactionsChannelId,
  clientVideoControlChannelId,
  illuminateTestChannelId,
  AlertType,
  streamUrl
} from '../data/constants'
import { PlayCircle } from '../side-menu/sideMenuIcons'
import Alert from '../components/alert'
import {
  ActivitiesIcon,
  ThumbsDownIcon,
  AwardIcon,
  CelebrateSuccessIcon
} from './streamWidgetIcons'
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
  const [actualVideoProgress, setActualVideoProgress] = useState(0)
  const [requestedVideoProgress, setRequestedVideoProgress] = useState(0)
  const playerRef = useRef<ReactPlayer>(null)
  //  ToDo - Remove test poll when integrate with back end
  const testPoll = {
    id: 1,
    title: 'Win 10 points for a correct prediction',
    victoryPoints: 10,
    pollType: 'match', //  The poll appears below the stream
    isPollOpen: true,
    answered: false,
    correctOption: 2, //  In production this would be part of the results message
    options: [
      { id: 1, text: 'Real Madrid' },
      { id: 2, text: 'Man City' },
      { id: 3, text: 'Draw' }
    ]
  }
  //  ToDo handle points awards when user wins a poll
  //  todo currently the poll is answered locally, so if you switch from mobile to tablet, answers are lost.  When integrate with back end changes should persist automatically (test this)
  //  ToDo when receive a new poll, ensure only polls whose pollType == 'match' are considered for the livestream poll
  const [currentPoll, setCurrentPoll] = useState(testPoll)
  const [currentPollAnswer, setCurrentPollAnswer] = useState<{
    id: number
    text: string
  } | null>(null)

  useEffect(() => {
    if (!chat) return
    //  Reactions
    const channel = chat.sdk.channel(streamReactionsChannelId)
    const subscription = channel.subscription({ receivePresenceEvents: false })
    subscription.onMessage = messageEvent => {
      handleReaction(messageEvent)
    }
    subscription.subscribe()
    //  Video control
    const videoControlChannel = chat.sdk.channel(clientVideoControlChannelId)
    const videoControlSubscription = videoControlChannel.subscription({
      receivePresenceEvents: false
    })
    videoControlSubscription.onMessage = messageEvent => {
      handleVideoControl(messageEvent, isVideoPlaying)
    }
    videoControlSubscription.subscribe()
    //  Illuminate test
    const illuminateTestChannel = chat.sdk.channel(illuminateTestChannelId)
    const illuminateTestSubscription = illuminateTestChannel.subscription({
      receivePresenceEvents: false
    })
    illuminateTestSubscription.onMessage = messageEvent => {
      console.log(messageEvent)
    }
    illuminateTestSubscription.subscribe()
    return () => {
      subscription.unsubscribe()
      videoControlSubscription.unsubscribe()
      illuminateTestSubscription.unsubscribe()
    }
  }, [chat, isVideoPlaying])

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
    } else if (messageEvent.message.type == 'occupancyControl') {
      setOccupancy(+messageEvent.message.text)
    }
  }

  function handleVideoControl (messageEvent, isVideoPlaying) {
    if (messageEvent.message.type == 'START_STREAM') {
      setActualVideoProgress(0)
      setIsVideoPlaying(true)
    } else if (messageEvent.message.type == 'STATUS') {
      if (messageEvent.message.params.videoStarted) {
        //  todo handle video looping
        setIsVideoPlaying(true)
        setRequestedVideoProgress(0)
        playerRef.current?.seekTo(0, 'seconds')
      }
      if (messageEvent.message.params.videoEnded) {
        //  FYI video is about to loop
        setIsVideoPlaying(false)
      }
      const actualVideoProgress =
        messageEvent.message.params.playbackTime / 1000
      setActualVideoProgress(actualVideoProgress)
      if (!isVideoPlaying) {
        //  The video is not playing locally, but the stream is running on the back end.  Join game in progress
        setRequestedVideoProgress(actualVideoProgress)
        setIsVideoPlaying(true)
      }
    } else if (messageEvent.message.type == 'END_STREAM') {
      setIsVideoPlaying(false)
      setActualVideoProgress(0)
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
    console.log('Video ready')
    console.log(ev)
  }

  function onVideoStart () {
    console.log('Video starting')
    //  todo does this logic of skipping to the requested time work for a large video we are host ourselves?
    if (requestedVideoProgress > 0) {
      console.log('seeking to ' + requestedVideoProgress)
      playerRef.current?.seekTo(requestedVideoProgress, 'seconds')
    }
  }

  function onVideoPlay () {
    console.log('Video playing')
    //  todo: This doesn't work for YouTube videos FYI as you get a videoPlay callback
    //  every time you seek (it seems).  I wouldn't trust this logic if the video is slow to load, but I need to rework the video sync logic anyway.
    //if (videoProgress != 0) {
    //  playerRef.current?.seekTo(videoProgress, 'seconds')
    //}
  }

  function onVideoProgress (ev) {
    //console.log(ev)
    //console.log(`Played (seconds): ${ev.playedSeconds}`)
    setActualVideoProgress(ev.playedSeconds)
  }

  function upgradeEmoji (emoji: string, overrideDefaultEmoji: string | null = null) {
    setReactions(
      reactions.map(reaction =>
        reaction.emoji === emoji
          ? {
              ...reaction,
              emoji:
                overrideDefaultEmoji ||
                emojiMap[reaction.emoji] ||
                reaction.emoji,
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

  async function todoRemoveThisSendTestMessage (e, messageType, params) {
    e.stopPropagation()
    if (!chat) return
    await chat.sdk.publish({
      message: {
        type: messageType,
        params: params
      },
      channel: clientVideoControlChannelId
    })
  }

  function newEmojiAlert () {
    setAlert({ points: null, body: 'New emoji unlocked' })
  }

  return (
    <div className={`${className}`}>
      <div className='relative'>
        <div
          className='absolute left-0 top-0 text-sm text-cherry bg-white/70 cursor-pointer font-semibold'
          //onClick={() => {
          //  setIsVideoPlaying(!isVideoPlaying)
          //}}
        >
          {/*`TEST: ${isVideoPlaying ? 'PAUSE' : 'START'} VIDEO STREAM`*/}
          <div
            className=''
            onClick={e => {
              todoRemoveThisSendTestMessage(e, 'START_STREAM', {})
            }}
          >
            START STREAM
          </div>
          <div
            className=''
            onClick={e => {
              todoRemoveThisSendTestMessage(e, 'END_STREAM', {})
            }}
          >
            STOP STREAM
          </div>
          <div
            className=''
            onClick={e => {
              todoRemoveThisSendTestMessage(e, 'SEEK', {
                playbackTime: 5000
              })
            }}
          >
            SEEK STREAM (5s)
          </div>
          <div
            className=''
            onClick={e => {
              todoRemoveThisSendTestMessage(e, 'STATUS', {
                playbackTime: 10000
              })
            }}
          >
            JOIN LATE (video at 10s)
          </div>
          <div
            className=''
            onClick={e => {
              todoRemoveThisSendTestMessage(e, 'STATUS', {
                playbackTime: 0,
                videoStarted: true
              })
            }}
          >
            Video has LOOPED
          </div>
          <div
            className=''
            onClick={e => {
              todoRemoveThisSendTestMessage(e, 'STATUS', {
                playbackTime: 100000,
                videoEnded: true
              })
            }}
          >
            Video has ENDED
          </div>
          <div
            className=''
            onClick={e => {
              newEmojiAlert()
            }}
          >
            Emoji Unlocked Animation
          </div>
          <div
            className=''
            onClick={e => {
              //upgradeEmoji('👏', '🤩')
              upgradeEmoji('😮')
              //upgradeEmoji('👏')
            }}
          >
            Emoji Unlocked shock
          </div>
          <div
            className=''
            onClick={e => {
              upgradeEmoji('👏', '🤩')
              //upgradeEmoji('😮')
              //upgradeEmoji('👏')
            }}
          >
            Emoji Unlocked Clap with new default
          </div>
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
              loop={false}
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
      {/* ToDo: Remove test code */}
      <div className='relative'>
        <div
          className='absolute left-0 top-0 text-sm text-cherry bg-white/70 cursor-pointer font-semibold'
          onClick={() => {
            if (currentPoll) {
              setCurrentPoll({
                ...currentPoll,
                isPollOpen: !currentPoll.isPollOpen,
                answered: !currentPoll.isPollOpen ? false : currentPoll.answered
              })
            }
          }}
        >
          {`TEST: ${currentPoll?.isPollOpen ? 'CLOSE POLL' : 'OPEN POLL'}`}
        </div>
      </div>

      {currentPoll && <LiveStreamPoll poll={currentPoll} />}
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
              console.log('setting alert to null')
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
        className={`flex flex-row items-center justify-center ${upgraded ? 'bg-brandAccent3/40' : 'bg-white/10'} ${
          isMobilePreview ? 'w-8 h-8' : 'w-10 h-10 text-2xl'
        } ${upgraded && (isMobilePreview ? 'text-2xl' : 'text-3xl')} ${!upgraded && isMobilePreview && 'text-xl'} rounded-full px-1.5 pt-1 text-center cursor-pointer`}
        onClick={e => {
          emojiClicked(emoji)
          e.stopPropagation()
        }}
      >
        {emoji}
      </div>
    )
  }

  function LiveStreamPoll ({ poll }) {
    return (
      <>
        {poll.answered && poll.isPollOpen && (
          <LiveStreamPollAnswered poll={poll} />
        )}
        {!poll.answered && poll.isPollOpen && (
          <LiveStreamPollQuestion poll={poll} />
        )}
        {poll.answered && !poll.isPollOpen && (
          <LivePollResults
            poll={poll}
            victorious={poll.correctOption == currentPollAnswer?.id}
          />
        )}
        {!poll.answered && !poll.isPollOpen && <LivePollNotAvailable />}
      </>
    )
  }

  function LiveStreamPollQuestion ({ poll }) {
    return (
      <>
        {' '}
        <div
          className={`flex ${
            isMobilePreview ? 'flex-col' : 'flex-row'
          } items-center justify-between px-6 py-3 gap-6`}
        >
          <div className='text-neutral700 text-sm font-normal'>
            {poll.title ?? 'Unspecified Poll'}
          </div>
          <div className='flex flex-row gap-3'>
            {poll?.options?.map((option, index) => (
              <LiveStreamPollButton
                key={index}
                id={option.id}
                buttonText={option.text}
                onClick={(id, option) => {
                  console.log(`Selected choice: ${option}`)
                  //  todo ensure that when logic is moved to backend, the code is resilient against receiving answers to polls that are not opened.
                  setCurrentPollAnswer({ id: id, text: option })
                  setCurrentPoll({ ...currentPoll, answered: true })
                }}
              />
            ))}
          </div>
        </div>
      </>
    )
  }

  function LiveStreamPollAnswered ({ poll }) {
    return (
      <div className='flex flex-row w-full items-center justify-center px-6 py-3 gap-1'>
        <div className='text-base font-semibold'>
          Your predication for {poll.victoryPoints} points:{' '}
        </div>
        <div className='text-base font-normal'></div>
        {currentPollAnswer?.text}
      </div>
    )
  }

  function LivePollResults ({ poll, victorious }) {
    return (
      <div className='flex flex-row w-full items-center justify-between px-6 py-2'>
        {victorious ? (
          <CelebrateSuccessIcon width={48} height={48} />
        ) : (
          <ThumbsDownIcon width={48} height={48} />
        )}
        <div
          className={`flex ${
            isMobilePreview ? 'flex-col' : 'flex-row'
          } items-center gap-1`}
        >
          <div className='text-base font-semibold'>
            {victorious ? 'Correct prediction!' : 'Bad luck.'}
          </div>
          <div className='text-base font-normal'>
            {victorious
              ? `You've won ${poll.victoryPoints} points`
              : `${
                  poll.options.find(option => option.id === poll.correctOption)
                    ?.text
                } took the win`}
          </div>
        </div>
        {victorious ? (
          <AwardIcon width={48} height={48} />
        ) : (
          <ActivitiesIcon width={48} height={48} />
        )}
      </div>
    )
  }

  function LivePollNotAvailable ({}) {
    return <div className=''></div>
  }

  function LiveStreamPollButton ({ id, buttonText, onClick }) {
    return (
      <div
        className={`flex py-2 px-4 justify-center w-full min-w-28 grow max-h-11 text-nowrap text-navy900 bg-navy50 border-1 border-navy300 rounded-md shadow-sm cursor-pointer`}
        onClick={e => {
          e.stopPropagation()
          onClick(id, buttonText)
        }}
      >
        {buttonText}
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
