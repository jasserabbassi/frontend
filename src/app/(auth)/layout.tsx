// src/app/(auth)/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './auth.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SNCFT Fleet Authentication',
  description: 'National Railway Fleet Management System - Authentication',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <main className="min-h-screen flex items-center justify-center p-4">
          {children}
        </main>
      </body>
    </html>
  )
}