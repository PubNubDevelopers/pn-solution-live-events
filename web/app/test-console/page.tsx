'use client'

import { useState, useEffect } from 'react'
import { Chat, User } from '@pubnub/chat'
import {
  matchStatsChannelId,
  liveCommentaryChannelId,
  pollDeclarations,
  pollResults,
  clientVideoControlChannelId,
  pushChannelSelfId,
  pushChannelSalesId,
  dynamicAdChannelId,
  illuminateUpgradeReaction
} from '../data/constants'

export default function Page () {
  const [chat, setChat] = useState<Chat | null>(null)
  const isGuidedDemo =
    process.env.NEXT_PUBLIC_GUIDED_DEMO === 'true'
      ? process.env.NEXT_PUBLIC_GUIDED_DEMO
      : null
  const pushChannelId = isGuidedDemo ? pushChannelSalesId : pushChannelSelfId
  const testStyle = 'text-cherry cursor-pointer'

  const testPolls = [
    {
      id: 1, //  Assume this increments when we only show the most recent results
      title: 'Who will get more yellow cards?',
      victoryPoints: 2,
      alertText: 'You unlocked a poll',
      pollType: 'side', //  The poll shows at the side of the UX
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
      alertText: 'This is very very long text which should get cut off',
      pollType: 'side',
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
      pollType: 'side',
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

  const testPollLiveMatch = {
    id: 1,
    title: 'Win 10 points for a correct prediction',
    victoryPoints: 10,
    pollType: 'match', //  The poll appears below the stream
    isPollOpen: true,
    options: [
      { id: 1, text: 'Real Madrid' },
      { id: 2, text: 'Man City' },
      { id: 3, text: 'Draw' }
    ]
  }

  const testPollLiveMatchResults = {
    id: 1,
    correctOption: 2, //  In production this would be part of the results message
  }


  //  App initialization
  useEffect(() => {
    async function init () {
      try {
        const localChat = await Chat.init({
          publishKey: process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY as string,
          subscribeKey: process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY as string,
          userId: 'testing-only'
        })
        setChat(localChat)
      } catch {

      }
    }

    init()
  }, [])

  async function sendPubNubMessage (channel, messageBody) {
    await chat?.sdk.publish({
      message: messageBody,
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
          info: [
            {
              stat: `${randomPercent}%`
            },
            {
              stat: `${randomPercentDiff}%`
            }
          ]
        },
        statBox2: {
          info: [
            {
              stat: randomStat1Digit()
            }
          ]
        },
        statBox3: {
          info: [
            {
              dataPrimary: randomStat2Digits()
            }
          ]
        },
        statBox4: {
          info: [
            {
              stat: `${randomStat3Digits()}km`
            },
            {
              stat: `${randomStat3Digits()}km`
            }
          ]
        },
        statBox5: {
          info: [
            {
              dataPrimary: `${randomStat2Digits()}kph`
            }
          ]
        },
        statBox6: {
          info: [
            {
              stat: randomStat1Digit()
            },
            {
              stat: randomStat1Digit()
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
        <div className='text-xl'>Video Stream</div>
        <div
          className={`${testStyle}`}
          onClick={() =>
            sendPubNubMessage(clientVideoControlChannelId, {
              type: 'START_STREAM',
              params: {}
            })
          }
        >
          Start Stream
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
          Stop Stream
        </div>

        <div
          className={`${testStyle}`}
          onClick={() =>
            sendPubNubMessage(clientVideoControlChannelId, {
              type: 'SEEK',
              params: {
                playbackTime: 5000
              }
            })
          }
        >
          Seek Stream (5s)
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
          Join Late (video at 10s)
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
          onClick={() => sendPubNubMessage(pollDeclarations, testPollLiveMatch)}
        >
          Start Match Poll
        </div>

        <div
          className={`${testStyle}`}
          onClick={() => sendPubNubMessage(pollResults, testPollLiveMatchResults)}
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

        <div
          className={`${testStyle}`}
          onClick={() => sendPubNubMessage(pollDeclarations, testPolls[1])}
        >
          Start Poll 2
        </div>

        <div
          className={`${testStyle}`}
          onClick={() => sendPubNubMessage(pollDeclarations, testPolls[2])}
        >
          Start Poll 3
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
