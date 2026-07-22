import { REGIONS } from '../lib/constants'
import WhatsAppCTA from './WhatsAppCTA'

function PriceRow({ label, price }) {
  return (
    <div className="flex items-baseline justify-between border-t border-white/10 py-3 first:border-t-0">
      <span className="text-sm text-white/70">{label}</span>
      <span className="flex items-baseline gap-2">
        <span className="text-sm text-white/40 line-through">${price.was}</span>
        <span className="font-display text-xl font-extrabold text-gold-400">${price.now}</span>
      </span>
    </div>
  )
}

export default function PricingCards({ detailed = false }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {REGIONS.map((region) => (
        <div
          key={region.id}
          className="flex flex-col rounded-2xl border border-white/10 bg-navy-800 p-6"
        >
          <h3 className="font-display text-lg font-bold text-white">{region.label}</h3>

          <div className="mt-3">
            <PriceRow label="Standard (1–4 pax)" price={region.standard} />
            <PriceRow label="Family / Group (5+ pax)" price={region.family} />
          </div>

          {detailed && (
            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                Suburbs covered
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {region.suburbs.join(', ')}
              </p>
            </div>
          )}

          <div className="mt-5">
            <WhatsAppCTA
              label="Get this fare on WhatsApp"
              message={`Hi, I'd like a quote for an airport transfer from the ${region.label} area.`}
              full
              showPromise={false}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
