export default function Header ({
  sideMenuOpen,
  setSideMenuOpen
}) {
  const MenuOpenIcon = props => {
    return (
      <svg
        aria-hidden='true'
        focusable='false'
        height='24'
        role='presentation'
        viewBox='0 0 25 24'
        width='25'
        {...props}
      >
        <path
          d='M3.88672 18H16.8867V16H3.88672V18ZM3.88672 13H13.8867V11H3.88672V13ZM3.88672 6V8H16.8867V6H3.88672ZM21.8867 15.59L18.3067 12L21.8867 8.41L20.4767 7L15.4767 12L20.4767 17L21.8867 15.59Z'
          fill='currentColor'
        />
      </svg>
    )
  }

  return (
    <div className='hidden sm:flex absolute top-4 left-4 z-50'>
      <div
        className={`flex h-11 w-11 border-1 hover:bg-navy800 border-brandAccent3 bg-navy900 shadow-sm items-center justify-center rounded-md text-neutral50 cursor-pointer`}
        onClick={e => {
          setSideMenuOpen(!sideMenuOpen)
          e.stopPropagation()
        }}
      >
        <MenuOpenIcon />
      </div>
    </div>
  )
}
