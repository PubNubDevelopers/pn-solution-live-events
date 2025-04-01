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
      if (currentAdId == adUrls.length - 1) {
        setCurrentAdId(0)
      } else {
        setCurrentAdId(currentAdId + 1)
      }
    }, 10000) //  Cycle through ads at this interval

    return () => clearInterval(mobileAdInterval)
  })

  function adClicked (e, adId, adUrl) {
    console.log('ToDo: ad clicked: ' + adId);e.stopPropagation()
  }

  if (!isMobilePreview) {
    return (
      <div className={`${className} p-2`}>
        <div className='flex flex-row gap-3 w-full justify-between overflow-x-scroll overscroll-none'>
          {adUrls.slice(0, 3).map((adUrl, index) => {
            return (
              <Image
                key={index}
                src={adUrl}
                alt='Advert'
                className='rounded-lg shadow-sm cursor-pointer'
                width={219}
                height={124}
                onClick={(e) => {adClicked(e, index, adUrls[index])}}
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
            className='rounded-lg shadow-sm cursor-pointer'
            width={402}
            height={226}
            onClick={(e) => {adClicked(e, currentAdId, adUrls[currentAdId])}}
            priority
          />
        </div>
      </div>
    )
  }
}
