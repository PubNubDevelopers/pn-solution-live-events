import { useState, useEffect } from 'react'
import Image from 'next/image'
import { urls } from '../data/urls'
import { Chat } from '@pubnub/chat'
import { getAuthKey } from '../getAuthKey'
import { clientVideoControlChannelId } from '../data/constants'

export default function SalesIntroPage ({
  setSalesIntroPageShown,
  setLoginPageShown
}) {
  const [instanceActivity, setInstanceActivity] = useState(false)
  const HomePagePubNubLogo = props => {
    useEffect(() => {
      async function init () {
        try {
          const tempUser = 'activityTest'
          const { accessManagerToken } = await getAuthKey(
            tempUser,
            true,
            `-${process.env.NEXT_PUBLIC_ENVIRONMENT_NUMBER ?? ''}`
          )
          const localChat = await Chat.init({
            subscribeKey: process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY as string,
            userId: tempUser,
            authKey: accessManagerToken
          })
          const channel = localChat.sdk.channel(clientVideoControlChannelId)
          const channelSubscription = channel.subscription({
            receivePresenceEvents: false
          })
          channelSubscription.onMessage = messageEvent => {
            setInstanceActivity(true)
          }
          channelSubscription.subscribe()
          return () => {
            channelSubscription.unsubscribe()
          }
        } catch (error) {
          console.log('Error initializing Chat:', error)
        }
      }

      init()
    }, [])

    return (
      <svg
        aria-hidden='true'
        focusable='false'
        height='88'
        role='presentation'
        viewBox='0 0 238 88'
        width='238'
        {...props}
      >
        <rect width='238' height='88' rx='8' fill='white' />
        <mask
          id='mask0_429_12890'
          maskUnits='userSpaceOnUse'
          x='24'
          y='16'
          width='190'
          height='56'
        >
          <path d='M214 16H24V72H214V16Z' fill='white' />
        </mask>
        <g mask='url(#mask0_429_12890)'>
          <path
            d='M110.039 50.899C109.101 53.9594 106.709 55.6954 103.447 55.8525C100.676 55.9797 98.002 55.5233 95.3876 54.6104C94.9406 54.4532 94.747 54.1988 94.747 53.6975C94.7619 51.3255 94.7544 48.961 94.7544 46.589C94.7544 45.7958 94.7544 45.0102 94.7544 44.217C94.7544 42.6456 94.7544 41.0743 94.7544 39.5029C94.7544 37.9316 94.7544 36.3602 94.747 34.7889C94.747 34.3025 94.9108 34.0406 95.3727 33.8685C98.0616 32.8883 100.818 32.3346 103.693 32.5665C107.238 32.8434 109.726 34.9161 110.493 38.4329C111.402 42.6082 111.305 46.7985 110.046 50.899M116.065 35.8963C114.396 31.5788 111.372 28.8851 106.754 28.1817C103.685 27.7178 100.661 28.0844 97.6966 28.93C96.7283 29.2068 95.7749 29.551 94.747 29.8803V16H88.505V16.4789C88.505 30.0075 88.505 43.5436 88.4976 57.0722C88.4976 57.6259 88.7136 57.9102 89.2126 58.0898C91.3057 58.8381 93.4435 59.3993 95.6259 59.7884C99.2758 60.4319 102.94 60.7087 106.62 60.0278C111.551 59.1224 114.851 56.3538 116.274 51.4602C117.138 48.4896 117.346 45.4367 117.264 42.3613C117.197 40.1464 116.877 37.969 116.072 35.8888'
            fill='#CD2026'
          />
          <path
            d='M206.76 50.8619C205.822 53.9298 203.475 55.6583 200.243 55.8378C197.405 56.0025 194.671 55.5161 191.997 54.5733C191.61 54.4386 191.461 54.2291 191.468 53.8101C191.483 50.6374 191.475 47.4573 191.475 44.2847H191.453C191.453 41.127 191.461 37.9693 191.446 34.8117C191.446 34.3103 191.617 34.0335 192.094 33.8539C194.753 32.8886 197.479 32.3274 200.317 32.5594C203.974 32.8512 206.403 34.8491 207.2 38.4407C208.123 42.6011 207.997 46.7689 206.753 50.8544M202.328 28.0474C199.215 27.8004 196.176 28.2868 193.218 29.2895C192.652 29.484 192.094 29.6786 191.453 29.903V16.0078H185.226V16.6738C185.226 28.1895 185.226 39.7053 185.226 51.2211C185.226 53.189 185.226 55.1644 185.211 57.1323C185.211 57.5813 185.353 57.8806 185.8 58.0452C189.457 59.4145 193.263 60.1104 197.144 60.3873C199.207 60.5369 201.285 60.4022 203.334 60.0281C207.877 59.1901 211.125 56.7807 212.704 52.321C213.65 49.6572 213.933 46.8811 213.993 44.0826C214.052 41.3664 213.814 38.6877 212.861 36.1211C211.043 31.22 207.55 28.4664 202.328 28.0548'
            fill='#CD2026'
          />
          <path
            d='M77.7716 28.6973C77.3023 28.6973 77.198 28.8394 77.2055 29.2884C77.2204 35.8656 77.2129 42.4429 77.2204 49.0126C77.2204 50.6962 77.2353 52.3798 77.2502 54.0634C77.2502 54.6395 77.1235 54.8266 76.5649 54.9763C73.7418 55.747 70.8816 56.0837 67.9691 55.7395C65.6079 55.4626 63.9916 54.228 63.2095 51.9458C62.6732 50.3819 62.5465 48.7507 62.5465 47.112C62.5465 41.1708 62.5465 35.2296 62.5465 29.2884V28.7347H56.2971V29.3333C56.2971 35.7459 56.2971 42.166 56.2971 48.5861C56.2971 49.6037 56.312 50.6214 56.394 51.6315C56.5876 54.011 57.4815 56.0538 59.3585 57.5952C60.6397 58.6502 62.122 59.3162 63.716 59.7352C66.4124 60.4386 69.146 60.5209 71.9095 60.3189C75.5668 60.0495 79.157 59.406 82.6951 58.4632C83.3953 58.2761 83.4623 58.1863 83.4623 57.438V28.7122C81.5108 28.7122 79.6486 28.7272 77.779 28.6973'
            fill='#CD2026'
          />
          <path
            d='M180.146 28.7129H174.589C174.152 28.7129 173.934 28.9374 173.934 29.3863C173.949 37.5199 173.956 45.6461 173.971 53.7797C173.971 54.6851 173.837 54.8647 172.988 55.0742C170.299 55.7402 167.573 56.0694 164.802 55.7626C162.403 55.5007 160.735 54.3035 159.931 51.9839C159.409 50.4799 159.26 48.9235 159.26 47.3446C159.26 41.3286 159.26 35.3051 159.26 29.2816V28.7353H153.011V29.3639C153.011 35.8438 153.011 42.3238 153.011 48.8038C153.011 49.769 153.026 50.7418 153.108 51.707C153.271 53.6375 153.905 55.3885 155.245 56.8326C156.564 58.2618 158.232 59.1148 160.065 59.6461C162.865 60.4542 165.733 60.544 168.623 60.327C172.325 60.0501 175.96 59.4066 179.543 58.4339C180.005 58.3067 180.176 58.0897 180.176 57.6033C180.161 48.1677 180.169 38.7321 180.169 29.2965C180.169 29.117 180.146 28.9299 180.139 28.7129'
            fill='#CD2026'
          />
          <path
            d='M94.7548 46.5898C94.7548 48.9618 94.7548 51.3263 94.7473 53.6983C94.7622 51.3263 94.7622 48.9618 94.7548 46.5898Z'
            fill='#CD2026'
          />
          <path
            d='M126.344 58.9734C126.814 58.9734 126.911 58.8387 126.911 58.4047C126.896 52.0594 126.903 45.7142 126.896 39.3689C126.896 37.7452 126.881 36.1214 126.866 34.4977C126.866 33.9365 126.992 33.7644 127.544 33.6147C130.359 32.874 133.212 32.5447 136.117 32.874C138.471 33.1433 140.08 34.3331 140.862 36.533C141.398 38.0445 141.525 39.6158 141.525 41.1946C141.525 46.9263 141.525 52.658 141.525 58.3897V58.921H147.759V58.3448C147.759 52.1492 147.759 45.9611 147.759 39.7655C147.759 38.7852 147.744 37.805 147.662 36.8248C147.469 34.5276 146.575 32.5522 144.713 31.0707C143.432 30.053 141.957 29.4095 140.37 29.0054C137.681 28.3245 134.955 28.2422 132.199 28.4442C128.557 28.7061 124.974 29.3272 121.443 30.2326C120.743 30.4122 120.676 30.502 120.676 31.2203C120.676 40.2818 120.676 49.3358 120.676 58.3972V58.9509C122.62 58.9509 124.482 58.936 126.344 58.9584'
            fill='#CD2026'
          />
          <path
            d='M43.9847 53.7725C43.9847 53.7725 39.1803 57.0947 30.4878 53.6303L30.5027 50.944V33.9809C30.5027 33.6442 30.5548 33.5619 30.9868 33.3673C30.9868 33.3673 37.3033 30.8606 42.5769 32.8959C42.5769 32.8959 46.48 34.4373 46.9865 41.1418C46.9865 41.1418 47.7835 51.1984 43.9847 53.7725ZM52.9454 38.9344C51.4259 29.3866 43.8059 28.0996 43.8059 28.0996C33.6162 26.0643 24.7896 29.8131 24.7896 29.8131C24.0819 30.1423 24.0074 30.2845 24 30.8382C24 40.169 24 49.4999 24 58.8232V72.0001H30.5101V58.1273C42.6514 62.4523 48.3571 57.4464 48.3571 57.4464C55.4407 51.2957 52.9454 38.9269 52.9454 38.9269'
            fill='#CD2026'
          />
        </g>
      </svg>
    )
  }

  function proceed () {
    setSalesIntroPageShown(false)
    setLoginPageShown(true)
  }
  const WarningIcon = props => {
    return (
      <svg
        aria-hidden='true'
        focusable='false'
        height='32'
        role='presentation'
        viewBox='0 0 16 16'
        width='32'
        {...props}
      >
        <path
          d='M7.99996 6.3265L13.02 14.9998H2.97996L7.99996 6.3265ZM7.99996 3.6665L0.666626 16.3332H15.3333L7.99996 3.6665ZM8.66663 12.9998H7.33329V14.3332H8.66663V12.9998ZM8.66663 8.99984H7.33329V11.6665H8.66663V8.99984Z'
          fill='currentColor'
        />
      </svg>
    )
  }

  return (
    <div className='h-fit min-h-screen w-screen min-w-screen bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#334169] to-navy900 select-none'>
      <div className='pl-[10%] pt-[5%] xl:pt-[10%]'>
        <HomePagePubNubLogo />
        <div className='text-navy100 font-extrabold text-[64px] pt-8'>
          Live Events Solution Showcase
        </div>

        <div className='pt-[50px]'>
          {instanceActivity && (
            <div className='flex flex-row border-1 w-fit border-warning500 p-6 mb-6 items-center rounded-xl text-base'>
              <div className='text-warning500 pr-6'>
                <WarningIcon />
              </div>
              <div className='flex flex-col gap-3 text-neutral-200'>
                <div className='font-semibold text-2xl'>
                  Activity detected in this demo environment
                </div>
                <div className=''>
                  If this was not you, please consider using a different
                  environment.
                </div>
                <div className='font-semibold'>
                  Available environments:
                  <ul className='px-4 pt-1 list-disc'>
                    <li>
                      <a href={`${urls.hostedUrls.salesLed1}`}>
                        Demo Environment 1
                      </a>
                    </li>
                    <li>
                      <a href={`${urls.hostedUrls.salesLed2}`}>
                        Demo Environment 2
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='flex flex-row gap-6 pt-[62px] pr-6 pb-6 overflow-auto'>
          <HomePageTemplateTile
            instanceTitle={`Demo Environment: ${process.env.NEXT_PUBLIC_ENVIRONMENT_NUMBER ?? ''}`}
            title={'Accept & Continue'}
            subtitle={
              'This application uses a shared demo environment, if you modify anything on the backend, such as Illuminate Objects, please return them to their original state after using this demo.'
            }
            iconUrl={'/icons/start.svg'}
            tileClick={() => {
              proceed()
            }}
          />
          <HomePageTemplateTile
            instanceTitle={''}
            title={'Visit the Wiki First'}
            subtitle={
              'If in doubt, visit the wiki for this application to understand how it works, and how to reset any backend objects if necessary.'
            }
            iconUrl={'/icons/auto_awesome.svg'}
            tileClick={() => {
              window.location.href = urls.wiki
            }}
          />
        </div>
      </div>
    </div>
  )
}

function HomePageTemplateTile ({
  instanceTitle,
  title,
  subtitle,
  iconUrl,
  tileClick,
}) {
  return (
    <div
      className='min-w-[320px] w-[460px] max-w-[460px] bg-white bg-opacity-[0.04] hover:bg-opacity-[0.12] border-1 border-white/20 rounded-xl p-8 flex flex-col cursor-pointer'
      onClick={() => tileClick()}
    >
      <div className='flex flex-row gap-6'>
        <div className='w-16 min-w-16 h-16 min-h-16 bg-white/20 rounded-2xl mb-8 content-center'>
          <Image
            src={iconUrl}
            alt={`${title} Icon`}
            className='m-auto'
            width={24}
            height={24}
            priority
          />
        </div>
        <div className='font-semibold text-white text-2xl h-16 min-h-16 content-center'>
          {instanceTitle}
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='font-semibold text-white text-2xl uppercase'>
          {title}
        </div>
        <div className='font-light text-neutral-200 text-base'>{subtitle}</div>
      </div>
    </div>
  )
}
