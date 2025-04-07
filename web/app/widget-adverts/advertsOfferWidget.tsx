import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ads } from '../data/constants'
import PointsOverlay from './pointsOverlay'

export default function AdvertsOfferWidget ({
  className,
  isMobilePreview,
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide,
  adId,
  clickPoints,
  onAdClick
}) {

  return (
    <div className={`${className}`}>
      <div className='flex flex-col  py-2 items-center'>
        <div
          className=''
          onClick={e => {
            e.stopPropagation()
            onAdClick(clickPoints, adId)
          }}
        >
          {clickPoints && (
            <div className='relative'>
              <div className='absolute top-0 right-0'>
                <PointsOverlay clickPoints={clickPoints} isPremium={true} />
              </div>
            </div>
          )}
          <Image
            src={ads.find(ad => ad.id === adId)?.src || '/avatars/placeholder.png'}
            alt='Advert'
            className='cursor-pointer'
            width={402}
            height={226}
            priority
          />
        </div>
      </div>
    </div>
  )
}

