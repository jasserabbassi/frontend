// components/vehicles/DataTable.tsx
'use client'

import { useState } from 'react'
import { Vehicle } from '@lib/types'

interface DataTableProps {
  vehicles: Vehicle[]
}

export default function DataTable({ vehicles }: DataTableProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Registration</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Brand</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Model</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Year</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {vehicles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((vehicle) => (
            <tr key={vehicle.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vehicle.registration}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vehicle.brand}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vehicle.model}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vehicle.year}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">{vehicle.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <button className="text-blue-600 hover:text-blue-900 mr-4">Edit</button>
                <button className="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Pagination */}
      <div className="bg-white px-4 py-3 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            className="px-3 py-1 border rounded-md hover:bg-gray-50"
          >
            Previous
          </button>
          <span>Page {currentPage}</span>
          <button
            onClick={() => setCurrentPage(p => p + 1)}
            className="px-3 py-1 border rounded-md hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}