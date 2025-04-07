import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AlertType } from '../data/constants'

function Alert ({ type, message, onClose }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Start the animation when the component mounts
    setIsVisible(true)

    // Automatically close the alert after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 1000) // Wait for the animation to finish before calling onClose
    }, 2000)

    return () => clearTimeout(timer) // Cleanup the timer on unmount
  }, [onClose])

  return (
    <div
      className={`relative z-[60] ${
        isVisible && type == AlertType.NEW_POLL && 'animate-alert-in-top'
      } ${
        !isVisible && type == AlertType.NEW_POLL && 'animate-alert-out-top'
      } ${
        isVisible &&
        (type == AlertType.POINTS || type == AlertType.NEW_EMOJI) &&
        'animate-alert-in-left'
      } ${
        !isVisible &&
        (type == AlertType.POINTS || type == AlertType.NEW_EMOJI) &&
        'animate-alert-out-left'
      } cursor-pointer`}
      onClick={onClose}
    >
      <div className='absolute w-full'>
        <Image
          src={'/icons/alert_bg.png'}
          alt='Alert background'
          className={``}
          width={200}
          height={36}
        />
        <div className='absolute top-1/2 left-[40px] transform -translate-y-1/2'>
          <div className='flex flex-row gap-2 items-center'>
            {message.points && (
              <div className='text-base font-bold text-white italic'>{`${
                message.points < 0 ? '' : '+'
              }${message.points}`}</div>
            )}
            <div className='text-sm w-36 font-normal text-neutral50 truncate text-ellipsis overflow-hidden'>
              {message.body}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alert
