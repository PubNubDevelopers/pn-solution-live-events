export default function PointsOverlay ({ isPremium, clickPoints }) {
  return (
    <div
      className={`flex flex-row gap-1 py-0.5 px-3 rounded-xl items-center  border-1 ${
        isPremium
          ? 'bg-appYellow1 border-appYellow2'
          : 'bg-navy50 border-navy300'
      } cursor-pointer`}
    >
      <WorkspacePremiumIcon />
      <div className={`${isPremium ? 'text-base' : 'text-xs'}`}>{`${
        isPremium
          ? `Earn ${clickPoints} points for clicking`
          : `${clickPoints} Point${clickPoints > 1 ? 's' : ''}`
      }`}</div>
    </div>
  )
}

const WorkspacePremiumIcon = props => {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      height='16'
      role='presentation'
      viewBox='0 0 16 16'
      width='16'
      fill='currentColor'
      {...props}
    >
      <g id='workspace_premium'>
        <path
          id='Vector'
          d='M6.45335 8.79333L8.00002 7.62L9.54002 8.79333L8.95335 6.89333L10.5 5.66667H8.60669L8.00002 3.79333L7.39335 5.66667H5.50002L7.04002 6.89333L6.45335 8.79333ZM13.3334 6.33333C13.3334 3.38667 10.9467 1 8.00002 1C5.05335 1 2.66669 3.38667 2.66669 6.33333C2.66669 7.68667 3.17335 8.91333 4.00002 9.85333V15L8.00002 13.6667L12 15V9.85333C12.8267 8.91333 13.3334 7.68667 13.3334 6.33333ZM8.00002 2.33333C10.2067 2.33333 12 4.12667 12 6.33333C12 8.54 10.2067 10.3333 8.00002 10.3333C5.79335 10.3333 4.00002 8.54 4.00002 6.33333C4.00002 4.12667 5.79335 2.33333 8.00002 2.33333ZM8.00002 12.3333L5.33335 13.0133V10.9467C6.12002 11.4 7.02669 11.6667 8.00002 11.6667C8.97335 11.6667 9.88002 11.4 10.6667 10.9467V13.0133L8.00002 12.3333Z'
        />
      </g>
    </svg>
  )
}
