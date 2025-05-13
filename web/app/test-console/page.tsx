'use client'

import { useState, useEffect } from 'react'
import { Chat, User } from '@pubnub/chat'
import {
  matchStatsChannelId,
  liveCommentaryChannelId,
  pollDeclarations,
  pollVotes,
  pollResults,
  illuminatePollTesting,
  clientVideoControlChannelId,
  pushChannelSelfId,
  pushChannelSalesId,
  dynamicAdChannelId,
  illuminateUpgradeReaction,
  serverVideoControlChannelId
} from '../data/constants'
import { getAuthKey } from '../getAuthKey'

export default function Page () {
  const [chat, setChat] = useState<Chat | null>(null)
  const isGuidedDemo =
    process.env.NEXT_PUBLIC_GUIDED_DEMO === 'true'
      ? process.env.NEXT_PUBLIC_GUIDED_DEMO
      : null
  const pushChannelId = isGuidedDemo ? pushChannelSalesId : pushChannelSelfId
  const testStyle = 'text-cherry cursor-pointer'

  //  Test polls all have the final score, but that is ignored in the initial declaration
  const testPolls = [
    {
      id: 1, //  Assume this increments when we only show the most recent results
      title: 'Who will get more yellow cards?',
      victoryPoints: 2,
      correctOption: 1, //  In production this would be part of the results message
      alertText: 'You unlocked a poll',
      pollType: 'side', //  The poll shows at the side of the UX
      options: [
        { id: 1, text: 'Real Madrid', score: 1 },
        { id: 2, text: 'Manchester City', score: 2 },
        { id: 3, text: 'Equal', score: 0 }
      ]
    },
    {
      id: 2,
      title: 'Will the match go to extra time?',
      victoryPoints: 4,
      correctOption: 1, //  In production this would be part of the results message
      alertText: 'This is very very long text which should get cut off',
      pollType: 'side',
      options: [
        { id: 1, text: 'Yes', score: 0 },
        { id: 2, text: 'No', score: 2 }
      ]
    },
    {
      id: 3,
      title: 'Who will be man of the match?',
      victoryPoints: 0,
      pollType: 'side',
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

  const testPollLiveMatch = {
    id: 1,
    title: 'Win 10 points for a correct prediction',
    victoryPoints: 10,
    pollType: 'match', //  The poll appears below the stream
    options: [
      { id: 1, text: 'Leeds United F.C.' },
      { id: 2, text: 'Southampton F.C.' },
      { id: 3, text: 'Draw' }
    ]
  }

  const testPollLiveMatchResults = {
    id: 1,
    pollType: 'match',
    correctOption: 1 //  In production this would be part of the results message
  }

  //  App initialization
  useEffect(() => {
    async function init () {
      try {
        const userId = 'testing-only'
        const { accessManagerToken } = await getAuthKey(
          userId,
          isGuidedDemo ? true : false,
          `-${process.env.NEXT_PUBLIC_ENVIRONMENT_NUMBER ?? ''}`
        )
        const localChat = await Chat.init({
          publishKey: process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY as string,
          subscribeKey: process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY as string,
          userId: userId,
          authKey: accessManagerToken
        })
        setChat(localChat)
      } catch {}
    }

    init()
  }, [])

  async function sendPubNubMessage (
    channel,
    messageBody,
    shouldPersist = false
  ) {
    await chat?.sdk.publish({
      message: messageBody,
      channel: channel,
      storeInHistory: shouldPersist
    })
  }

  async function voteInPoll (channel, pollId, optionId) {
    await chat?.sdk.publish({
      message: {
        pollId: pollId,
        questionId: '1', //  All polls only have one question
        choiceId: optionId,
        pollType: 'side'
      },
      channel: channel
    })
  }

  async function sendLiveCommentaryMessage () {
    if (!chat) return
    await chat.sdk.publish({
      message: {
        text: `Test Message ${Math.floor(Math.random() * 1000)}`,
        timeCode: `${Math.floor(Math.random() * 90)
          .toString()
          .padStart(2, '0')}:${Math.floor(Math.random() * 60)
          .toString()
          .padStart(2, '0')}`
      },
      channel: liveCommentaryChannelId
    })
  }

  async function sendMatchStatsMessage () {
    if (!chat) return
    const randomStat3Digits = () => String(Math.floor(Math.random() * 400) + 1)
    const randomStat2Digits = () => String(Math.floor(Math.random() * 99) + 1)
    const randomStat1Digit = () => String(Math.floor(Math.random() * 9) + 1)
    const randomPercent = Math.floor(Math.random() * 99) + 1
    const randomPercentDiff = 100 - randomPercent

    await chat.sdk.publish({
      message: {
        statBox1: {
          //  Score
          info: [
            {
              stat: randomStat1Digit()
            },
            {
              stat: randomStat1Digit()
            }
          ]
        },
        statBox2: {
          //  Yellow cards
          info: [
            {
              stat: randomStat1Digit()
            }
          ]
        },
        statBox3: {
          //Top Scorer
          info: [
            {
              dataPrimary: randomStat1Digit(),
              dataSecondary: 'Player Name',
              imageUrl: '/matchstats/playericon_piroe.jpg'
            }
          ]
        },
        statBox4: {
          //  Shots on goal
          info: [
            {
              stat: randomStat1Digit()
            },
            {
              stat: randomStat1Digit()
            }
          ]
        },
        statBox5: {
          //  Red cards
          info: [
            {
              stat: randomStat1Digit()
            }
          ]
        },
        statBox6: {
          info: [
            {
              stat: `${randomStat2Digits()}%`
            },
            {
              stat: `${randomStat2Digits()}%`
            }
          ]
        }
      },
      channel: matchStatsChannelId
    })
  }

  return (
    <main>
      <div className='flex flex-col h-fit min-h-screen w-screen min-w-screen p-6 gap-3'>
        <div className='text-3xl'>App Testing</div>
        <div className='text-xl'>Video Stream (Manual Testing)</div>
        <div
          className={`${testStyle}`}
          onClick={() =>
            sendPubNubMessage(clientVideoControlChannelId, {
              type: 'START_STREAM',
              params: {}
            })
          }
        >
          Start Stream Manually
        </div>

        <div
          className={`${testStyle}`}
          onClick={() =>
            sendPubNubMessage(clientVideoControlChannelId, {
              type: 'END_STREAM',
              params: {}
            })
          }
        >
          Stop Stream Manually
        </div>

        <div
          className={`${testStyle}`}
          onClick={() =>
            sendPubNubMessage(clientVideoControlChannelId, {
              type: 'SEEK',
              params: {
                playbackTime: 30000
              }
            })
          }
        >
          Seek Stream (Game Start)
        </div>

        <div
          className={`${testStyle}`}
          onClick={() =>
            sendPubNubMessage(clientVideoControlChannelId, {
              type: 'SEEK',
              params: {
                playbackTime: 48000
              }
            })
          }
        >
          Seek Stream (Goal 1)
        </div>

        <div
          className={`${testStyle}`}
          onClick={() =>
            sendPubNubMessage(clientVideoControlChannelId, {
              type: 'SEEK',
              params: {
                playbackTime: 315000
              }
            })
          }
        >
          Seek Stream (Goal 4)
        </div>

        <div
          className={`${testStyle}`}
          onClick={() =>
            sendPubNubMessage(clientVideoControlChannelId, {
              type: 'SEEK',
              params: {
                playbackTime: 1099000
              }
            })
          }
        >
          Seek Stream (5 minutes remaining)
        </div>

        <div
          className={`${testStyle}`}
          onClick={() =>
            sendPubNubMessage(clientVideoControlChannelId, {
              type: 'STATUS',
              params: { playbackTime: 10000 }
            })
          }
        >
          Join Late - Sends a single status message for playbackTime = 10s
        </div>

        <div
          className={`${testStyle}`}
          onClick={() =>
            sendPubNubMessage(clientVideoControlChannelId, {
              type: 'STATUS',
              params: { playbackTime: 0, videoStarted: true }
            })
          }
        >
          Video has looped
        </div>

        <div
          className={`${testStyle}`}
          onClick={() =>
            sendPubNubMessage(clientVideoControlChannelId, {
              type: 'STATUS',
              params: { playbackTime: 100000, videoEnded: true }
            })
          }
        >
          Video has ended
        </div>

        <div className='text-xl'>
          Video Stream (Testing based on Backend Messages)
        </div>

        <div className=''>
          A backend test exists to start a stream and send status messages every
          500ms, until the stream stops. This can be used to test starting the
          stream, joining the stream late, and the stream looping.
        </div>

        <div className='text-xl'>Advertisements</div>
        <div
          className={`${testStyle}`}
          onClick={() =>
            sendPubNubMessage(dynamicAdChannelId, { adId: 2, clickPoints: 12 })
          }
        >
          Show Dynamic Ad
        </div>
        <div className='text-xl'>Notifications</div>
        <div
          className={`${testStyle}`}
          onClick={async () => {
            sendPubNubMessage(pushChannelId, {
              text: 'PubNub Push Notification',
              pn_fcm: {
                data: {
                  title: 'Somebody tagged you',
                  body: 'You were mentioned in the group chat'
                },
                android: {
                  priority: 'high',
                }
              }
            })
          }}
        >
          Show Notification for Chat Message
        </div>

        <div
          className={`${testStyle}`}
          onClick={async () => {
            sendPubNubMessage(pushChannelId, {
              text: 'PubNub Push Notification',
              pn_fcm: {
                data: {
                  title: 'Goal!!',
                  body: 'A Team scored a Goal'
                },
                android: {
                  priority: 'high',
                }
              }
            })
          }}
        >
          Show Notification for Cup
        </div>

        <div className='text-xl'>Emoji</div>

        <div
          className={`${testStyle}`}
          onClick={() =>
            sendPubNubMessage(illuminateUpgradeReaction, {
              emoji: '😮',
              replacementEmoji: null
            })
          }
        >
          Upgrade the Shock Emoji
        </div>

        <div
          className={`${testStyle}`}
          onClick={() =>
            sendPubNubMessage(illuminateUpgradeReaction, {
              emoji: '👏',
              replacementEmoji: '🤩'
            })
          }
        >
          Upgrade the Clap Emoji and override default with Star faced Emoji
        </div>

        <div className='text-xl'>Polls (Beneath Live Stream)</div>

        <div
          className={`${testStyle}`}
          onClick={() =>
            sendPubNubMessage(pollDeclarations, testPollLiveMatch, true)
          }
        >
          Start Match Poll
        </div>

        <div
          className={`${testStyle}`}
          onClick={() =>
            sendPubNubMessage(pollResults, testPollLiveMatchResults, true)
          }
        >
          End Match Poll
        </div>

        <div className='text-xl'>Polls (Dedicated Polls Widget)</div>

        <div
          className={`${testStyle}`}
          onClick={() => sendPubNubMessage(pollDeclarations, testPolls[0])}
        >
          Start Poll 1
        </div>

        <div className={`${testStyle}`}>
          <span className='cursor-default'>Vote in Poll 1:</span>{' '}
          <span onClick={() => voteInPoll(pollVotes, 1, 1)}>Option 1</span>
          {' | '}
          <span onClick={() => voteInPoll(pollVotes, 1, 2)}>Option 2</span>
          {' | '}
          <span onClick={() => voteInPoll(pollVotes, 1, 3)}>Option 3</span>
        </div>

        <div
          className={`${testStyle}`}
          onClick={() => sendPubNubMessage(pollResults, testPolls[0])}
        >
          End Poll 1 (send results)
        </div>

        <div
          className={`${testStyle}`}
          onClick={() => sendPubNubMessage(pollDeclarations, testPolls[1])}
        >
          Start Poll 2
        </div>

        <div className={`${testStyle}`}>
          <span className='cursor-default'>Vote in Poll 2:</span>{' '}
          <span onClick={() => voteInPoll(pollVotes, 2, 1)}>Option 1</span>
          {' | '}
          <span onClick={() => voteInPoll(pollVotes, 2, 2)}>Option 2</span>
        </div>

        <div
          className={`${testStyle}`}
          onClick={() => sendPubNubMessage(pollResults, testPolls[1])}
        >
          End Poll 2 (send results)
        </div>

        <div
          className={`${testStyle}`}
          onClick={() => sendPubNubMessage(pollDeclarations, testPolls[2])}
        >
          Start Poll 3
        </div>

        <div className={`${testStyle}`}>
          <span className='cursor-default'>Vote in Poll 3:</span>{' '}
          <span onClick={() => voteInPoll(pollVotes, 3, 1)}>Option 1</span>
          {' | '}
          <span onClick={() => voteInPoll(pollVotes, 3, 2)}>Option 2</span>
          {' | '}
          <span onClick={() => voteInPoll(pollVotes, 3, 3)}>Option 3</span>
          {' | '}
          <span onClick={() => voteInPoll(pollVotes, 3, 4)}>Option 4</span>
          {' | '}
          <span onClick={() => voteInPoll(pollVotes, 3, 5)}>Option 5</span>
        </div>

        <div
          className={`${testStyle}`}
          onClick={() => sendPubNubMessage(pollResults, testPolls[2])}
        >
          End Poll 3 (send results)
        </div>

        <div
          className={`${testStyle}`}
          onClick={() =>
            sendPubNubMessage(serverVideoControlChannelId, {
              type: 'ON_DEMAND_SCRIPT',
              params: { scriptName: 'cheer' }
            })
          }
        >
          Mock Illuminate requesting a poll (Cheering)
        </div>

        <div
          className={`${testStyle}`}
          onClick={() =>
            sendPubNubMessage(serverVideoControlChannelId, {
              type: 'ON_DEMAND_SCRIPT',
              params: { scriptName: 'angry' }
            })
          }
        >
          Mock Illuminate requesting a poll (Anger)
        </div>

        <div className='text-xl'>Match Statistics</div>

        <div className={`${testStyle}`} onClick={() => sendMatchStatsMessage()}>
          Send Random Match Stats
        </div>

        <div className='text-xl'>Live Commentary</div>
        <div
          className={`${testStyle}`}
          onClick={() => sendLiveCommentaryMessage()}
        >
          Send a Live Commentary Message
        </div>
      </div>
    </main>
  )
}
