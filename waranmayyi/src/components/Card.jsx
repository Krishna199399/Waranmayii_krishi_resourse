import React from 'react'
import { TrendingDown, TrendingUp } from 'lucide-react'

const toneStyles = {
  emerald: {
    ring: 'ring-emerald-200/70',
    iconBg: 'bg-emerald-100',
    iconText: 'text-emerald-700',
    valueText: 'text-emerald-700',
  },
  slate: {
    ring: 'ring-slate-200/70',
    iconBg: 'bg-slate-100',
    iconText: 'text-slate-700',
    valueText: 'text-slate-800',
  },
  amber: {
    ring: 'ring-amber-200/70',
    iconBg: 'bg-amber-100',
    iconText: 'text-amber-700',
    valueText: 'text-amber-700',
  },
  sky: {
    ring: 'ring-sky-200/70',
    iconBg: 'bg-sky-100',
    iconText: 'text-sky-700',
    valueText: 'text-sky-700',
  },
  rose: {
    ring: 'ring-rose-200/70',
    iconBg: 'bg-rose-100',
    iconText: 'text-rose-700',
    valueText: 'text-rose-700',
  },
}

export default function Card({
  title,
  value,
  subtitle,
  icon: Icon,
  tone = 'emerald',
  trend,
  badge,
  children,
}) {
  const colors = toneStyles[tone] || toneStyles.emerald

  const hasTrend = trend !== undefined && trend !== null && trend !== ''
  const trendValue = Number(trend)
  const isNumericTrend = !Number.isNaN(trendValue)
  const isTrendPositive = isNumericTrend
    ? trendValue >= 0
    : String(trend).trim().startsWith('+')

  return (
    <article
      className={`bg-white rounded-2xl p-5 shadow-sm ring-1 ${colors.ring} transition-transform duration-200 hover:-translate-y-0.5`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {title}
          </p>
          <p className={`mt-2 text-3xl font-bold ${colors.valueText}`}>{value}</p>
          {subtitle ? <p className="mt-1 text-sm text-slate-500">{subtitle}</p> : null}
        </div>

        {Icon ? (
          <span className={`rounded-xl p-2.5 ${colors.iconBg}`}>
            <Icon className={colors.iconText} size={20} />
          </span>
        ) : null}
      </div>

      <div className="mt-4 flex items-center justify-between">
        {hasTrend ? (
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
              isTrendPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
            }`}
          >
            {isTrendPositive ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
            {isNumericTrend ? `${Math.abs(trendValue)}%` : String(trend)}
          </span>
        ) : (
          <span className="text-xs text-slate-400">No trend</span>
        )}

        {badge ? (
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
            {badge}
          </span>
        ) : null}
      </div>

      {children ? <div className="mt-4 border-t border-slate-100 pt-3">{children}</div> : null}
    </article>
  )
}