import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ads } from '../data/constants'
import GuideOverlay from '../components/guideOverlay'
import PointsOverlay from './pointsOverlay'
import { actionCompleted } from 'pubnub-demo-integration'

export default function AdvertsWidget ({
  className,
  isMobilePreview,
  chat,
  isGuidedDemo,
  guidesShown,
  visibleGuide,
  setVisibleGuide,
  onAdClick
}) {
  const [currentAdId, setCurrentAdId] = useState(0)
  const [nonPremiumAds, setNonPremiumAds] = useState(
    ads.filter(ad => ad.isPremium === false)
  )

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
    e.stopPropagation()
    //  The 'clicked ads' array is only stored locally, so you can click on both
    //  the tablet and mobile preview to get 'double points'... but I'll leave it working
    //  that way since it makes it easier to demo
    const clickPoints = ad.clickPoints ?? 0
    if (clickPoints > 0) {
      setNonPremiumAds(prevAds =>
        prevAds.map(a => (a.id === ad.id ? { ...a, clickPoints: 0 } : a))
      )
      onAdClick(clickPoints)
      if (!isGuidedDemo) {
        //  This code is only used by the PubNub website
        actionCompleted({
          action: 'Click an ad that awards points',
          blockDuplicateCalls: false,
          debug: false
        })
      }  
    }
  }

  if (!isMobilePreview) {
    return (
      <div className={`${className} p-2`}>
        <GuideOverlay
          id={'adverts'}
          guidesShown={guidesShown}
          visibleGuide={visibleGuide}
          setVisibleGuide={setVisibleGuide}
          text={
            <span>
              Increase user engagement with{' '}
              <span className='font-semibold'>gamification</span>, providing
              real-time insights into your users. This app incentivizes users to
              click on Ads by gaining points, and uses{' '}
              <span className='font-semibold'>App Context</span> to securely
              track the score. You could even show a{' '}
              <span className='font-semibold'>score leaderboard</span> using{' '}
              <span className='font-semibold'>Functions</span>.
            </span>
          }
          xOffset={`right-[50px]`}
          yOffset={'top-[10px]'}
          flexStyle={'flex-row items-start'}
        />
        <div className='flex flex-row gap-3 w-full justify-between overflow-x-scroll overscroll-none'>
          {nonPremiumAds.slice(0, 3).map((ad, index) => {
            return (
              <div key={index} className=''>
                {ad.clickPoints != null && ad.clickPoints > 0 && (
                  <div className='relative pointer-events-none'>
                    <div className='absolute top-0 right-0'>
                      <PointsOverlay
                        clickPoints={ad.clickPoints}
                        isPremium={false}
                      />
                    </div>
                  </div>
                )}

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
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  if (isMobilePreview) {
    return (
      <div className={`${className} p-2`}>
        <GuideOverlay
          id={'adverts'}
          guidesShown={guidesShown}
          visibleGuide={visibleGuide}
          setVisibleGuide={setVisibleGuide}
          text={
            <span>
              Increase user engagement with{' '}
              <span className='font-semibold'>gamification</span>, providing
              real-time insights into your users. This app incentivizes users to
              click on Ads by gaining points, and uses{' '}
              <span className='font-semibold'>App Context</span> to securely
              track the score. You could even show a{' '}
              <span className='font-semibold'>score leaderboard</span> using{' '}
              <span className='font-semibold'>Functions</span>.
            </span>
          }
          xOffset={`right-[50px]`}
          yOffset={'top-[10px]'}
          flexStyle={'flex-row items-start'}
        />

        {nonPremiumAds[currentAdId].clickPoints != null &&
          nonPremiumAds[currentAdId].clickPoints > 0 && (
            <div className='relative pointer-events-none'>
              <div className='absolute top-0 right-0'>
                <PointsOverlay
                  clickPoints={nonPremiumAds[currentAdId].clickPoints}
                  isPremium={false}
                />
              </div>
            </div>
          )}
        <div className='flex justify-center'>
          <Image
            src={
              nonPremiumAds[currentAdId]
                ? nonPremiumAds[currentAdId].src
                : '/avatars/placeholder.png'
            }
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
