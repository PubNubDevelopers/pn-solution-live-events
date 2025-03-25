export default function SalesIntroPage ({ setSalesIntroPageShown, setLoginPageShown }) {
  return (
    <>
        <div className=''>
          <div className='text-5xl'>I am the Sales Intro Page</div>
          <div
            className='text-5xl cursor-pointer'
            onClick={() => {
              setSalesIntroPageShown(false)
              setLoginPageShown(true)
            }}
          >
            Start Demo.
          </div>
        </div>
    </>
  )
}
