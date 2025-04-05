// src/app/(dashboard)/page.tsx
import DashboardStats from '@/components/dashboard/Stats'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <DashboardStats />
    </div>
  )
}