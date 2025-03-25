'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Chat } from '@pubnub/chat'
import Header from '../components/header'
import SideMenu from '../components/sideMenu'
import PreviewTablet from '../components/previewTablet'
import PreviewMobile from '../components/previewMobile'

export default function SportsEventPage ({ userId, isGuidedDemo }) {
  const [tabletPreview, setTabletPreview] = useState(true)
  const [chat, setChat] = useState<Chat | null>(null)
  const [loadMessage, setLoadMessage] = useState('Demo is initializing...')

  function backgroundClicked () {
    console.log('background clicked')
  }

  //  App initialization
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
      <Header></Header>

      {/* TODO */}
      <div className='sm:hidden flex flex-col mt-10 h-screen justify-center w-full text-center gap-16 text-4xl'>
        This app is not designed for mobile
      </div>

      <div className='hidden sm:flex flex-row w-full mt-[92px] pb-0 bg-navy900 text-white'>
        <div className='flex flex-1 flex-col max-w-[366px] min-w-[366px]'>
          <SideMenu></SideMenu>
        </div>

        <div className='overflow-y-hidden bg-navy600 w-full overscroll-none z-10'>
          <div className='flex flex-col '>
            <div
              className={`flex flex-col ${
                tabletPreview
                  ? 'm-8  border-4 border-brandAccentNavy1-50pc rounded-xl'
                  : ''
              }`}
            >
              {tabletPreview ? (
                <PreviewTablet chat={chat}></PreviewTablet>
              ) : (
                <PreviewMobile chat={chat}></PreviewMobile>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
