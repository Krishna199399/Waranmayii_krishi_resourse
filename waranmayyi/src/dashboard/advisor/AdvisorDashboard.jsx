import React from 'react'

export default function AdvisorDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-800">Advisor Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-slate-700">Total Farmers</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">150</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-slate-700">Total Sales</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">₹2.5L</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-slate-700">Pending Tasks</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">8</p>
        </div>
      </div>
    </div>
  )
}
