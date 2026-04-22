import React, { useMemo, useState } from 'react'
import { CalendarClock, CheckCheck, ClipboardList, OctagonAlert } from 'lucide-react'
import Card from '../../components/Card'
import Table from '../../components/Table'

const doTasks = [
  {
    id: 'DOT-501',
    task: 'Approve subsidy file batch-17',
    owner: 'Asha Naik',
    dueDate: 'Apr 23, 2026',
    priority: 'High',
    status: 'In Review',
  },
  {
    id: 'DOT-502',
    task: 'Escalation: delayed procurement',
    owner: 'Prerna Joshi',
    dueDate: 'Apr 22, 2026',
    priority: 'High',
    status: 'Escalated',
  },
  {
    id: 'DOT-503',
    task: 'Close overdue collection cases',
    owner: 'Mahesh K',
    dueDate: 'Apr 24, 2026',
    priority: 'Medium',
    status: 'Pending',
  },
  {
    id: 'DOT-504',
    task: 'Validate market-intel report',
    owner: 'Rahul Deshmukh',
    dueDate: 'Apr 26, 2026',
    priority: 'Low',
    status: 'Pending',
  },
  {
    id: 'DOT-505',
    task: 'Complete advisor weekly review',
    owner: 'Asha Naik',
    dueDate: 'Apr 21, 2026',
    priority: 'Medium',
    status: 'Completed',
  },
]

const statusPill = {
  Pending: 'bg-sky-50 text-sky-700',
  'In Review': 'bg-amber-50 text-amber-700',
  Escalated: 'bg-rose-50 text-rose-700',
  Completed: 'bg-emerald-50 text-emerald-700',
}

const priorityPill = {
  High: 'bg-rose-100 text-rose-700',
  Medium: 'bg-amber-100 text-amber-700',
  Low: 'bg-slate-100 text-slate-700',
}

export default function Tasks() {
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredTasks = useMemo(() => {
    return doTasks.filter((task) => statusFilter === 'all' || task.status === statusFilter)
  }, [statusFilter])

  const pending = doTasks.filter((task) => task.status === 'Pending').length
  const inReview = doTasks.filter((task) => task.status === 'In Review').length
  const escalated = doTasks.filter((task) => task.status === 'Escalated').length
  const done = doTasks.filter((task) => task.status === 'Completed').length

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">DO Tasks</h1>
          <p className="mt-1 text-sm text-slate-500">
            Keep critical approvals, escalations, and advisor actions on schedule.
          </p>
        </div>

        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-emerald-300 transition focus:ring"
        >
          <option value="all">All states</option>
          <option value="Pending">Pending</option>
          <option value="In Review">In Review</option>
          <option value="Escalated">Escalated</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card title="Pending" value={pending} subtitle="Waiting action" icon={ClipboardList} tone="sky" />
        <Card title="In Review" value={inReview} subtitle="Approval pipeline" icon={CalendarClock} tone="amber" />
        <Card title="Escalated" value={escalated} subtitle="Needs attention" icon={OctagonAlert} tone="rose" />
        <Card title="Completed" value={done} subtitle="Closed tasks" icon={CheckCheck} tone="emerald" />
      </div>

      <Table
        title="Operational Task Register"
        subtitle={`${filteredTasks.length} task(s) visible`}
        columns={[
          {
            key: 'task',
            label: 'Task',
            render: (value, row) => (
              <div>
                <p className="font-semibold text-slate-800">{value}</p>
                <p className="text-xs text-slate-500">{row.id}</p>
              </div>
            ),
          },
          { key: 'owner', label: 'Owner' },
          { key: 'dueDate', label: 'Due Date' },
          {
            key: 'priority',
            label: 'Priority',
            render: (value) => (
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${priorityPill[value]}`}>
                {value}
              </span>
            ),
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
        rows={filteredTasks}
        emptyMessage="No tasks found for selected state."
      />
    </div>
  )
}
