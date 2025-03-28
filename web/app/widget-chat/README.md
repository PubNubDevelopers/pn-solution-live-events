# Chat Widget using PubNub Chat SDK

This component provides a comprehensive chat solution for live streaming events using the PubNub Chat SDK. It demonstrates how to implement key chat features in a clear, maintainable way that's easy to understand.

## Features

- **Multiple Channel Types**:
  - Public channels (open to all users)
  - Private (Group) channels (invite-only)
  - Direct messaging (1-on-1 conversations)

- **Real-time Messaging**:
  - Send and receive messages instantly
  - Message history persistence
  - Clean and intuitive UI

- **Typing Indicators**:
  - Shows when users are typing
  - Automatically manages typing state

- **Message Reactions**:
  - Add emoji reactions to messages
  - View reaction counts

## Implementation Details

### Component Structure

The component is structured into three main parts:

1. **TypingIndicator**: A simple component that displays which users are currently typing
2. **ChatMessage**: Renders individual messages with reaction support
3. **ChatWidget**: The main component that handles channel management, messaging, and UI

### PubNub Features Demonstrated

#### 1. Channel Management
The widget demonstrates how to create and manage different channel types:

```typescript
// Create a public channel
newChannel = await chat.createPublicConversation({
  channelData: {
    name: channelName,
    description: `${channelName} public channel`
  }
})

// Create a private (group) channel
newChannel = await chat.createGroupConversation({
  users: filteredUsers,
  channelData: {
    name: channelName,
    description: `${channelName} private group channel`
  }
})

// Create a direct (1:1) message channel
newChannel = await chat.createDirectConversation({
  user,
  channelData: {
    name: channelName || `Chat with ${user.name || user.id}`
  }
})
```

#### 2. Sending & Receiving Messages
Real-time messaging is handled through the PubNub Chat SDK's connect and sendText methods:

```typescript
// Connect to channel to receive messages
unsubscribeMessages = channel.connect((message: Message) => {
  setMessages(prevMessages => [...prevMessages, message])
})

// Send a text message
await activeChannel.sendText(messageInput)
```

#### 3. Typing Indicators
The typing indicator feature uses the built-in methods from the SDK:

```typescript
// Tell others that the user is typing
activeChannel.startTyping()

// Stop the typing indicator
activeChannel.stopTyping()

// Listen for typing indicators
typingUnsubscribe = channel.getTyping((typingUserIds) => {
  // Convert user IDs to display names
  // ...
  setTypingUsers(names)
})
```

#### 4. Message Reactions
Implementing message reactions is straightforward with the SDK:

```typescript
// Toggle (add/remove) a reaction on a message
await message.toggleReaction(emoji)

// Get reaction counts for display
const counts: Record<string, number> = {}
Object.entries(message.reactions).forEach(([type, users]) => {
  if (Array.isArray(users)) {
    counts[type] = users.length
  }
})
```

### User Experience Flow

1. **Channel Creation**: Users can create new channels of different types and invite others
2. **Channel Selection**: Users can select and switch between available channels
3. **Messaging**: Users can send/receive messages and see typing indicators in real-time  
4. **Reactions**: Users can add emoji reactions to any message

## How to Use This Component

### Basic Usage

```tsx
import ChatWidget from './widget-chat/chatWidget'

// In your parent component:
<ChatWidget
  className="rounded-lg border-1 bg-white shadow-sm"
  isMobilePreview={false}
  chat={chatInstance} // A pre-initialized PubNub Chat SDK instance
  guidesShown={false}
  visibleGuide=""
  setVisibleGuide={() => {}}
/>
```

### Required Props

- `className`: CSS classes to apply to the outer container
- `isMobilePreview`: Whether the component is being displayed in mobile preview mode
- `chat`: An initialized instance of the PubNub Chat SDK
- `guidesShown`: Whether guides/tutorials are enabled
- `visibleGuide`: The ID of the currently visible guide
- `setVisibleGuide`: A function to set the visible guide

## Customization Options

### Adding New Message Types

To support additional message types like images or files, you can extend the `sendMessage` function:

```typescript
const sendImage = async (imageUrl) => {
  if (!chat || !activeChannel) return
  
  try {
    // Use custom properties to add metadata for images
    await activeChannel.sendText("", {
      meta: {
        type: "image",
        url: imageUrl
      }
    })
  } catch (error) {
    console.error("Error sending image:", error)
  }
}
```

Then update the ChatMessage component to handle the new type:

```tsx
if (message.meta?.type === 'image') {
  return <img src={message.meta.url} alt="Shared" className="max-w-full" />
}
```

### Enhancing the UI

The component uses simple Tailwind CSS classes that can be easily customized:

- Modify the chat container: Update the CSS in the main component return 
- Change message styling: Customize the classes in the ChatMessage component
- Adjust the typing indicator: Edit the TypingIndicator component

## Security Considerations

- **User Authentication**: Implement proper user authorization before deployment
- **Message Moderation**: Consider using PubNub Functions for content filtering
- **Rate Limiting**: Add message rate limiting to prevent spam

## Dependencies

- PubNub Chat SDK: `@pubnub/chat` (version 0.11.7 or higher)
- React 18+
- TypeScript (for type safety)
- Tailwind CSS (for styling)

## Additional Resources

- [PubNub Chat SDK Documentation](https://www.pubnub.com/docs/chat/overview)
- [PubNub Functions Documentation](https://www.pubnub.com/docs/functions/overview)
- [Real-time Messaging Best Practices](https://www.pubnub.com/developers/tech/chat/) 