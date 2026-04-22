import React from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const fallbackSeries = [{ key: 'value', color: '#059669', label: 'Value' }]

export default function Chart({
  title,
  subtitle,
  data = [],
  xKey = 'name',
  type = 'line',
  series = fallbackSeries,
  height = 280,
}) {
  const chartSeries = Array.isArray(series) && series.length ? series : fallbackSeries

  const tooltipStyle = {
    borderRadius: '12px',
    border: '1px solid #d1fae5',
    boxShadow: '0 8px 24px rgba(2, 6, 23, 0.1)',
    fontSize: '12px',
  }

  return (
    <section className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-slate-200/70">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        {subtitle ? <p className="mt-1 text-sm text-slate-500">{subtitle}</p> : null}
      </div>

      {data.length === 0 ? (
        <div className="flex h-60 items-center justify-center rounded-xl border border-dashed border-slate-200 text-sm text-slate-500">
          No chart data available.
        </div>
      ) : (
        <div style={{ height }}>
          <ResponsiveContainer width="100%" height="100%">
            {type === 'bar' ? (
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" />
                <XAxis dataKey={xKey} tick={{ fill: '#475569', fontSize: 12 }} />
                <YAxis tick={{ fill: '#475569', fontSize: 12 }} />
                <Tooltip
                  cursor={{ fill: 'rgba(16,185,129,0.08)' }}
                  contentStyle={tooltipStyle}
                  labelStyle={{ color: '#0f172a' }}
                />
                {chartSeries.map((item) => (
                  <Bar
                    key={item.key}
                    dataKey={item.key}
                    fill={item.color || '#059669'}
                    radius={[8, 8, 0, 0]}
                    name={item.label || item.key}
                  />
                ))}
              </BarChart>
            ) : (
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" />
                <XAxis dataKey={xKey} tick={{ fill: '#475569', fontSize: 12 }} />
                <YAxis tick={{ fill: '#475569', fontSize: 12 }} />
                <Tooltip
                  cursor={{ stroke: '#86efac', strokeDasharray: '3 3' }}
                  contentStyle={tooltipStyle}
                  labelStyle={{ color: '#0f172a' }}
                />
                {chartSeries.map((item) => (
                  <Line
                    key={item.key}
                    type="monotone"
                    dataKey={item.key}
                    stroke={item.color || '#059669'}
                    strokeWidth={2.5}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                    name={item.label || item.key}
                  />
                ))}
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      )}
    </section>
  )
}