import { useState, useEffect, useRef } from 'react'
import GuideOverlay from '../components/guideOverlay'
import Alert from '../components/alert'
import {
  pollDeclarations,
  pollVotes,
  pollResults,
  illuminatePollTesting,
  AlertType
} from '../data/constants'
import { actionCompleted } from 'pubnub-demo-integration'

export default function PollsWidget ({
  className,
  isMobilePreview,
  chat,
  isGuidedDemo,
  guidesShown,
  visibleGuide,
  setVisibleGuide,
  awardPoints
}) {
  const [currentlyVisiblePoll, setCurrentlyVisiblePoll] = useState(null)
  const [polls, setPolls] = useState<any[]>([])
  const [alert, setAlert] = useState<{
    points: number | null
    body: string
  } | null>(null)
  const pollsRef = useRef(polls)
  useEffect(() => {
    pollsRef.current = polls
  }, [polls])

  useEffect(() => {
    if (!chat) return
    const subscriptionSet = chat.sdk.subscriptionSet({
      channels: [
        pollDeclarations,
        pollVotes,
        pollResults,
        illuminatePollTesting
      ]
    })
    subscriptionSet.onMessage = messageEvent => {
      if (messageEvent.channel == pollDeclarations) {
        //  We are being told about a new poll
        const newPoll = messageEvent.message
        if (newPoll.pollType == 'side') {
          showPollAlert(messageEvent.message.alertText)
          newPoll.answered = false
          newPoll.isPollOpen = true
          newPoll.options = newPoll.options.map(option => ({
            ...option,
            score: 0, //  Overrides the values in the test data
            myAnswer: false // Add the new parameter
          }))

          // Add the new poll to the polls array if it doesn't already exist
          setPolls(prevPolls => {
            const pollExists = prevPolls.some(poll => poll.id === newPoll.id)
            if (!pollExists) {
              return [...prevPolls, newPoll]
            }
            return prevPolls.map(poll =>
              poll.id === newPoll.id ? newPoll : poll
            )
          })
        }
      } else if (messageEvent.channel == pollVotes) {
        const pollId = messageEvent.message.pollId
        const choiceId = messageEvent.message.choiceId
        const pollType = messageEvent.message.pollType
        if (pollId && choiceId && pollType && pollType == 'side') {
          const isMyAnswer = messageEvent.publisher == chat?.currentUser.id
          setPolls(prevPolls =>
            prevPolls.map(p =>
              p.id === pollId && p.pollType === 'side'
                ? {
                    ...p,
                    ...(isMyAnswer && { answered: true }), // Only set answered to true if isMyAnswer is true
                    options: p.options.map(
                      o =>
                        o.id === choiceId
                          ? {
                              ...o,
                              score: o.score + 1,
                              ...(isMyAnswer && { myAnswer: true }) // Only set myAnswer if isMyAnswer is true
                            }
                          : { ...o } // Ensure other options have myAnswer set to false
                    )
                  }
                : p
            )
          )
        }
      } else if (messageEvent.channel == pollResults) {
        const pollId = messageEvent.message.id
        const pollType = messageEvent.message.pollType
        if (pollId && pollType && pollType == 'side') {
          const resultsOfPoll = messageEvent.message

          //  Results are in, determine if we had the correct answer
          if (resultsOfPoll.correctOption && !isMobilePreview) {
            const myPollAnswer = pollsRef.current
              .find(p => p.id === resultsOfPoll.id)
              ?.options.find(o => o.myAnswer === true)
            const pointsForCorrectAnswer =
              pollsRef.current.find(p => p.id === resultsOfPoll.id)
                ?.victoryPoints || 0

            if (myPollAnswer && pointsForCorrectAnswer > 0) {
              //  User has given an answer to a question that might award points
              if (myPollAnswer.id == resultsOfPoll.correctOption) {
                awardPoints(pointsForCorrectAnswer, 'Correct Answer!')
              } else {
                awardPoints(1, 'Incorrect 😢')
              }
            }
          }

          //if (resultsOfPoll.correctOption && resultsOfPoll.correctOption == )
          setPolls(prevPolls =>
            prevPolls.map(p =>
              p.id === pollId
                ? {
                    ...p,
                    ...resultsOfPoll,
                    isPollOpen: false,
                    options: p.options.map(option => ({
                      ...option,
                      ...(resultsOfPoll.options.find(o => o.id === option.id) ||
                        {}),
                      myAnswer:
                        p.options.find(o => o.id === option.id)?.myAnswer ||
                        false // Preserve the existing myAnswer property or default to false
                    }))
                  }
                : p
            )
          )
        }
      } else if (messageEvent.channel == illuminatePollTesting) {
        //  Only used for testing - Illuminate is requesting a poll
        //console.log('TEST ONLY - ILLUMINATE IS REQUESTING A POLL')
        //console.log(messageEvent)
      }
    }
    subscriptionSet.subscribe()
    return () => {
      subscriptionSet.unsubscribe()
    }
  }, [chat])

  function showPollAlert (pollText) {
    setAlert({ points: null, body: `${pollText ?? 'New poll available'}` })
    //  Catch all
    setTimeout(() => {
      try {
        setAlert(null)
      } catch {}
    }, 2000)
  }

  return (
    <div className={`${className} px-6 pt-3 pb-4`}>
      {alert && (
        <Alert
          type={AlertType.NEW_POLL}
          message={alert}
          onClose={() => {
            setAlert(null)
          }}
        />
      )}
      <GuideOverlay
        id={'pollsGuide'}
        guidesShown={guidesShown}
        visibleGuide={visibleGuide}
        setVisibleGuide={setVisibleGuide}
        text={
          <span>
            Polls are built on top of PubNub’s{' '}
            <span className='font-semibold'>Core Messaging Service</span>, to
            announce new polls, allow users to vote, and distribute results.{' '}
            <span className='font-semibold'>Functions</span> allow you to
            tabulate results with serverless processing.{' '}
            <span className='font-semibold'>Access Manager</span> provides fine
            grain access control so users cannot see results before they are
            published.{' '}
          </span>
        }
        xOffset={`${isMobilePreview ? 'left-[0px]' : '-left-[60px]'}`}
        yOffset={''}
        flexStyle={'flex-row items-start'}
      />

      {!currentlyVisiblePoll && polls?.length > 0 && <PollsToDisplay />}
      {!currentlyVisiblePoll && polls?.length == 0 && <NoOpenPollsToDisplay />}

      {currentlyVisiblePoll &&
        polls.find(
          poll => poll.id == currentlyVisiblePoll && poll.isPollOpen == true
        )?.answered == false && (
          <OpenPollQuestion
            poll={polls.find(poll => poll.id == currentlyVisiblePoll)}
          />
        )}
      {currentlyVisiblePoll &&
        (polls.find(poll => poll.id == currentlyVisiblePoll)?.isPollOpen ==
          false ||
          polls.find(poll => poll.id == currentlyVisiblePoll)?.answered ==
            true) && (
          <PollResults
            poll={polls.find(poll => poll.id == currentlyVisiblePoll)}
          />
        )}
    </div>
  )

  function NoOpenPollsToDisplay ({}) {
    return (
      <div className='text-base font-normal py-3'>
        There are no unanswered, open polls, did you answer the poll under the
        live stream?
      </div>
    )
  }

  function PollsToDisplay ({}) {
    return (
      <div className='flex flex-col'>
        <PollCardTitle text='Open, unanswered polls' />
        {polls?.filter(
          poll => poll.isPollOpen == true && poll.answered == false
        ).length == 0 ? (
          <NoOpenPollsToDisplay />
        ) : (
          polls
            ?.filter(poll => poll.isPollOpen == true && poll.answered == false)
            .map((poll, index) => {
              return (
                <PollRowWithButton
                  key={index}
                  poll={poll}
                  buttonText={`${isMobilePreview ? 'Win for' : 'Win for'} ${
                    poll.victoryPoints && poll.victoryPoints > 0
                      ? `${poll.victoryPoints} points`
                      : 'fun'
                  }`}
                  onButtonClick={() => {
                    setCurrentlyVisiblePoll(poll.id)
                  }}
                />
              )
            })
        )}
        {polls?.filter(
          poll => poll.isPollOpen == false || poll.answered == true
        ).length > 0 && <PollCardTitle text='Results' />}
        {polls
          ?.filter(poll => poll.isPollOpen == false || poll.answered == true)
          .sort((a, b) => b.id - a.id) // Sort by ID descending
          .slice(0, 3) // Limit to 3 entries
          .map((poll, index) => {
            return (
              <PollRowWithButton
                key={index}
                poll={poll}
                buttonText={`${poll.isPollOpen ? 'In Progress' : 'Closed'}`}
                onButtonClick={() => {
                  setCurrentlyVisiblePoll(poll.id)
                }}
              />
            )
          })}
      </div>
    )
  }

  function OpenPollQuestion ({ poll }) {
    return (
      <div className='flex flex-col gap-3'>
        <PollCardTitle text={poll.title} />

        {poll?.options?.map((option, index) => {
          return (
            <OpenPollRow
              key={index}
              text={option.text}
              onClick={() => {
                //  This app is set up to only have one question per poll
                chat.sdk.publish({
                  message: {
                    pollId: poll.id,
                    questionId: '1',
                    choiceId: option.id,
                    pollType: 'side'
                  },
                  channel: pollVotes
                })
                if (!isGuidedDemo) {
                  //  This code is only used by the PubNub website
                  actionCompleted({
                    action: 'Vote in a poll (when available)',
                    blockDuplicateCalls: false,
                    debug: false
                  })
                } 
              }}
            />
          )
        })}
      </div>
    )
  }

  function OpenPollRow ({ text, onClick }) {
    return (
      <div
        className='py-2 px-4 hover:bg-navy100 border-1 border-navy300 rounded-md shadow-sm cursor-pointer'
        onClick={e => {
          e.stopPropagation()
          onClick()
        }}
      >
        {text}
      </div>
    )
  }

  function PollResults ({ poll }) {
    const currentPollIndex = polls.findIndex(
      poll => poll.id === currentlyVisiblePoll
    )
    const nextPoll =
      currentPollIndex >= 0 && currentPollIndex < polls.length - 1
        ? polls[currentPollIndex + 1] // Get the next poll
        : null

    return (
      <div className='flex flex-col gap-3'>
        <PollCardTitle text={poll.title} />

        {poll?.options?.map((option, index, origArray) => {
          //  Calculate the score as a percentage
          const totalVotes = origArray.reduce(
            (acc, curr) => acc + curr.score,
            0
          )
          const scoreAsPercent =
            totalVotes > 0 ? (option.score / totalVotes) * 100 : 0
          return (
            <PollResultsRow
              key={index}
              text={option.text}
              scoreAsPercent={scoreAsPercent.toFixed(0)}
              isMyAnswer={option.myAnswer}
            />
          )
        })}

        <div className='flex flex-row justify-between'>
          <PollButton
            buttonText={'See all polls'}
            isOpaque={false}
            onClick={() => {
              setCurrentlyVisiblePoll(null)
            }}
          />
          {nextPoll && (
            <PollButton
              buttonText={'Next poll'}
              isOpaque={true}
              onClick={() => {
                setCurrentlyVisiblePoll(nextPoll.id)
              }}
            />
          )}
        </div>
      </div>
    )
  }

  function PollResultsRow ({ text, scoreAsPercent, isMyAnswer }) {
    return (
      <div className='flex flex-row gap-3 items-center'>
        <div className='w-56 truncate text-ellipsis'>{text}</div>
        <div className='h-4 grow rounded bg-navy100'>
          <div className='relative'>
            <div
              className={`absolute h-4 rounded-l ${
                isMyAnswer ? 'bg-brandAccent2' : 'bg-brandAccent3'
              } text-transparent`}
              style={{ width: `${scoreAsPercent}%` }}
            >
              .
            </div>
          </div>
        </div>
        <div className='w-8 text-left'>{scoreAsPercent}%</div>
      </div>
    )
  }

  function PollRowWithButton ({ poll, buttonText, onButtonClick }) {
    return (
      <div className='flex flex-row gap-0 py-3 items-center justify-between'>
        <div className=''>{poll.title}</div>
        <PollButton
          buttonText={buttonText}
          isOpaque={false}
          onClick={() => onButtonClick()}
        />
      </div>
    )
  }

  function PollCardTitle ({ text }) {
    return <div className='pt-3 text-base font-semibold'>{text}</div>
  }

  function PollButton ({ buttonText, isOpaque, onClick }) {
    return (
      <div
        className={`flex py-1 px-3 w-fit whitespace-nowrap ${
          isOpaque
            ? 'text-neutral50 bg-navy900'
            : 'text-navy900 bg-navy50 border-1 border-navy300'
        } rounded-md shadow-sm cursor-pointer`}
        onClick={e => {
          e.stopPropagation()
          onClick()
        }}
      >
        {buttonText}
      </div>
    )
  }
}
