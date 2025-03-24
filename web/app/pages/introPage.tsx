export default function IntroPage ({ introPageShown, setIntroPageShown }) {
  return (
    <>
      {introPageShown && (
        <div className=''>
          <div className='text-5xl'>I am the Intro Page</div>
          <div
            className='text-5xl cursor-pointer'
            onClick={() => {
              setIntroPageShown(false)
            }}
          >
            Log In
          </div>
        </div>
      )}{' '}
    </>
  )
}
