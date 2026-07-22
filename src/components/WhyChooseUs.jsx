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
    <section className="bg-navy-800 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Why choose Northwest Airport Transfers
          </h2>
          <p className="mt-4 text-white/65">
            We're a local North West Sydney business built around one idea:
            airport transfers should be simple, reliable and stress-free —
            every time.
          </p>
          <div className="mt-8">
            <WhatsAppCTA label="Chat with us on WhatsApp" showPromise={false} />
          </div>
        </div>

        <ul className="space-y-4">
          {REASONS.map((reason) => (
            <li key={reason} className="flex items-start gap-3 rounded-xl bg-navy-900 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-400">
                <Check size={14} strokeWidth={3} />
              </span>
              <span className="text-sm text-white/80">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
