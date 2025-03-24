import { Input } from '@heroui/react'

export default function Home() {
  return (
    <div className='flex flex-col items-center m-12 gap-4 text-4xl'>
      <div className='font-light'>Font Light</div>
      <div className='font-light italic'>Font Light (Italic)</div>
      <div className='font-normal'>Font Normal</div>
      <div className='font-normal italic'>Font Normal (Italic)</div>
      <div className='font-medium'>Font Medium</div>
      <div className='font-medium italic'>Font Medium (Italic)</div>
      <div className='font-semibold'>Font SemiBold</div>
      <div className='font-semibold italic'>Font SemiBold (Italic)</div>
      <div className='font-bold'>Font Bold</div>
      <div className='font-bold italic'>Font Bold (Italic)</div>
      <div className='font-extrabold'>Font Extra Bold</div>
      <div className='font-extrabold italic'>Font Extra Bold (Italic)</div>
      <div className='font-black'>Font Black</div>
      <div className='font-black italic'>Font Black (Italic)</div>
      <div className='w-1/2'>
      <Input
          label='Example HeroUI Input'
          labelPlacement='outside'
          size='lg'
          variant='bordered'
          placeholder='placeholder'
          maxLength={75}
          classNames={{
            label: 'text-neutral-50 text-sm',
            inputWrapper: [
              'border-2',
              'border-neutral900',
              'group-data-[focus=true]:border-2',
              'group-data-[focus=true]:border-teal400',
              'rounded-md'
            ],
            input: ['text-sm']
          }}
        />
        </div>
    </div>
  );
}
