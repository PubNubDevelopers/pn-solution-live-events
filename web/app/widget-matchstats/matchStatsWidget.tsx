'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { BoxType, matchStatsConfig } from './matchStatsConfig'
import GuideOverlay from '../components/guideOverlay'
import { matchStatsChannelId } from '../data/constants'

export default function MatchStatsWidget ({
  className,
  isMobilePreview,
  chat,
  isGuidedDemo,
  guidesShown,
  visibleGuide,
  setVisibleGuide
}) {
  const [matchStats, setMatchStats] = useState<any | null>(matchStatsConfig)
  const [featuredPlayer, setFeaturedPlayer] = useState(1)
  const commonStatsBoxClasses =
    'min-h-36 max-h-36 min-w-44 max-w-56 bg-white border-1 border-navy200 rounded-lg'

  useEffect(() => {
    if (!chat) return
    const channel = chat.sdk.channel(matchStatsChannelId)
    const subscription = channel.subscription({ receivePresenceEvents: false })
    subscription.onMessage = messageEvent => {
      processReceivedMessage(messageEvent.message)
    }
    subscription.subscribe()
    return () => {
      subscription.unsubscribe()
    }
  }, [chat])

  useEffect(() => {
    if (!chat) return
    if (isGuidedDemo) return
    chat.sdk
      .fetchMessages({
        channels: [matchStatsChannelId],
        count: 1
      })
      .then(result => {
        if (result && result.channels[matchStatsChannelId]) {
          const previousMatchStats = result.channels[matchStatsChannelId][0]
          if (previousMatchStats) {
            processReceivedMessage(previousMatchStats.message)
          }
        }
      })
  }, [chat, isGuidedDemo])

  function processReceivedMessage (matchStatsMessage) {
    setMatchStats(prevStats => {
      const updatedStats = { ...prevStats }

      Object.keys(matchStatsMessage).forEach(key => {
        if (updatedStats[key] && updatedStats[key].info) {
          updatedStats[key] = {
            ...updatedStats[key],
            info: updatedStats[key].info.map((infoEntry, index) => ({
              ...infoEntry,
              stat: matchStatsMessage[key].info[index]?.stat || infoEntry.stat,
              dataPrimary:
                matchStatsMessage[key].info[index]?.dataPrimary ||
                infoEntry.dataPrimary,
              dataSecondary:
                matchStatsMessage[key].info[index]?.dataSecondary ||
                infoEntry.dataSecondary,
              imageUrl:
                matchStatsMessage[key].info[index]?.imageUrl ||
                infoEntry.imageUrl
            }))
          }
        }
      })

      return updatedStats
    })
  }

  return (
    <div className={`${className}`}>
      <GuideOverlay
        id={'matchStats'}
        guidesShown={guidesShown}
        visibleGuide={visibleGuide}
        setVisibleGuide={setVisibleGuide}
        text={
          <span>
            PubNub Core Services includes a{' '}
            <span className='font-semibold'>Pub/Sub Event API</span>, allowing
            for{' '}
            <span className='font-semibold'>
              unlimited channels, message persistence, channel groups and
              multiplexing
            </span>
            . Match stats are delivered to any number of subscribed users as
            they happen, or users can catch up on the latest stats if they join
            late.
          </span>
        }
        xOffset={`right-[50px]`}
        yOffset={'top-[10px]'}
        flexStyle={'flex-row items-start'}
      />

      <div
        className={`${
          isMobilePreview
            ? 'grid grid-cols-2 place-items-stretch'
            : 'grid grid-flow-col grid-rows-3 place-items-stretch'
        } gap-3 bg-brandAccent5 p-4 rounded-lg`}
      >
        <div className={`${commonStatsBoxClasses}`}>
          {giveStatsBox(matchStats?.statBox1)}
        </div>
        <div className={`${commonStatsBoxClasses}`}>
          {giveStatsBox(matchStats?.statBox2)}
        </div>
        <div className={`${commonStatsBoxClasses}`}>
          {giveStatsBox(matchStats?.statBox3)}
        </div>
        <div className={`${commonStatsBoxClasses}`}>
          {giveStatsBox(matchStats?.statBox4)}
        </div>
        <div className={`${commonStatsBoxClasses}`}>
          {giveStatsBox(matchStats?.statBox5)}
        </div>
        <div className={`${commonStatsBoxClasses}`}>
          {giveStatsBox(matchStats?.statBox6)}
        </div>
        <div
          className={`hidden md:flex ${
            isMobilePreview ? 'col-span-2' : 'col-span-2 row-span-3'
          }`}
        >
          {giveStatsBox(
            matchStats?.featuredPlayers[featuredPlayer],
            featuredPlayer,
            player => setFeaturedPlayer(player)
          )}
        </div>
      </div>
    </div>
  )
}

function giveStatsBox (
  boxConfig,
  featuredPlayer = 0,
  setFeaturedPlayer = player => {}
) {
  const imagePlaceholder = '/avatars/placeholder.png'
  if (boxConfig?.type == BoxType.InfoBoxWithImageAndQuantity) {
    return (
      <InfoBoxImageQuantity
        title={boxConfig?.title ?? ''}
        imageUrl={boxConfig.info[0].imageUrl ?? imagePlaceholder}
        imageAlt={boxConfig.info[0].imageAlt ?? 'Unspecified'}
        imageWidth={boxConfig.info[0].imageWidth ?? '32'}
        imageHeight={boxConfig.info[0].imageHeight ?? '32'}
        stat={boxConfig.info[0].stat ?? ''}
      />
    )
  } else if (boxConfig?.type == BoxType.InfoBoxComparingTwoStatistics) {
    return (
      <InfoBoxCompareTwoStatsWithImages
        title={boxConfig?.title ?? ''}
        stat1={boxConfig.info[0].stat ?? ''}
        imageUrl1={boxConfig.info[0].imageUrl ?? imagePlaceholder}
        imageAlt1={boxConfig.info[0].imageAlt ?? 'Unspecified'}
        imageWidth1={boxConfig.info[0].imageWidth ?? '32'}
        imageHeight1={boxConfig.info[0].imageHeight ?? '32'}
        stat2={boxConfig.info[1].stat ?? ''}
        imageUrl2={boxConfig.info[1].imageUrl ?? imagePlaceholder}
        imageAlt2={boxConfig.info[1].imageAlt ?? ''}
        imageWidth2={boxConfig.info[1].imageWidth ?? '32'}
        imageHeight2={boxConfig.info[1].imageHeight ?? '32'}
      />
    )
  } else if (boxConfig?.type == BoxType.InfoBoxWithImageAndTwoData) {
    return (
      <InfoBoxImageWithTwoData
        title={boxConfig?.title ?? ''}
        imageUrl={boxConfig.info[0].imageUrl ?? imagePlaceholder}
        imageAlt={boxConfig.info[0].imageAlt ?? 'Unspecified'}
        imageWidth={boxConfig.info[0].imageWidth ?? '32'}
        imageHeight={boxConfig.info[0].imageHeight ?? '32'}
        dataPrimary={boxConfig.info[0].dataPrimary ?? ''}
        dataSecondary={boxConfig.info[0].dataSecondary ?? ''}
      />
    )
  } else if (boxConfig?.type == BoxType.FeatureStats) {
    return (
      <FeatureStats
        title={boxConfig?.title ?? ''}
        imageWidth={boxConfig?.imageWidth ?? '32'}
        imageHeight={boxConfig?.imageHeight ?? '32'}
        imageUrl={boxConfig?.imageUrl ?? imagePlaceholder}
        imageAlt={boxConfig?.imageAlt ?? 'Unspecified'}
        headerBackgroundColor={boxConfig?.headerBackgroundColor ?? '#FFFFFF'}
        infoArray={boxConfig?.info ?? []}
        infoListItems={boxConfig?.infoListItems ?? null}
        cycleFeaturedPlayer={direction => {
          const NUM_FEATURED_PLAYERS = 2
          let newPlayer = (featuredPlayer + 1) % NUM_FEATURED_PLAYERS
          if (direction === 0) {
            let newPlayer = (featuredPlayer + 1) % NUM_FEATURED_PLAYERS
          }
          setFeaturedPlayer(newPlayer)
        }}
      />
    )
  } else {
    return <div className='p-4 w-full text-wrap'>Unknown box type</div>
  }
}

function InfoBoxImageQuantity ({
  title,
  imageWidth,
  imageHeight,
  imageUrl,
  imageAlt,
  stat
}) {
  return (
    <div className='flex flex-col p-4 gap-2 h-full items-center'>
      <div className='font-normal text-sm'>{title}</div>
      <div className='flex flex-row gap-3 h-full items-center '>
        <div>
          <Image
            src={imageUrl}
            alt={imageAlt}
            className=''
            width={imageWidth}
            height={imageHeight}
            priority
          />
        </div>
        <div className='font-bold text-2xl w-4'>{stat}</div>
      </div>
    </div>
  )
}

function InfoBoxCompareTwoStatsWithImages ({
  title,
  stat1,
  stat2,
  imageUrl1,
  imageAlt1,
  imageWidth1,
  imageHeight1,
  imageUrl2,
  imageAlt2,
  imageWidth2,
  imageHeight2
}) {
  return (
    <div className='flex flex-col p-4 gap-2 h-full items-center'>
      <div className='font-normal text-sm'>{title}</div>
      <div className='flex flex-row gap-0 w-full h-full items-center'>
        <div className='flex flex-col gap-1 w-full h-full items-center justify-center'>
          <div
            className={`font-bold ${
              stat1?.length > 3 ? 'text-lg' : 'text-2xl'
            }`}
          >
            {stat1}
          </div>
          <div>
            <Image
              src={imageUrl1}
              alt={imageAlt1}
              className=''
              width={imageWidth1}
              height={imageHeight1}
              priority
            />
          </div>
        </div>
        <div className='mx-2 border-1 border-neutral200 h-full'></div>
        <div className='flex flex-col gap-1 w-full h-full items-center justify-center'>
          <div
            className={`font-bold ${
              stat2?.length > 3 ? 'text-lg' : 'text-2xl'
            }`}
          >
            {stat2}
          </div>
          <div>
            <Image
              src={imageUrl2}
              alt={imageAlt2}
              className=''
              width={imageWidth2}
              height={imageHeight2}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoBoxImageWithTwoData ({
  title,
  dataPrimary,
  dataSecondary,
  imageWidth,
  imageHeight,
  imageUrl,
  imageAlt
}) {
  return (
    <div className='flex flex-col p-4 gap-2 h-full items-center'>
      <div className='font-normal text-sm'>{title}</div>
      <div className='flex flex-row gap-3 h-full items-center'>
        <div>
          <Image
            src={imageUrl}
            alt={imageAlt}
            className=''
            width={imageWidth}
            height={imageHeight}
            priority
          />
        </div>
        <div className='flex flex-col gap-0 w-[60px]'>
          <div className='font-bold text-2xl'>{dataPrimary}</div>
          <div className='font-medium text-sm'>{dataSecondary}</div>
        </div>
      </div>
    </div>
  )
}

function FeatureStats ({
  title,
  imageWidth,
  imageHeight,
  imageUrl,
  imageAlt,
  headerBackgroundColor,
  infoArray,
  infoListItems,
  cycleFeaturedPlayer
}) {
  function FeatureStatsInfoRow ({ heading, detail }) {
    return (
      <div className='text-sm'>
        <span className='font-bold'>{heading}</span>{' '}
        <span className=''>{detail}</span>
      </div>
    )
  }

  return (
    <div className='flex flex-col w-full min-w-72 gap-6 bg-white border-1 border-navy200 rounded-lg'>
      <div
        className={`flex flex-row w-full justify-center rounded-t-lg`}
        style={{ background: `${headerBackgroundColor}` }}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          className=''
          width={imageWidth}
          height={imageHeight}
          priority
        />
      </div>
      <div className='flex flex-row w-full justify-between'>
        <ChevronLeft
          className='cursor-pointer'
          onClick={e => {
            e.stopPropagation()
            cycleFeaturedPlayer(0)
          }}
        />
        <div className='font-semibold text-base'>{title}</div>
        <ChevronRight
          className='cursor-pointer'
          onClick={e => {
            e.stopPropagation()
            cycleFeaturedPlayer(1)
          }}
        />
      </div>
      <div className='flex flex-col px-4 gap-6'>
        <div className='flex flex-col gap-1'>
          {infoArray?.map((rowData, index) => {
            return (
              <FeatureStatsInfoRow
                key={index}
                heading={rowData.heading}
                detail={rowData.detail}
              />
            )
          })}
        </div>
        <div className='flex flex-col gap-1'>
          <div className='font-semibold text-base'>
            {infoListItems.title ?? ''}
          </div>
          <div className='px-4 pt-1 list-disc text-sm pb-4'>
            {infoListItems.bullets?.map((bulletText, index) => {
              return <li key={index}>{bulletText}</li>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const ChevronLeft = props => {
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
      <g id='chevron_left'>
        <path
          id='Vector'
          d='M15.705 7.41L14.295 6L8.29504 12L14.295 18L15.705 16.59L11.125 12L15.705 7.41Z'
          fill='currentColor'
        />
      </g>
    </svg>
  )
}

const ChevronRight = props => {
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
      <g id='chevron_right'>
        <path
          id='Vector'
          d='M9.70492 6L8.29492 7.41L12.8749 12L8.29492 16.59L9.70492 18L15.7049 12L9.70492 6Z'
          fill='currentColor'
        />
      </g>
    </svg>
  )
}
