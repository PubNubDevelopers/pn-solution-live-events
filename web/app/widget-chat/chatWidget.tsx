export default function ChatWidget ({className, chat}) {
    return (
      <div className={`${className}`}>
        <div className='text-5xl'>I am the Chat Widget.</div>
        <div className='text-medium'>{chat ? chat.currentUser.id : "Chat is null"}</div>
      </div>
    )
  }
  