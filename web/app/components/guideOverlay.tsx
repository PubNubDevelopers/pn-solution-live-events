import { useState, useEffect } from 'react'

export default function GuideOverlay ({
  id,
  guidesShown,
  visibleGuide,
  setVisibleGuide,
  text,
  xOffset,
  yOffset,
  flexStyle
}) {
  return (
    <div className={`${!guidesShown && 'hidden'} relative`}>
      <div className={`absolute z-50 ${xOffset} ${yOffset}`}>
        <Bubble
          id={id}
          text={text}
          style={flexStyle}
          visibleGuide={visibleGuide}
          setVisibleGuide={setVisibleGuide}
        />
      </div>
      {/* 
        EXAMPLE GUIDE OVERLAY
          <GuideOverlay
            id={'widgetGuide1'} //  Choose a unique ID for your guide (only one is shown at a time)
            guidesShown={guidesShown} //  All these three from parents
            visibleGuide={visibleGuide}
            setVisibleGuide={setVisibleGuide}
            text={<span>Chat uses <span className='font-bold'>Pub/Sub</span> and <span className='font-bold'>Presence</span>. <span className='font-bold'>Functions</span> are set up to give match updates when key phrases are used. <span className='font-bold'>Moderation</span> detects and blocks profanity.</span>}  //  Or can just specify a string
            xOffset={`${isMobilePreview ? 'left-[0px]' : '-left-[60px]'}`} //  or right
            yOffset={''} //  top or bottom
            flexStyle={'flex-row items-center'} //  or flex-row-reverse, flex-col, flex-col-reverse, items-end, items-start or a combination thereof
          />
        */}
    </div>
  )
}

function Bubble ({ id, text, style, visibleGuide, setVisibleGuide }) {
  const [bubbleIsRead, setBubbleIsRead] = useState(false)
  return (
    <div className={`flex ${style} w-fit gap-1`}>
      <div
        className={`min-w-60 max-w-72 min-h-16 p-4 border-1 text-neutral700 font-normal text-sm rounded-lg content-center z-10 ${
          visibleGuide == id
            ? 'bg-white border-navy300 text-navy900 shadow-lg'
            : 'bg-transparent border-transparent text-transparent'
        }`}
        onClick={e => {
          e.stopPropagation()
        }}
      >
        {text}
      </div>
      <ColouredDot
        id={id}
        visibleGuide={visibleGuide}
        setVisibleGuide={setVisibleGuide}
        bubbleIsRead={bubbleIsRead}
        setBubbleIsRead={setBubbleIsRead}
      />
    </div>
  )
}

function ColouredDot ({
  id,
  visibleGuide,
  setVisibleGuide,
  bubbleIsRead,
  setBubbleIsRead
}) {
  return (
    <div
      className='flex w-6 h-6 bg-brandAccent1 rounded-full items-center justify-center shadow-[0px_0px_12px_2px_rgba(59,130,246,1.00)] cursor-pointer'
      onClick={e => {
        setVisibleGuide(id)
        setBubbleIsRead(true)
        e.stopPropagation()
      }}
    >
      {!bubbleIsRead ? (
        <div className='w-2 h-2 bg-cherry rounded-full'></div>
      ) : (
        <div
          className={`${
            visibleGuide == id ? 'w-1.5 h-1.5' : 'w-2 h-2'
          } bg-brandAccent3 rounded-full`}
        ></div>
      )}
    </div>
  )
}
