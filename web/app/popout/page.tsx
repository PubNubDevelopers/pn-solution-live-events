'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Chat, User } from '@pubnub/chat'
import LoginPage from '../pages/loginPage'
import TabletContents from '../components/previewTabletContents'

export default function Page () {
  const [loginPageShown, setLoginPageShown] = useState(true)
  const [userId, setUserId] = useState<string | null>(null)
  const [chat, setChat] = useState<Chat | null>(null)
  const [loadMessage, setLoadMessage] = useState('Demo is initializing...')
  const isGuidedDemo =
    process.env.NEXT_PUBLIC_GUIDED_DEMO === 'true'
      ? process.env.NEXT_PUBLIC_GUIDED_DEMO
      : null
  const [currentScore, setCurrentScore] = useState(0)

  function logout () {
    setLoginPageShown(true)
    setUserId(null)
  }

  useEffect(() => {
    //  Get updates on the current user
    //  Requires 'User Metadata Events' enabled on the keyset
    //  test logging out and in again as another user
    if (!chat) return
    if (!chat.currentUser) return
    setCurrentScore(Number(chat.currentUser.custom?.score) || 0)
    return chat.currentUser.streamUpdates(updatedUser => {
      if (updatedUser.custom?.score) {
        setCurrentScore(Number(updatedUser.custom.score) || 0)
      }
    })
  }, [chat])

  if (loginPageShown && !userId) {
    return (
      <LoginPage
        chat={chat}
        setChat={setChat}
        setLoginPageShown={setLoginPageShown}
        setSalesIntroPageShown={() => {}}
        setUserId={setUserId}
        isGuidedDemo={isGuidedDemo}
        setLoadMessage={setLoadMessage}
        isPopout={true}
      />
    )
  }

  if (userId) {
    return (
      <div className='p-4 select-none'>
        <TabletContents
          chat={chat}
          isGuidedDemo={isGuidedDemo}
          guidesShown={false}
          visibleGuide={''}
          setVisibleGuide={() => {}}
          logout={logout}
          currentScore={currentScore}
          heightConstrained={false}
        />
      </div>
    )
  }

  if (!userId) {
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
}
