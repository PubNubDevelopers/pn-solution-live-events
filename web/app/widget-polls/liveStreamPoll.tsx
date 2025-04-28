import { useState, useEffect } from 'react'
import GuideOverlay from '../components/guideOverlay'
import { pollDeclarations, pollVotes, pollResults } from '../data/constants'
import {
  ActivitiesIcon,
  ThumbsDownIcon,
  AwardIcon,
  CelebrateSuccessIcon
} from './pollsIcons'
import { actionCompleted } from 'pubnub-demo-integration'

export default function LiveStreamPoll ({
  isMobilePreview,
  chat,
  isGuidedDemo,
  guidesShown,
  visibleGuide,
  setVisibleGuide,
  awardPoints
}) {
  const [currentPoll, setCurrentPoll] = useState<any | null>(null)
  const [currentPollAnswer, setCurrentPollAnswer] = useState<{
    id: number
    text: string
  } | null>(null)

  useEffect(() => {
    if (!chat) return
    const subscriptionSet = chat.sdk.subscriptionSet({
      channels: [pollDeclarations, pollVotes, pollResults]
    })
    subscriptionSet.onMessage = messageEvent => {
      if (messageEvent.channel == pollDeclarations) {
        //  We are being told about a new poll
        handleNewLivePoll(messageEvent)
      } else if (messageEvent.channel == pollVotes) {
        const choiceId = messageEvent.message.choiceId
        const pollType = messageEvent.message.pollType
        if (choiceId && pollType && pollType == 'match') {
          const choiceText =
            currentPoll?.options?.find(option => option.id === choiceId)
              ?.text || ''
          setCurrentPollAnswer({ id: choiceId, text: choiceText })
          setCurrentPoll({ ...currentPoll, answered: true })
        }
      } else if (messageEvent.channel == pollResults) {
        //  Safe to assume we will only ever have one poll, so just overwrite the current poll
        const pollType = messageEvent.message.pollType
        if (pollType && pollType == 'match') {
          const correctOption = messageEvent.message.correctOption
          setCurrentPoll(prevPoll => {
            if (!prevPoll || typeof prevPoll !== 'object') return null
            return {
              ...prevPoll,
              correctOption: correctOption,
              isPollOpen: false
            }
          })
          if (
            correctOption == currentPollAnswer?.id &&
            currentPoll.victoryPoints
          ) {
            awardPoints(currentPoll.victoryPoints, null)
          }
        }
      }
    }
    subscriptionSet.subscribe()

    return () => {
      subscriptionSet.unsubscribe()
    }
  }, [chat, currentPoll, currentPollAnswer])

  useEffect(() => {
    if (!chat) return
    chat.sdk
      .fetchMessages({
        channels: [pollDeclarations, pollResults],
        count: 1
      })
      .then(result => {
        const previouslyDeclaredPollResults = result.channels[pollResults]
        if (result && result.channels[pollDeclarations]) {
          const previouslyDeclaredPoll = result.channels[pollDeclarations][0]
          if (previouslyDeclaredPoll) {
            if (
              !previouslyDeclaredPollResults ||
              (previouslyDeclaredPollResults &&
                previouslyDeclaredPollResults[0].timetoken <
                  previouslyDeclaredPoll.timetoken)
            ) {
              handleNewLivePoll(previouslyDeclaredPoll)
            }
          }
        }
      })
  }, [chat])

  function handleNewLivePoll (messageEvent) {
    const newPoll = messageEvent.message
    if (newPoll.pollType == 'match') {
      newPoll.answered = false
      newPoll.isPollOpen = true
      newPoll.options = newPoll.options.map(option => ({
        ...option,
        score: 0, //  Overrides the values in the test data
        myAnswer: false // Add the new parameter
      }))

      // Add the new poll to the polls array if it doesn't already exist
      setCurrentPoll(newPoll)
    }
  }

  if (!currentPoll) {
    return <LivePollNotAvailable />
  }

  return (
    <>
      {currentPoll.answered && currentPoll.isPollOpen && (
        <LiveStreamPollAnswered poll={currentPoll} />
      )}
      {!currentPoll.answered && currentPoll.isPollOpen && (
        <LiveStreamPollQuestion poll={currentPoll} />
      )}
      {currentPoll.answered && !currentPoll.isPollOpen && (
        <LivePollResults
          poll={currentPoll}
          victorious={currentPoll.correctOption == currentPollAnswer?.id}
        />
      )}
      {!currentPoll.answered && !currentPoll.isPollOpen && (
        <LivePollNotAvailable />
      )}
    </>
  )

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
          <div
            className={`flex ${
              isMobilePreview ? 'flex-col' : 'flex-row'
            } gap-3`}
          >
            {poll?.options?.map((option, index) => (
              <LiveStreamPollButton
                key={index}
                id={option.id}
                buttonText={option.text}
                onClick={(id, option) => {
                  chat.sdk.publish({
                    message: {
                      pollId: 1,
                      questionId: '1',
                      choiceId: id,
                      pollType: 'match'
                    },
                    channel: pollVotes
                  })
                  if (!isGuidedDemo) {
                    //  This code is only used by the PubNub website
                    actionCompleted({
                      action: 'Predict the match outcome',
                      blockDuplicateCalls: false,
                      debug: false
                    })
                  } 
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
          Your prediction for {poll.victoryPoints} points:{' '}
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
}
