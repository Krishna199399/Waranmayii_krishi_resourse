{/* ==================== Dashboard Layout ==================== */}
import AdvisorDashboard from "../dashboard/advisor/AdvisorDashboard";
import AdvisorSidebar from "../sidebars/AdvisorSidebar";

import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">

      {/* Sidebar */}
      <div className="hidden lg:block">
        <AdvisorSidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">

        {/* Top Navbar (Optional but Recommended) */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">
            Dashboard
          </h2>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <div className="h-9 w-9 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
              R
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
            <AdvisorDashboard/>
        </main>

      </div>
    </div>
  );
}