export default function LiveCommentaryWidget ({
  className,
  isMobilePreview,
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide
}) {
  return (
    <div
      className={`${className} px-6 pt-3 pb-4 min-h-64 max-h-64 overflow-y-auto overscroll-none`}
    >
      <div className='font-semibold text-base pb-3'>Live Commentary</div>
      <div className='flex flex-col gap-3'>
        <div className='relative w-full'>
        <div className='absolute w-full'>
          <div className='flex justify-center'>
        <SkipToLatestButton />
        </div></div></div>
      <CommentaryRow
          text={
            'Post match, analysis, Mbappes hatrick is the talking point, and questions will be asked of the city defense.'
          }
          timeCode={'98:42'}
        />
        <CommentaryRow
          text={
            'Full-time. Real Madrid win 3-1, and advance in the champions league.'
          }
          timeCode={'94:26'}
        />
        <CommentaryRow
          text={
            "GOAL! Nico Gonzalez scores a consolation goal for Man City. A late goal, but it's too little, too late."
          }
          timeCode={'92:08'}
        />
        <CommentaryRow
          text={
            'Madrid substitutions, Mbappe off to a standing ovation, and Camavinga enters the field.'
          }
          timeCode={'78:47'}
        />
              <CommentaryRow
          text={
            'Post match, analysis, Mbappes hatrick is the talking point, and questions will be asked of the city defense.'
          }
          timeCode={'98:42'}
        />
        <CommentaryRow
          text={
            'Full-time. Real Madrid win 3-1, and advance in the champions league.'
          }
          timeCode={'94:26'}
        />
        <CommentaryRow
          text={
            "GOAL! Nico Gonzalez scores a consolation goal for Man City. A late goal, but it's too little, too late."
          }
          timeCode={'92:08'}
        />
        <CommentaryRow
          text={
            'Madrid substitutions, Mbappe off to a standing ovation, and Camavinga enters the field.'
          }
          timeCode={'78:47'}
        />
      </div>
    </div>
  )
}

function CommentaryRow ({ text, timeCode }) {
  return (
    <div className='flex flex-row gap-2 items-center justify-between font-normal text-sm'>
      <div className=''>{text}</div>
      <div className='text-neutral500'>{timeCode}</div>
    </div>
  )
}

function SkipToLatestButton ({}) {
  return (
    <div className='px-3 py-1 w-fit max-h-8 font-medium text-sm bg-navy50 border-1 border-navy300 rounded-md shadow-sm cursor-pointer'>Skip to latest</div>
  )
}
