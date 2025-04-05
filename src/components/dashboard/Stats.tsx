// src/components/dashboard/Stats.tsx
'use client'

import { useAuth } from '@/context/AuthContext'
import { api } from '@/lib/api'
import { useEffect, useState } from 'react'

export default function DashboardStats() {
  const [stats, setStats] = useState({
    vehicles: 0,
    missions: 0,
    fuelConsumption: 0,
    activeUsers: 0
  })
  const { user } = useAuth()

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get('/stats')
        setStats(response.data)
      } catch (error) {
        console.error('Error fetching stats:', error)
      }
    }
    
    if (user) {
      fetchStats()
    }
  }, [user])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Total Vehicles</h3>
        <p className="text-2xl font-bold mt-2">{stats.vehicles}</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Active Missions</h3>
        <p className="text-2xl font-bold mt-2">{stats.missions}</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Fuel Consumption (L)</h3>
        <p className="text-2xl font-bold mt-2">{stats.fuelConsumption}</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Active Users</h3>
        <p className="text-2xl font-bold mt-2">{stats.activeUsers}</p>
      </div>
    </div>
  )
}