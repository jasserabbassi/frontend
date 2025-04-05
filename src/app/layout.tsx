import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import { NotificationProvider } from '@/context/NotificationContext'
import Notification from '@/components/ui/Notification' // Missing import

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SNCFT Fleet Management',
  description: 'National Railway Fleet Management System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* NotificationProvider must wrap the entire body */}
      <body className={inter.className}>
        <NotificationProvider>
          <Notification />  {/* Notification component */}
          {children}
        </NotificationProvider>
      </body>
    </html>
  )
}