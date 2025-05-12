import { useState, useEffect } from 'react'
import { Chat, User } from '@pubnub/chat'
import Avatar from './avatar'
import Cup from './icons/cup'

export default function UserStatus ({ chat, logout, currentScore }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [isLoginBypass, setIsLoginBypass] = useState(false)

  useEffect(() => {
    //  Get updates on the current user
    //  Requires 'User Metadata Events' enabled on the keyset
    if (!chat) return
    if (!chat.currentUser) return
    setCurrentUser(chat.currentUser)
    return chat.currentUser.streamUpdates(updatedUser => {
      setCurrentUser(updatedUser)
    })
  }, [chat])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      setIsLoginBypass(params.get('loginbypass') === 'true')
    }
  }, [])

  return (
    <div className='flex flex-row self-end gap-4 items-center'>
      <div className='flex flex-row gap-3 items-center'>
        <div className='flex flex-row gap-1 items-center'>
          <Cup className={''} width={20} height={20} />
          <div className='text-neutral700 text-base font-bold'>
            {currentScore}
          </div>
        </div>
        <div className='border-1 border-navy200 h-full'></div>
        <div className='text-lg font-semibold'>{currentUser?.name}</div>
      </div>
      <Avatar avatarUrl={currentUser?.profileUrl} />
      <div className='text-base font-normal text-teal700 underline cursor-pointer' onClick={(e) => {logout();}}>{isLoginBypass ? 'Switch User' : 'Log out'}</div>
    </div>
  )
}
