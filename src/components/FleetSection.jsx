import { Car } from 'lucide-react'
import { FLEET } from '../lib/constants'
import Reveal from './Reveal'

export default function FleetSection() {
  return (
    <section className="bg-canvas-alt py-10 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900 md:text-4xl">Our Fleet</h2>
          <p className="mt-3 text-slate-600">
            A premium, well-maintained fleet suited to families, groups and business travel.
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 md:mt-12 sm:grid-cols-3">
          {FLEET.map((v, i) => (
            <Reveal key={v.name} delay={i * 100}>
              <div className="group h-full overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-xl">
                <div className="flex h-48 items-center justify-center overflow-hidden bg-canvas-alt">
                  {v.image ? (
                    <img
                      src={v.image}
                      alt={v.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
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
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-slate-500 md:mt-8">
          Vehicle allocation depends on passenger numbers, luggage and availability. Confirmed at booking.
        </p>
      </div>
    </section>
  )
}
