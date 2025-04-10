import { useState, useEffect } from 'react'
import { Slider } from '@heroui/react'
import { chatChannelId, streamReactionsChannelId } from '../data/constants'
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

export default function SideMenuDataControls ({ chat }) {
  const [dataControlsDropDownVisible, setDataControlsDropDownVisible] =
    useState(false)
  const [selectedSimulation, setSelectedSimulation] = useState(0)
  const simulationNames = [
    'Select',
    'Kick off',
    'Goal',
    'Goal + Push Message',
    'Fan excitement',
    'Fan frustration',
    'Five minutes remaining',
    '5mins + Push Message',
    'End match',
  ]
  const [occupancy, setOccupancy] = useState<number | number[]>(0)
  async function triggerSimulation(simulate) {
    try {
      const res = await fetch('https://ps.pndsn.com/v1/blocks/sub-key/sub-c-12de08da-d5db-4255-8c4f-d9059385670a/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ simulate: simulate, channel: streamReactionsChannelId, count: 120 })
      });
      console.log(await res.json());
    } catch (error) {
      console.error('Failed to trigger simulation:', error);
    }
  }

  useEffect(() => {

    async function sendControlMessage(occupancy)
    {
      if (chat)
        {
          await chat.sdk.publish({message: {text: `${streamWidgetOccupancy}`, type: 'occupancyControl'}, channel: streamReactionsChannelId})
        }
    }
    const streamWidgetOccupancy =
      occupancy == 0 ? 0 : Math.round(Math.pow(Math.E, occupancy as number))

    sendControlMessage(streamWidgetOccupancy)

    console.log('ToDo: adjust chat widget occupancy based on ' + occupancy)
  }, [occupancy])

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
            />
          </div>
        </div>
        <div
          className={`${
            selectedSimulation == 0 ? 'text-navy500' : 'text-neutral50'
          } cursor-pointer`}
          onClick={e => {
            triggerSimulation(`${simulationNames[selectedSimulation]}`) 
            console.log(
              `Simulating ${simulationNames[selectedSimulation]}`
            )
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
  onClickOption
}) {
  return (
    <div
      className={`${
        !dropDownVisible && 'hidden'
      } absolute w-48 top-[8px] left-[0px] bg-navy900 border-1 border-white/20 rounded-lg shadow-xl select-none z-40`}
    >
      <div className='flex flex-col pt-2 text-neutral-50 text-sm max-h-96 overflow-auto'>
        {simulationNames.map(
          (name, index) =>
            index > 0 && (
              <div
                key={index}
                className='h-11 px-4 py-3 font-normal hover:bg-navy800 cursor-pointer'
                onClick={e => {
                  onClickOption(index)
                  setDropDownVisible(false)
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
