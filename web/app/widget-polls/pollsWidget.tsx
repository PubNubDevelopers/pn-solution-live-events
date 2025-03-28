import GuideOverlay from '../components/guideOverlay'

export default function PollsWidget ({
  className,
  isMobilePreview,
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide
}) {
  return (
    <div className={`${className} px-6 pt-3 pb-4`}>
      <GuideOverlay
        id={'pollsGuide'}
        guidesShown={guidesShown}
        visibleGuide={visibleGuide}
        setVisibleGuide={setVisibleGuide}
        text={'Polls Polls Polls'}
        xOffset={`${isMobilePreview ? 'left-[0px]' : '-left-[60px]'}`}
        yOffset={''}
        flexStyle={'flex-row items-start'}
      />
      <div className=''>I am the Polls Widget.</div>
    </div>
  )
}
