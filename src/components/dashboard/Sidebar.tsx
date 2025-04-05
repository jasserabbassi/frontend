'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

const adminLinks = [
  { name: 'Users', href: '/dashboard/users' },
]

const commonLinks = [
  { name: 'Vehicles', href: '/dashboard/vehicles' },
  { name: 'Missions', href: '/dashboard/missions' },
  { name: 'Fuel', href: '/dashboard/fuel' },
]

export default function DashboardSidebar() {
  const pathname = usePathname()
  const { hasRole } = useAuth()

  return (
    <div className="w-64 bg-white border-r">
      <nav className="p-4 space-y-1">
        {commonLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-3 py-2 rounded-md ${
              pathname === link.href
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {link.name}
          </Link>
        ))}
        
        {hasRole(['admin']) && adminLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-3 py-2 rounded-md ${
              pathname === link.href
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}