import { REGIONS } from '../lib/constants'

function PriceCell({ price }) {
  return (
    <td className="px-4 py-4 sm:px-5">
      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-2">
        <span className="text-sm text-slate-400 line-through">${price.was}</span>
        <span className="font-display text-base font-extrabold text-gold-400 sm:text-lg">
          ${price.now}
        </span>
      </div>
    </td>
  )
}

export default function PricingTable() {
  return (
    <div>
      <p className="mb-3 text-center text-xs font-medium text-slate-500 sm:text-left">
        Normal fare shown <span className="line-through">crossed out</span> — introductory fare shown in gold, valid until 31 December 2026.
      </p>
      <div className="overflow-x-auto rounded-2xl border border-gold-400/20 bg-navy-900">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-gold-400/20 bg-navy-950">
              <th className="px-4 py-4 font-display text-xs font-bold uppercase tracking-wide text-gold-400 sm:px-5 sm:text-sm">
                Region
              </th>
              <th className="px-4 py-4 font-display text-xs font-bold uppercase tracking-wide text-gold-400 sm:px-5 sm:text-sm">
                Standard
              </th>
              <th className="px-4 py-4 font-display text-xs font-bold uppercase tracking-wide text-gold-400 sm:px-5 sm:text-sm">
                Family
              </th>
              <th className="px-4 py-4 sm:px-5">
                <span className="font-display text-xs font-bold uppercase tracking-wide text-gold-400 sm:text-sm">
                  Group
                </span>
                <span className="ml-2 inline-block whitespace-nowrap rounded-full bg-gold-400/15 px-2 py-0.5 text-[10px] font-bold text-gold-400">
                  2 vehicles
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {REGIONS.map((region, i) => (
              <tr
                key={region.id}
                className={`border-b border-white/5 last:border-b-0 ${
                  i % 2 === 0 ? 'bg-navy-900' : 'bg-navy-800'
                }`}
              >
                <td className="px-4 py-4 text-sm font-semibold text-white sm:px-5">
                  {region.label}
                </td>
                <PriceCell price={region.standard} />
                <PriceCell price={region.family} />
                <PriceCell price={region.group} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
