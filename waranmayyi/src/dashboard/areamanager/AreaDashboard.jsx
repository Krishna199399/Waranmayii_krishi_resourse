import React from 'react'

export default function AreaDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-800">Area Manager Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-slate-700">DO Managers</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-slate-700">Total Revenue</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">₹45L</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-slate-700">Active Areas</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">5</p>
        </div>
      </div>
    </div>
  )
}
