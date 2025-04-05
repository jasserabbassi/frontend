'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type NotificationType = {
  message: string
  type: 'success' | 'error'
} | null

type NotificationContextType = {
  notification: NotificationType
  showNotification: (message: string, type: 'success' | 'error') => void
  clearNotification: () => void
}

const NotificationContext = createContext<NotificationContextType>({
  notification: null,
  showNotification: () => {},
  clearNotification: () => {},
})

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notification, setNotification] = useState<NotificationType>(null)

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ message, type })
  }

  const clearNotification = () => {
    setNotification(null)
  }

  return (
    <NotificationContext.Provider
      value={{ notification, showNotification, clearNotification }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => useContext(NotificationContext)