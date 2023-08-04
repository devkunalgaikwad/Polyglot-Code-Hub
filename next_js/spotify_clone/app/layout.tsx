
import { Sidebar } from '@/components/index'
import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import SupabaseProvider from '@/providers/Supabase'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Experience the best in music streaming with our Spotify Clone. Access an extensive library of songs, playlists, and artists spanning multiple genres. Discover new tracks, curate personalized playlists, and follow your favorite artists. Our intuitive interface and smooth audio streaming guarantee an uninterrupted musical experience. Join our vibrant music community and dive into a world of melodies and rhythms. Start streaming with our feature-rich Spotify Clone now!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
            <Sidebar>
              {children}
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}

// as sidebar is client component but we want to transfer sever component to in form of children to sidebar. Which means that children will be a sever component rather than it is mounted in client component it is best pratice to transfer sever component to client component

// if we created folder name in () its means that it not will treated as path or route 