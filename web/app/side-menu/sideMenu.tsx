import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { Accordion, AccordionItem } from '@heroui/react'
import {
  AnchorIcon,
  DataControlsIcon
} from './sideMenuIcons'
import SideMenuDataControls from './dataControls'

export default function SideMenu ({
  sideMenuOpen,
  isGuidedDemo,
  chat,
  dataControlsDropDownVisible,
  setDataControlsDropDownVisible
}) {
  return (
    <AnimatePresence>
      {sideMenuOpen && (
        <motion.div
          initial={{ x: -366 }}
          animate={{ x: 0 }}
          exit={{ x: -366 }}
          transition={{ duration: 0.3 }}
          className='absolute left-0 top-0 h-full z-40'
        >
          <div className='flex flex-1 flex-col max-w-[366px] min-w-[366px] h-full bg-navy900 shadow-2xl'>
            <div className='flex flex-col w-full select-none mt-8 pb-8 overflow-y-auto overscroll-none h-full'>
              <div className='h-full'>
                <SideMenuContents
                  chat={chat}
                  isGuidedDemo={isGuidedDemo}
                  currentUser={chat?.currentUser}
                  dataControlsDropDownVisible={dataControlsDropDownVisible}
                  setDataControlsDropDownVisible={
                    setDataControlsDropDownVisible
                  }
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function SideMenuContents ({
  chat,
  isGuidedDemo,
  currentUser,
  dataControlsDropDownVisible,
  setDataControlsDropDownVisible
}) {
  function accordionIndicator (isOpen) {
    return isOpen ? (
      <AnchorIcon className='text-neutral-100' transform='rotate(90)' />
    ) : (
      <AnchorIcon className='text-neutral-100' transform='rotate(-90)' />
    )
  }
  const accordionItemClass = `pl-4 pr-4 pt-3 pb-2 bg-navy900 hover:bg-navy900 data-[open]:bg-navy900`
  const accordionTitleClass =
    'flex flex-row gap-3 w-full text-base items-center font-semibold uppercase text-neutral-50'

  return (
    <div className='flex flex-col justify-between h-full'>
      <div className=''>
        <Accordion
          isCompact={true}
          selectionMode='multiple'
          showDivider={false}
          defaultExpandedKeys={['1']}
        >
          {isGuidedDemo && (
            <AccordionItem
              key={'1'}
              indicator={({ isOpen }) => accordionIndicator(isOpen)}
              className={`${accordionItemClass} pb-6`}
              textValue={'Data Controls'}
              title={
                <div className={accordionTitleClass}>
                  <DataControlsIcon />
                  Data Controls
                </div>
              }
            >
              <div className='pt-2'>
                <SideMenuDataControls
                  chat={chat}
                  dataControlsDropDownVisible={dataControlsDropDownVisible}
                  setDataControlsDropDownVisible={
                    setDataControlsDropDownVisible
                  }
                />
              </div>
            </AccordionItem>
          )}
        </Accordion>
      </div>
    </div>
  )
}

