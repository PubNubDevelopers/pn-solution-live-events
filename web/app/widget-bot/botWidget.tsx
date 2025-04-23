import { useState, useEffect, useRef, useMemo } from 'react'
import { Form, Input } from '@heroui/react'
import { urls } from '../data/urls'

interface SlowTextProps {
  speed: number;
  text: string;
}

export default function BotWidget ({
  className,
  isMobilePreview,
  chat,
  isGuidedDemo,
  guidesShown,
  visibleGuide,
  setVisibleGuide
}) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const string = '',
    index = useRef(0)
  //  Used if there is some issue communicating with PN Functions (e.g. Functions not set up on this keyset)
  const predeterminedAnswer =
    'PubNub Functions allows you to add code into PubNub to route, filter, aggregate, and augment messages.  Example use cases for live events include:\n\n* Use AI to process messages\n* Translate messages in real-time into multiple languages\n* Moderate messages for profanity or undesired behavior\n* Re-route important messages and signals for immediate action\n* Determine user sentiment in real-time and track sentiment as the event progresses\n\nAll PubNub Functions scale automatically and are proven to handle any size event.'

  async function submitQuestion (e) {
    e.preventDefault()
    setQuestion('')
    setAnswer('')
    //  PubNub Functions can execute before or after any message passing through PubNub, allowing you transform,
    //  re-route, or intercept any message.  Functions also support 'interval' requests, that run periodically, and
    //  'onRequest' functions, the run immediately and demonstrated below.
    //  See https://www.pubnub.com/docs/serverless/functions/overview for more information
    const functionsEndpoint = isGuidedDemo
      ? urls.functions.demo.salesLed.endpoint
      : urls.functions.demo.selfLed.endpoint
    try {
      const res = await fetch(functionsEndpoint, {
        method: 'GET', //  onRequest also supports POST
        headers: { 'Content-Type': 'application/json' }
      })
      if (!res.ok) {
        throw new Error('PubNub Function endpoint not available')
      }
      const responseText = await res.text()
      setAnswer(responseText)
    } catch (e) {
      console.warn(
        'PubNub Function endpoint not available: ' + functionsEndpoint
      )
      setAnswer(predeterminedAnswer)
    }
  }

  function SlowText (props: SlowTextProps) {
    const { speed, text } = props; 
    const [placeholder, setPlaceholder] = useState(text[0])

    const index = useRef(0)

    useEffect(() => {
      function tick () {
        index.current++
        setPlaceholder((prev: string) => prev + text[index.current])
      }
      if (index.current < text.length - 1) {
        let addChar = setInterval(tick, speed)
        return () => clearInterval(addChar)
      }
    }, [placeholder, speed, text])
    return <span className='font-mono'>{placeholder}</span>
  }

  return (
    <div className={`${className}`}>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-row pt-2 px-6 gap-2 items-center'>
          <ChatBotIcon className='min-w-12 min-h-12' />
          <div className='text-base'>
            PubNub Functions can enhance your event with event-driven processing
          </div>
        </div>
        <div className='px-4 h-11 w-full'>
          <Form className='' onSubmit={submitQuestion}>
            <Input
              size='lg'
              variant='bordered'
              placeholder='Ask me how?...'
              value={question}
              onValueChange={async e => {
                setAnswer('')
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
        <div className='flex flex-row px-6 pb-3 text-base whitespace-pre-line'>
          {useMemo(() => <SlowText speed={10} text={answer} />, [answer])}
        </div>
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

export const ChatBotIcon = props => {
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
