'use client'

import { createContext, useContext, ReactNode, useState, useEffect } from 'react'

type AuthContextType = {
  user: any
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) setUser({ token })
  }, [])

  const login = (token: string) => {
    localStorage.setItem('token', token)
    setUser({ token })
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    window.location.href = '/login'
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)