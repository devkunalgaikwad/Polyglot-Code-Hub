import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'

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
      <body className={'relative'}>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}


// 2.33-p