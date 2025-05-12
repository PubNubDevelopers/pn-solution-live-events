import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import { HeroUIProvider } from '@heroui/react'
import { Suspense } from 'react'

const figtree = Figtree({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'], // Or other subsets as needed
  display: 'swap',
  adjustFontFallback: false,
  fallback: ['Roboto', 'system-ui'], // Optional fallback fonts
  variable: '--font-figtree' // Define a CSS variable
})

export const metadata: Metadata = {
  title: 'Live Events Solution by PubNub',
  description:
    'Solution showcase to demonstrate how PubNub can enhance your live event, whether it is a sports event, a concert, or any other streamed media event.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
      <script src="https://www.pubnub.com/scripts/amplitude.js" defer></script>
      </head>
      <Suspense>
        <body className={`${figtree.className} antialiased`}>
          <HeroUIProvider>{children}</HeroUIProvider>
        </body>
      </Suspense>
    </html>
  )
}
