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
              className="flex flex-col items-center rounded-2xl border border-line bg-white p-8 text-center shadow-sm transition-colors hover:border-gold-400"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-50 text-gold-600">
                <Car size={30} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-900">{v.name}</h3>
              <p className="mt-1 text-sm text-gold-600">{v.tagline}</p>
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
