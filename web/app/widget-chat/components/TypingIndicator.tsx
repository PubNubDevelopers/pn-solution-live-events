interface TypingIndicatorProps {
  typingUsers: string[]
}

export default function TypingIndicator({ typingUsers }: TypingIndicatorProps) {
  if (!typingUsers || typingUsers.length === 0) return null
  
  return (
    <div className="text-sm italic text-gray-500">
      {typingUsers.length === 1 
        ? `${typingUsers[0]} is typing...` 
        : `${typingUsers.length} people are typing...`}
    </div>
  )
} 