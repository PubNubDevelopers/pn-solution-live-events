import { useState, useEffect } from 'react'
import { Chat, User } from '@pubnub/chat'
import Avatar from './avatar'
import Cup from './icons/cup'

export default function UserStatus ({ chat }) {
  const [currentUser, setCurrentUser] = useState<User>(chat.currentUser)

  useEffect(() => {
    //  Get updates on the current user
    //  Requires 'User Metadata Events' enabled on the keyset
    if (!chat) return
    return chat.currentUser.streamUpdates(updatedUser => {
      //console.log('current user has updated')
      setCurrentUser(updatedUser)
    })
  }, [chat])

  return (
    <div className='flex flex-row self-end gap-4'>
      <div className='flex flex-row gap-3 items-center'>
        <div className='flex flex-row gap-1 items-center'>
          <Cup className={''} width={20} height={20} />
          <div className='text-neutral700 text-base font-bold'>
            {currentUser.custom?.score ?? 0}
          </div>
        </div>
        <div className='border-1 border-navy200 h-full'></div>
        <div className='text-lg font-semibold'>{currentUser.name}</div>
      </div>
      <Avatar avatarUrl={currentUser.profileUrl} />
    </div>
  )
}
