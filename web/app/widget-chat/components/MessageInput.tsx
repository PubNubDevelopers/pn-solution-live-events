import { useState, useRef, useEffect } from 'react'
import { reactions } from '@/app/data/constants'
import { User, MessageDraftV2, Channel } from '@pubnub/chat'
import { useHover } from '@uidotdev/usehooks'
import { Restriction } from '../chatWidget'
import { actionCompleted } from 'pubnub-demo-integration'

interface MessageInputProps {
  messageInput: string
  setMessageInput: (input: string) => void
  showMentions: boolean
  setShowMentions: (input: boolean) => void
  showReactions: boolean
  setShowReactions: (input: boolean) => void
  availableUsers: User[]
  channel: Channel
  activeChannelRestrictions: Restriction | null
  isGuidedDemo: boolean
}

export default function MessageInput ({
  messageInput,
  setMessageInput,
  availableUsers,
  channel,
  showMentions,
  setShowMentions,
  showReactions,
  setShowReactions,
  activeChannelRestrictions,
  isGuidedDemo
}: MessageInputProps) {
  const [ref, hovering] = useHover()
  const [mentionQuery, setMentionQuery] = useState('')
  const [suggestedUsers, setSuggestedUsers] = useState<User[]>([])
  const [mentionStartIndex, setMentionStartIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const messageDraftRef = useRef<MessageDraftV2 | null>(null)

  useEffect(() => {
    // Initialize message draft when component mounts
    messageDraftRef.current = channel.createMessageDraftV2({
      userSuggestionSource: 'channel'
    })

    return () => {
      // Cleanup message draft when component unmounts
      messageDraftRef.current = null
    }
  }, [channel])

  useEffect(() => {
    if (mentionQuery.length >= 3) {
      const filteredUsers = availableUsers.filter(user =>
        user.name?.toLowerCase().includes(mentionQuery.toLowerCase())
      )
      setSuggestedUsers(filteredUsers.slice(0, 5))
    } else {
      setSuggestedUsers([])
    }
  }, [mentionQuery, availableUsers])

  const handleReaction = async (event, emoji: string) => {
    setShowReactions(false)
    event.stopPropagation()
    setMessageInput(messageInput + ' ' + emoji)
    if (messageDraftRef.current) {
      messageDraftRef.current.update(messageInput + ' ' + emoji)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setMessageInput(value)

    // Update message draft text
    if (messageDraftRef.current) {
      messageDraftRef.current.update(value)
    }

    // Check for @ symbol
    const lastAtIndex = value.lastIndexOf('@')
    if (lastAtIndex !== -1) {
      const query = value.slice(lastAtIndex + 1)
      setMentionQuery(query)
      setMentionStartIndex(lastAtIndex)
      setShowMentions(true)
    } else {
      setShowMentions(false)
      setMentionQuery('')
      setMentionStartIndex(-1)
    }
  }

  const handleMentionSelect = (user: User) => {
    if (mentionStartIndex !== -1 && messageDraftRef.current) {
      const newMessage =
        messageInput.slice(0, mentionStartIndex) +
        `@${user.name || user.id} ` +
        messageInput.slice(mentionStartIndex + mentionQuery.length + 1)

      setMessageInput(newMessage)

      messageDraftRef.current.update(newMessage)

      // Add mention to message draft
      messageDraftRef.current.addMention(
        mentionStartIndex,
        (user.name || user.id).length + 1, // +1 for @ symbol
        'mention',
        user.id
      )

      setShowMentions(false)
      setMentionQuery('')
      setMentionStartIndex(-1)
      inputRef.current?.focus()
    }
  }

  const handleSendMessage = async () => {
    if (messageDraftRef.current && messageInput.trim()) {
      try {
        await messageDraftRef.current.send()
        if (!isGuidedDemo) {
          //  This code is only used by the PubNub website
          actionCompleted({
            action: 'Send a chat message',
            blockDuplicateCalls: false,
            debug: false
          })
        }  
        setMessageInput('')
        // Create new message draft for next message
        messageDraftRef.current = channel.createMessageDraftV2({
          userSuggestionSource: 'channel'
        })
      } catch (error) {
        console.error('Error sending message:', error)
      }
    }
  }

  function handleOpenEmoji (event) {
    setShowReactions(!showReactions)
    event.stopPropagation()
  }

  return (
    <div
      className={`relative flex items-center py-[12px] px-[16px] gap-2 mt-1 border-t border-navy200 ${
        (activeChannelRestrictions?.mute || activeChannelRestrictions?.ban) &&
        'pointer-events-none opacity-50'
      }`}
    >
      <div
        className={
          'group relative rounded w-[32px] h-[32px] p-[6px] cursor-pointer'
        }
        ref={ref}
        onClick={handleOpenEmoji}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
        >
          <path
            d='M11.9165 8.16675C12.6069 8.16675 13.1665 7.6071 13.1665 6.91675C13.1665 6.22639 12.6069 5.66675 11.9165 5.66675C11.2261 5.66675 10.6665 6.22639 10.6665 6.91675C10.6665 7.6071 11.2261 8.16675 11.9165 8.16675Z'
            fill='#216F7B'
          />
          <path
            d='M6.08317 8.16675C6.77353 8.16675 7.33317 7.6071 7.33317 6.91675C7.33317 6.22639 6.77353 5.66675 6.08317 5.66675C5.39281 5.66675 4.83317 6.22639 4.83317 6.91675C4.83317 7.6071 5.39281 8.16675 6.08317 8.16675Z'
            fill='#216F7B'
          />
          <path
            d='M8.99984 14.0001C10.8998 14.0001 12.5165 12.6167 13.1665 10.6667H4.83317C5.48317 12.6167 7.09984 14.0001 8.99984 14.0001Z'
            fill='#216F7B'
          />
          <path
            d='M8.9915 0.666748C4.3915 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.3915 17.3334 8.9915 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.9915 0.666748ZM8.99984 15.6667C5.3165 15.6667 2.33317 12.6834 2.33317 9.00008C2.33317 5.31675 5.3165 2.33341 8.99984 2.33341C12.6832 2.33341 15.6665 5.31675 15.6665 9.00008C15.6665 12.6834 12.6832 15.6667 8.99984 15.6667Z'
            fill='#216F7B'
          />
        </svg>

        {showReactions && (
          <div className='absolute top-[-35px] left-0 bg-white border shadow-lg rounded-lg p-1 flex gap-2 z-10'>
            {reactions.map(emoji => (
              <button
                key={emoji}
                className='text-lg hover:scale-125 transition-transform'
                onClick={event => handleReaction(event, emoji)}
              >
                {emoji}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className='flex-grow'>
        <input
          ref={inputRef}
          type='text'
          placeholder={`${
            activeChannelRestrictions?.mute
              ? 'You have been muted'
              : activeChannelRestrictions?.ban
              ? 'You have been banned'
              : 'Write your message here'
          }`}
          className='w-full focus:outline-none focus:shadow-outline'
          value={messageInput}
          onChange={handleInputChange}
          onKeyDown={e => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleSendMessage()
            }
          }}
        />

        {showMentions && suggestedUsers.length > 0 && (
          <div className='absolute w-full bottom-[100%] left-0 bg-navy200 shadow-lg z-10'>
            {suggestedUsers.map(user => (
              <button
                key={user.id}
                className='w-full flex items-center text-left px-2 py-1 hover:bg-navy100 rounded'
                onClick={() => handleMentionSelect(user)}
              >
                <div
                  data-user={user?.name || 'Unknown User'}
                  className={
                    'rounded-full w-[36px] h-[36px] mr-[16px] !bg-cover bg-gray-100'
                  }
                  style={
                    user
                      ? {
                          background: `url(${user?.profileUrl}) center center no-repeat`
                        }
                      : {}
                  }
                ></div>
                {user.name}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        className='text-white rounded w-[32px] h-[32px] p-[6px] cursor-pointer'
        onClick={handleSendMessage}
        disabled={!messageInput.trim()}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
        >
          <path
            d='M2.925 5.025L9.18333 7.70833L2.91667 6.875L2.925 5.025ZM9.175 12.2917L2.91667 14.975V13.125L9.175 12.2917ZM1.25833 2.5L1.25 8.33333L13.75 10L1.25 11.6667L1.25833 17.5L18.75 10L1.25833 2.5Z'
            fill='#216F7B'
          />
        </svg>
      </button>
    </div>
  )
}
