import { AuthProvider } from '@/context/AuthContext'
import DashboardHeader from '@/components/dashboard/Header'
import DashboardSidebar from '@/components/dashboard/Sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <div className="min-h-screen flex">
        <DashboardSidebar />
        <div className="flex-1">
          <DashboardHeader />
          <main className="p-4 md:p-6 bg-gray-50 min-h-screen">
            {children}
          </main>
        </div>
      </div>
    </AuthProvider>
  )
}