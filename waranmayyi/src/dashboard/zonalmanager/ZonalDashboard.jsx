import React from 'react'

export default function ZonalDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-800">Zonal Manager Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-slate-700">Area Employees</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">45</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-slate-700">Zone Performance</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">88%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-slate-700">Zone Revenue</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">₹85L</p>
        </div>
      </div>
    </div>
  )
}
