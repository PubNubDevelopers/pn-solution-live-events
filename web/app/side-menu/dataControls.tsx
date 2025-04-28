import { useState, useEffect } from 'react'
import { Slider } from '@heroui/react'
import {
  dataControlOccupancyChannelId,
  clientVideoControlChannelId,
  serverVideoControlChannelId
} from '../data/constants'
import { PlayCircle } from './sideMenuIcons'

const Expand = props => {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      height='20'
      role='presentation'
      viewBox='0 0 20 20'
      width='20'
      {...props}
    >
      <path
        d='M13.825 6.91211L9.99999 10.7288L6.175 6.91211L5 8.08711L9.99999 13.0871L15 8.08711L13.825 6.91211Z'
        fill='currentColor'
      />
    </svg>
  )
}

export default function SideMenuDataControls ({
  chat,
  dataControlsDropDownVisible,
  setDataControlsDropDownVisible
}) {
  const [selectedSimulation, setSelectedSimulation] = useState(0)
  const simulationNames = [
    'Select',
    'Start / restart simulation',
    'Goal',
    'Goal + Push Message',
    'Fan excitement',
    'Fan frustration',
    'Injury time',
    'Injury time + Push',
    'Pause / Resume Bot chat',
    'End simulation'
  ]
  const [occupancy, setOccupancy] = useState<number | number[]>(0)
  const [isStarted, setIsStarted] = useState(false)
  async function sendMessageToBackend (simulate) {
    switch (simulate) {
      case 'Start / restart simulation':
        //  Start the game
        setIsStarted(true)
        await chat.sdk.publish({
          message: {
            type: 'START_STREAM'
          },
          channel: serverVideoControlChannelId
        })
        break
      case 'Goal':
        //  Seek to the second goal
        await chat.sdk.publish({
          message: {
            type: 'SEEK',
            params: { playbackTime: 158000 }
          },
          channel: serverVideoControlChannelId
        })
        break
      case 'Goal + Push Message':
        //  Seek to the second goal
        await chat.sdk.publish({
          message: {
            type: 'SEEK',
            params: { playbackTime: 158000 }
          },
          channel: serverVideoControlChannelId
        })
        await chat.sdk.publish({
          message: {
            type: 'ON_DEMAND_SCRIPT',
            params: { scriptName: 'push-goal' }
          },
          channel: serverVideoControlChannelId
        })
        break
      case 'Fan excitement':
        await chat.sdk.publish({
          message: {
            type: 'ON_DEMAND_SCRIPT',
            params: { scriptName: 'fan-excitement' }
          },
          channel: serverVideoControlChannelId
        })

        break
      case 'Fan frustration':
        await chat.sdk.publish({
          message: {
            type: 'ON_DEMAND_SCRIPT',
            params: { scriptName: 'fan-frustration' }
          },
          channel: serverVideoControlChannelId
        })
        break
      case 'Injury time':
        //  Seek to 3 minutes remaining
        await chat.sdk.publish({
          message: {
            type: 'SEEK',
            params: { playbackTime: 1146000 }
          },
          channel: serverVideoControlChannelId
        })
        break
      case 'Injury time + Push':
        await chat.sdk.publish({
          message: {
            type: 'SEEK',
            params: { playbackTime: 1146000 }
          },
          channel: serverVideoControlChannelId
        })
        await chat.sdk.publish({
          message: {
            type: 'ON_DEMAND_SCRIPT',
            params: { scriptName: 'push-5mins' }
          },
          channel: serverVideoControlChannelId
        })
        break
      case  'Pause / Resume Bot chat':
        //  Toggle the bot chat
        await chat.sdk.publish({
          message: {
            type: 'BOT_CHAT'
          },
          channel: serverVideoControlChannelId
        })

        break
      case 'End simulation':
        //  End the game
        await chat.sdk.publish({
          message: {
            type: 'END_STREAM'
          },
          channel: serverVideoControlChannelId
        })
        setIsStarted(false)
        break
    }
  }

  useEffect(() => {
    async function sendControlMessage (liveStreamOccupancy, chatOccupancy) {
      if (chat) {
        await chat.sdk.publish({
          message: {
            streamOccupancy: `${liveStreamOccupancy}`,
            chatOccupancy: `${chatOccupancy}`,
            type: 'occupancyControl'
          },
          channel: dataControlOccupancyChannelId
        })
      }
    }
    const streamWidgetOccupancy =
      occupancy == 0 ? 0 : Math.round(Math.pow(Math.E, occupancy as number))
    const chatWidgetOccupancy =
      occupancy == 0
        ? 0
        : Math.round(Math.pow(Math.E, (occupancy as number) / 2))
    sendControlMessage(streamWidgetOccupancy, chatWidgetOccupancy)
  }, [occupancy])

  useEffect(() => {
    if (!chat) return
    const videoEventsChannel = chat.sdk.channel(clientVideoControlChannelId)
    const videoEventsSubscription = videoEventsChannel.subscription({
      receivePresenceEvents: false
    })
    videoEventsSubscription.onMessage = messageEvent => {
      if (messageEvent.message?.type === 'STATUS') {
        setIsStarted(true)
      }
    }
    videoEventsSubscription.subscribe()
  }, [chat])

  return (
    <div className='flex flex-col gap-3 text-base font-semibold'>
      <div className='flex flex-row gap-2 h-11 items-center justify-between'>
        <div className=''>Simulation</div>
        <div className='flex flex-col'>
          <div
            className='flex flex-row gap-1 items-center cursor-pointer border-1 border-navy600 rounded-md h-11 max-h-11 w-48 px-3'
            onClick={e => {
              setDataControlsDropDownVisible(!dataControlsDropDownVisible)
              e.stopPropagation()
            }}
          >
            <div
              className={`font-normal truncate text-ellipsis overflow-hidden ${
                selectedSimulation == 0 ? 'text-navy400' : 'text-neutral50'
              } grow`}
            >{`${
              selectedSimulation == 0
                ? 'Select'
                : `${simulationNames[selectedSimulation]}`
            }`}</div>
            <Expand />
          </div>
          <div className='relative'>
            <DataControlsDropDown
              dropDownVisible={dataControlsDropDownVisible}
              setDropDownVisible={setDataControlsDropDownVisible}
              simulationNames={simulationNames}
              onClickOption={selected => {
                setSelectedSimulation(selected)
              }}
              isStarted={isStarted}
            />
          </div>
        </div>
        <div
          className={`${
            selectedSimulation == 0 ? 'text-navy500' : 'text-neutral50'
          } cursor-pointer`}
          onClick={e => {
            sendMessageToBackend(`${simulationNames[selectedSimulation]}`)
            if (
              selectedSimulation == 1 ||
              selectedSimulation == simulationNames.length - 1
            ) {
              //  If selected start or end match, discourage clicking that twice
              setSelectedSimulation(0)
            }
            e.stopPropagation()
          }}
        >
          <PlayCircle />
        </div>
      </div>
      <div className='flex flex-row gap-4 h-11 items-center'>
        <div className=''>Occupancy</div>
        <Slider
          aria-label={'Occupancy slider'}
          color={'secondary'}
          size={'md'}
          classNames={{
            filler: 'bg-brandAccent3',
            track: 'bg-neutral200',
            thumb: ['bg-brandAccent3']
          }}
          defaultValue={0}
          maxValue={16}
          minValue={0}
          step={1}
          onChange={setOccupancy}
        />
      </div>
    </div>
  )
}
function DataControlsDropDown ({
  dropDownVisible,
  setDropDownVisible,
  simulationNames,
  onClickOption,
  isStarted
}) {
  return (
    <div
      className={`${
        !dropDownVisible && 'hidden'
      } absolute w-48 top-[8px] left-[0px] bg-navy900 border-1 border-white/20 rounded-lg shadow-xl select-none z-40`}
    >
      <div className='flex flex-col z-50 pt-2 text-neutral-50 text-sm max-h-[420px] overflow-auto'>
        {simulationNames.map(
          (name, index) =>
            index > 0 && (
              <div
                key={index}
                className={`h-11 px-4 py-3 font-normal ${
                  (index > 0 && isStarted) || (index == 1 && !isStarted)
                    ? 'hover:bg-navy800 cursor-pointer'
                    : 'text-navy400'
                }`}
                onClick={e => {
                  if ((index > 0 && isStarted) || (index == 1 && !isStarted)) {
                    onClickOption(index)
                    setDropDownVisible(false)
                  }
                  e.stopPropagation()
                }}
              >
                {name}
              </div>
            )
        )}
      </div>
    </div>
  )
}
