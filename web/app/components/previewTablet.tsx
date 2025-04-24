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
    <div className={`${className} w-full border-4 border-navy100 rounded-3xl bg-black px-5 py-[14px] sm:w-[1280px] sm:min-h-[853px] sm:max-h-[853px] 3xl:w-[1550px] 3xl:min-h-[1034px] 3xl:max-h-[1034px] 4xl:w-[1850px] 4xl:min-h-[1230px] 4xl:max-h-[1230px] 5xl:w-[2100px] `}>
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
