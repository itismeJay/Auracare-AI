import { Logout } from "@/components/logout";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 text-center border-b">
          <h2 className="text-xl font-bold">My App</h2>
        </div>
        <nav className="p-6">
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <Logout />
        </div>

        {/* Dashboard cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Users</h2>
            <p className="text-gray-600">1,245 active users</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Revenue</h2>
            <p className="text-gray-600">$12,340 this month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Orders</h2>
            <p className="text-gray-600">320 new orders</p>
          </div>
        </div>

        {/* Welcome message */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700">
            Welcome to your dashboard! Here you can manage your account, view
            stats, and configure settings.
          </p>
        </div>
      </main>
    </div>
  );
}
