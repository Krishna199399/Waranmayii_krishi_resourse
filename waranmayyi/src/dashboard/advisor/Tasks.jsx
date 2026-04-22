import React, { useMemo, useState } from 'react'
import { AlarmClock, CheckCircle2, CircleAlert, ListTodo } from 'lucide-react'
import Card from '../../components/Card'
import Table from '../../components/Table'

const tasks = [
  {
    id: 'TSK-801',
    title: 'Demo bio-fertilizer usage',
    farmer: 'Savita Jadhav',
    dueDate: 'Apr 23, 2026',
    priority: 'High',
    status: 'In Progress',
  },
  {
    id: 'TSK-802',
    title: 'Collect KYC documents',
    farmer: 'Ramesh Patil',
    dueDate: 'Apr 22, 2026',
    priority: 'Medium',
    status: 'Open',
  },
  {
    id: 'TSK-803',
    title: 'Field health review',
    farmer: 'Lalita More',
    dueDate: 'Apr 21, 2026',
    priority: 'High',
    status: 'Overdue',
  },
  {
    id: 'TSK-804',
    title: 'Follow-up on irrigation setup',
    farmer: 'Mahesh Mane',
    dueDate: 'Apr 24, 2026',
    priority: 'Low',
    status: 'Open',
  },
  {
    id: 'TSK-805',
    title: 'Complete product trial feedback',
    farmer: 'Prakash Koli',
    dueDate: 'Apr 20, 2026',
    priority: 'Medium',
    status: 'Completed',
  },
]

const statusPill = {
  Open: 'bg-sky-50 text-sky-700',
  'In Progress': 'bg-amber-50 text-amber-700',
  Overdue: 'bg-rose-50 text-rose-700',
  Completed: 'bg-emerald-50 text-emerald-700',
}

const priorityPill = {
  High: 'bg-rose-100 text-rose-700',
  Medium: 'bg-amber-100 text-amber-700',
  Low: 'bg-slate-100 text-slate-700',
}

export default function Tasks() {
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredTasks = useMemo(
    () => tasks.filter((task) => statusFilter === 'all' || task.status === statusFilter),
    [statusFilter]
  )

  const openCount = tasks.filter((task) => task.status === 'Open').length
  const overdueCount = tasks.filter((task) => task.status === 'Overdue').length
  const completedCount = tasks.filter((task) => task.status === 'Completed').length

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Advisor Tasks</h1>
          <p className="mt-1 text-sm text-slate-500">
            Monitor high-priority work and complete field follow-ups on time.
          </p>
        </div>

        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-emerald-300 transition focus:ring"
        >
          <option value="all">All task states</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Overdue">Overdue</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card
          title="Total Tasks"
          value={tasks.length}
          subtitle="Current week"
          icon={ListTodo}
          trend={8}
          tone="slate"
        />
        <Card title="Open" value={openCount} subtitle="Need assignment" icon={AlarmClock} tone="sky" />
        <Card title="Overdue" value={overdueCount} subtitle="Act now" icon={CircleAlert} tone="amber" />
        <Card
          title="Completed"
          value={completedCount}
          subtitle="Delivered this week"
          icon={CheckCircle2}
          tone="emerald"
          trend={10}
        />
      </div>

      <Table
        title="Task Queue"
        subtitle={`${filteredTasks.length} task(s) available`}
        columns={[
          {
            key: 'title',
            label: 'Task',
            render: (value, row) => (
              <div>
                <p className="font-semibold text-slate-800">{value}</p>
                <p className="text-xs text-slate-500">{row.id} - Farmer: {row.farmer}</p>
              </div>
            ),
          },
          {
            key: 'priority',
            label: 'Priority',
            render: (value) => (
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${priorityPill[value]}`}>
                {value}
              </span>
            ),
          },
          { key: 'dueDate', label: 'Due Date' },
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
        rows={filteredTasks}
        emptyMessage="No tasks match this status."
      />
    </div>
  )
}
