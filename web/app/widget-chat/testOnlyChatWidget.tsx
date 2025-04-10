import { useState, useEffect, useRef } from 'react'
import { Chat, Channel, Message as pnMessage, User, TimetokenUtils } from '@pubnub/chat'
import { chatChannelId } from '../data/constants'
import Image from 'next/image'

export default function TestChatWidget ({
  className,
  isMobilePreview,
  chat,
  guidesShown,
  visibleGuide,
  setVisibleGuide
}) {
  const [activeChannel, setActiveChannel] = useState<Channel | null>(null)
  const [messages, setMessages] = useState<pnMessage[]>([])
  const messageListRef = useRef<HTMLDivElement>(null)
  const [testChatInstances, setTestChatInstances] = useState<Chat[]>([])
  const [testUsers, setTestUsers] = useState<User[]>([])
  const [readyToTest, setReadyToTest] = useState(false)

  function uniqueById (items) {
    const set = new Set()
    return items.filter(item => {
      const isDuplicate = set.has(item.timetoken)
      set.add(item.timetoken)
      return !isDuplicate
    })
  }

  async function sendTestChatMessage (e) {
    const randomPhrases = [
        "Hello there!",
        "How's it going?",
        "Nice to meet you.",
        "What's up?",
        "Good morning!",
        "Good night!",
        "See you soon.",
        "Take care.",
        "Have a great day!",
        "Catch you later.",
        "All the best!",
        "Stay safe.",
        "Keep in touch.",
        "Long time no see.",
        "How have you been?",
        "What's new?",
        "Looking good!",
        "Great job!",
        "Well done!",
        "Happy to help!"
      ];
    const randomBot = Math.floor(Math.random() * 10)
    const randomPhrase = Math.floor(Math.random() * 20)
    if (testChatInstances[randomBot]) {
      const channel = await testChatInstances[randomBot].getChannel(
        chatChannelId
      )
      channel?.sendText(randomPhrases[randomPhrase], { storeInHistory: false })
    }
    //activeChannel?.sendText('Hello', { storeInHistory: false })
    e.stopPropagation()
  }

  async function createTestChatObjects () {
    console.log('creating test chat objects')
    const tempChatObjArray: Chat[] = []
    const tempUserArray: User[] = []
    for (var i = 0; i < 10; i++) {
      const suffix = (i + 1).toString().padStart(2, '0')
      const tempUserId = `bot-${suffix}`
      const tempChat = await Chat.init({
        publishKey: process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY as string,
        subscribeKey: process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY as string,
        userId: tempUserId,
        storeUserActivityTimestamps: false
      })
      tempChatObjArray.push(tempChat)
      const tempUser = await tempChat.getUser(tempUserId)
      if (tempUser)
      {
          tempUserArray.push(tempUser)
      }
    }
    setTestChatInstances(tempChatObjArray)
    setTestUsers(tempUserArray)
  }

  useEffect(() => {
    if (!chat) return
    async function initChannel () {
      const channel = await chat.getChannel(chatChannelId)
      if (channel) {
        setActiveChannel(channel)
        await createTestChatObjects()
        setReadyToTest(true)
        console.log('test objects created')
      } else {
        console.error('Failed to get active channel')
      }
    }
    initChannel()
  }, [chat])

  useEffect(() => {
    if (!activeChannel) return

    return activeChannel.connect(message => {
      setMessages(messages => {
        return uniqueById([...messages, message]) //  Useful during dev
      })
    })
  }, [activeChannel])

  useEffect(() => {
    if (!messageListRef.current) return
    setTimeout(() => {
      if (messageListRef.current) {
        messageListRef.current.scrollTop = messageListRef.current?.scrollHeight
      }
    }, 10) //  Some weird timing issue
  }, [messages])

  return (
    <div className={`${className}`}>
      {readyToTest && <div
        className='text-sm text-cherry cursor-pointer font-semibold'
        onClick={async e => {
          await sendTestChatMessage(e)
        }}
      >
        TEST - SEND TEST CHAT MESSAGE
      </div>}
      <div
        className='flex flex-col py-4 px-4 gap-4 min-h-[200px] max-h-[200px] overflow-y-auto overscroll-none'
        ref={messageListRef}
      >
        {messages?.map(message => {
          return <MessageRow key={`${message.timetoken}`} message={message} user={testUsers.find(user => user.id === message.userId)} />
        })}
      </div>
    </div>
  )
}

function MessageRow ({ message, user }) {

    function dateToTime(date)
    {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0'); 
        return `${hours}:${minutes}`;
    }

    return (
    <div className='flex flex-row items-start gap-4'>
      <Image
        src={user?.profileUrl ?? '/avatars/placeholder2.png'}
        alt='Avatar'
        className='rounded-full'
        width={32}
        height={32}
      /><div className='flex flex-row gap-4 bg-navy100 w-full rounded-lg py-1 pl-4 pr-1'>{message.text}<div className='text-neutral500 text-xs self-end'>{dateToTime(TimetokenUtils.timetokenToDate(message.timetoken))}</div></div>
    </div>
  )
}

