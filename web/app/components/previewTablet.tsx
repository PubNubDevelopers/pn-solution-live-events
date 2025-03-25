import ChatWidget from '../widget-chat/chatWidget'

export default function PreviewTablet ({ chat }) {
  
  return (
    <div className='relative w-full'>
        <div className='text-5xl'>I am the Tablet Preview</div>
        <ChatWidget className={""} chat={chat}/>
    </div>
  )
}
