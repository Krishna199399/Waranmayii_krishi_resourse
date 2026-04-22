import React from 'react'
import { ChartColumnIncreasing, HandCoins, TimerReset } from 'lucide-react'
import Card from '../../components/Card'
import Chart from '../../components/Chart'
import Table from '../../components/Table'

const monthlySnapshot = [
  { month: 'Jan', productivity: 72, collection: 78 },
  { month: 'Feb', productivity: 74, collection: 80 },
  { month: 'Mar', productivity: 76, collection: 82 },
  { month: 'Apr', productivity: 75, collection: 81 },
  { month: 'May', productivity: 79, collection: 85 },
  { month: 'Jun', productivity: 82, collection: 88 },
]

const areaPerformance = [
  {
    id: 'AR-101',
    area: 'Gokak Block',
    advisors: 6,
    productivity: 84,
    collection: 91,
    revenueLakhs: 18.2,
    trend: 8,
  },
  {
    id: 'AR-102',
    area: 'Bailhongal Block',
    advisors: 5,
    productivity: 78,
    collection: 86,
    revenueLakhs: 15.7,
    trend: 6,
  },
  {
    id: 'AR-103',
    area: 'Khanapur Block',
    advisors: 4,
    productivity: 69,
    collection: 74,
    revenueLakhs: 11.3,
    trend: 2,
  },
  {
    id: 'AR-104',
    area: 'Athani Block',
    advisors: 5,
    productivity: 80,
    collection: 87,
    revenueLakhs: 16.4,
    trend: 7,
  },
]

export default function AreaPerformance() {
  const avgProductivity = Math.round(
    areaPerformance.reduce((sum, area) => sum + area.productivity, 0) / areaPerformance.length
  )
  const avgCollection = Math.round(
    areaPerformance.reduce((sum, area) => sum + area.collection, 0) / areaPerformance.length
  )
  const totalRevenue = areaPerformance.reduce((sum, area) => sum + area.revenueLakhs, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Area Performance</h1>
        <p className="mt-1 text-sm text-slate-500">
          Compare block-level productivity and revenue quality across your zone.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card
          title="Avg Productivity"
          value={`${avgProductivity}%`}
          subtitle="Field outcomes"
          icon={ChartColumnIncreasing}
          tone="emerald"
          trend={5}
        />
        <Card
          title="Collection Efficiency"
          value={`${avgCollection}%`}
          subtitle="Payments closed on time"
          icon={TimerReset}
          tone="sky"
          trend={4}
        />
        <Card
          title="Zone Revenue"
          value={`₹${totalRevenue.toFixed(1)}L`}
          subtitle="Current monthly run-rate"
          icon={HandCoins}
          tone="amber"
          trend={7}
        />
      </div>

      <Chart
        title="Monthly Productivity vs Collection"
        subtitle="Healthy zones keep productivity and collection moving together"
        data={monthlySnapshot}
        xKey="month"
        type="line"
        series={[
          { key: 'productivity', color: '#059669', label: 'Productivity %' },
          { key: 'collection', color: '#0ea5e9', label: 'Collection %' },
        ]}
      />

      <Table
        title="Area Scorecard"
        columns={[
          {
            key: 'area',
            label: 'Area',
            render: (value, row) => (
              <div>
                <p className="font-semibold text-slate-800">{value}</p>
                <p className="text-xs text-slate-500">{row.id}</p>
              </div>
            ),
          },
          { key: 'advisors', label: 'Advisors' },
          {
            key: 'productivity',
            label: 'Productivity',
            render: (value) => `${value}%`,
          },
          {
            key: 'collection',
            label: 'Collection',
            render: (value) => `${value}%`,
          },
          {
            key: 'revenueLakhs',
            label: 'Revenue',
            render: (value) => `₹${value.toFixed(1)}L`,
          },
          {
            key: 'trend',
            label: 'Trend',
            render: (value) => <span className="font-semibold text-emerald-700">+{value}%</span>,
          },
        ]}
        rows={areaPerformance}
      />
    </div>
  )
}
