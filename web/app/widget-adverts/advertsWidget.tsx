import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function AdvertsWidget ({
  className,
  isMobilePreview,
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide
}) {
  const adUrls = ['/ads/ad1.png', '/ads/ad3.png', '/ads/ad2.png']
  const [currentAdId, setCurrentAdId] = useState(0)

  useEffect(() => {
    if (!isMobilePreview) return
    const mobileAdInterval = setInterval(() => {
      if (currentAdId == adUrls.length - 1)
      {
        setCurrentAdId(0)
      }
      else {
        setCurrentAdId(currentAdId+1)
      }
    }, 10000);  //  Cycle through ads at this interval

    return () => clearInterval(mobileAdInterval)
  })

  if (!isMobilePreview) {
    return (
      <div className={`${className} p-2`}>
        <div className='flex flex-row gap-3 justify-between'>
          {adUrls.slice(0, 3).map((adUrl, index) => {
            return (
              <Image
              key={index}
              src={adUrl}
              alt='Advert'
              className='border-2 border-neutral200 rounded-lg shadow-sm'
              width={242}
              height={137}
              priority
            />
              )
          })}
        </div>
      </div>
    )
  }

  if (isMobilePreview) {
    return (
<div className={`${className} p-2`}>
      
      <div className='flex justify-center'>
      <Image
              src={adUrls[currentAdId]}
              alt='Advert'
              className='border-2 border-neutral200 rounded-lg shadow-sm'
              width={242}
              height={137}
              priority
            /></div>
  </div>
    )
  }
}
