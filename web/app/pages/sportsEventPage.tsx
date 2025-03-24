'use client'
import { useState } from 'react'
import Header from '../components/header'
import LeftHandMenu from '../components/leftHandMenu'
import PreviewDesktop from '../components/previewDesktop'
import PreviewMobile from '../components/previewMobile'

export default function SportsEventPage ({}) {
    const [desktopPreview, setDesktopPreview] = useState(true)

  function backgroundClicked () {
    console.log('background clicked')
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
          <LeftHandMenu
          ></LeftHandMenu>
        </div>

        <div className='overflow-y-hidden bg-navy600 w-full overscroll-none z-10'>
          <div className='flex flex-col '>
            <div
              className={`flex flex-col ${
                desktopPreview
                  ? 'm-8  border-4 border-brandAccentNavy1-50pc rounded-xl'
                  : ''
              }`}
            >
              {desktopPreview ? (
                <PreviewDesktop
                ></PreviewDesktop>
              ) : (
                <PreviewMobile
                ></PreviewMobile>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
