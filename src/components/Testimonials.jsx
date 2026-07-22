import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../lib/constants'

export default function Testimonials() {
  return (
    <section className="bg-canvas py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            What our customers say
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-gold-200 bg-white p-7 shadow-sm"
            >
              <div className="flex gap-1 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                "{t.quote}"
              </p>
              <p className="mt-5 text-sm font-semibold text-navy-900">
                {t.name} <span className="font-normal text-slate-500">— {t.suburb}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
