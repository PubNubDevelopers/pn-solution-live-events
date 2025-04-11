import {Channel} from '@pubnub/chat'
import {useState} from "react";

interface ChannelListProps {
  publicChannels: Channel[]
  privateChannels: Channel[]
  directChannels: Channel[]
  activeChannelId: string | null
  setActiveChannelId: (channelId: string) => void
}

interface HeaderProps {
  open: boolean
  setOpen: (open: boolean) => void
  label: string
}

function Header({open, setOpen, label}: HeaderProps) {
  return <div className={'flex space-x-[9px] items-center cursor-pointer text-[14px] font-[400] leading-[20px]'}
              onClick={() => setOpen(!open)}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
         className={open ? '' : 'rotate-180'}>
      <path
        d="M9.64683 11.0832L10 11.4356L10.3532 11.0832L13.8246 7.61932L14.2929 8.0876L10 12.3805L5.70711 8.0876L6.17539 7.61932L9.64683 11.0832Z"
        fill="#404040" stroke="#404040"/>
    </svg>
    <span>{label}</span>
  </div>
}

interface ChannelRowProps {
  channel: Channel
  setActiveChannelId: (channelId: string) => void
}

function ChannelRow({channel, setActiveChannelId}: ChannelRowProps) {
  return <div key={channel.id} onClick={() => setActiveChannelId(channel.id)} className={'flex py-[12px] px-[16px] items-center cursor-pointer'}>
    <div className={'rounded-full w-[40px] h-[40px] mr-[14px] bg-gray-100'} style={channel.custom?.profileUrl ? {background: `url(${channel.custom?.profileUrl}) center center no-repeat`} : {}}></div>
    <div>
      <span className={'text-[14px] font-[500] leading-[20px]'}>{channel.name || channel.id}</span>
    </div>
  </div>
}

export default function ChannelList({publicChannels, privateChannels, directChannels, activeChannelId, setActiveChannelId}: ChannelListProps) {

  const [publicOpen, setPublicOpen] = useState<boolean>(true)
  const [privateOpen, setPrivateOpen] = useState<boolean>(true)
  const [directOpen, setDirectOpen] = useState<boolean>(true)

  return (
    <div className="py-[12px] px-[16px] h-[400px] overflow-y-scroll">

      <Header open={publicOpen} setOpen={setPublicOpen} label={'Public channels'} />

      {publicOpen && <div className="overflow-y-auto">
        {publicChannels.map(channel => <ChannelRow key={channel.id} channel={channel} setActiveChannelId={setActiveChannelId}/>)}
      </div>}

      <Header open={privateOpen} setOpen={setPrivateOpen} label={'Private channels'} />

      {privateOpen && <div className="overflow-y-auto">
        {privateChannels.map(channel => <ChannelRow key={channel.id} channel={channel} setActiveChannelId={setActiveChannelId}/>)}
      </div>}

      <Header open={directOpen} setOpen={setDirectOpen} label={'Direct messages'} />

      {directOpen && <div className="overflow-y-auto">
        {directChannels.map(channel => <ChannelRow key={channel.id} channel={channel} setActiveChannelId={setActiveChannelId}/>)}
      </div>}
    </div>
  )
} 