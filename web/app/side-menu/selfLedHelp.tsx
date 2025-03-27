export default function SelfLedHelp ({}) {
  return (
    <div className='flex flex-col px-6 py-8 gap-6 border-t-1 border-navy600'>
      <HelpButton
        buttonText={'View Docs'}
        url={'https://www.pubnub.com/docs'}
        hasGlow={false}
      />
      <HelpButton
        buttonText={'Get in touch for a full demo'}
        url={'https://www.pubnub.com/company/contact-sales/'}
        hasGlow={true}
      />
    </div>
  )
}

function HelpButton ({ buttonText, url, hasGlow }) {
  return (
    <a href={`${url}`} target='_blank' className={`no-underline`}>
      <div
        className={`w-80 px-6 py-3 text-lg text-neutral50 font-semibold text-center rounded-md border-1 border-navy600 hover:bg-navy800 cursor-pointer ${
          hasGlow && 'shadow-[0px_4px_18px_0px_rgba(88,_156,_255,_0.8)]'
        }`}
      >
        {buttonText}
      </div>
    </a>
  )
}
