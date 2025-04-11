'use client'

import {useState, useEffect, useRef} from 'react'
import GuideOverlay from '../components/guideOverlay'
import {Chat, User, Channel, Message} from '@pubnub/chat'
import TypingIndicator from './components/TypingIndicator'
import ChatMessage from './components/ChatMessage'
import ChannelList from './components/ChannelList'
import CreateChannelForm from './components/CreateChannelForm'
import MessageInput from './components/MessageInput'

interface ChatWidgetProps {
  className: string
  isMobilePreview: boolean
  chat: Chat
  guidesShown: boolean
  visibleGuide: string
  setVisibleGuide: (guide: string) => void
}

export default function ChatWidget({
                                     className,
                                     isMobilePreview,
                                     chat,
                                     guidesShown,
                                     visibleGuide,
                                     setVisibleGuide
                                   }: ChatWidgetProps) {
  // Channel state
  const [activeChannelId, setActiveChannelId] = useState<string | null>(null)
  const [activeChannel, setActiveChannel] = useState<Channel | null>(null)
  const [publicChannels, setPublicChannels] = useState<Channel[]>([])
  const [privateChannels, setPrivateChannels] = useState<Channel[]>([])
  const [directChannels, setDirectChannels] = useState<Channel[]>([])

  // Message state
  const [messages, setMessages] = useState<Message[]>([])
  const [messageInput, setMessageInput] = useState('')
  const [typingUsers, setTypingUsers] = useState<string[]>([])

  // UI state
  const [showChannelCreate, setShowChannelCreate] = useState(false)
  const [channelName, setChannelName] = useState('')
  const [channelType, setChannelType] = useState('public')
  const [showMentions, setShowMentions] = useState(false)
  const [showReactions, setShowReactions] = useState(false)
  const [availableUsers, setAvailableUsers] = useState<User[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const [whoIsPresent, setWhoIsPresent] = useState<string[]>([])

  const messagesContainerRef = useRef<HTMLDivElement>(null)

  /**
   * Initialize chat channels when chat is available
   */
  useEffect(() => {
    if (!chat) return

    // Fetch all channels and users
    fetchChannels()
    fetchUsers()

    // Set the first channel as active if none is selected
    if (!activeChannelId && publicChannels.length > 0) {
      setActiveChannelId(publicChannels[0].id)
    }
  }, [chat])

  /**
   * When active channel ID changes, set up the active channel
   */
  useEffect(() => {
    if (!chat || !activeChannelId) return
    const cleanup = setupActiveChannel()
    return () => {
      if (cleanup && typeof cleanup.then === 'function') {
        cleanup.then(fn => {
          if (fn) fn()
        })
      }
    }
  }, [activeChannelId, chat])

  /**
   * Scroll to bottom of messages when messages change
   */
  useEffect(() => {
    if (messages.length > 0) {
      Message.streamUpdatesOn(messages, setMessages)
    }

    scrollToBottom()
  }, [messages])

  /**
   * Fetches all available channels and organizes them by type
   */
  const fetchChannels = async () => {
    if (!chat) return

    try {
      // Get all channels from PubNub Chat SDK
      const result = await chat.getChannels()
      const channels = result.channels || []

      // Sort channels by type
      const publicChan: Channel[] = []
      const privateChan: Channel[] = []
      const directChan: Channel[] = []

      for (const channel of channels) {
        if (!channel) continue

        // Add channel to appropriate array based on type
        if (channel.type === 'public') {
          publicChan.push(channel)
        } else if (channel.type === 'group') {
          privateChan.push(channel)
        } else if (channel.type === 'direct') {
          directChan.push(channel)
        }
      }

      setPublicChannels(publicChan)
      setPrivateChannels(privateChan)
      setDirectChannels(directChan)

      // Set default active channel if none selected
      if (!activeChannelId && publicChan.length > 0) {
        setActiveChannelId(publicChan[0].id)
      }
    } catch (error) {
      console.error('Error fetching channels:', error)
    }
  }

  /**
   * Fetches all available users for inviting to channels
   */
  const fetchUsers = async () => {
    if (!chat) return

    try {
      const result = await chat.getUsers()
      const users = result.users || []
      setAvailableUsers(users.filter(user => user.id !== chat.currentUser.id))
      setUsers(users)

    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  /**
   * Sets up the active channel and its message listeners
   */
  const setupActiveChannel = async () => {
    if (!chat || !activeChannelId) return

    // Clear existing messages and typing users before setting up new channel
    setMessages([])
    setTypingUsers([])

    try {
      // Fetch the selected channel using PubNub Chat SDK
      const channel = await chat.getChannel(activeChannelId)

      if (!channel) {
        console.error(`Channel ${activeChannelId} not found`)
        return
      }

      setActiveChannel(channel)
      setWhoIsPresent(await chat.whoIsPresent(activeChannelId))

      // Get channel history
      try {
        const history = await channel.getHistory()

        setMessages(history.messages || [])
      } catch (error) {
        console.error('Error fetching message history:', error)
        setMessages([])
      }

      // Initialize cleanup functions
      let unsubscribeMessages = () => {
      }
      let typingUnsubscribe = () => {
      }

      // Connect to channel to receive messages
      unsubscribeMessages = channel.connect(async (message: Message) => {

        // await channel.streamPresence((userIds) => {
        //   console.log("Currently present users: ", userIds)
        // })

        // console.log(activeChannelId, await channel.whoIsPresent(), await chat.whoIsPresent(activeChannelId))

        setMessages(prevMessages => {
          // Check if message already exists
          const messageExists = prevMessages.some(m => m.timetoken === message.timetoken)
          if (messageExists) return prevMessages
          return [...prevMessages, message]
        })
      })

      const stopPresenceUpdates = await channel.streamPresence((userIds) => {
        setWhoIsPresent(userIds)
      })

      // Set up typing indicator if not public channel
      if (channel.type !== 'public') {
        typingUnsubscribe = channel.getTyping((typingUserIds) => {
          // Convert user IDs to names
          const getDisplayNames = async () => {
            const names: string[] = []
            for (const userId of typingUserIds) {
              if (userId === chat.currentUser.id) continue

              try {
                const user = await chat.getUser(userId)
                if (user) {
                  names.push(user.name || userId)
                }
              } catch {
                names.push(userId)
              }
            }
            setTypingUsers(names)
          }

          getDisplayNames()
        })
      }

      // Return cleanup function
      return () => {
        if (typeof unsubscribeMessages === 'function') {
          unsubscribeMessages()
        }
        if (typeof stopPresenceUpdates === 'function') {
          stopPresenceUpdates()
        }
        if (typeof typingUnsubscribe === 'function') {
          typingUnsubscribe()
        }
        setMessages([])
        setTypingUsers([])
      }
    } catch (error) {
      console.error(`Error setting up channel ${activeChannelId}:`, error)
      return () => {
        setMessages([])
        setTypingUsers([])
      }
    }
  }

  /**
   * Scrolls to the bottom of the message list
   */
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }

  /**
   * Sends a message to the active channel
   */
  const sendMessage = async () => {
    if (!chat || !activeChannel || !messageInput.trim()) return

    try {
      // Use PubNub Chat SDK to send the message
      await activeChannel.sendText(messageInput)
      // await activeChannel.rea(messageInput)

      // Clear input and typing indicator
      setMessageInput('')
      if (activeChannel.type !== 'public') {
        activeChannel.stopTyping()
      }
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  /**
   * Handles typing indicator when user inputs text
   */
  const handleTyping = () => {
    if (!chat || !activeChannel) return

    // Typing indicators not supported in public channels
    if (activeChannel.type !== 'public') {
      activeChannel.startTyping()
    }
  }

  /**
   * Creates a new channel based on selected type
   */
  const createChannel = async () => {
    if (!chat || !channelName.trim()) return

    try {
      let newChannel: any = null

      // Create appropriate channel type
      if (channelType === 'public') {
        // Create public channel
        newChannel = await chat.createPublicConversation({
          channelData: {
            name: channelName,
            description: `${channelName} public channel`
          }
        })
      } else if (channelType === 'private') {
        // Create private (group) channel with selected users
        if (selectedUsers.length === 0) {
          alert('Please select at least one user to invite')
          return
        }

        const users = await Promise.all(
          selectedUsers.map(userId => chat.getUser(userId))
        )

        const filteredUsers = users.filter(Boolean) as User[]

        newChannel = await chat.createGroupConversation({
          users: filteredUsers,
          channelData: {
            name: channelName,
            description: `${channelName} private group channel`
          }
        })
      } else if (channelType === 'direct' && selectedUsers.length === 1) {
        // Create direct (1:1) channel with selected user
        const user = await chat.getUser(selectedUsers[0])
        if (!user) {
          alert('Selected user not found')
          return
        }

        newChannel = await chat.createDirectConversation({
          user,
          channelData: {
            name: channelName || `Chat with ${user.name || user.id}`
          }
        })
      }

      if (newChannel && newChannel.channel) {
        // Refresh channels and select the new one
        await fetchChannels()
        setActiveChannelId(newChannel.channel.id)

        // Reset UI state
        setShowChannelCreate(false)
        setChannelName('')
        setChannelType('public')
        setSelectedUsers([])
      }
    } catch (error) {
      console.error('Error creating channel:', error)
    }
  }

  /**
   * Toggles user selection for channel invites
   */
  const toggleUserSelection = (userId: string) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    )
  }

  function backgroundClicked(e) {
    console.log('chat clicked')
    setShowMentions(false)
    setShowReactions(false)
    e.stopPropagation()
  }

  return (
    <div className={`${className} w-full h-full`} onClick={(e) => backgroundClicked(e)}>

      <GuideOverlay
        id={'chatGuide'}
        guidesShown={guidesShown}
        visibleGuide={visibleGuide}
        setVisibleGuide={setVisibleGuide}
        text={
          <span>
              This component demonstrates how to implement a complete chat solution using the PubNub Chat SDK:
              <ul className="list-disc list-inside mt-2">
                <li>Create and manage public, private, and direct channels</li>
                <li>Send and receive real-time messages</li>
                <li>Display typing indicators</li>
                <li>Add emoji reactions to messages</li>
              </ul>
            </span>
        }
        xOffset={`${isMobilePreview ? 'left-[0px]' : '-left-[60px]'}`}
        yOffset={''}
        flexStyle={'flex-row items-start'}
      />

      {!activeChannel && <div
        className="text-lg border-b pb-2 flex items-center bg-navy900 overflow-hidden rounded-t px-[16px] py-[12px] text-white text-[16px] font-[600] leading-[24px] h-[56px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M12.4998 3.33341V9.16675H4.30817L3.33317 10.1417V3.33341H12.4998ZM13.3332 1.66675H2.49984C2.0415 1.66675 1.6665 2.04175 1.6665 2.50008V14.1667L4.99984 10.8334H13.3332C13.7915 10.8334 14.1665 10.4584 14.1665 10.0001V2.50008C14.1665 2.04175 13.7915 1.66675 13.3332 1.66675ZM17.4998 5.00008H15.8332V12.5001H4.99984V14.1667C4.99984 14.6251 5.37484 15.0001 5.83317 15.0001H14.9998L18.3332 18.3334V5.83342C18.3332 5.37508 17.9582 5.00008 17.4998 5.00008Z"
            fill="white"/>
        </svg>
        <div className={'pl-[16px]'}>{showChannelCreate ? 'Create channel' : 'Chats'}</div>
        <div className={'grow'}/>
        <button
          className="cursor-pointer"
          onClick={() => setShowChannelCreate(!showChannelCreate)}
        >
          {showChannelCreate ? 'Cancel' :
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M15.8332 10.8334H10.8332V15.8334H9.1665V10.8334H4.1665V9.16675H9.1665V4.16675H10.8332V9.16675H15.8332V10.8334Z"
                fill="#FAFAFA"/>
            </svg>}
        </button>
      </div>}

      {activeChannel && <div
        className="text-lg border-b pb-2 flex items-center bg-navy900 overflow-hidden rounded-t px-[16px] py-[12px] text-white text-[16px] font-[600] leading-[24px] h-[56px]">
        {/*<button className="cursor-pointer" onClick={() => {*/}
        {/*  setActiveChannel(null)*/}
        {/*  setActiveChannelId(null)*/}
        {/*}}>*/}
        {/*  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">*/}
        {/*    <path d="M14.8627 3.225L13.3794 1.75L5.1377 10L13.3877 18.25L14.8627 16.775L8.0877 10L14.8627 3.225Z" fill="#FAFAFA"/>*/}
        {/*  </svg>*/}
        {/*</button>*/}
        <div className={'rounded-full w-[32px] h-[32px] !bg-cover bg-gray-100'} style={activeChannel.custom?.profileUrl ? {background: `url(${activeChannel.custom?.profileUrl}) center center no-repeat`} : {}}></div>
        <div className={'ml-[16px]'}>{activeChannel.name || activeChannel.id}</div>
        <div className={'grow'}/>
        <div className={'flex items-center justify-center gap-1'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="4" fill="#22C55E"/>
          </svg> {whoIsPresent.length} online
        </div>
      </div>}

      {/* Create Channel Form */}
      {showChannelCreate && (
        <CreateChannelForm
          channelName={channelName}
          setChannelName={setChannelName}
          channelType={channelType}
          setChannelType={setChannelType}
          availableUsers={availableUsers}
          selectedUsers={selectedUsers}
          toggleUserSelection={toggleUserSelection}
          createChannel={createChannel}
        />
      )}

      {!activeChannel && !showChannelCreate && <ChannelList
        publicChannels={publicChannels}
        privateChannels={privateChannels}
        directChannels={directChannels}
        activeChannelId={activeChannelId}
        setActiveChannelId={setActiveChannelId}
      />}

      {/* Chat Messages */}
      {activeChannel &&<div className={'h-[400px] flex flex-col'}>
        <div ref={messagesContainerRef} className="py-[12px] px-[16px] overflow-y-auto flex-grow">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 py-4">
              No messages yet. Be the first to say something!
            </div>
          ) : (
            <>
              {messages.map((message, index) => {

                // const user = await chat.getUser('')

                return <ChatMessage
                  key={`${message.timetoken}-${index}`}
                  message={message}
                  currentUser={chat.currentUser}
                  users={users}
                  channel={activeChannel}
                />
              })}
            </>
          )}
        </div>

        {/* Typing indicator */}
        <div className="h-5">
          {activeChannel && typingUsers.length > 0 && (
            <TypingIndicator typingUsers={typingUsers}/>
          )}
        </div>

        <MessageInput
          messageInput={messageInput}
          setMessageInput={setMessageInput}
          showMentions={showMentions}
          setShowMentions={setShowMentions}
          showReactions={showReactions}
          setShowReactions={setShowReactions}
          handleTyping={handleTyping}
          sendMessage={sendMessage}
          availableUsers={users}
          channel={activeChannel}
        />

      </div>}
    </div>
  )
}
