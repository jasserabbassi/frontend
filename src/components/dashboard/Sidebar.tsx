'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Vehicles', href: '/dashboard/vehicles' },
  { name: 'Missions', href: '/dashboard/missions' },
]

export default function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r">
      <div className="p-4">
        <nav className="space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md ${
                pathname === item.href
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}