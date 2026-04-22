import React, { useMemo, useState } from 'react'
import { BadgeCheck, UserRound, UserRoundSearch } from 'lucide-react'
import Card from '../../components/Card'
import Table from '../../components/Table'

const areaEmployees = [
  {
    id: 'EMP-901',
    name: 'Suhas Patil',
    role: 'Area Advisor',
    area: 'Gokak Block',
    attendance: 96,
    farmerVisits: 34,
    status: 'Active',
  },
  {
    id: 'EMP-902',
    name: 'Manjula More',
    role: 'Field Coordinator',
    area: 'Bailhongal Block',
    attendance: 92,
    farmerVisits: 28,
    status: 'Active',
  },
  {
    id: 'EMP-903',
    name: 'Kiran Jadhav',
    role: 'Area Advisor',
    area: 'Khanapur Block',
    attendance: 84,
    farmerVisits: 22,
    status: 'Watchlist',
  },
  {
    id: 'EMP-904',
    name: 'Tejal Sutar',
    role: 'Field Coordinator',
    area: 'Athani Block',
    attendance: 95,
    farmerVisits: 30,
    status: 'Active',
  },
]

const statusPill = {
  Active: 'bg-emerald-50 text-emerald-700',
  Watchlist: 'bg-amber-50 text-amber-700',
}

export default function AreaEmployees() {
  const [query, setQuery] = useState('')

  const filteredEmployees = useMemo(() => {
    return areaEmployees.filter((employee) => {
      const term = query.toLowerCase()
      return employee.name.toLowerCase().includes(term) || employee.area.toLowerCase().includes(term)
    })
  }, [query])

  const avgAttendance = Math.round(
    areaEmployees.reduce((sum, employee) => sum + employee.attendance, 0) / areaEmployees.length
  )
  const totalVisits = areaEmployees.reduce((sum, employee) => sum + employee.farmerVisits, 0)
  const activeCount = areaEmployees.filter((employee) => employee.status === 'Active').length

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Area Employees</h1>
          <p className="mt-1 text-sm text-slate-500">
            Track attendance, field effort, and local workforce health.
          </p>
        </div>

        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search employee or area"
          className="w-60 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-emerald-300 transition focus:ring"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card
          title="Total Employees"
          value={areaEmployees.length}
          subtitle="Across your zone"
          icon={UserRound}
          tone="emerald"
        />
        <Card
          title="Average Attendance"
          value={`${avgAttendance}%`}
          subtitle="Monthly attendance quality"
          icon={BadgeCheck}
          tone="sky"
        />
        <Card
          title="Field Visits"
          value={totalVisits}
          subtitle={`${activeCount} active contributors`}
          icon={UserRoundSearch}
          tone="amber"
        />
      </div>

      <Table
        title="Employee Register"
        subtitle={`${filteredEmployees.length} employee(s)`}
        columns={[
          {
            key: 'name',
            label: 'Employee',
            render: (value, row) => (
              <div>
                <p className="font-semibold text-slate-800">{value}</p>
                <p className="text-xs text-slate-500">{row.id}</p>
              </div>
            ),
          },
          { key: 'role', label: 'Role' },
          { key: 'area', label: 'Area' },
          {
            key: 'attendance',
            label: 'Attendance',
            render: (value) => `${value}%`,
          },
          { key: 'farmerVisits', label: 'Farmer Visits' },
          {
            key: 'status',
            label: 'Status',
            render: (value) => (
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusPill[value]}`}>
                {value}
              </span>
            ),
          },
        ]}
        rows={filteredEmployees}
        emptyMessage="No employees found for your search."
      />
    </div>
  )
}
