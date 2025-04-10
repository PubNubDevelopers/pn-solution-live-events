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
  IlluminateIcon,
  FunctionsIcon,
  PushNotificationsIcon
} from './sideMenuIcons'
import SideMenuDataControls from './dataControls'
import SelfLedHelp from './selfLedHelp'
import { chatChannelId } from '../data/constants'
import { urls } from '../data/urls'

export default function SideMenu ({ sideMenuOpen, isGuidedDemo, chat }) {
  return (
    <AnimatePresence>
      {true && (
        <div className={`${!sideMenuOpen && 'hidden'}`}>
          <div className='flex flex-1 flex-col max-w-[366px] min-w-[366px] h-full bg-navy900'>
            <div className='flex flex-col w-full select-none mt-8 pb-8 overflow-y-auto overscroll-none h-full'>
              <div className='h-full'>
                <SideMenuContents
                  chat={chat}
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

function SideMenuContents ({ chat, isGuidedDemo, currentUser }) {
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
                <SideMenuDataControls chat={chat} />
              </div>
            </AccordionItem>
          )}
        </Accordion>

        <div className='flex flex-col gap-2.5 text-white font-normal text-base px-6'>
          <div className='font-semibold'>Demo features</div>
          <div className=''>
            This demo only uses a subset of PubNub features. Select 'How it
            works' to see more information
          </div>
        </div>

        <Accordion
          isCompact={true}
          selectionMode='multiple'
          showDivider={false}
          defaultExpandedKeys={['']}
        >
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
            textValue={'Illuminate'}
            title={
              <div className={accordionTitleClass}>
                <IlluminateIcon />
                Illuminate
              </div>
            }
          >
            <div className='pt-2'>
              <SideMenuIlluminate isGuidedDemo={isGuidedDemo} />
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
      </div>
      {!isGuidedDemo && <SelfLedHelp />}
    </div>
  )
}

function LinkButton ({ buttonText, url }) {
  return (
    <a href={`${url}`} target='_blank' className={`no-underline`}>
      <div className='flex flex-row gap-1 h-10 items-center py-1 px-3 border-1 border-navy600 hover:bg-navy800 rounded-md'>
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

function SalesInstructionsToSwitchAccount ({ isGuidedDemo, instructionType }) {
  return (
    <>
      {isGuidedDemo && (
        <div className='flex flex-col gap-2.5 pb-2 text-white font-normal text-base'>
          <div className='font-semibold'>Sales Only</div>
          <div className=''>
            {instructionType == 'illuminate'
              ? `Switch organizations to '${urls.instructions.account}', then Illuminate dashboards and actions are named 'Showcase: Live Events...'`
              : `Switch organizations to '${urls.instructions.account}', select the '${urls.instructions.appName}' app, then the '${urls.instructions.keysetName}' keyset`}
          </div>
        </div>
      )}
    </>
  )
}

function SideMenuBizopsWorkspace ({ isGuidedDemo, currentUser }) {
  const [userManagementUrl, setUserManagementUrl] =
    useState('https://pubnub.com')
  const [channelManagementUrl, setChannelManagementUrl] =
    useState('https://pubnub.com')

  useEffect(() => {
    if (!currentUser) return
    if (isGuidedDemo)
      setUserManagementUrl(`${urls.bizOpsWorkspace.userManagement.salesLed}`)
    else
      setUserManagementUrl(
        `${urls.bizOpsWorkspace.userManagement.selfLed}${currentUser.id}`
      )

    if (isGuidedDemo)
      setChannelManagementUrl(
        `${urls.bizOpsWorkspace.channelManagement.salesLed}`
      )
    else
      setChannelManagementUrl(
        `${urls.bizOpsWorkspace.channelManagement.selfLed}${currentUser?.id}`
      )
  }, [isGuidedDemo, currentUser])

  return (
    <div className='flex flex-col gap-3 text-base font-semibold'>
      <SalesInstructionsToSwitchAccount
        isGuidedDemo={isGuidedDemo}
        instructionType={'bizops'}
      />
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
    if (isGuidedDemo)
      setChannelModerationUrl(`${urls.chatAndModeration.moderation.salesLed}`)
    else setChannelModerationUrl(`${urls.chatAndModeration.moderation.selfLed}`)

    setTranslateFunctionUrl(
      isGuidedDemo
        ? urls.chatAndModeration.translation.salesLed
        : urls.chatAndModeration.translation.selfLed
    )
  }, [isGuidedDemo])

  return (
    <div className='flex flex-col gap-3 text-base font-semibold'>
      <SalesInstructionsToSwitchAccount
        isGuidedDemo={isGuidedDemo}
        instructionType={'bizops'}
      />
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
function SideMenuIlluminate ({ isGuidedDemo }) {
  return (
    <div className='flex flex-col gap-3 text-base font-semibold'>
      <SalesInstructionsToSwitchAccount
        isGuidedDemo={isGuidedDemo}
        instructionType={'illuminate'}
      />
      <TextWithLinkButton
        label={'Unlock custom emoji'}
        buttonText={'View'}
        url={
          isGuidedDemo
            ? urls.illuminate.customEmoji.salesLed
            : urls.illuminate.customEmoji.selfLed
        }
      />
      <TextWithLinkButton
        label={'Show dynamic ads'}
        buttonText={'View'}
        url={
          isGuidedDemo
            ? urls.illuminate.dynamicAd.salesLed
            : urls.illuminate.dynamicAd.selfLed
        }
      />
      <TextWithLinkButton
        label={'Dynamic poll'}
        buttonText={'View'}
        url={
          isGuidedDemo
            ? urls.illuminate.dynamicPoll.salesLed
            : urls.illuminate.dynamicPoll.selfLed
        }
      />
      <TextWithLinkButton
        label={'Trigger Events Dymamically'}
        buttonText={'Dashboard'}
        url={
          isGuidedDemo
            ? urls.illuminate.dashboard.salesLed
            : urls.illuminate.dashboard.selfLed
        }
      />
    </div>
  )
}
function SideMenuFunctions ({ isGuidedDemo }) {
  return (
    <div className='flex flex-col gap-3 text-base font-semibold'>
      {/* ToDo: Are there specific instructions for Functions?  Right now it's generic with BizOps (select app and keyset) */}
      <SalesInstructionsToSwitchAccount
        isGuidedDemo={isGuidedDemo}
        instructionType={'functions'}
      />
      <TextWithLinkButton
        label={'Score Summary'}
        buttonText={'View Function'}
        url={
          isGuidedDemo
            ? urls.functions.scoreSummary.salesLed
            : urls.functions.scoreSummary.selfLed
        }
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
  const emulatorUrl = './emulator/'
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
        <a href={`${emulatorUrl}`} target='_blank' className={`no-underline`}>
          <div className='flex flex-row h-10 items-center py-1 px-3 border-1 border-navy600 hover:bg-navy800 rounded-md cursor-pointer'>
            Open emulator
          </div>
        </a>
      </div>
    </div>
  )
}
