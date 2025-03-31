import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function AdvertsOfferWidget ({
  className,
  isMobilePreview,
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide,
  adUrl
}) {
  const [currentAdId, setCurrentAdId] = useState(0)

  function adClicked (e, adId, adUrl) {
    console.log('ToDo: ad clicked: ' + adId)
    e.stopPropagation()
  }

  return (
    <div className={`${className} p-2`}>
      <div className='flex flex-col items-center'>
        <Image
          src={adUrl}
          alt='Advert'
          className='my-2 rounded-lg shadow-sm cursor-pointer'
          width={402}
          height={226}
          onClick={e => {
            adClicked(e, 10, adUrl)
          }}
          priority
        />
      </div>
    </div>
  )
}
