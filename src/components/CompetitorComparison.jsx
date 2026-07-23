import { COMPETITORS } from '../lib/constants'

export default function CompetitorComparison() {
  return (
    <section className="bg-canvas-alt py-10 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900 md:text-4xl">
            Why pay more? See how we compare.
          </h2>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-white shadow-sm md:mt-10">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-line bg-canvas-alt">
                <th className="px-5 py-3 text-sm font-semibold text-slate-600">Service</th>
                <th className="px-5 py-3 text-right text-sm font-semibold text-slate-600">Fare</th>
              </tr>
            </thead>
            <tbody>
              {COMPETITORS.map((row) => (
                <tr
                  key={row.service}
                  className={`border-b border-line last:border-b-0 ${row.highlight ? 'bg-gold-50' : ''}`}
                >
                  <td
                    className={`px-5 py-4 text-sm ${
                      row.highlight ? 'font-bold text-navy-900' : 'text-slate-700'
                    }`}
                  >
                    {row.service}
                  </td>
                  <td
                    className={`px-5 py-4 text-right text-sm ${
                      row.highlight ? 'font-extrabold text-gold-600' : 'text-slate-600'
                    }`}
                  >
                    {row.fare}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-slate-500">
          Unlike rideshare apps, our price is fixed and confirmed before you book —
          even at 4am on a public holiday. No surge pricing. Ever.
        </p>
      </div>
    </section>
  )
}
