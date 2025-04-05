// app/dashboard/vehicles/page.tsx
'use client'

import { useState } from 'react'
import DataTable from '@/components/vehicles/DataTable'
import Modal from '@/components/ui/Modal'
import VehicleForm from '@/components/vehicles/VehicleForm'
import { api } from '@/lib/api'

export default function VehiclesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const handleAddVehicle = async (data: any) => {
    try {
      await api.post('/vehicles', data)
      // Refresh data or update state
      setIsModalOpen(false)
    } catch (error) {
      console.error('Error adding vehicle:', error)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Vehicle Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add New Vehicle
        </button>
      </div>

      <DataTable vehicles={[]} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <VehicleForm onSubmit={handleAddVehicle} />
      </Modal>
    </div>
  )
}