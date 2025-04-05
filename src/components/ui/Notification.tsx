'use client'

import { useEffect } from 'react'
import { useNotification } from '@/context/NotificationContext'

export default function Notification() {
  const { notification, clearNotification } = useNotification()

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(clearNotification, 3000)
      return () => clearTimeout(timer)
    }
  }, [notification, clearNotification])

  if (!notification) return null

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`px-4 py-2 rounded-md shadow-lg text-white ${
          notification.type === 'success' 
            ? 'bg-green-500' 
            : 'bg-red-500'
        }`}
      >
        {notification.message}
      </div>
    </div>
  )
}