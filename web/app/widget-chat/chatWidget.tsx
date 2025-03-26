import GuideOverlay from '../components/guideOverlay'

export default function ChatWidget ({
  className,
  isMobilePreview,
  chat,
  guidesShown
}) {
  return (
    <div className={`${className}`}>
      {/* Guide overlay will be shown when the user requests */}
      <GuideOverlay
        guidesShown={guidesShown}
        text={'This is the guide for Chat'}
        xOffset={`${isMobilePreview ? 'left-[0px]' : '-left-[60px]'}`}
        yOffset={''}
        flexStyle={'flex-row-reverse'}
      />
      <div className='text-5xl'>I am the Chat Widget.</div>
      <div className='text-medium'>
        {chat ? chat.currentUser.name : 'Chat is null'}
      </div>
    </div>
  )
}
