import { Car } from 'lucide-react'
import { FLEET } from '../lib/constants'

export default function FleetSection() {
  return (
    <section className="bg-canvas-alt py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">Our Fleet</h2>
          <p className="mt-3 text-slate-600">
            A premium, well-maintained fleet suited to families, groups and business travel.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {FLEET.map((v) => (
            <div
              key={v.name}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-colors hover:border-gold-400"
            >
              <div className="flex h-48 items-center justify-center bg-canvas-alt">
                {v.image ? (
                  <img
                    src={v.image}
                    alt={v.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    style={{ filter: v.filter }}
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-50 text-gold-600">
                    <Car size={30} />
                  </div>
                )}
              </div>
              <div className="bg-navy-900 p-6 text-center">
                <h3 className="font-display text-xl font-bold text-white">{v.name}</h3>
                <p className="mt-1 text-sm font-semibold text-gold-400">{v.category}</p>
                <p className="mt-2 text-sm text-white/70">{v.description}</p>
                <p className="mt-3 text-xs text-white/40">Subject to availability</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
          Vehicle allocation depends on passenger numbers, luggage and availability. Confirmed at booking.
        </p>
      </div>
    </section>
  )
}
