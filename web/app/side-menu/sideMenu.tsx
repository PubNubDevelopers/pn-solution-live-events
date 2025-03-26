import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { Accordion, AccordionItem } from '@heroui/react'
import {
  AnchorIcon,
  OpenInNewWindowIcon,
  DataControlsIcon,
  BizOpsWorkspaceIcon,
  ChatModerationIcon,
  DecisionsIcon,
  FunctionsIcon,
  PushNotificationsIcon
} from './sideMenuIcons'
import SideMenuDataControls from './dataControls'
import SelfLedHelp from './selfLedHelp'

export default function SideMenu ({ sideMenuOpen, isGuidedDemo }) {
  return (
    <AnimatePresence>
      {true && (
        <div
          className={`${!sideMenuOpen && 'hidden'}`}
        >
          <div className='flex flex-1 flex-col max-w-[366px] min-w-[366px] h-full bg-navy900'>
            <div className='flex flex-col w-full select-none mt-8 pb-8 overflow-y-auto overscroll-none h-full'>
              <div className='h-full'>
                <SideMenuContents isGuidedDemo={isGuidedDemo} />
              </div>
            </div>{' '}
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}

function SideMenuContents ({ isGuidedDemo }) {
  function accordionIndicator (isOpen) {
    return isOpen ? (
      <AnchorIcon className='text-neutral-100' transform='rotate(90)' />
    ) : (
      <AnchorIcon className='text-neutral-100' transform='rotate(-90)' />
    )
  }
  const accordionItemClass = `pl-4 pr-4 pt-3 pb-2 bg-navy900 hover:bg-navy900 data-[open]:bg-navy900`
  const accordionTitleClass =
    'flex flex-row gap-3 w-full text-base font-semibold uppercase text-neutral-50'

  return (
    <div className='flex flex-col justify-between h-full'>
      <Accordion
        isCompact={true}
        selectionMode='multiple'
        showDivider={false}
        defaultExpandedKeys={['1', '2', '3', '4', '5', '6']}
      >
        {isGuidedDemo && <AccordionItem
          key={'1'}
          indicator={({ isOpen }) => accordionIndicator(isOpen)}
          className={accordionItemClass}
          textValue={'Data Controls'}
          title={
            <div className={accordionTitleClass}>
              <DataControlsIcon />
              Data Controls
            </div>
          }
        >
          <div className='pt-2'>
            <SideMenuDataControls />
          </div>
        </AccordionItem>}
        <AccordionItem
          key={'2'}
          indicator={({ isOpen }) => accordionIndicator(isOpen)}
          className={accordionItemClass}
          textValue={'BizOps Workspace'}
          title={
            <div className={accordionTitleClass}>
              <BizOpsWorkspaceIcon />
              BizOps Workspace
            </div>
          }
        >
          <div className='pt-2'>
            <SideMenuBizopsWorkspace />
          </div>
        </AccordionItem>
        <AccordionItem
          key={'3'}
          indicator={({ isOpen }) => accordionIndicator(isOpen)}
          className={accordionItemClass}
          textValue={'Chat & Moderation'}
          title={
            <div className={accordionTitleClass}>
              <ChatModerationIcon />
              Chat & Moderation
            </div>
          }
        >
          <div className='pt-2'>
            <SideMenuChatModeration />
          </div>
        </AccordionItem>
        <AccordionItem
          key={'4'}
          indicator={({ isOpen }) => accordionIndicator(isOpen)}
          className={accordionItemClass}
          textValue={'Decisions'}
          title={
            <div className={accordionTitleClass}>
              <DecisionsIcon />
              Decisions
            </div>
          }
        >
          <div className='pt-2'>
            <SideMenuDecisions />
          </div>
        </AccordionItem>
        <AccordionItem
          key={'5'}
          indicator={({ isOpen }) => accordionIndicator(isOpen)}
          className={accordionItemClass}
          textValue={'Functions'}
          title={
            <div className={accordionTitleClass}>
              <FunctionsIcon />
              Functions
            </div>
          }
        >
          <div className='pt-2'>
            <SideMenuFunctions />
          </div>
        </AccordionItem>
        <AccordionItem
          key={'6'}
          indicator={({ isOpen }) => accordionIndicator(isOpen)}
          className={`${accordionItemClass} mb-8`}
          textValue={'Push Notifications'}
          title={
            <div className={accordionTitleClass}>
              <PushNotificationsIcon />
              Push Notifications
            </div>
          }
        >
          <div className='pt-2'>
            <SideMenuPushNotifications />
          </div>
        </AccordionItem>
      </Accordion>
      {isGuidedDemo && <SelfLedHelp/>}
    </div>
  )
}

function LinkButton ({ buttonText, url }) {
  return (
    <a href={`${url}`} target='_blank' className={`no-underline`}>
      <div className='flex flex-row gap-1 h-10 items-center py-1 px-3 border-1 border-navy600 rounded-md'>
        <div className=''>{buttonText}</div>
        <OpenInNewWindowIcon />
      </div>
    </a>
  )
}

function TextWithLinkButton ({ label, buttonText, url }) {
  return (
    <div className='flex flex-row items-center justify-between'>
      <div className=''>{label}</div>
      <LinkButton buttonText={buttonText} url={url} />
    </div>
  )
}

function SideMenuBizopsWorkspace ({}) {
  return (
    <div className='flex flex-col gap-3 text-base font-semibold'>
      {/* TODO: URL Needs to be set here */}

      <TextWithLinkButton
        label={'User Management'}
        buttonText={'View user'}
        url={'http://www.google.com'}
      />
      {/* TODO: URL Needs to be set here */}

      <TextWithLinkButton
        label={'Channel Management'}
        buttonText={'View channel'}
        url={'http://www.google.com'}
      />
    </div>
  )
}
function SideMenuChatModeration ({}) {
  return (
    <div className='flex flex-col gap-3 text-base font-semibold'>
      {/* TODO: URL Needs to be set here */}
      <TextWithLinkButton
        label={'Language translation'}
        buttonText={'View Function'}
        url={'http://www.google.com'}
      />
      {/* TODO: URL Needs to be set here */}
      <TextWithLinkButton
        label={'Moderation'}
        buttonText={'View Channel Monitor'}
        url={'http://www.google.com'}
      />
    </div>
  )
}
function SideMenuDecisions ({}) {
  return (
    <div className='flex flex-col gap-3 text-base font-semibold'>
      {/* TODO: URL Needs to be set here */}
      <TextWithLinkButton
        label={'Determine points'}
        buttonText={'View'}
        url={'http://www.google.com'}
      />
      {/* TODO: URL Needs to be set here */}
      <TextWithLinkButton
        label={'Custom ads'}
        buttonText={'View'}
        url={'http://www.google.com'}
      />
      {/* TODO: URL Needs to be set here */}
      <TextWithLinkButton
        label={'Something custom?'}
        buttonText={'Create new'}
        url={'http://www.google.com'}
      />
    </div>
  )
}
function SideMenuFunctions ({}) {
  return (
    <div className='flex flex-col gap-3 text-base font-semibold'>
      {/* TODO: URL Needs to be set here */}
      <TextWithLinkButton
        label={'Score Summary'}
        buttonText={'View Function'}
        url={'http://www.google.com'}
      />
      <div className='text-neutral50 font-normal'>
        Experience in the demo by asking "What's the score?" in the match
        updates widget
      </div>
    </div>
  )
}
function SideMenuPushNotifications ({}) {
  return (
    <div className='flex flex-col gap-4 text-base font-semibold'>
      <div className='text-neutral50 font-normal'>
        Simulate conditions to trigger notifications in the emulator when:
        <ul className='px-4 pt-1 list-disc'>
          <li>There are five minutes remaining</li>
          <li>A goal is scored</li>
          <li>User is tagged</li>
        </ul>
      </div>
      <div className='w-fit'>
        <div
          className='flex flex-row h-10 items-center py-1 px-3 border-1 border-navy600 rounded-md cursor-pointer'
          onClick={e => {
            console.log('TODO: Launch Emulator')
            e.stopPropagation()
          }}
        >
          Open emulator
        </div>
      </div>
    </div>
  )
}
