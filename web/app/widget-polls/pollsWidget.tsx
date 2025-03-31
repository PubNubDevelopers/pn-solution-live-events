import { useState, useEffect } from 'react'
import GuideOverlay from '../components/guideOverlay'
import { pollDeclarations, pollVotes, pollResults } from '../data/testData'

export default function PollsWidget ({
  className,
  isMobilePreview,
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide
}) {
  const [currentlyVisiblePoll, setCurrentlyVisiblePoll] = useState(null)
  const [polls, setPolls] = useState<any[]>([])

  //  ToDo - Remove test polls when integrate with back end
  const testPolls = [
    {
      id: 1,  //  Assume this increments when we only show the most recent results
      title: 'Who will get more yellow cards?',
      victoryPoints: 2,
      isPollOpen: true,
      //  answered = true, when I have answered the question locally
      options: [
        { id: 1, text: 'Real Madrid', score: 0 },
        ///  Also, each option is appended with the bool 'myAnswer' locally, to indicate which option was chosen. (Could replace this logic if the server returns the list of user IDs associated with each option)
        { id: 2, text: 'Manchester City', score: 1 },
        { id: 3, text: 'Equal', score: 0 }
      ]
    },
    {
      id: 2,
      title: 'Will the match go to extra time?',
      victoryPoints: 4,
      isPollOpen: true,
      options: [
        { id: 1, text: 'Yes', score: 0 },
        { id: 2, text: 'No', score: 2 }
      ]
    },
    {
      id: 3,
      title: 'Who will be man of the match?',
      victoryPoints: 2,
      isPollOpen: true,
      options: [
        { id: 1, text: 'Haaland', score: 37 },
        {
          id: 2,
          text: 'Vinicius Jr. I have a very long name',
          score: 10
        },
        { id: 3, text: 'De Bruyne', score: 21 },
        { id: 4, text: 'Modric', score: 25 },
        { id: 5, text: 'Other', score: 7 }
      ]
    }
  ]

  //  todo also need to read the last 3 polls from history, and populte the UI
  useEffect(() => {
    if (!chat) return
    const subscriptionSet = chat.sdk.subscriptionSet({
      channels: [pollDeclarations, pollResults]
    })
    subscriptionSet.onMessage = messageEvent => {
      console.log(messageEvent)
      if (messageEvent.channel == pollDeclarations) {
        //  We are being told about a new poll
        const newPoll = messageEvent.message.newPoll
        newPoll.answered = false
        newPoll.options = newPoll.options.map(option => ({
          ...option,
          myAnswer: false // Add the new parameter
        }))

        // Add the new poll to the polls array if it doesn't already exist
        setPolls(prevPolls => {
          const pollExists = prevPolls.some(poll => poll.id === newPoll.id)
          if (!pollExists) {
            return [...prevPolls, newPoll]
          }
          return prevPolls // Array already exists
        })
      } else if (messageEvent.channel == pollResults) {
        //  todo update the polls array with the received result.  This is currently done locally
      }
    }
    subscriptionSet.subscribe()
    return () => {
      subscriptionSet.unsubscribe()
    }
  }, [chat])

  return (
    <div className={`${className} px-6 pt-3 pb-4`}>
      {/* ToDo: Remove this testing div */}
      <div className='flex flex-row text-cherry font-semibold'>
        LOCAL Testing:...{' '}
        <div
          className='cursor-pointer'
          onClick={() => {
            chat.sdk.publish({
              message: { newPoll: testPolls[0] },
              channel: pollDeclarations
            })
          }}
        >
          {' '}
          START POLL 1 ...
        </div>
        <div
          className='cursor-pointer'
          onClick={() => {
            chat.sdk.publish({
              message: { newPoll: testPolls[1] },
              channel: pollDeclarations
            })
          }}
        >
          START POLL 2 ...
        </div>
        <div
          className='cursor-pointer'
          onClick={() => {
            chat.sdk.publish({
              message: { newPoll: testPolls[2] },
              channel: pollDeclarations
            })
          }}
        >
          ... START POLL 3
        </div>
      </div>
      <GuideOverlay
        id={'pollsGuide'}
        guidesShown={guidesShown}
        visibleGuide={visibleGuide}
        setVisibleGuide={setVisibleGuide}
        text={'Polls Polls Polls'}
        xOffset={`${isMobilePreview ? 'left-[0px]' : '-left-[60px]'}`}
        yOffset={''}
        flexStyle={'flex-row items-start'}
      />

      {!currentlyVisiblePoll && polls?.length > 0 && <PollsToDisplay />}
      {!currentlyVisiblePoll && polls?.length == 0 && <NoOpenPollsToDisplay />}

      {currentlyVisiblePoll &&
        polls.find(poll => poll.id == currentlyVisiblePoll)?.answered ==
          false && (
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
        There are no available open polls here, try under the live stream
      </div>
    )
  }

  function PollsToDisplay ({}) {
    return (
      <div className='flex flex-col'>
        <PollCardTitle text='Open polls' />
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
                  buttonText={`${isMobilePreview ? 'For' : 'Enter for'} ${
                    poll.victoryPoints
                  } points`}
                  onButtonClick={() => {
                    setCurrentlyVisiblePoll(poll.id)
                  }}
                />
              )
            })
          )}
          <PollCardTitle text='Results' />
          {polls
            ?.filter(poll => poll.isPollOpen == false || poll.answered == true)
            .sort((a, b) => b.id - a.id) // Sort by ID descending
            .slice(0, 3) // Limit to 3 entries
            .map((poll, index) => {
            return (
              <PollRowWithButton
                key={index}
                poll={poll}
                buttonText={`See Results`}
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
                console.log(
                  `ToDo: Vote cast for ${option.text} (needs to move to a PubNub message)`
                )
                //  This app is set up to only have one question per poll
                chat.sdk.publish({
                  message: {
                    pollId: poll.id,
                    questionId: '1',
                    choiceId: option.id
                  },
                  channel: pollVotes
                })
                //  ToDo - This logic update the local array, but should be called in response to a PN message.  Right now, all the logic for calculating responses is local
                setPolls(prevPolls =>
                  prevPolls.map(p =>
                    p.id === poll.id
                      ? {
                          ...p,
                          answered: true, // Mark the poll as answered
                          options: p.options.map(
                            (o, i) =>
                              i === index
                                ? { ...o, score: o.score + 1, myAnswer: true } // Increment score and set myAnswer
                                : { ...o, myAnswer: false } // Ensure other options have myAnswer set to false
                          )
                        }
                      : p
                  )
                )
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
                console.log('ToDo: Next poll')
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
        <div className='w-28 truncate text-ellipsis'>{text}</div>
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
        className={`flex py-1 px-3 w-fit ${
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
