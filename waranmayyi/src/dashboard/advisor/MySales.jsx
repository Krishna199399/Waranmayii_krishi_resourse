import React, { useMemo, useState } from 'react'
import { CircleDollarSign, CreditCard, ReceiptIndianRupee } from 'lucide-react'
import Card from '../../components/Card'
import Chart from '../../components/Chart'
import Table from '../../components/Table'

const monthlySales = [
  { month: 'Jan', revenue: 142000, target: 130000 },
  { month: 'Feb', revenue: 156000, target: 145000 },
  { month: 'Mar', revenue: 171000, target: 160000 },
  { month: 'Apr', revenue: 164500, target: 170000 },
  { month: 'May', revenue: 189000, target: 180000 },
  { month: 'Jun', revenue: 202500, target: 195000 },
]

const orders = [
  {
    id: 'INV-2201',
    farmer: 'Ramesh Patil',
    product: 'Drip Kit - 2 Acre',
    amount: 38500,
    date: 'Apr 21, 2026',
    status: 'Collected',
  },
  {
    id: 'INV-2202',
    farmer: 'Savita Jadhav',
    product: 'Bio Fertilizer Pack',
    amount: 12400,
    date: 'Apr 20, 2026',
    status: 'Pending',
  },
  {
    id: 'INV-2203',
    farmer: 'Prakash Koli',
    product: 'Cotton Seed Premium',
    amount: 17800,
    date: 'Apr 19, 2026',
    status: 'Collected',
  },
  {
    id: 'INV-2204',
    farmer: 'Mahesh Mane',
    product: 'Foliar Nutrition Combo',
    amount: 9400,
    date: 'Apr 18, 2026',
    status: 'Due Today',
  },
  {
    id: 'INV-2205',
    farmer: 'Lalita More',
    product: 'Pest Shield Bundle',
    amount: 13600,
    date: 'Apr 17, 2026',
    status: 'Pending',
  },
]

const currency = (amount) => `₹${amount.toLocaleString('en-IN')}`

const statusPill = {
  Collected: 'bg-emerald-50 text-emerald-700',
  Pending: 'bg-amber-50 text-amber-700',
  'Due Today': 'bg-rose-50 text-rose-700',
}

export default function MySales() {
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => statusFilter === 'all' || order.status === statusFilter)
  }, [statusFilter])

  const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0)
  const collectedAmount = orders
    .filter((order) => order.status === 'Collected')
    .reduce((sum, order) => sum + order.amount, 0)
  const pendingAmount = totalRevenue - collectedAmount

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">My Sales</h1>
          <p className="mt-1 text-sm text-slate-500">
            Revenue trend, invoice status, and collection pipeline.
          </p>
        </div>

        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-emerald-300 transition focus:ring"
        >
          <option value="all">All invoice states</option>
          <option value="Collected">Collected</option>
          <option value="Pending">Pending</option>
          <option value="Due Today">Due Today</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card
          title="Invoice Revenue"
          value={currency(totalRevenue)}
          subtitle="Current billing cycle"
          icon={ReceiptIndianRupee}
          trend={12}
          tone="emerald"
        />
        <Card
          title="Collected"
          value={currency(collectedAmount)}
          subtitle="Amount already received"
          icon={CircleDollarSign}
          trend={9}
          tone="sky"
        />
        <Card
          title="Pending Collection"
          value={currency(pendingAmount)}
          subtitle="Follow-up required"
          icon={CreditCard}
          trend={-4}
          tone="amber"
        />
      </div>

      <Chart
        title="Monthly Revenue vs Target"
        subtitle="Track whether monthly sales are beating assigned targets"
        type="bar"
        data={monthlySales}
        xKey="month"
        series={[
          { key: 'revenue', color: '#059669', label: 'Revenue' },
          { key: 'target', color: '#94a3b8', label: 'Target' },
        ]}
      />

      <Table
        title="Recent Invoices"
        subtitle={`${filteredOrders.length} invoice(s) shown`}
        columns={[
          { key: 'id', label: 'Invoice' },
          { key: 'farmer', label: 'Farmer' },
          { key: 'product', label: 'Product' },
          {
            key: 'amount',
            label: 'Amount',
            render: (value) => <span className="font-semibold">{currency(value)}</span>,
          },
          { key: 'date', label: 'Date' },
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
        rows={filteredOrders}
        emptyMessage="No invoices available for this status."
      />
    </div>
  )
}
