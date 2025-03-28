export default function StreamWidget ({
  className,
  isMobilePreview,
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide
}) {
  return (
    <div className={`${className}`}>
      <div className='text-5xl'>I am the Streaming Widget</div>
    </div>
  )
}
