import { useState, useEffect } from 'react'
import { Slider } from '@heroui/react'

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

const PlayCircle = props => {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      height='24'
      role='presentation'
      viewBox='0 0 24 24'
      width='24'
      {...props}
    >
      <path
        d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM9.5 16.5L16.5 12L9.5 7.5V16.5Z'
        fill='currentColor'
      />
    </svg>
  )
}

export default function SideMenuDataControls ({}) {
  const [dataControlsDropDownVisible, setDataControlsDropDownVisible] =
    useState(false)
  const [selectedSimulation, setSelectedSimulation] = useState(0)
  const simulationNames = [
    'Select',
    'Goal',
    'Fan excitement',
    'Fan frustration',
    'Five minutes remaining',
    'End match',
    'Tag user in message'
  ]
  const [occupancy, setOccupancy] = useState<number | number[]>(2)

  useEffect(() => {
    console.log('ToDo: User has adjusted occupancy to ' + occupancy)
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
            console.log(
              `ToDo: Simulating ${simulationNames[selectedSimulation]}`
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
          defaultValue={3}
          maxValue={10}
          minValue={1}
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
                className='h-11 px-4 py-3 font-normal cursor-pointer'
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
