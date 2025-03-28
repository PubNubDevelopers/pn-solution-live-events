import { Input } from '@heroui/react'
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header ({
  sideMenuOpen,
  setSideMenuOpen,
  tabletPreview,
  setTabletPreview,
  guidesShown,
  setGuidesShown
}) {
  const MenuOpenIcon = props => {
    return (
      <svg
        aria-hidden='true'
        focusable='false'
        height='24'
        role='presentation'
        viewBox='0 0 25 24'
        width='25'
        {...props}
      >
        <path
          d='M3.88672 18H16.8867V16H3.88672V18ZM3.88672 13H13.8867V11H3.88672V13ZM3.88672 6V8H16.8867V6H3.88672ZM21.8867 15.59L18.3067 12L21.8867 8.41L20.4767 7L15.4767 12L20.4767 17L21.8867 15.59Z'
          fill='currentColor'
        />
      </svg>
    )
  }

  const PhoneIcon = props => {
    return (
      <svg
        aria-hidden='true'
        focusable='false'
        height='24'
        role='presentation'
        viewBox='0 0 24 24'
        width='24'
        {...props}
      >
        <path
          d='M16 1H8C6.62 1 5.5 2.12 5.5 3.5V20.5C5.5 21.88 6.62 23 8 23H16C17.38 23 18.5 21.88 18.5 20.5V3.5C18.5 2.12 17.38 1 16 1ZM12 22C11.17 22 10.5 21.33 10.5 20.5C10.5 19.67 11.17 19 12 19C12.83 19 13.5 19.67 13.5 20.5C13.5 21.33 12.83 22 12 22ZM16.5 18H7.5V4H16.5V18Z'
          fill='currentColor'
        />
      </svg>
    )
  }

  const TabletIcon = props => {
    return (
      <svg
        aria-hidden='true'
        focusable='false'
        height='24'
        role='presentation'
        viewBox='0 0 24 24'
        width='24'
        {...props}
      >
        <path
          d='M21 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H21C22.1 20 22.99 19.1 22.99 18L23 6C23 4.9 22.1 4 21 4ZM19 18H5V6H19V18Z'
          fill='currentColor'
        />
      </svg>
    )
  }

  const CloseIcon = props => {
    return (
      <svg
        aria-hidden='true'
        focusable='false'
        height='14px'
        role='presentation'
        viewBox='0 0 14 14'
        width='14px'
        {...props}
      >
        <path
          d='M1 13L13 1M1 1L13 13'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    )
  }

  return (
    <div className='hidden sm:flex flex-row w-full justify-between h-[92px] select-none fixed items-center px-6 bg-navy900'>
      <div className='flex flex-row gap-6 items-center'>
        <div className='bg-white h-[52px] rounded-lg place-content-center p-3'>
          <Image
            src='./pubnub-logos/pubnub.svg'
            alt='Company Logo'
            width={97.49}
            height={28.6}
            className='max-h-[30px] max-w-[100px]'
            unoptimized={true}
            priority
          />
        </div>
        <div
          className={`flex h-11 w-11 border-1 hover:bg-navy800 border-brandAccent3 shadow-sm items-center justify-center rounded-md text-neutral50 cursor-pointer`}
          onClick={e => {
            setSideMenuOpen(!sideMenuOpen)
            e.stopPropagation()
          }}
        >
          <MenuOpenIcon />
        </div>
      </div>
      <div className='text-navy100 font-bold text-2xl'>
        Live Events Solution Showcase
      </div>
      <div className='flex flex-row gap-4'>
        <div className='flex flex-row'>
          <div
            className={`flex h-11 w-[58px] border-1 hover:bg-navy700 ${
              !tabletPreview
                ? 'bg-navy700 border-brandAccent3'
                : 'border-navy600'
            } shadow-sm items-center justify-center rounded-l-md text-neutral200 cursor-pointer`}
            onClick={(e) => {
              setTabletPreview(false)
              e.stopPropagation()
            }}
          >
            <PhoneIcon />
          </div>{' '}
          <div
            className={`flex h-11 w-[58px] border-1 hover:bg-navy700 ${
              tabletPreview
                ? 'bg-navy700 border-brandAccent3'
                : 'border-navy600'
            } shadow-sm items-center justify-center rounded-r-md text-neutral200 cursor-pointer`}
            onClick={(e) => {
              setTabletPreview(true)
              e.stopPropagation()
            }}
          >
            <TabletIcon />
          </div>
        </div>
        <div
          className='flex flex-row gap-2 h-11 rounded-md border-1 border-brandAccent3 px-4 py-2 hover:bg-navy800 shadow-[0px_4px_18px_0px_rgba(88,_156,_255,_0.8)] text-neutral50 items-center cursor-pointer'
          onClick={e => {
            setGuidesShown(!guidesShown)
            e.stopPropagation()
          }}
        >
          {guidesShown && <CloseIcon />}
          {!guidesShown ? 'How it works' : 'Close guide'}
        </div>
      </div>
    </div>
  )
}
