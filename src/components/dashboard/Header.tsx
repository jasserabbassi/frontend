'use client'

import { useAuth } from '@/context/AuthContext'

export default function Header() {
  const { logout } = useAuth()
  
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">Fleet Management</h1>
        <button
          onClick={logout}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Logout
        </button>
      </div>
    </header>
  )
}