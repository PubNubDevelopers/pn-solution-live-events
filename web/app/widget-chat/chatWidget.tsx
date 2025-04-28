'use client'

import { useState, useEffect, useRef } from 'react'
import GuideOverlay from '../components/guideOverlay'
import {
  dataControlOccupancyChannelId,
  serverVideoControlChannelId,
  streamReactionsChannelId
} from '../data/constants'
import {
  Chat,
  User,
  Channel,
  Message,
  MixedTextTypedElement
} from '@pubnub/chat'
import ChatMessage from './components/ChatMessage'
import MessageInput from './components/MessageInput'

interface ChatWidgetProps {
  className: string
  isMobilePreview: boolean
  chat: Chat
  isGuidedDemo: boolean,
  guidesShown: boolean
  visibleGuide: string
  setVisibleGuide: (guide: string) => void
  userMentioned: (messageText: string) => void
}

export interface Restriction {
  ban: boolean
  mute: boolean
  reason: string | number | boolean | undefined
}

export default function ChatWidget ({
  className,
  isMobilePreview,
  chat,
  isGuidedDemo,
  guidesShown,
  visibleGuide,
  setVisibleGuide,
  userMentioned
}: ChatWidgetProps) {
  // Channel state
  const [activeChannelId, setActiveChannelId] = useState<string | null>(null)
  const [activeChannel, setActiveChannel] = useState<Channel | null>(null)
  const [publicChannels, setPublicChannels] = useState<Channel[]>([])

  // Message state
  const [messages, setMessages] = useState<Message[]>([])
  const [messageInput, setMessageInput] = useState('')

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
  const [realOccupancy, setRealOccupancy] = useState(0)
  const [simulatedOccupancy, setSimulatedOccupancy] = useState(0)
  const [activeChannelRestrictions, setActiveChannelRestrictions] =
    useState<Restriction | null>(null)

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

    const renderMessagePartMention = (
      messagePart: MixedTextTypedElement,
      index: number
    ) => {
      if (messagePart.type === 'mention') {
        return messagePart.content.name
      }
      if (messagePart.type === 'text') {
        return messagePart.content.text
      }
      return ''
    }

    const removeMentionsListener = chat.listenForEvents({
      user: chat.currentUser.id,
      type: 'mention',
      callback: async evt => {
        const channel = await chat.getChannel(evt.payload.channel)
        const message = await channel?.getMessage(evt.payload.messageTimetoken)
        userMentioned(
          `${message
            ?.getMessageElements()
            .map(renderMessagePartMention)
            .join('')}`
        )
      }
    })

    return () => {
      removeMentionsListener()
    }
  }, [chat])

  useEffect(() => {
    if (!chat || !activeChannel) return
    updateActiveChannelRestrictions()
    const removeModerationListener = chat.listenForEvents({
      channel: `PUBNUB_INTERNAL_MODERATION.${chat.currentUser.id}`,
      type: 'moderation',
      callback: async evt => {
        updateActiveChannelRestrictions()
      }
    })

    return () => {
      removeModerationListener()
    }
  }, [chat, activeChannel])

  useEffect(() => {
    if (simulatedOccupancy > 20) {
      const interval = setInterval(() => {
        const randomPercentage = (Math.random() * 0.2 - 0.1); // Random value between -0.1 and +0.1
        setSimulatedOccupancy(prev => Math.max(0, Math.round(prev * (1 + randomPercentage))));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [simulatedOccupancy]);

  function updateActiveChannelRestrictions () {
    //  Update the restrictions of the currently active channel whenever that changes
    if (!activeChannel || !chat) return
    activeChannel.getUserRestrictions(chat.currentUser).then(restrictions => {
      const tempRestrictions: Restriction = {
        ban: restrictions.ban,
        mute: restrictions.mute,
        reason: restrictions.reason
      }
      setActiveChannelRestrictions(tempRestrictions)
    })
  }

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
      const lastMessageUser = messages[messages.length - 1].userId
      if (lastMessageUser.startsWith('user-')) {
        Message.streamUpdatesOn(messages, setMessages)
      }
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

      for (const channel of channels) {
        if (!channel) continue

        // Add channel to appropriate array based on type
        if (channel.type === 'public') {
          publicChan.push(channel)
        }
      }

      setPublicChannels(publicChan)

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

    try {
      // Fetch the selected channel using PubNub Chat SDK
      const channel = await chat.getChannel(activeChannelId)

      if (!channel) {
        console.error(`Channel ${activeChannelId} not found`)
        return
      }

      setActiveChannel(channel)
      //setWhoIsPresent(await chat.whoIsPresent(activeChannelId));

      // Get channel history
      /*
      try {
        const history = await channel.getHistory()

        setMessages(history.messages || [])
      } catch (error) {
        console.error('Error fetching message history:', error)
        setMessages([])
      }
        */

      // Initialize cleanup functions
      let unsubscribeMessages = () => {}

      // Connect to channel to receive messages

      unsubscribeMessages = channel.connect(async (message: Message) => {
        setMessages(prevMessages => {
          // Check if message already exists
          const messageExists = prevMessages.some(
            m => m.timetoken === message.timetoken
          )
          if (messageExists) return prevMessages
          const newMessages = [...prevMessages, message]
          return newMessages.slice(-40)
        })
      })

      //  Occupancy updates from Data Controls
      const occupancyChannel = chat.sdk.channel(dataControlOccupancyChannelId)
      const occupancySubscription = occupancyChannel.subscription({
        receivePresenceEvents: false
      })
      occupancySubscription.onMessage = (messageEvent: any) => {
        setSimulatedOccupancy(+messageEvent.message.chatOccupancy)
      }
      occupancySubscription.subscribe()

      const serverVideoControlChannel = chat.sdk.channel(
        serverVideoControlChannelId
      )
      const serverVideoControlSubscription =
        serverVideoControlChannel.subscription({
          receivePresenceEvents: false
        })
      serverVideoControlSubscription.onMessage = (messageEvent: any) => {
        if (messageEvent.message.type === 'START_STREAM') {
          setMessages([])
        }
      }
      serverVideoControlSubscription.subscribe()

      //  For consistency with the live stream, use the reactions channel for real occupancy
      const reactionsChannel = chat.sdk.channel(streamReactionsChannelId)
      const reactionsSubscription = reactionsChannel.subscription({
        receivePresenceEvents: true
      })
      reactionsSubscription.onPresence = (presenceEvent: any) => {
        if (presenceEvent?.occupancy > 0) {
          setRealOccupancy(presenceEvent.occupancy)
        }
      }
      chat.sdk
        .hereNow({ channels: [streamReactionsChannelId] })
        .then(hereNowResult => {
          if (hereNowResult) {
            setRealOccupancy(hereNowResult.totalOccupancy + 1)
          }
        })
      reactionsSubscription.subscribe()

      // Return cleanup function
      return () => {
        if (typeof unsubscribeMessages === 'function') {
          unsubscribeMessages()
        }
        setMessages([])
        occupancySubscription.unsubscribe()
        reactionsSubscription.unsubscribe()
        serverVideoControlSubscription.unsubscribe()
      }
    } catch (error) {
      console.error(`Error setting up channel ${activeChannelId}:`, error)
      return () => {
        setMessages([])
      }
    }
  }

  /**
   * Scrolls to the bottom of the message list
   */
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight
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

  function backgroundClicked (e) {
    setShowMentions(false)
    setShowReactions(false)
  }

  return (
    <div
      className={`${className} w-full h-fit`}
      onClick={e => backgroundClicked(e)}
    >
      <GuideOverlay
        id={'chatGuide'}
        guidesShown={guidesShown}
        visibleGuide={visibleGuide}
        setVisibleGuide={setVisibleGuide}
        text={
          <span>
            The <span className='font-semibold'>PubNub Chat SDK</span> provides
            you with everything you need to develop a fully featured,
            production-ready chat component:
            <ul className='list-disc list-inside my-2'>
              <li>Public, private, and direct channels</li>
              <li>Send and receive real-time messages</li>
              <li>Add emoji reactions to messages</li>
              <li>Track whether users are online or offline</li>
            </ul>
            Also: Integration with AI and Moderation through{' '}
            <span className='font-semibold'>BizOps Workspace</span> and{' '}
            <span className='font-semibold'>Functions</span>
          </span>
        }
        xOffset={`${isMobilePreview ? 'left-[0px]' : '-left-[60px]'}`}
        yOffset={'top-[10px]'}
        flexStyle={'flex-row items-start'}
      />

      {!activeChannel && (
        <div className='text-lg border-b pb-2 flex items-center bg-navy900 overflow-hidden rounded-t px-[16px] py-[12px] text-white text-[16px] font-[600] leading-[24px] h-[56px]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
          >
            <path
              d='M12.4998 3.33341V9.16675H4.30817L3.33317 10.1417V3.33341H12.4998ZM13.3332 1.66675H2.49984C2.0415 1.66675 1.6665 2.04175 1.6665 2.50008V14.1667L4.99984 10.8334H13.3332C13.7915 10.8334 14.1665 10.4584 14.1665 10.0001V2.50008C14.1665 2.04175 13.7915 1.66675 13.3332 1.66675ZM17.4998 5.00008H15.8332V12.5001H4.99984V14.1667C4.99984 14.6251 5.37484 15.0001 5.83317 15.0001H14.9998L18.3332 18.3334V5.83342C18.3332 5.37508 17.9582 5.00008 17.4998 5.00008Z'
              fill='white'
            />
          </svg>
          <div className={'pl-[16px]'}>
            {showChannelCreate ? 'Create channel' : 'Chats'}
          </div>
          <div className={'grow'} />
          <button
            className='cursor-pointer'
            onClick={() => setShowChannelCreate(!showChannelCreate)}
          >
            {showChannelCreate ? (
              'Cancel'
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
              >
                <path
                  d='M15.8332 10.8334H10.8332V15.8334H9.1665V10.8334H4.1665V9.16675H9.1665V4.16675H10.8332V9.16675H15.8332V10.8334Z'
                  fill='#FAFAFA'
                />
              </svg>
            )}
          </button>
        </div>
      )}

      {activeChannel && (
        <div className='text-lg border-b pb-2 flex items-center bg-navy900 overflow-hidden rounded-t px-[16px] py-[12px] text-white text-[16px] font-[600] leading-[24px] h-[56px]'>
          <div
            className={'rounded-full w-[32px] h-[32px] !bg-cover bg-gray-100'}
            style={
              activeChannel.custom?.profileUrl
                ? {
                    background: `url(${activeChannel.custom?.profileUrl}) center center no-repeat`
                  }
                : {}
            }
          ></div>
          <div className={'ml-[16px]'}>
            {activeChannel.name || activeChannel.id}
          </div>
          <div className={'grow'} />
          <div className={'flex items-center justify-center gap-1'}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='8'
              height='8'
              viewBox='0 0 8 8'
              fill='none'
            >
              <circle cx='4' cy='4' r='4' fill='#22C55E' />
            </svg>{' '}
            {simulatedOccupancy + realOccupancy} online
          </div>
        </div>
      )}

      {/* Chat Messages */}

      {activeChannel && (
        <div className={'h-[400px] flex flex-col'}>
          <div
            ref={messagesContainerRef}
            className='py-[12px] px-[16px] overflow-y-auto flex-grow'
          >
            {messages.length === 0 ? (
              <div className='text-center text-gray-500 py-4'>
                No messages yet. Be the first to say something!
              </div>
            ) : activeChannelRestrictions?.ban ? (
              <div className='flex flex-row justify-center items-center h-full'>
                You have been banned from this chat. Please contact the
                administrator
              </div>
            ) : (
              <>
                {messages.map((message, index) => {
                  // const user = await chat.getUser('')

                  return (
                    <ChatMessage
                      key={`${message.timetoken}-${index}`}
                      message={message}
                      currentUser={chat.currentUser}
                      users={users}
                      channel={activeChannel}
                    />
                  )
                })}
              </>
            )}
          </div>

          <MessageInput
            messageInput={messageInput}
            setMessageInput={setMessageInput}
            showMentions={showMentions}
            setShowMentions={setShowMentions}
            showReactions={showReactions}
            setShowReactions={setShowReactions}
            availableUsers={users}
            channel={activeChannel}
            activeChannelRestrictions={activeChannelRestrictions}
            isGuidedDemo={isGuidedDemo}
          />
        </div>
      )}
    </div>
  )
}
