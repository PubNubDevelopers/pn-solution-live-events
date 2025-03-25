'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Chat, User } from '@pubnub/chat'
import Header from '../components/header'
import SideMenu from '../components/sideMenu'
import PreviewTablet from '../components/previewTablet'
import PreviewMobile from '../components/previewMobile'
import { testUsers, testPublicChannels } from '../data/testData'

export default function SportsEventPage ({ userId, isGuidedDemo }) {
  const [tabletPreview, setTabletPreview] = useState(true)
  const [chat, setChat] = useState<Chat | null>(null)
  const [loadMessage, setLoadMessage] = useState('Demo is initializing...')

  function backgroundClicked () {
    console.log('background clicked')
  }

  //  App initialization
  //  todo - if the login page pulls from Chat data, this needs to be moved to the login page init
  useEffect(() => {
    async function init () {
      if (!process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY) {
        setLoadMessage('No PubNub Publish Key Found')
        console.error('Please specify your PubNub Publish Key in the .env file')
        return
      }
      if (!process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY) {
        setLoadMessage('No PubNub Subscribe Key Found')
        console.error(
          'Please specify your PubNub Subscribe Key in the .env file'
        )
        return
      }
      try {
        const localChat = await Chat.init({
          publishKey: process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY,
          subscribeKey: process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY,
          userId: userId,
          typingTimeout: 5000,
          storeUserActivityTimestamps: true,
          storeUserActivityInterval: 600000
        })
        setChat(localChat)

        const testUser = await localChat.getUser('user-01')

        if (!testUser) {
          setLoadMessage(
            'Populating keyset with users (this will take a few seconds'
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
    if (chat) return
    if (!userId) return

    init()
  }, [chat, userId])

  if (!chat) {
    return (
      <main>
        <div className='flex flex-col w-full h-screen justify-center items-center'>
          <div className='flex mb-5 animate-spin'>
            <Image
              src='/icons/loading.png'
              alt='Chat Icon'
              className=''
              width={50}
              height={50}
              priority
            />
          </div>
          <div className='text-4xl select-none'>{loadMessage}</div>
        </div>
      </main>
    )
  }

  return (
    <main
      className='h-screen flex bg-white'
      onClick={() => backgroundClicked()}
    >
      <Header setTabletPreview={setTabletPreview}></Header>

      {/* TODO */}
      <div className='sm:hidden flex flex-col mt-10 h-screen justify-center w-full text-center gap-16 text-4xl'>
        This app is not designed for mobile
      </div>

      <div className='hidden sm:flex flex-row w-full mt-[92px] pb-0 text-neutral-50'>
        <div className='flex flex-1 flex-col max-w-[366px] min-w-[366px] bg-navy900'>
          <SideMenu></SideMenu>
        </div>

        <div className='overflow-y-auto bg-navy900/40 w-full p-6 overscroll-none flex flex-row justify-center'>
          {tabletPreview ? (
            <PreviewTablet chat={chat}></PreviewTablet>
          ) : (
            <PreviewMobile chat={chat}></PreviewMobile>
          )}
        </div>
      </div>
    </main>
  )
}
