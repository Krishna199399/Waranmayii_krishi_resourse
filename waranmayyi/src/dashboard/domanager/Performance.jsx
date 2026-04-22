import React from 'react'
import { Gauge, TrendingUp, UserCheck } from 'lucide-react'
import Card from '../../components/Card'
import Chart from '../../components/Chart'
import Table from '../../components/Table'

const monthlyPerformance = [
  { month: 'Jan', conversion: 68, taskCompletion: 78 },
  { month: 'Feb', conversion: 71, taskCompletion: 80 },
  { month: 'Mar', conversion: 74, taskCompletion: 84 },
  { month: 'Apr', conversion: 70, taskCompletion: 81 },
  { month: 'May', conversion: 76, taskCompletion: 86 },
  { month: 'Jun', conversion: 79, taskCompletion: 88 },
]

const advisorPerformance = [
  { id: 'ADV-310', name: 'Asha Naik', conversion: 82, taskCompletion: 91, growth: 18 },
  { id: 'ADV-311', name: 'Mahesh K', conversion: 77, taskCompletion: 88, growth: 12 },
  { id: 'ADV-312', name: 'Prerna Joshi', conversion: 64, taskCompletion: 73, growth: 6 },
  { id: 'ADV-313', name: 'Rahul Deshmukh', conversion: 73, taskCompletion: 84, growth: 10 },
]

const scorePill = (value) => {
  if (value >= 80) return 'bg-emerald-50 text-emerald-700'
  if (value >= 70) return 'bg-amber-50 text-amber-700'
  return 'bg-rose-50 text-rose-700'
}

export default function Performance() {
  const avgConversion = Math.round(
    monthlyPerformance.reduce((sum, item) => sum + item.conversion, 0) / monthlyPerformance.length
  )
  const avgCompletion = Math.round(
    monthlyPerformance.reduce((sum, item) => sum + item.taskCompletion, 0) /
      monthlyPerformance.length
  )
  const topPerformers = advisorPerformance.filter((advisor) => advisor.conversion >= 75).length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Performance</h1>
        <p className="mt-1 text-sm text-slate-500">
          Analyze advisor conversion, task completion, and growth momentum.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card
          title="Avg Conversion"
          value={`${avgConversion}%`}
          subtitle="Lead-to-sale efficiency"
          icon={Gauge}
          tone="emerald"
          trend={7}
        />
        <Card
          title="Task Completion"
          value={`${avgCompletion}%`}
          subtitle="Operational execution"
          icon={TrendingUp}
          tone="sky"
          trend={5}
        />
        <Card
          title="Top Performers"
          value={topPerformers}
          subtitle="Advisors above 75% conversion"
          icon={UserCheck}
          tone="amber"
        />
      </div>

      <Chart
        title="Monthly Conversion vs Task Completion"
        subtitle="Steady execution should move both curves upward"
        type="line"
        data={monthlyPerformance}
        xKey="month"
        series={[
          { key: 'conversion', color: '#059669', label: 'Conversion %' },
          { key: 'taskCompletion', color: '#0284c7', label: 'Task Completion %' },
        ]}
      />

      <Table
        title="Advisor Scoreboard"
        subtitle="Performance by advisor"
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
          {
            key: 'conversion',
            label: 'Conversion',
            render: (value) => (
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${scorePill(value)}`}>
                {value}%
              </span>
            ),
          },
          {
            key: 'taskCompletion',
            label: 'Task Completion',
            render: (value) => `${value}%`,
          },
          {
            key: 'growth',
            label: 'Growth',
            render: (value) => <span className="font-semibold text-emerald-700">+{value}%</span>,
          },
        ]}
        rows={advisorPerformance}
      />
    </div>
  )
}
