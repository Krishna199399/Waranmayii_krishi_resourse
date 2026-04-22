import React, { useMemo, useState } from 'react'
import { BadgeCheck, Users, UserRoundCog } from 'lucide-react'
import Card from '../../components/Card'
import Table from '../../components/Table'

const advisors = [
  {
    id: 'ADV-310',
    name: 'Asha Naik',
    cluster: 'Belagavi Rural',
    farmers: 162,
    monthlySales: 324000,
    visits: 42,
    status: 'On Track',
  },
  {
    id: 'ADV-311',
    name: 'Mahesh K',
    cluster: 'Belagavi City',
    farmers: 138,
    monthlySales: 278000,
    visits: 36,
    status: 'On Track',
  },
  {
    id: 'ADV-312',
    name: 'Prerna Joshi',
    cluster: 'Khanapur',
    farmers: 125,
    monthlySales: 201500,
    visits: 29,
    status: 'Needs Support',
  },
  {
    id: 'ADV-313',
    name: 'Rahul Deshmukh',
    cluster: 'Gokak',
    farmers: 145,
    monthlySales: 226700,
    visits: 31,
    status: 'On Track',
  },
]

const statusPill = {
  'On Track': 'bg-emerald-50 text-emerald-700',
  'Needs Support': 'bg-amber-50 text-amber-700',
}

const formatMoney = (value) => `₹${value.toLocaleString('en-IN')}`

export default function Advisors() {
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredAdvisors = useMemo(() => {
    return advisors.filter((advisor) => {
      const matchesQuery =
        advisor.name.toLowerCase().includes(query.toLowerCase()) ||
        advisor.cluster.toLowerCase().includes(query.toLowerCase())
      const matchesStatus = statusFilter === 'all' || advisor.status === statusFilter
      return matchesQuery && matchesStatus
    })
  }, [query, statusFilter])

  const totalFarmers = advisors.reduce((sum, advisor) => sum + advisor.farmers, 0)
  const avgVisits = Math.round(advisors.reduce((sum, advisor) => sum + advisor.visits, 0) / advisors.length)
  const onTrackCount = advisors.filter((advisor) => advisor.status === 'On Track').length

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Advisors</h1>
          <p className="mt-1 text-sm text-slate-500">
            Supervise advisor productivity, farmer coverage, and field visits.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search advisor or cluster"
            className="w-60 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-emerald-300 transition focus:ring"
          />
          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-emerald-300 transition focus:ring"
          >
            <option value="all">All status</option>
            <option value="On Track">On Track</option>
            <option value="Needs Support">Needs Support</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card
          title="Advisor Strength"
          value={advisors.length}
          subtitle="Active in your district"
          icon={Users}
          tone="emerald"
          trend={6}
        />
        <Card
          title="Total Farmers Covered"
          value={totalFarmers.toLocaleString('en-IN')}
          subtitle="Combined managed farmer base"
          icon={UserRoundCog}
          tone="sky"
          trend={4}
        />
        <Card
          title="On Track Team"
          value={`${onTrackCount}/${advisors.length}`}
          subtitle={`Avg ${avgVisits} visits per advisor`}
          icon={BadgeCheck}
          tone="amber"
        />
      </div>

      <Table
        title="Advisor Roster"
        subtitle={`${filteredAdvisors.length} advisor(s) listed`}
        columns={[
          {
            key: 'name',
            label: 'Advisor',
            render: (value, row) => (
              <div>
                <p className="font-semibold text-slate-800">{value}</p>
                <p className="text-xs text-slate-500">{row.id}</p>
              </div>
            ),
          },
          { key: 'cluster', label: 'Cluster' },
          { key: 'farmers', label: 'Farmers' },
          { key: 'visits', label: 'Visits (MTD)' },
          {
            key: 'monthlySales',
            label: 'Monthly Sales',
            render: (value) => <span className="font-semibold">{formatMoney(value)}</span>,
          },
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
        rows={filteredAdvisors}
        emptyMessage="No advisors found for selected filters."
      />
    </div>
  )
}
