import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../lib/constants'
import Reveal from './Reveal'

export default function Testimonials() {
  return (
    <section className="bg-canvas py-10 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900 md:text-4xl">
            What our customers say
          </h2>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-gold-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex gap-1 text-gold-500">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                  "{t.quote}"
                </p>
                <p className="mt-5 text-sm font-semibold text-navy-900">
                  {t.name} <span className="font-normal text-slate-500">— {t.suburb}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
