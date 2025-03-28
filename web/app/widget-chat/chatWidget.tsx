import GuideOverlay from '../components/guideOverlay'

export default function ChatWidget ({
  className,
  isMobilePreview,
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide
}) {
  return (
    <div className={`${className}`}>
      {/* Guide overlay will be shown when the user requests */}
      <GuideOverlay
        id={'chatGuide'}
        guidesShown={guidesShown}
        visibleGuide={visibleGuide}
        setVisibleGuide={setVisibleGuide}
        text={<span>Chat uses <span className='font-bold'>Pub/Sub</span> and <span className='font-bold'>Presence</span>. <span className='font-bold'>Functions</span> are set up to give match updates when key phrases are used. <span className='font-bold'>Moderation</span> detects and blocks profanity.</span>}
        xOffset={`${isMobilePreview ? 'left-[0px]' : '-left-[60px]'}`}
        yOffset={''}
        flexStyle={'flex-row items-start'}
      />
      <div className='text-5xl'>I am the Chat Widget.</div>
      <div className='text-medium'>
        {chat ? chat.currentUser.name : 'Chat is null'}
      </div>
    </div>
  )
}
