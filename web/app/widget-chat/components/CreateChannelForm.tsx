import { User } from '@pubnub/chat'

interface CreateChannelFormProps {
  channelName: string
  setChannelName: (name: string) => void
  channelType: string
  setChannelType: (type: string) => void
  availableUsers: User[]
  selectedUsers: string[]
  toggleUserSelection: (userId: string) => void
  createChannel: () => void
}

export default function CreateChannelForm({
  channelName,
  setChannelName,
  channelType,
  setChannelType,
  availableUsers,
  selectedUsers,
  toggleUserSelection,
  createChannel
}: CreateChannelFormProps) {
  return (
    <div className="h-[400px] py-[12px] px-[16px]">
      <input
        type="text"
        placeholder="Channel name"
        className="w-full p-2 mb-2 border rounded"
        value={channelName}
        onChange={(e) => setChannelName(e.target.value)}
      />
      
      <div className="mb-2">
        <label className="block mb-1">Channel Type:</label>
        <select 
          className="w-full p-2 border rounded"
          value={channelType}
          onChange={(e) => setChannelType(e.target.value)}
        >
          <option value="public">Public</option>
          <option value="private">Private (Group)</option>
          <option value="direct">Direct (1:1)</option>
        </select>
      </div>
      
      {/* User selection for private/direct channels */}
      {(channelType === 'private' || channelType === 'direct') && (
        <div className="mb-2">
          <label className="block mb-1">
            {channelType === 'direct' ? 'Select User:' : 'Select Users:'}
          </label>
          <div className="max-h-24 overflow-y-auto border rounded p-1">
            {availableUsers.map(user => (
              <div key={user.id} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  id={`user-${user.id}`}
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => toggleUserSelection(user.id)}
                  className="mr-2"
                  // For direct chats, only allow one selection
                  disabled={channelType === 'direct' && selectedUsers.length === 1 && !selectedUsers.includes(user.id)}
                />
                <label htmlFor={`user-${user.id}`}>{user.name || user.id}</label>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <button 
        className="w-full bg-navy900 text-white p-2 rounded"
        onClick={createChannel}
      >
        Create Channel
      </button>
    </div>
  )
} 