'use client'

import { useState, useEffect } from 'react'
import DataTable from '@/components/vehicles/DataTable'
import { api } from '@/lib/api'

interface Vehicle {
  id: string
  registration: string
  brand: string
  model: string
  year: number
  type: string
}

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await api.get('/vehicles')
        setVehicles(response.data)
      } catch (error) {
        console.error('Error fetching vehicles:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchVehicles()
  }, [])

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Vehicle List</h2>
      {loading ? (
        <p>Loading vehicles...</p>
      ) : (
        <DataTable vehicles={vehicles} />
      )}
    </div>
  )
}