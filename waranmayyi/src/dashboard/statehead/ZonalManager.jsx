import React from 'react'
import { Crown, Map, UsersRound } from 'lucide-react'
import Card from '../../components/Card'
import Chart from '../../components/Chart'
import Table from '../../components/Table'

const zonalManagers = [
  {
    id: 'ZM-11',
    name: 'Harish Patwardhan',
    zone: 'North',
    areaManagers: 4,
    districts: 7,
    revenue: 5420000,
    growth: 13,
    status: 'Stable',
  },
  {
    id: 'ZM-12',
    name: 'Nisha Kulkarni',
    zone: 'South',
    areaManagers: 3,
    districts: 5,
    revenue: 4310000,
    growth: 9,
    status: 'Stable',
  },
  {
    id: 'ZM-13',
    name: 'Vikram Joshi',
    zone: 'Central',
    areaManagers: 4,
    districts: 6,
    revenue: 4890000,
    growth: 11,
    status: 'Stable',
  },
  {
    id: 'ZM-14',
    name: 'Shweta Bidkar',
    zone: 'Coastal',
    areaManagers: 2,
    districts: 4,
    revenue: 2980000,
    growth: 4,
    status: 'Watchlist',
  },
]

const statusPill = {
  Stable: 'bg-emerald-50 text-emerald-700',
  Watchlist: 'bg-amber-50 text-amber-700',
}

const formatMoney = (value) => `₹${value.toLocaleString('en-IN')}`

export default function ZonalManager() {
  const totalAreaManagers = zonalManagers.reduce((sum, zone) => sum + zone.areaManagers, 0)
  const avgGrowth = Math.round(
    zonalManagers.reduce((sum, zone) => sum + zone.growth, 0) / zonalManagers.length
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Zonal Managers</h1>
        <p className="mt-1 text-sm text-slate-500">
          State-level command view for zones, district coverage, and growth.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card
          title="Zones Managed"
          value={zonalManagers.length}
          subtitle="Active zonal leaders"
          icon={Map}
          tone="emerald"
        />
        <Card
          title="Area Manager Network"
          value={totalAreaManagers}
          subtitle="Cross-zone operational leaders"
          icon={UsersRound}
          tone="sky"
        />
        <Card
          title="Average Growth"
          value={`${avgGrowth}%`}
          subtitle="Quarter-over-quarter"
          icon={Crown}
          tone="amber"
          trend={avgGrowth}
        />
      </div>

      <Chart
        title="Zone Revenue (in Lakhs)"
        subtitle="Quick zone comparison for strategic planning"
        type="bar"
        data={zonalManagers.map((zone) => ({
          zone: zone.zone,
          revenue: Math.round(zone.revenue / 100000),
        }))}
        xKey="zone"
        series={[{ key: 'revenue', color: '#059669', label: 'Revenue (L)' }]}
      />

      <Table
        title="Zonal Leadership Board"
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
          { key: 'zone', label: 'Zone' },
          { key: 'districts', label: 'Districts' },
          { key: 'areaManagers', label: 'Area Managers' },
          {
            key: 'revenue',
            label: 'Revenue',
            render: (value) => <span className="font-semibold">{formatMoney(value)}</span>,
          },
          {
            key: 'growth',
            label: 'Growth',
            render: (value) => <span className="text-emerald-700">+{value}%</span>,
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
        rows={zonalManagers}
      />
    </div>
  )
}
