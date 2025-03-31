import TabletContents from './previewTabletContents'

export default function PreviewTablet ({
  className,
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide,
  logout,
  showDynamicAd
}) {
  return (
    <div className={`${className} w-full border-4 border-navy100 rounded-3xl bg-black px-5 py-[14px] sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px] min-h-[780px] max-h-[780px]`}>
      <TabletContents
        chat={chat}
        guidesShown={guidesShown}
        visibleGuide={visibleGuide}
        setVisibleGuide={setVisibleGuide}
        logout={logout}
        showDynamicAd={showDynamicAd}
      />
    </div>
  )
}
