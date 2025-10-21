import TabletContents from './previewTabletContents'

export default function PreviewTablet ({
  className,
  chat,
  isGuidedDemo,
  guidesShown,
  visibleGuide,
  setVisibleGuide,
  logout,
  currentScore,
}) {
  return (
    <div className={`${className} w-full`}>
      <TabletContents
        chat={chat}
        isGuidedDemo={isGuidedDemo}
        guidesShown={guidesShown}
        visibleGuide={visibleGuide}
        setVisibleGuide={setVisibleGuide}
        logout={logout}
        currentScore={currentScore}
      />
    </div>
  )
}
