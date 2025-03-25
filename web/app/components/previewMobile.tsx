import ChatWidget from '../widget-chat/chatWidget'

export default function PreviewMobile ({ chat }) {
  
    return (
      <div className='relative w-full'>
          <div className='text-5xl'>I am the Mobile Preview</div>
          <ChatWidget className={""} chat={chat}/>
      </div>
    )
  }
  