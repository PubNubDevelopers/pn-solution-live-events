'use client'

import { useState } from 'react'
import Image from 'next/image'
import { pushChannelSelfId, pushChannelSalesId } from '../data/constants'

export default function Page () {
  const device = 'pixel8' // or pixel8pro
  const buildId = 'b_i37cn2fq5nqrupyscjyybscwzm'
  //  Seems to be some bug with the online emulator hosting using Android 15.0, but Android 14.0 works fine.
  const simulatorParams =
    'scale=auto&screenOnly=false&osVersion=14.0&centered=both&grantPermissions=true&resetGms=true'
  const isGuidedDemo = process.env.NEXT_PUBLIC_GUIDED_DEMO === 'true'
    ? process.env.NEXT_PUBLIC_GUIDED_DEMO
    : null
  const pushChannel =
    isGuidedDemo == 'true' ? pushChannelSalesId : pushChannelSelfId
  const launchData = encodeURIComponent(
    JSON.stringify({
      subscribeKey: process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY as string,
      pushChannel: pushChannel,
      showDebug: false
    })
  )
  const iFrameSrc = `https://appetize.io/embed/${buildId}?device=${device}&${simulatorParams}&params=${launchData}`
  return (
    <main>
      <div className='flex items-center justify-center h-fit min-h-screen w-screen min-w-screen bg-white select-none'>
        <iframe
          src={iFrameSrc}
          width='404'
          height='840'
          frameBorder='0'
          allowFullScreen
        ></iframe>
      </div>
    </main>
  )
}
