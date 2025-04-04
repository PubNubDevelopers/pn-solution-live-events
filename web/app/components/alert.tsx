import { useEffect, useState } from 'react'

function Alert ({ message, onClose }) {
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
      className={`relative z-50 ${
        isVisible ? 'animate-alert-in' : 'animate-alert-out'
      } cursor-pointer`}
      onClick={onClose}
    >
      <div className='absolute w-full'>
        <AlertBackground />
        <div className='absolute top-1/2 left-[35px] transform -translate-y-1/2'>
          <div className='flex flex-row gap-1 items-center'>
            <div className='text-base font-bold text-white'>{`${message.points < 0 ? '' : '+'}${message.points}`}</div>
            <div className='text-sm font-normal text-neutral50'>{message.body}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const AlertBackground = props => {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      height='36'
      role='presentation'
      viewBox='0 0 200 36'
      width='200'
      fill='none'
      {...props}
    >
      <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.19188 33.1499C1.98561 34.7971 3.65948 36 5.72011 36H181.991C183.941 36 185.715 34.8706 186.541 33.1034L198.663 7.14566C200.217 3.81665 197.787 0 194.113 0H36.0164L1.19188 33.1499ZM34.2395 0H29.1807L2.85155 25.0631L1.13039 28.9427C0.699727 29.9135 0.602776 30.9199 0.772003 31.8581L34.2395 0ZM22.6762 0H27.4038L4.15051 22.1351L7.60649 14.345L22.6762 0ZM20.8993 0H17.236C15.2505 0 13.4515 1.17 12.6463 2.98493L8.90545 11.4171L20.8993 0Z'
      fill='url(#paint0_linear_205_26778)'
      />
      <defs>
      <linearGradient
        id='paint0_linear_205_26778'
        x1='0.693359'
        y1='18'
        x2='199.14'
        y2='18'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#001143' />
        <stop offset='1' stopColor='#002BA9' />
      </linearGradient>
      </defs>
    </svg>
  )
}

export default Alert
