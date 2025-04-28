'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Chat, User } from '@pubnub/chat'
import Header from '../components/header'
import SideMenu from '../side-menu/sideMenu'
import PreviewTablet from '../components/previewTablet'
import PreviewMobile from '../components/previewMobile'
import { OpenInNewWindowIcon } from '../side-menu/sideMenuIcons'
import { urls } from '../data/urls'
import { dynamicAdChannelId } from "../data/constants";

export default function SportsEventPage ({
  chat,
  userId,
  setUserId,
  setLoginPageShown,
  isGuidedDemo
}) {
  const [tabletPreview, setTabletPreview] = useState(true)
  const [sideMenuOpen, setSideMenuOpen] = useState(true)
  const [guidesShown, setGuidesShown] = useState(false)
  const [visibleGuide, setVisibleGuide] = useState('')
  const [currentScore, setCurrentScore] = useState(0)
  const [dataControlsDropDownVisible, setDataControlsDropDownVisible] =
  useState(false)

  function backgroundClicked () {
    //console.log('background clicked')
    setVisibleGuide('')
    setDataControlsDropDownVisible(false)
  }

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
    setCurrentScore(chat.currentUser.custom?.score ?? 0)
    return chat.currentUser.streamUpdates(updatedUser => {
      if (updatedUser.custom?.score) {
        //console.log('user has updated - setting score to ' + updatedUser.custom.score)
        setCurrentScore(updatedUser.custom.score)
      }
    })
  }, [chat])

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
          <div className='text-4xl select-none'>Initializing...</div>
        </div>
      </main>
    )
  }

  return (
    <main
      className='h-screen flex bg-white select-none'
      onClick={() => backgroundClicked()}
    >
      <Header
        sideMenuOpen={sideMenuOpen}
        setSideMenuOpen={setSideMenuOpen}
        tabletPreview={tabletPreview}
        setTabletPreview={setTabletPreview}
        guidesShown={guidesShown}
        setGuidesShown={setGuidesShown}
      ></Header>

      <div className='sm:hidden flex flex-col mt-10 h-screen justify-center w-full text-center gap-16 text-4xl'>
        This app is not designed for mobile
      </div>

      <div className='hidden sm:flex flex-row w-full mt-[92px] pb-0 bg-navy900/40 text-neutral-50'>
        <SideMenu
          sideMenuOpen={sideMenuOpen}
          isGuidedDemo={isGuidedDemo}
          chat={chat}
          dataControlsDropDownVisible={dataControlsDropDownVisible}
          setDataControlsDropDownVisible={setDataControlsDropDownVisible}
        ></SideMenu>

        <div className='overflow-y-auto w-full p-6 overscroll-none flex flex-col items-center justify-center'>
          <div className='flex flex-col gap-0'>
            {isGuidedDemo && (
              <a
                href={`${urls.popoutView}`}
                target='_blank'
                className={`no-underline self-end ${tabletPreview && 'pr-6'}`}
              >
                <div className='flex flex-row items-center gap-1 py-2 text-white'>
                  <div className='text-white font-semibold text-base'>
                    Open demo in new window
                  </div>
                  <OpenInNewWindowIcon />
                </div>
              </a>
            )}
            <PreviewTablet
              className={`${!tabletPreview && 'hidden'}`}
              chat={chat}
              isGuidedDemo={isGuidedDemo}
              guidesShown={guidesShown}
              visibleGuide={visibleGuide}
              setVisibleGuide={setVisibleGuide}
              logout={logout}
              currentScore={currentScore}
            ></PreviewTablet>
          </div>
          <PreviewMobile
            className={`${tabletPreview && 'hidden'}`}
            chat={chat}
            isGuidedDemo={isGuidedDemo}
            guidesShown={guidesShown}
            visibleGuide={visibleGuide}
            setVisibleGuide={setVisibleGuide}
            logout={logout}
            currentScore={currentScore}
          ></PreviewMobile>
        </div>
      </div>
    </main>
  )
}
