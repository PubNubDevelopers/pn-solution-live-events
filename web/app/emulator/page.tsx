'use client'

import { useState } from 'react'
import Image from 'next/image'
import { pushChannelSelfId, pushChannelSalesId } from '../data/testData'

export default function Page () {
  const device = 'pixel8' // or pixel8pro
  const buildId = 'b_i37cn2fq5nqrupyscjyybscwzm'
  const simulatorParams =
    'scale=auto&screenOnly=false&osVersion=15.0&centered=both&grantPermissions=true'
  const isGuidedDemo = process.env.NEXT_PUBLIC_GUIDED_DEMO
    ? process.env.NEXT_PUBLIC_GUIDED_DEMO
    : null
  const pushChannel =
    isGuidedDemo == 'true' ? pushChannelSalesId : pushChannelSelfId
    //  todo figure out why launch data isn't getting passed through
  const launchData = encodeURIComponent(
    JSON.stringify({
      publishKey: process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY as string,
      subscribeKey: process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY as string,
      pushChannel: pushChannel
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
