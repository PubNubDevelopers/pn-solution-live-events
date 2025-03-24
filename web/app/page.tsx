'use client'

import { useState } from 'react'
import { Input } from '@heroui/react'
import IntroPage from './pages/introPage'
import SportsEventPage from './pages/sportsEventPage'

export default function Home () {
  const [introPageShown, setIntroPageShown] = useState(true)

  return (
    <>
      <IntroPage
        introPageShown={introPageShown}
        setIntroPageShown={setIntroPageShown}
      />
      {!introPageShown && <SportsEventPage />}
    </>
  )
}
