export default function GuideOverlay ({ guidesShown, text, xOffset, yOffset, flexStyle }) {

    return (
        guidesShown && <div className='relative'>
          <div className={`absolute z-50 ${xOffset} ${yOffset} bg-red-400`}>
            <div className={`flex ${flexStyle} items-center gap-2`}>
            <div className='w-[12px] h-[12px] rounded-full border-1 border-white bg-success800'></div>
            <div className=''>{text}</div>
            </div>
          </div>
        </div>
    )
  }
  