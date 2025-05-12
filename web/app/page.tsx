'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Chat, User } from '@pubnub/chat'
import SalesIntroPage from './pages/salesIntroPage'
import LoginPage from './pages/loginPage'
import SportsEventPage from './pages/sportsEventPage'

export default function Home () {
  const [salesIntroPageShown, setSalesIntroPageShown] = useState(false)
  const [loginPageShown, setLoginPageShown] = useState(false)
  const [guidedDemo, setGuidedDemo] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)
  const [chat, setChat] = useState<Chat | null>(null)
  const [loadMessage, setLoadMessage] = useState('Demo is initializing...')

  useEffect(() => {
    //  NEXT_PUBLIC_GUIDED_DEMO can be ignored and omitted from your .env file
    const isGuidedDemo = process.env.NEXT_PUBLIC_GUIDED_DEMO
      ? process.env.NEXT_PUBLIC_GUIDED_DEMO
      : null
    setGuidedDemo(isGuidedDemo === 'true')
    setSalesIntroPageShown(isGuidedDemo === 'true')
    setLoginPageShown(!(isGuidedDemo === 'true'))
  }, [])

  if (salesIntroPageShown) {
    return (
      <SalesIntroPage
        setSalesIntroPageShown={setSalesIntroPageShown}
        setLoginPageShown={setLoginPageShown}
      />
    )
  }

  if (!salesIntroPageShown && loginPageShown && !userId) {
    return (
      <LoginPage
        chat={chat}
        setChat={setChat}
        setLoginPageShown={setLoginPageShown}
        setSalesIntroPageShown={setSalesIntroPageShown}
        setUserId={setUserId}
        isGuidedDemo={guidedDemo}
        setLoadMessage={setLoadMessage}
        isPopout={false}
      />
    )
  }

  if (userId) {
    return (
      <SportsEventPage
        chat={chat}
        userId={userId}
        setUserId={setUserId}
        setLoginPageShown={setLoginPageShown}
        isGuidedDemo={guidedDemo}
      />
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
