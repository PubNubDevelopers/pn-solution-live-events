import Image from 'next/image'

export default function Avatar ({ avatarUrl, width = 32, height = 32 }) {
  return (
    <div className='relative'>
      <Image
        src={avatarUrl ? avatarUrl : '/avatars/placeholder2.png'}
        alt='User avatar'
        className={`rounded-full`}
        width={width}
        height={height}
      />
    </div>
  )
}
