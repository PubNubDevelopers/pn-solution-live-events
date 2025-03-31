'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Chat, User } from '@pubnub/chat'
import LoginPage from '../pages/loginPage'
import TabletContents from '../components/previewTabletContents'

export default function Page () {
  const [loginPageShown, setLoginPageShown] = useState(true)
  const [userId, setUserId] = useState<string | null>(null)
  const [chat, setChat] = useState<Chat | null>(null)
  const [loadMessage, setLoadMessage] = useState('Demo is initializing...')

  function logout () {
    setLoginPageShown(true)
    setUserId(null)
  }

  if (loginPageShown && !userId) {
    return (
      <LoginPage
        chat={chat}
        setChat={setChat}
        setLoginPageShown={setLoginPageShown}
        setSalesIntroPageShown={() => {}}
        setUserId={setUserId}
        isGuidedDemo={false}
        setLoadMessage={setLoadMessage}
      />
    )
  }

  if (userId) {
    return (
      <div className='p-4 select-none'>
        <TabletContents
          chat={chat}
          guidesShown={false}
          visibleGuide={''}
          setVisibleGuide={() => {}}
          logout={logout}
          heightConstrained={false}
          showDynamicAd={false}
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
