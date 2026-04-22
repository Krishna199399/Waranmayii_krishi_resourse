import React, { useMemo, useState } from 'react'
import { BriefcaseBusiness, CircleCheckBig, UsersRound } from 'lucide-react'
import Card from '../../components/Card'
import Chart from '../../components/Chart'
import Table from '../../components/Table'

const doManagers = [
  {
    id: 'DOM-21',
    name: 'Nitin Kulkarni',
    district: 'Belagavi North',
    advisors: 8,
    farmers: 540,
    revenue: 1280000,
    compliance: 96,
    status: 'Active',
    lastReview: 'Apr 18, 2026',
  },
  {
    id: 'DOM-22',
    name: 'Sonal Patankar',
    district: 'Belagavi South',
    advisors: 7,
    farmers: 486,
    revenue: 1135000,
    compliance: 92,
    status: 'Active',
    lastReview: 'Apr 20, 2026',
  },
  {
    id: 'DOM-23',
    name: 'Dinesh Pawar',
    district: 'Bagalkot',
    advisors: 6,
    farmers: 430,
    revenue: 980000,
    compliance: 88,
    status: 'Watchlist',
    lastReview: 'Apr 17, 2026',
  },
  {
    id: 'DOM-24',
    name: 'Tejaswini Hegde',
    district: 'Vijayapura',
    advisors: 9,
    farmers: 612,
    revenue: 1425000,
    compliance: 97,
    status: 'Active',
    lastReview: 'Apr 21, 2026',
  },
]

const formatMoney = (value) => `₹${value.toLocaleString('en-IN')}`

const statusPill = {
  Active: 'bg-emerald-50 text-emerald-700',
  Watchlist: 'bg-amber-50 text-amber-700',
}

export default function DoManagers() {
  const [query, setQuery] = useState('')

  const filteredManagers = useMemo(() => {
    return doManagers.filter((manager) => {
      const term = query.toLowerCase()
      return (
        manager.name.toLowerCase().includes(term) || manager.district.toLowerCase().includes(term)
      )
    })
  }, [query])

  const totalAdvisors = doManagers.reduce((sum, manager) => sum + manager.advisors, 0)
  const totalFarmers = doManagers.reduce((sum, manager) => sum + manager.farmers, 0)
  const activeManagers = doManagers.filter((manager) => manager.status === 'Active').length

  const districtRevenue = doManagers.map((manager) => ({
    district: manager.district.split(' ')[0],
    revenue: Math.round(manager.revenue / 100000),
  }))

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">DO Managers</h1>
          <p className="mt-1 text-sm text-slate-500">
            Review district-level leadership health and operational compliance.
          </p>
        </div>

        <input
          type="text"
          placeholder="Search manager or district"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-64 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-emerald-300 transition focus:ring"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card
          title="DO Managers"
          value={doManagers.length}
          subtitle="District owners"
          icon={BriefcaseBusiness}
          tone="emerald"
          trend={5}
        />
        <Card
          title="Total Advisors"
          value={totalAdvisors}
          subtitle="Field execution capacity"
          icon={UsersRound}
          tone="sky"
          trend={7}
        />
        <Card
          title="Active Leadership"
          value={`${activeManagers}/${doManagers.length}`}
          subtitle="Healthy management network"
          icon={CircleCheckBig}
          tone="amber"
        />
      </div>

      <Chart
        title="District Revenue (in Lakhs)"
        subtitle="Quick benchmark of managed district outcomes"
        type="bar"
        data={districtRevenue}
        xKey="district"
        series={[{ key: 'revenue', color: '#059669', label: 'Revenue (L)' }]}
      />

      <Table
        title="Manager Directory"
        subtitle={`${filteredManagers.length} manager(s)`}
        columns={[
          {
            key: 'name',
            label: 'Manager',
            render: (value, row) => (
              <div>
                <p className="font-semibold text-slate-800">{value}</p>
                <p className="text-xs text-slate-500">{row.id}</p>
              </div>
            ),
          },
          { key: 'district', label: 'District' },
          { key: 'advisors', label: 'Advisors' },
          { key: 'farmers', label: 'Farmers' },
          {
            key: 'revenue',
            label: 'Revenue',
            render: (value) => <span className="font-semibold">{formatMoney(value)}</span>,
          },
          {
            key: 'compliance',
            label: 'Compliance',
            render: (value) => `${value}%`,
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
          { key: 'lastReview', label: 'Last Review' },
        ]}
        rows={filteredManagers}
        emptyMessage="No DO managers found for your search."
      />

      <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-900">
        Total managed farmers in this area: <strong>{totalFarmers.toLocaleString('en-IN')}</strong>
      </div>
    </div>
  )
}
