import { DollarSign, Baby, PlaneLanding, TrendingDown, Ticket, Clock } from 'lucide-react'
import { FEATURES } from '../lib/constants'
import Reveal from './Reveal'

const ICONS = [DollarSign, Baby, PlaneLanding, TrendingDown, Ticket, Clock]

export default function KeyFeatures() {
  return (
    <section className="bg-canvas py-8 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900 md:text-4xl">
            Why families and business travellers choose us
          </h2>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[i]
            return (
              <Reveal key={f.title} delay={i * 60}>
                <div className="group h-full rounded-2xl border border-line bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-lg md:p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-50 text-gold-600 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-navy-900 md:h-11 md:w-11">
                    <Icon className="h-5 w-5 md:h-[22px] md:w-[22px]" />
                  </div>
                  <h3 className="mt-4 font-display text-[15px] font-bold text-navy-900 md:text-lg">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] text-slate-600 md:text-sm">{f.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
