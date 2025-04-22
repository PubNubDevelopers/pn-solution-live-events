import { useEffect, useState } from 'react'
import {
  Message,
  User,
  Channel,
  TimetokenUtils,
  MixedTextTypedElement
} from '@pubnub/chat'
import { reactions } from '@/app/data/constants'
import { useHover } from '@uidotdev/usehooks'

interface ChatMessageProps {
  message: Message & {
    sender?: { name: string }
    publisher?: string
  }
  currentUser: User
  users: User[]
  channel: Channel
}

export default function ChatMessage ({
  message,
  currentUser,
  users,
  channel
}: ChatMessageProps) {
  const [ref, hovering] = useHover()
  const [showReactions, setShowReactions] = useState(false)
  const [userRestrictions, setUserRestrictions] = useState<{
    ban: boolean
    mute: boolean
  }>({ ban: false, mute: false })

  
  useEffect(() => {
    if (hovering && message.userId.startsWith('user-')) {
      setShowReactions(true)
    }
    if (showReactions && !hovering) {
      setShowReactions(false)
    }
  }, [hovering])

  const isOwnMessage = message.userId === currentUser?.id

  /**
   * Toggles a reaction on a message
   */
  const toggleReaction = async (emoji: string) => {
    setShowReactions(false)
    try {
      await message.toggleReaction(emoji)
    } catch (error) {
      console.error('Unable to toggle reaction:', error)
    }
  }

  /**
   * Gets counts of reactions grouped by type
   */
  const getReactionCounts = () => {
    const counts: Record<string, number> = {}

    if (message.reactions) {
      Object.entries(message.reactions).forEach(([type, users]) => {
        if (Array.isArray(users)) {
          counts[type] = users.length
        }
      })
    }

    return counts
  }

  const reactionCounts = getReactionCounts()

  function pubnubTimetokenToHHMM (timetoken) {
    const date = TimetokenUtils.timetokenToDate(timetoken)

    return `${(date.getHours() + '').padStart(2, '0')}:${(
      date.getMinutes() + ''
    ).padStart(2, '0')}`
  }

  const filtered = users.filter(user => message.userId === user.id)
  const user = filtered.length === 1 ? filtered[0] : null

  const renderMessagePart = (
    messagePart: MixedTextTypedElement,
    index: number
  ) => {
    if (messagePart.type === 'mention') {
      return (
        <span key={index} className={'text-[#589CFF]'}>
          {messagePart.content.name}
        </span>
      )
    }
    if (messagePart.type === 'text') {
      return messagePart.content.text
    }

    return ''
  }

  return (
    <div
      className={`mb-6 flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
    >
      {!isOwnMessage && (
        <div
          data-user={user?.name || 'Unknown User'}
          className={`rounded-full w-[36px] h-[36px] mr-[16px] !bg-cover bg-gray-100 ${
            userRestrictions.ban || (userRestrictions.mute && 'grayscale')
          }`}
          style={
            user
              ? {
                  background: `url(${
                    user?.profileUrl ?? '/avatars/placeholder2.png'
                  }) center center no-repeat`
                }
              : {}
          }
        ></div>
      )}

      <div
        ref={ref}
        className={`group relative max-w-[80%] flex items-end rounded-lg px-4 py-[4px] gap-[16px] ${
          isOwnMessage ? 'bg-navy900 text-white' : 'bg-navy100'
        }`}
      >
        <div
          className={`text-[16px] font-[400] leading-[24px] tracking-[0.08px] ${
            userRestrictions.ban ||
            userRestrictions.mute && 'text-neutral500 italic'
          }`}
        >
          {message.deleted
            ? 'This message has been deleted'
            : userRestrictions.ban
            ? 'This user has been banned'
            : userRestrictions.mute
            ? 'This user has been muted'
            : message.getMessageElements().map(renderMessagePart)}
        </div>
        <div className={'text-[11px] font-[400] leading-[150%]'}>
          {pubnubTimetokenToHHMM(message.timetoken)}
        </div>

        {/* Display reactions */}
        <div className='absolute bottom-[-17px] right-[0] flex'>
          {Object.entries(reactionCounts).map(([emoji, count]) => (
            <div
              key={emoji}
              className='text-xs text-black bg-white/20 rounded-full px-1 z-10'
            >
              {emoji}&nbsp;{count}
            </div>
          ))}
        </div>

        {showReactions && (
          <div className='absolute bottom-[-20px] bg-white border shadow-lg rounded-lg p-1 flex gap-2 z-10'>
            {reactions.map(emoji => (
              <button
                key={emoji}
                className='text-xs hover:scale-125 transition-transform'
                onClick={() => toggleReaction(emoji)}
              >
                {emoji}
              </button>
            ))}
          </div>
        )}
      </div>

      {isOwnMessage && (
        <div
          className={
            'rounded-full w-[36px] h-[36px] ml-[16px] !bg-cover bg-gray-100'
          }
          style={
            user
              ? {
                  background: `url(${user?.profileUrl}) center center no-repeat`
                }
              : {}
          }
        ></div>
      )}
    </div>
  )
}
