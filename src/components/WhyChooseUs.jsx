import { Check } from 'lucide-react'
import WhatsAppCTA from './WhatsAppCTA'

const REASONS = [
  'Locally owned and operated — North West Sydney specialists',
  'Professional, fully vetted drivers',
  'Clean, modern vehicles on every trip',
  'Direct, real-time communication via WhatsApp',
  'Transparent, fixed pricing agreed before you travel',
  'Support before, during and after your trip',
]

export default function WhyChooseUs() {
  return (
    <section className="bg-canvas-alt py-10 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 md:items-center md:gap-10">
        <div>
          <h2 className="font-display text-2xl font-bold text-navy-900 md:text-4xl">
            Why choose Northwest Airport Transfers
          </h2>
          <p className="mt-4 text-slate-600">
            We're a local North West Sydney business built around one idea:
            airport transfers should be simple, reliable and stress-free —
            every time.
          </p>
          <div className="mt-6 md:mt-8">
            <WhatsAppCTA label="Chat with us on WhatsApp" showPromise={false} />
          </div>
        </div>

        <ul className="space-y-4">
          {REASONS.map((reason) => (
            <li key={reason} className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-sm">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-50 text-gold-600">
                <Check size={14} strokeWidth={3} />
              </span>
              <span className="text-sm text-slate-700">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
