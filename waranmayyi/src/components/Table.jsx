import React from 'react'

export default function Table({
  title,
  subtitle,
  columns = [],
  rows = [],
  rowKey = 'id',
  emptyMessage = 'No records found.',
}) {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70">
      {title ? <h3 className="text-lg font-semibold text-slate-800">{title}</h3> : null}
      {subtitle ? <p className="mt-1 text-sm text-slate-500">{subtitle}</p> : null}

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`whitespace-nowrap px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 ${
                    column.className || ''
                  }`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {rows.length ? (
              rows.map((row, index) => (
                <tr key={row[rowKey] || `${index}-${rowKey}`} className="hover:bg-slate-50/80">
                  {columns.map((column) => {
                    const rawValue = row[column.key]
                    const cellValue = column.render
                      ? column.render(rawValue, row, index)
                      : rawValue ?? '--'

                    return (
                      <td
                        key={`${column.key}-${row[rowKey] || index}`}
                        className={`whitespace-nowrap px-3 py-3 text-sm text-slate-700 ${
                          column.cellClassName || ''
                        }`}
                      >
                        {cellValue}
                      </td>
                    )
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={Math.max(columns.length, 1)}
                  className="px-3 py-8 text-center text-sm text-slate-500"
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}