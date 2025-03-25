import { Input } from '@heroui/react'
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header ({ setTabletPreview }) {
  return (
    <div className='hidden sm:flex flex-row w-full justify-between h-[92px] select-none fixed items-center px-6 bg-navy900'>
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
      <div className='text-navy100 font-bold text-2xl'>I AM THE HEADER</div>
      <div className='flex flex-row gap-4'>
        <div
          className='text-navy100 cursor-pointer underline'
          onClick={() => {
            setTabletPreview(false)
          }}
        >
          Portrait
        </div>{' '}
        <div
          className='text-navy100 cursor-pointer underline'
          onClick={() => {
            setTabletPreview(true)
          }}
        >
          Landscape
        </div>
      </div>
    </div>
  )
}
