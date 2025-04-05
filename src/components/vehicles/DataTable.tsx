'use client'

interface VehicleTableProps {
  vehicles: Array<{
    id: string
    registration: string
    brand: string
    model: string
    year: number
    type: string
  }>
}

export default function DataTable({ vehicles }: VehicleTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Registration
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Brand
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Model
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Year
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Type
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {vehicle.registration}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {vehicle.brand}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {vehicle.model}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {vehicle.year}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {vehicle.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}