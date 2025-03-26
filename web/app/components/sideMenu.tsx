import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { Accordion, AccordionItem } from '@heroui/react'
import AnchorIcon from './anchorIcon'
export default function SideMenu ({ sideMenuOpen }) {
  return (
    <AnimatePresence>
      {sideMenuOpen && (
        <motion.div
          animate={{ x: [-366, 0], transition: { times: [0, 1] } }}
          transition={{ type: 'linear' }}
          exit={{ x: -366 }}
        >
          <div className='flex flex-1 flex-col max-w-[366px] min-w-[366px] h-full bg-navy900'>
            <div className='flex flex-col w-full select-none mt-8 pb-[76px] overflow-y-auto overscroll-none'>
              <div className=''>
                <SideMenuContents />
              </div>
            </div>{' '}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function SideMenuContents ({}) {
  function accordionSelectionChange (keys) {
    setSelectedKeys(keys)
  }
  const [selectedKeys, setSelectedKeys] = useState(new Set(['1']))
  const configurationPresentation = [
    {
      sectionHeading: 'CHANNELS',
      sectionHeadingIcon: '/icons/brand/channel.svg',
      sectionContents: [
        {
          subsectionHeading: 'Channel options',
          subsectionKey: '1'
        },
        {
          subsectionHeading: 'Group / Direct chats',
          subsectionKey: '2'
        }
      ]
    },
    {
      sectionHeading: 'MESSAGES',
      sectionHeadingIcon: '/icons/brand/messages.svg',
      sectionContents: [
        {
          subsectionHeading: 'Sending',
          subsectionKey: '3'
        },
        {
          subsectionHeading: 'Acting on received',
          subsectionKey: '4'
        },
        {
          subsectionHeading: 'Rendering received',
          subsectionKey: '5'
        }
      ]
    },
    {
      sectionHeading: 'USERS',
      sectionHeadingIcon: '/icons/brand/users.svg',
      sectionContents: [
        {
          subsectionHeading: 'User options',
          subsectionKey: '6'
        }
      ]
    },
    ,
    {
      sectionHeading: 'REAL-TIME',
      sectionHeadingIcon: '/icons/brand/realtime.svg',
      sectionContents: [
        {
          subsectionHeading: 'Quizzes and polls',
          subsectionKey: '7'
        }
      ]
    }
  ]

  return (
    <div className=''>
      {configurationPresentation.map((section, index) => (
        <div key={index}>
          <div
            className={`flex flex-row items-center text-neutral-200 font-semibold text-base bg-brandAccentNavy1 ${
              index == 0 ? 'pt-6' : 'pt-8'
            } pb-4 px-6 gap-3`}
          >
            {' '}
            <div className='[background-image:radial-gradient(#1F2E5A,#0A1B4B,#001143)] rounded-full'>
              <Image
                src={
                  section
                    ? section.sectionHeadingIcon
                    : '/icons/brand/channel.svg'
                }
                alt={`${section?.sectionHeading} Icon`}
                className=''
                width={32}
                height={32}
                priority
              />
            </div>
            <div className=''>{`${section?.sectionHeading}`}</div>
          </div>
          <Accordion
            isCompact={true}
            className='px-0 border-navy200'
            selectedKeys={selectedKeys}
            onSelectionChange={keys => accordionSelectionChange(keys)}
          >
            {section!.sectionContents.map(
              (subsection, subsectionIndex, array) => (
                <AccordionItem
                  key={subsection.subsectionKey}
                  aria-label={subsection.subsectionHeading}
                  indicator={({ isOpen }) =>
                    false ? (
                      <div />
                    ) : isOpen ? (
                      <AnchorIcon
                        className='text-neutral-100'
                        transform='rotate(270)'
                      />
                    ) : (
                      <AnchorIcon className='text-neutral-100' />
                    )
                  }
                  className={`pl-6 pr-4 pt-3 pb-2 ${
                    array instanceof Array && array[0] == subsection
                      ? 'border-t-1'
                      : 'border-b-1 '
                  } border-white/20 bg-brandAccentNavy1-4pc hover:bg-brandAccentNavy1-8pc data-[open]:bg-brandAccentNavy1-8pc`}
                  title={
                    <div className='flex flex-row w-full py-1 justify-between text-xl font-semibold text-neutral-50'>
                      {subsection.subsectionHeading}
                    </div>
                  }
                >
                  <div className=''>Accordion Contents</div>
                </AccordionItem>
              )
            )}
          </Accordion>
        </div>
      ))}
    </div>
  )
}
