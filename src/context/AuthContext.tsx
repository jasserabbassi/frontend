'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { api } from '@/lib/api'

type User = {
  id: string
  email: string
  role: 'admin' | 'manager' | 'driver'
}

type AuthContextType = {
  user: User | null
  login: (token: string, userData: User) => void  // Requires both parameters
  logout: () => void
}

const AuthContext = createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const validateToken = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;
        
        // Verify token with backend
        const res = await api.get('/auth/validate');
        setUser(res.data.user);
      } catch (error) {
        logout();
      }
    };
  
    validateToken();
  }, []);

  const login = (token: string, userData: User) => {
    localStorage.setItem('token', token)
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    window.location.href = '/auth/login'
  }

  const hasRole = (roles: string[]) => {
    return user ? roles.includes(user.role) : false
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)