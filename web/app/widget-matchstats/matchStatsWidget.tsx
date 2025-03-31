export default function MatchStatsWidget ({
  className,
  isMobilePreview,
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide
}) {
  return (
    <div className={`${className}`}>
      <div className={`${isMobilePreview ? 'grid grid-cols-2' : 'grid grid-flow-col grid-rows-3'} gap-3 bg-brandAccent5 p-4`}>
      <div className='bg-green-300'>Possession</div>
      <div className='bg-purple-400'>Yellow cards</div>
      <div className=''>Most touches</div>
      <div className='bg-yellow-300'>Distance covered</div>
      <div className=''>Top speed</div>
      <div className=''>Shots on target</div>
      <div className={`${isMobilePreview ? 'col-span-2' : 'col-span-2 row-span-3'} bg-red-300`}>Player Stats</div>
      </div>
    </div>
  )
}
