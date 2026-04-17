{/* ==================== Advisor Dashboard ==================== */}
import { Users, IndianRupee, ClipboardList } from "lucide-react";

export default function AdvisorDashboard() {
  return (
    <div className="space-y-8">

      {/* ==================== Top Cards ==================== */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        <Card
          title="Total Farmers"
          value="1,245"
          icon={<Users />}
          color="emerald"
        />

        <Card
          title="Sales Done"
          value="₹3.2L"
          icon={<IndianRupee />}
          color="blue"
        />

        <Card
          title="Daily Tasks"
          value="18"
          icon={<ClipboardList />}
          color="amber"
        />

      </div>

      {/* ==================== Charts Section ==================== */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Sales Chart */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold mb-4">Sales Trend</h3>
          <div className="h-64 flex items-center justify-center text-slate-400">
            {/* Replace with Recharts */}
            Chart Here 📊
          </div>
        </div>

        {/* Activity Chart */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold mb-4">Activity Chart</h3>
          <div className="h-64 flex items-center justify-center text-slate-400">
            Chart Here 📈
          </div>
        </div>

      </div>

      {/* ==================== Farmer Table ==================== */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
        <h3 className="text-lg font-semibold mb-6">Farmer List</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left">

            <thead>
              <tr className="text-sm text-slate-500 border-b">
                <th className="py-3">Name</th>
                <th>Village</th>
                <th>Contact</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody className="text-sm">

              <tr className="border-b hover:bg-slate-50">
                <td className="py-3 font-medium">Ramesh Patil</td>
                <td>Belgaum</td>
                <td>9876543210</td>
                <td>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-xs">
                    Active
                  </span>
                </td>
              </tr>

              <tr className="border-b hover:bg-slate-50">
                <td className="py-3 font-medium">Suresh Gowda</td>
                <td>Hubli</td>
                <td>9123456780</td>
                <td>
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-600 text-xs">
                    Pending
                  </span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

/* ==================== Card Component ==================== */
function Card({ title, value, icon, color }) {
  return (
    <div className="relative rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition">

      {/* Icon */}
      <div className="flex items-center justify-between">
        <div className={`p-3 rounded-xl bg-${color}-100 text-${color}-600`}>
          {icon}
        </div>
      </div>

      {/* Value */}
      <h2 className="mt-5 text-3xl font-bold text-slate-900">
        {value}
      </h2>

      {/* Title */}
      <p className="text-sm text-slate-500 mt-1">
        {title}
      </p>
    </div>
  );
}