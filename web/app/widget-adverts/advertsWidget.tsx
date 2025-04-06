import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ads } from '../data/constants'

export default function AdvertsWidget ({
  className,
  isMobilePreview,
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide
}) {
  const nonPremiumAds = ads.filter(ad => ad.isPremium === false)
  const [currentAdId, setCurrentAdId] = useState(0)

  useEffect(() => {
    if (!isMobilePreview) return
    const mobileAdInterval = setInterval(() => {
      if (currentAdId == nonPremiumAds.length - 1) {
        setCurrentAdId(0)
      } else {
        setCurrentAdId(currentAdId + 1)
      }
    }, 10000) //  Cycle through ads at this interval

    return () => clearInterval(mobileAdInterval)
  })

  function adClicked (e, ad) {
    console.log('ToDo: ad clicked: ' + ad.id)
    e.stopPropagation()
  }

  if (!isMobilePreview) {
    return (
      <div className={`${className} p-2`}>
        <div className='flex flex-row gap-3 w-full justify-between overflow-x-scroll overscroll-none'>
          {nonPremiumAds.slice(0, 3).map((ad, index) => {
            return (
              <Image
                key={index}
                src={ad.src}
                alt='Advert'
                className='rounded-lg shadow-sm cursor-pointer'
                width={219}
                height={124}
                onClick={e => {
                  adClicked(e, nonPremiumAds[index])
                }}
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
            src={nonPremiumAds[currentAdId] ? nonPremiumAds[currentAdId].src : '/avatars/placeholder.png'}
            alt='Advert'
            className='rounded-lg shadow-sm cursor-pointer'
            width={402}
            height={226}
            onClick={e => {
              adClicked(e, nonPremiumAds[currentAdId])
            }}
            priority
          />
        </div>
      </div>
    )
  }
}
