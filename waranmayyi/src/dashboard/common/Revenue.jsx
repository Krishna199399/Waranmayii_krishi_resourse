import React, { useMemo, useState } from 'react'
import { HandCoins, ReceiptText, Target } from 'lucide-react'
import Card from '../../components/Card'
import Chart from '../../components/Chart'
import Table from '../../components/Table'

const monthlyRevenue = [
  { month: 'Jan', booked: 18.4, collected: 15.1, target: 16.0 },
  { month: 'Feb', booked: 19.2, collected: 16.4, target: 17.1 },
  { month: 'Mar', booked: 21.0, collected: 18.8, target: 18.5 },
  { month: 'Apr', booked: 20.3, collected: 17.2, target: 19.0 },
  { month: 'May', booked: 22.6, collected: 19.7, target: 20.2 },
  { month: 'Jun', booked: 24.1, collected: 21.9, target: 21.5 },
]

const revenueSources = [
  {
    id: 'SEG-01',
    segment: 'Crop Inputs',
    share: 42,
    booked: 10.1,
    collected: 8.8,
    delta: 7,
  },
  {
    id: 'SEG-02',
    segment: 'Irrigation Solutions',
    share: 24,
    booked: 5.8,
    collected: 5.1,
    delta: 4,
  },
  {
    id: 'SEG-03',
    segment: 'Advisory Services',
    share: 19,
    booked: 4.5,
    collected: 4.0,
    delta: 6,
  },
  {
    id: 'SEG-04',
    segment: 'Equipment',
    share: 15,
    booked: 3.7,
    collected: 3.2,
    delta: 3,
  },
]

export default function Revenue() {
  const [metricView, setMetricView] = useState('booked')

  const currentMonth = monthlyRevenue[monthlyRevenue.length - 1]

  const collectionRatio = Math.round((currentMonth.collected / currentMonth.booked) * 100)
  const targetGap = (currentMonth.booked - currentMonth.target).toFixed(1)

  const chartSeries = useMemo(() => {
    if (metricView === 'booked') {
      return [
        { key: 'booked', color: '#059669', label: 'Booked (L)' },
        { key: 'target', color: '#94a3b8', label: 'Target (L)' },
      ]
    }

    return [
      { key: 'collected', color: '#0284c7', label: 'Collected (L)' },
      { key: 'target', color: '#94a3b8', label: 'Target (L)' },
    ]
  }, [metricView])

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Revenue</h1>
          <p className="mt-1 text-sm text-slate-500">
            Unified revenue intelligence across products, services, and collections.
          </p>
        </div>

        <div className="rounded-xl bg-white p-1 ring-1 ring-slate-200">
          <button
            onClick={() => setMetricView('booked')}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
              metricView === 'booked'
                ? 'bg-emerald-600 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Booked
          </button>
          <button
            onClick={() => setMetricView('collected')}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
              metricView === 'collected'
                ? 'bg-sky-600 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Collected
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card
          title="Current Booked"
          value={`₹${currentMonth.booked.toFixed(1)}L`}
          subtitle="June 2026"
          icon={ReceiptText}
          tone="emerald"
          trend={8}
        />
        <Card
          title="Collections"
          value={`₹${currentMonth.collected.toFixed(1)}L`}
          subtitle={`${collectionRatio}% collection ratio`}
          icon={HandCoins}
          tone="sky"
          trend={6}
        />
        <Card
          title="Target Delta"
          value={`${Number(targetGap) >= 0 ? '+' : ''}${targetGap}L`}
          subtitle="Against current month target"
          icon={Target}
          tone={Number(targetGap) >= 0 ? 'emerald' : 'amber'}
        />
      </div>

      <Chart
        title="Monthly Revenue Trend"
        subtitle={`View: ${metricView === 'booked' ? 'Booked vs Target' : 'Collected vs Target'}`}
        type="bar"
        data={monthlyRevenue}
        xKey="month"
        series={chartSeries}
      />

      <Table
        title="Revenue Source Breakdown"
        subtitle="Segment-wise contribution and movement"
        columns={[
          {
            key: 'segment',
            label: 'Segment',
            render: (value, row) => (
              <div>
                <p className="font-semibold text-slate-800">{value}</p>
                <p className="text-xs text-slate-500">{row.id}</p>
              </div>
            ),
          },
          {
            key: 'share',
            label: 'Share',
            render: (value) => `${value}%`,
          },
          {
            key: 'booked',
            label: 'Booked',
            render: (value) => `₹${value.toFixed(1)}L`,
          },
          {
            key: 'collected',
            label: 'Collected',
            render: (value) => `₹${value.toFixed(1)}L`,
          },
          {
            key: 'delta',
            label: 'MoM Delta',
            render: (value) => <span className="font-semibold text-emerald-700">+{value}%</span>,
          },
        ]}
        rows={revenueSources}
      />
    </div>
  )
}
