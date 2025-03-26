export default function LoginPage ({ setLoginPageShown, setUserId }) {
  return (
    <div className='select-none'>
      <div className='text-5xl'>I am the Login Page</div>
      <div
        className='text-5xl cursor-pointer'
        onClick={() => {
            setLoginPageShown(false)
            //  todo
          setUserId('user-03')
        }}
      >
        Login
      </div>
    </div>
  )
}
