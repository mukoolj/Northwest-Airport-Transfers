import { DollarSign, Baby, PlaneLanding, TrendingDown, Ticket, Clock } from 'lucide-react'
import { FEATURES } from '../lib/constants'

const ICONS = [DollarSign, Baby, PlaneLanding, TrendingDown, Ticket, Clock]

export default function KeyFeatures() {
  return (
    <section className="bg-navy-900 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Why families and business travellers choose us
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[i]
            return (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-navy-800 p-6 transition-colors hover:border-gold-400/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{f.title}</h3>
                <p className="mt-1.5 text-sm text-white/65">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
