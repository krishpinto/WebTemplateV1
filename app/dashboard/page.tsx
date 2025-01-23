export default function Dashboard() {
    return (
      <div className="bg-zinc-100">
        <div className="container mx-auto px-6 py-8">
          <h1 className="mb-6 text-3xl font-bold">Dashboard Overview</h1>
          <p className="mb-4">Scroll down to see the navbar stick to the top in the dashboard view.</p>
        </div>
        {/* Create multiple sections to enable scrolling */}
        {[...Array(5)].map((_, index) => (
          <section key={index} className="min-h-screen bg-white py-16">
            <div className="container mx-auto px-6">
              <h2 className="mb-4 text-2xl font-semibold">Dashboard Section {index + 1}</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-blue-50 p-6 shadow-md">
                  <h3 className="mb-2 text-xl font-semibold">Total Users</h3>
                  <p className="text-3xl font-bold text-blue-600">1,234</p>
                </div>
                <div className="rounded-lg bg-green-50 p-6 shadow-md">
                  <h3 className="mb-2 text-xl font-semibold">Active Projects</h3>
                  <p className="text-3xl font-bold text-green-600">56</p>
                </div>
                <div className="rounded-lg bg-purple-50 p-6 shadow-md">
                  <h3 className="mb-2 text-xl font-semibold">Total Revenue</h3>
                  <p className="text-3xl font-bold text-purple-600">$12,345</p>
                </div>
              </div>
  
              <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-semibold">Recent Activity</h3>
                <div className="space-y-4">
                  {[...Array(5)].map((_, activityIndex) => (
                    <div key={activityIndex} className="flex items-center justify-between border-b pb-4 last:border-0">
                      <div>
                        <p className="font-medium">Activity {activityIndex + 1}</p>
                        <p className="text-sm text-gray-600">Description of the activity goes here</p>
                      </div>
                      <span className="text-sm text-gray-500">2 hours ago</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    )
  }
  
  