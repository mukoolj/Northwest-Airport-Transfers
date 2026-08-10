import { Check } from 'lucide-react'
import WhatsAppCTA from './WhatsAppCTA'
import Reveal from './Reveal'

const REASONS = [
  'Vehicle suitability discussed beforehand',
  'Fare agreed upfront — no surprises',
  'Family and luggage requirements arranged before pickup',
  'Private, direct transfer — no shared shuttle',
  'Professional, fully vetted local drivers',
]

export default function WhyChooseUs() {
  return (
    <section className="bg-canvas-alt py-10 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 md:items-center md:gap-10">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-navy-900 md:text-4xl">
            Know what you're getting — before you even book
          </h2>
          <p className="mt-4 text-slate-600">
            We're a local North West Sydney business built around one idea:
            airport transfers should be simple, reliable and stress-free —
            every time.
          </p>
          <div className="mt-6 md:mt-8">
            <WhatsAppCTA label="Get a Quote on WhatsApp" showPromise={false} />
          </div>
        </Reveal>

        <Reveal delay={150} as="ul" className="space-y-4">
          {REASONS.map((reason) => (
            <li
              key={reason}
              className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-x-0.5 hover:border-gold-300 hover:shadow-md"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-50 text-gold-600">
                <Check size={14} strokeWidth={3} />
              </span>
              <span className="text-sm text-slate-700">{reason}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
