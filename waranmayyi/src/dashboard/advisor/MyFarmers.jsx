import React, { useMemo, useState } from 'react'
import { ShieldAlert, Sprout, Users } from 'lucide-react'
import Card from '../../components/Card'
import Table from '../../components/Table'

const farmers = [
  {
    id: 'FRM-101',
    name: 'Ramesh Patil',
    village: 'Kudachi',
    crop: 'Sugarcane',
    lastVisit: 'Apr 20, 2026',
    health: 'Healthy',
    targetProgress: 88,
  },
  {
    id: 'FRM-102',
    name: 'Savita Jadhav',
    village: 'Nesargi',
    crop: 'Paddy',
    lastVisit: 'Apr 18, 2026',
    health: 'Needs Support',
    targetProgress: 54,
  },
  {
    id: 'FRM-103',
    name: 'Mahesh Mane',
    village: 'Kabbur',
    crop: 'Tomato',
    lastVisit: 'Apr 19, 2026',
    health: 'Healthy',
    targetProgress: 76,
  },
  {
    id: 'FRM-104',
    name: 'Lalita More',
    village: 'Gokak',
    crop: 'Cotton',
    lastVisit: 'Apr 16, 2026',
    health: 'At Risk',
    targetProgress: 38,
  },
  {
    id: 'FRM-105',
    name: 'Prakash Koli',
    village: 'Bailhongal',
    crop: 'Groundnut',
    lastVisit: 'Apr 21, 2026',
    health: 'Healthy',
    targetProgress: 91,
  },
]

const healthPill = {
  Healthy: 'bg-emerald-50 text-emerald-700',
  'Needs Support': 'bg-amber-50 text-amber-700',
  'At Risk': 'bg-rose-50 text-rose-700',
}

export default function MyFarmers() {
  const [query, setQuery] = useState('')
  const [healthFilter, setHealthFilter] = useState('all')

  const filteredFarmers = useMemo(() => {
    return farmers.filter((farmer) => {
      const matchesQuery =
        farmer.name.toLowerCase().includes(query.toLowerCase()) ||
        farmer.village.toLowerCase().includes(query.toLowerCase()) ||
        farmer.crop.toLowerCase().includes(query.toLowerCase())

      const matchesHealth = healthFilter === 'all' || farmer.health === healthFilter

      return matchesQuery && matchesHealth
    })
  }, [query, healthFilter])

  const atRiskCount = farmers.filter((farmer) => farmer.health === 'At Risk').length
  const avgProgress = Math.round(
    farmers.reduce((sum, farmer) => sum + farmer.targetProgress, 0) / farmers.length
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">My Farmers</h1>
          <p className="mt-1 text-sm text-slate-500">
            Track crop health, visit cadence, and target progress.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="Search by farmer, village, crop"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-64 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-emerald-300 transition focus:ring"
          />

          <select
            value={healthFilter}
            onChange={(event) => setHealthFilter(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-emerald-300 transition focus:ring"
          >
            <option value="all">All Health Status</option>
            <option value="Healthy">Healthy</option>
            <option value="Needs Support">Needs Support</option>
            <option value="At Risk">At Risk</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card
          title="Assigned Farmers"
          value={farmers.length}
          subtitle="Across 5 villages"
          icon={Users}
          trend={6}
          tone="emerald"
        />
        <Card
          title="Average Target Progress"
          value={`${avgProgress}%`}
          subtitle="Weekly crop plan completion"
          icon={Sprout}
          trend={4}
          tone="sky"
        />
        <Card
          title="High Attention"
          value={atRiskCount}
          subtitle="Farmers needing immediate follow-up"
          icon={ShieldAlert}
          trend={-2}
          tone="amber"
        />
      </div>

      <Table
        title="Farmer Portfolio"
        subtitle={`${filteredFarmers.length} record(s) matching your filters`}
        columns={[
          {
            key: 'name',
            label: 'Farmer',
            render: (value, row) => (
              <div>
                <p className="font-semibold text-slate-800">{value}</p>
                <p className="text-xs text-slate-500">{row.id} - {row.village}</p>
              </div>
            ),
          },
          { key: 'crop', label: 'Primary Crop' },
          { key: 'lastVisit', label: 'Last Visit' },
          {
            key: 'health',
            label: 'Health',
            render: (value) => (
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${healthPill[value]}`}>
                {value}
              </span>
            ),
          },
          {
            key: 'targetProgress',
            label: 'Target Progress',
            render: (value) => (
              <div className="w-36">
                <p className="text-xs font-semibold text-slate-700">{value}%</p>
                <div className="mt-1 h-2 rounded-full bg-slate-200">
                  <div className="h-2 rounded-full bg-emerald-500" style={{ width: `${value}%` }} />
                </div>
              </div>
            ),
          },
        ]}
        rows={filteredFarmers}
        emptyMessage="No farmers matched your search and filter combination."
      />
    </div>
  )
}
