export default function LoginPage ({ setLoginPageShown, setUserId }) {
  return (
    <div className=''>
      <div className='text-5xl'>I am the Login Page</div>
      <div
        className='text-5xl cursor-pointer'
        onClick={() => {
            setLoginPageShown(false)
          setUserId('TODO-CHANGE-ME')
        }}
      >
        Login
      </div>
    </div>
  )
}
