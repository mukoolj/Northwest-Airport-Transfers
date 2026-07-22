import { ChevronDown } from 'lucide-react'
import { FAQS } from '../lib/constants'

export default function Faq() {
  return (
    <section className="bg-canvas-alt py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-line bg-white p-5 shadow-sm open:border-gold-300"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-navy-900">
                {item.q}
                <ChevronDown
                  size={18}
                  className="shrink-0 text-gold-600 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
