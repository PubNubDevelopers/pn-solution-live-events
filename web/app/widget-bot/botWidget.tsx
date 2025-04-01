import { useState } from 'react'
import { Form, Input } from '@heroui/react'

export default function BotWidget ({
  className,
  isMobilePreview,
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide
}) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  function submitQuestion (e) {
    e.preventDefault()
    console.log(`ToDo: Submit this question to a PubNub Function ${question}`)
    setQuestion('')
    setAnswer(
      `ToDo: Response from PubNub Function goes here ${new Date().toLocaleTimeString(
        'en-US',
        { hour12: false }
      )}`
    )
  }

  return (
    <div className={`${className}`}>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-row pt-2 px-6 gap-2 items-center'>
          <ChatBotIcon />
          <div className='text-sm'>Get the latest match stats and updates</div>
        </div>
        <div className='px-4 h-11 w-full'>
          <Form className='' onSubmit={submitQuestion}>
            <Input
              size='lg'
              variant='bordered'
              placeholder="e.g. ask me 'What's the score?'"
              value={question}
              onValueChange={async e => {
                setQuestion(e)
              }}
              maxLength={200}
              endContent={
                question != '' && (
                  <div className='text-teal700'>
                    <SendIcon />
                  </div>
                )
              }
              classNames={{
                label: 'text-neutral-50 text-sm',
                inputWrapper: [
                  'border-1',
                  'border-neutral50',
                  'bg-neutral50',
                  'group-data-[focus=true]:border-1',
                  'group-data-[focus=true]:border-navy900',
                  'rounded-md'
                ],
                input: 'text-neutral900 text-base'
              }}
            />
          </Form>
        </div>
        <div className='flex flex-row px-6 pb-3 text-base'>{answer}</div>
      </div>
    </div>
  )
}

const SendIcon = props => {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      height='20'
      role='presentation'
      viewBox='0 0 20 20'
      width='20'
      fill='currentColor'
      {...props}
    >
      <g id='send'>
        <path
          id='Vector'
          d='M2.925 5.025L9.18333 7.70833L2.91667 6.875L2.925 5.025ZM9.175 12.2917L2.91667 14.975V13.125L9.175 12.2917ZM1.25833 2.5L1.25 8.33333L13.75 10L1.25 11.6667L1.25833 17.5L18.75 10L1.25833 2.5Z'
        />
      </g>
    </svg>
  )
}

const ChatBotIcon = props => {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      height='48'
      role='presentation'
      viewBox='0 0 48 48'
      width='48'
      fill='none'
      {...props}
    >
      <g id='Chat Bot'>
        <path
          id='Vector'
          d='M9.04293 19.7653H5.49573V28.7317H9.05253'
          stroke='#CD2026'
          strokeWidth='0.96'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='Vector_2'
          d='M38.9567 28.7317H42.5039V19.7653H38.9471'
          stroke='#CD2026'
          strokeWidth='0.96'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='Vector_3'
          d='M24.1391 10.4399C25.5407 10.4399 26.6783 9.2975 26.6783 7.8863C26.6783 6.4751 25.5407 5.3327 24.1391 5.3327C22.7375 5.3327 21.5999 6.4751 21.5999 7.8863C21.5999 9.2975 22.7375 10.4399 24.1391 10.4399Z'
          stroke='#001143'
          strokeWidth='0.96'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='Vector_4'
          d='M24.0764 10.6403V13.5155'
          stroke='#001143'
          strokeWidth='0.96'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='Vector_5'
          d='M19.1326 23.5238C20.1646 23.5238 20.9998 22.6838 20.9998 21.647C20.9998 20.6102 20.1646 19.7702 19.1326 19.7702C18.1006 19.7702 17.2654 20.6102 17.2654 21.647C17.2654 22.6838 18.1006 23.5238 19.1326 23.5238Z'
          stroke='#CD2026'
          strokeWidth='0.96'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='Vector_6'
          d='M28.7664 23.5238C29.7984 23.5238 30.6336 22.6838 30.6336 21.647C30.6336 20.6102 29.7984 19.7702 28.7664 19.7702C27.7344 19.7702 26.8992 20.6102 26.8992 21.647C26.8992 22.6838 27.7344 23.5238 28.7664 23.5238Z'
          stroke='#CD2026'
          strokeWidth='0.96'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='Vector_7'
          d='M19.3005 28.2663C19.3005 28.2663 23.8365 30.4503 28.5933 28.2663'
          stroke='#CD2026'
          strokeWidth='0.96'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='Vector_8'
          d='M34.2478 42.6665V35.5193H38.7694V13.6745H9.12939V35.5193H29.3902L34.2478 42.6665Z'
          stroke='#001143'
          strokeWidth='0.96'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}
