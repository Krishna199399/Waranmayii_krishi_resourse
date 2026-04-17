import React from 'react'

export default function DoDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-800">DO Manager Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-slate-700">Total Advisors</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">25</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-slate-700">Performance</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">92%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-slate-700">Tasks</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">15</p>
        </div>
      </div>
    </div>
  )
}
