import { useState, useEffect } from 'react'
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
import { urls, channelId } from '../data/urls'

export default function SideMenu ({ sideMenuOpen, isGuidedDemo, chat }) {
  return (
    <AnimatePresence>
      {true && (
        <div className={`${!sideMenuOpen && 'hidden'}`}>
          <div className='flex flex-1 flex-col max-w-[366px] min-w-[366px] h-full bg-navy900'>
            <div className='flex flex-col w-full select-none mt-8 pb-8 overflow-y-auto overscroll-none h-full'>
              <div className='h-full'>
                <SideMenuContents
                  isGuidedDemo={isGuidedDemo}
                  currentUser={chat?.currentUser}
                />
              </div>
            </div>{' '}
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}

function SideMenuContents ({ isGuidedDemo, currentUser }) {
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
          </AccordionItem>
        )}
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
            <SideMenuBizopsWorkspace
              isGuidedDemo={isGuidedDemo}
              currentUser={currentUser}
            />
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
            <SideMenuChatModeration isGuidedDemo={isGuidedDemo} />
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
            <SideMenuDecisions isGuidedDemo={isGuidedDemo} />
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
            <SideMenuFunctions isGuidedDemo={isGuidedDemo} />
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
      {!isGuidedDemo && <SelfLedHelp />}
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
    <div className='flex flex-row h-11 items-center justify-between'>
      <div className=''>{label}</div>
      <LinkButton buttonText={buttonText} url={url} />
    </div>
  )
}

function SideMenuBizopsWorkspace ({ isGuidedDemo, currentUser }) {
  const [userManagementUrl, setUserManagementUrl] =
    useState('https://pubnub.com')
  const [channelManagementUrl, setChannelManagementUrl] =
    useState('https://pubnub.com')

  useEffect(() => {
    if (!currentUser) return
    const userManagementBase = isGuidedDemo
      ? urls.bizOpsWorkspace.userManagement.salesLed
      : urls.bizOpsWorkspace.userManagement.selfLed
    setUserManagementUrl(`${userManagementBase}${currentUser.id}`)
    const channelManagementBase = isGuidedDemo
      ? urls.bizOpsWorkspace.channelManagement.salesLed
      : urls.bizOpsWorkspace.channelManagement.selfLed
    setChannelManagementUrl(`${channelManagementBase}${channelId}`)
  }, [isGuidedDemo, currentUser])

  return (
    <div className='flex flex-col gap-3 text-base font-semibold'>
      <TextWithLinkButton
        label={'User Management'}
        buttonText={'View user'}
        url={userManagementUrl}
      />

      <TextWithLinkButton
        label={'Channel Management'}
        buttonText={'View channel'}
        url={channelManagementUrl}
      />
    </div>
  )
}

function SideMenuChatModeration ({ isGuidedDemo }) {
  const [channelModerationUrl, setChannelModerationUrl] =
    useState('https://pubnub.com')
  const [translateFunctionUrl, setTranslateFunctionUrl] =
    useState('https://pubnub.com')

  useEffect(() => {
    const moderationBase = isGuidedDemo
      ? urls.chatAndModeration.moderation.salesLed
      : urls.chatAndModeration.moderation.selfLed
    setChannelModerationUrl(`${moderationBase}${channelId}`)
    setTranslateFunctionUrl(
      isGuidedDemo
        ? urls.chatAndModeration.translation.salesLed
        : urls.chatAndModeration.translation.selfLed
    )
  }, [isGuidedDemo])

  return (
    <div className='flex flex-col gap-3 text-base font-semibold'>
      <TextWithLinkButton
        label={'Language translation'}
        buttonText={'View Function'}
        url={translateFunctionUrl}
      />
      <TextWithLinkButton
        label={'Moderation'}
        buttonText={'View Channel Monitor'}
        url={channelModerationUrl}
      />
    </div>
  )
}
function SideMenuDecisions ({ isGuidedDemo }) {
  return (
    <div className='flex flex-col gap-3 text-base font-semibold'>
      <TextWithLinkButton
        label={'Determine points'}
        buttonText={'View'}
        url={
          isGuidedDemo
            ? urls.decisions.determinePoints.salesLed
            : urls.decisions.determinePoints.selfLed
        }
      />
      <TextWithLinkButton
        label={'Custom ads'}
        buttonText={'View'}
        url={
          isGuidedDemo
            ? urls.decisions.customAds.salesLed
            : urls.decisions.customAds.selfLed}
      />
      <TextWithLinkButton
        label={'Something custom?'}
        buttonText={'Create new'}
        url={
          isGuidedDemo
            ? urls.decisions.createNew.salesLed
            : urls.decisions.createNew.selfLed}
      />
    </div>
  )
}
function SideMenuFunctions ({ isGuidedDemo }) {
  return (
    <div className='flex flex-col gap-3 text-base font-semibold'>
      {/* TODO: URL Needs to be set here */}
      <TextWithLinkButton
        label={'Score Summary'}
        buttonText={'View Function'}
        url={
          isGuidedDemo
            ? urls.functions.scoreSummary.salesLed
            : urls.functions.scoreSummary.selfLed}
      />
      <div className='text-neutral50 font-normal'>
        Experience in the demo by asking "What's the score?" in the match
        updates widget
      </div>
    </div>
  )
}
function SideMenuPushNotifications ({}) {
  //  todo set this to the correct emulator Url
  const emulatorUrl = "https://www.google.com"
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
      <a href={`${emulatorUrl}`} target='_blank' className={`no-underline`}><div
          className='flex flex-row h-10 items-center py-1 px-3 border-1 border-navy600 rounded-md cursor-pointer'
        >
          Open emulator
        </div></a>
      </div>
    </div>
  )
}
