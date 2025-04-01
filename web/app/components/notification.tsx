import { useEffect } from 'react'
import Image from 'next/image'

function Notification ({ heading, message, imageUrl, onClose }) {
  return (
    <div className='relative'>
      <div className='absolute top-0 left-0 w-full animate-slide-down z-50'>
        <div className='min-w-[332px] max-w-[332px] min-h-20 max-h-20 px-4 justify-self-center bg-white text-navy900 rounded-2xl shadow-lg flex flex-row gap-2 items-center'>
          <div className='min-w-11'>
            <Image
              src={'/notification/pubnub.png'}
              alt='Icon'
              className={`rounded-full`}
              width={44}
              height={44}
              priority
            />
          </div>

          <div className='flex flex-col max-w-48'>
            <div className='flex flex-row gap-1 items-center'>
              <div className='text-xs font-medium'>{heading}</div>
              <div className='bg-navy900 w-1 h-1 rounded-full'></div>
              <div className='text-xs font-normal'>now</div>
            </div>
            <div className='truncate text-ellipsis overflow-hidden text-sm font-normal'>
              {message}
            </div>
          </div>
          {imageUrl && (
            <div className='min-w-11'>
              <Image
                src={imageUrl}
                alt='Icon'
                className={``}
                width={44}
                height={44}
                priority
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Notification
