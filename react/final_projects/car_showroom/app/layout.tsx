'use client'

import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import {ChakraProvider, theme} from '@chakra-ui/react'

export const metadata: Metadata = {
  title: 'Car Dehko',
  description: 'Online car showroom',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add the new favicon reference */}
        <link rel="icon" href="favicon.ico" />
        {/* Other meta tags, stylesheets, etc. */}
      </head>
      <body className={'relative'}>
        <ChakraProvider theme={theme}>
          <Navbar/>
            {children}
          <Footer/>
        </ChakraProvider>
      </body>
    </html>
  )
}


// 2.33-p