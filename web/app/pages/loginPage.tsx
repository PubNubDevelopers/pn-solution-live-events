import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Chat, User } from '@pubnub/chat'
import { testUsers, testPublicChannels } from '../data/testData'

export default function LoginPage ({
  setLoginPageShown,
  setSalesIntroPageShown,
  chat,
  setChat,
  setUserId,
  isGuidedDemo,
  setLoadMessage
}) {
  const [userArray, setUserArray] = useState(testUsers)

  const ArrowBack = props => {
    return (
      <svg
        aria-hidden='true'
        focusable='false'
        height='32'
        role='presentation'
        viewBox='0 0 32 32'
        width='32'
        {...props}
      >
        <path
          d='M26.6673 14.6666H10.4407L17.894 7.21325L16.0007 5.33325L5.33398 15.9999L16.0007 26.6666L17.8807 24.7866L10.4407 17.3333H26.6673V14.6666Z'
          fill='currentColor'
        />
      </svg>
    )
  }

  //  App initialization
  useEffect(() => {
    async function init () {
      if (!process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY) {
        setLoadMessage('No PubNub Publish Key Found')
        console.error('Please specify your PubNub Publish Key in the .env file')
        setLoginPageShown(false)
        return
      }
      if (!process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY) {
        setLoadMessage('No PubNub Subscribe Key Found')
        console.error(
          'Please specify your PubNub Subscribe Key in the .env file'
        )
        setLoginPageShown(false)
        return
      }
      try {
        const localChat = await Chat.init({
          publishKey: process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY,
          subscribeKey: process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY,
          userId: 'user-02',  //  Don't use the same user ID here as you use in the next line, to test whether any users already exist
          typingTimeout: 5000,
          storeUserActivityTimestamps: true,
          storeUserActivityInterval: 600000
        })

        const testUser = await localChat.getUser('user-01')

        if (!testUser) {
          setLoadMessage(
            'Populating keyset with users (this will take a few seconds)'
          )

          const promises = [] as Promise<User | null | undefined>[]
          for (const testUser of testUsers) {
            const tempPromise = localChat
              .getUser(testUser.id)
              .then(returnedUser => {
                if (!returnedUser) {
                  return localChat.createUser(testUser.id, {
                    name: testUser.name,
                    profileUrl: testUser.avatar,
                    email: testUser.email,
                    externalId: testUser.externalId,
                    type: 'member',
                    custom: {
                      location: testUser.location,
                      jobTitle: testUser.jobTitle,
                      currentMood: testUser.currentMood,
                      socialHandle: testUser.socialHandle,
                      timezone: testUser.timezone,
                      score: 0
                    }
                  })
                } else {
                  return localChat.updateUser(testUser.id, {
                    name: testUser.name,
                    profileUrl: testUser.avatar,
                    email: testUser.email,
                    externalId: testUser.externalId,
                    type: 'member',
                    custom: {
                      location: testUser.location,
                      jobTitle: testUser.jobTitle,
                      currentMood: testUser.currentMood,
                      socialHandle: testUser.socialHandle,
                      timezone: testUser.timezone,
                      score: 0
                    }
                  })
                }
              })
            if (tempPromise) {
              promises.push(tempPromise)
            }
          }
          await Promise.all(promises)
        }

        const testPublicChannel = await localChat.getChannel(
          testPublicChannels[0].id
        )
        if (!testPublicChannel) {
          setLoadMessage('Creating Public Channel data')
          for (const channel of testPublicChannels) {
            let newPublicChannel = await localChat.getChannel(channel.id)
            if (!newPublicChannel) {
              newPublicChannel = await localChat.createPublicConversation({
                channelId: channel.id,
                channelData: {
                  name: channel.name,
                  description: channel.description,
                  custom: {
                    profileUrl: channel.avatar
                  }
                }
              })
            } else {
              break
            }
          }
        }
      } catch {
        setLoadMessage(
          'Could not initialize Chat.  Please check your PubNub Keyset configuration'
        )
      }
    }

    const shuffle = array => {
      return array
        .map(a => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
    }
    const shuffledArray = shuffle(userArray)
    setUserArray(shuffledArray)
    init()
  }, [])

  async function login (userId) {
    const localChat = await Chat.init({
      publishKey: process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY,
      subscribeKey: process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY,
      userId: userId,
      typingTimeout: 5000,
      storeUserActivityTimestamps: true,
      storeUserActivityInterval: 600000
    })
    setChat(localChat)
    setUserId(userId)
    setLoginPageShown(false)
  }

  function returnToSalesScreen () {
    setSalesIntroPageShown(true)
    setLoginPageShown(false)
  }

  return (
    <div className='flex items-center justify-center h-fit min-h-screen w-screen min-w-screen bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#334169] to-navy900 select-none'>
      <div className='flex flex-col gap-20 items-center text-navy100 '>
        <div className='flex flex-row gap-4 items-center'>
          {isGuidedDemo && (
            <div
              className='cursor-pointer'
              onClick={() => {
                returnToSalesScreen()
              }}
            >
              <ArrowBack />
            </div>
          )}
          <div className='text-5xl font-extrabold'>Choose a user to log in</div>
        </div>
        <div className='flex flex-row gap-8'>
          {userArray.slice(0, 4).map((user, index) => {
            return (
              <LoginAvatar
                key={index}
                id={index}
                name={user.name}
                avatarUrl={user.avatar}
                personSelected={key => {
                  //console.log('logging in with ' + userArray[key].name)
                  login(userArray[key].id)
                }}
              ></LoginAvatar>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function LoginAvatar ({ id, avatarUrl, name, personSelected }) {
  return (
    <div
      className='flex flex-col gap-3 px-2 items-center cursor-pointer'
      onClick={() => {
        personSelected(id)
      }}
    >
      <div className=''>
        <Image
          src={avatarUrl}
          alt='Avatar'
          className='rounded-full'
          width={128}
          height={128}
          priority
        />
      </div>
      <div className='text-lg font-normal'>{name}</div>
    </div>
  )
}
