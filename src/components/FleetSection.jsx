import { Check } from 'lucide-react'
import { FLEET, FLEET_AVAILABILITY_NOTE } from '../lib/constants'
import WhatsAppCTA from './WhatsAppCTA'
import Reveal from './Reveal'

export default function FleetSection() {
  return (
    <section className="bg-canvas-alt py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900 md:text-4xl">Our Fleet</h2>
          <p className="mt-3 text-slate-600">
            A premium, well-maintained fleet — matched to your trip when you book.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-14 lg:grid-cols-3">
          {FLEET.map((v, i) => (
            <Reveal key={v.name} delay={i * 100}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-xl">
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <img
                    src={v.image}
                    alt={v.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: v.filter }}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-navy-900/90 px-3 py-1.5 text-xs font-bold text-gold-400 shadow-md backdrop-blur-sm">
                    {v.badge}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-navy-900">{v.name}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-gold-600">{v.category}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{v.description}</p>

                  <ul className="mt-4 space-y-2">
                    {v.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check size={15} strokeWidth={3} className="mt-0.5 shrink-0 text-gold-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mx-auto mt-8 max-w-xl text-center md:mt-12">
          <p className="text-sm font-medium text-slate-500">{FLEET_AVAILABILITY_NOTE}</p>
          <div className="mt-5 flex justify-center">
            <WhatsAppCTA
              label="Ask Which Vehicle Suits Your Trip"
              message="Hi, I'd like help choosing the right vehicle for our airport transfer."
              showPromise={false}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
