'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Chat } from '@pubnub/chat'
import TabletContents from '../components/previewTabletContents'
import { getAuthKey } from '../getAuthKey'

export default function Page() {
  const [userId, setUserId] = useState<string | null>(null)
  const [chat, setChat] = useState<Chat | null>(null)
  const [loadMessage, setLoadMessage] = useState('Demo is initializing...')
  const [currentScore, setCurrentScore] = useState(0)

  useEffect(() => {
    async function init() {
      if (!process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY || !process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY) {
        setLoadMessage('Missing PubNub configuration')
        return
      }

      try {
        // Use a default user for embedded view
        const defaultUserId = 'Docs'
        const { accessManagerToken } = await getAuthKey(defaultUserId, false)
        const localChat = await Chat.init({
          publishKey: process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY,
          subscribeKey: process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY,
          userId: defaultUserId,
          authKey: accessManagerToken,
          typingTimeout: 5000,
          storeUserActivityTimestamps: true,
          storeUserActivityInterval: 600000
        })
        setChat(localChat)
        setUserId(defaultUserId)
      } catch (error) {
        console.error('Failed to initialize chat:', error)
        setLoadMessage('Failed to initialize demo')
      }
    }

    init()
  }, [])

  useEffect(() => {
    if (!chat || !chat.currentUser) return
    setCurrentScore(Number(chat.currentUser.custom?.score) || 0)
    return chat.currentUser.streamUpdates(updatedUser => {
      if (updatedUser.custom?.score) {
        setCurrentScore(Number(updatedUser.custom.score) || 0)
      }
    })
  }, [chat])

  if (!userId || !chat) {
    return (
      <main>
        <div className='flex flex-col w-full h-screen justify-center items-center'>
          <div className='flex mb-5 animate-spin'>
            <Image
              src='/icons/loading.png'
              alt='Loading'
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
    <div className='p-4 select-none'>
      <TabletContents
        chat={chat}
        isGuidedDemo={false}
        guidesShown={false}
        visibleGuide={''}
        setVisibleGuide={() => {}}
        logout={() => {}}
        currentScore={currentScore}
        heightConstrained={false}
      />
    </div>
  )
} 