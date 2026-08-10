import { Users, Luggage, Baby, PackagePlus, Armchair } from 'lucide-react'
import { QUOTE_REQUEST_MESSAGE } from '../lib/constants'
import WhatsAppCTA from './WhatsAppCTA'
import Reveal from './Reveal'

const CHECKLIST = [
  { icon: Users, label: 'Passenger count' },
  { icon: Luggage, label: 'Suitcase & luggage details' },
  { icon: Baby, label: 'Prams' },
  { icon: PackagePlus, label: 'Oversized or bulky items' },
  { icon: Armchair, label: 'Child-seat requirements' },
]

export default function LuggageReassurance() {
  return (
    <section className="bg-canvas py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-navy-900 md:text-4xl">
            Suitcases. Prams. Carry-ons. We've thought about the space.
          </h2>
          <p className="mt-4 text-slate-600">
            Every trip is different, so tell us what you're bringing when you request your
            quote — passenger count, luggage, prams, oversized items and any child-seat
            requirements — and we'll confirm a vehicle with the right space before pickup.
          </p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-5">
          {CHECKLIST.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-white p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-50 text-gold-600">
                  <Icon size={20} />
                </span>
                <p className="text-xs font-medium leading-snug text-navy-900">{item.label}</p>
              </div>
            )
          })}
        </Reveal>

        <Reveal delay={150} className="mt-8">
          <WhatsAppCTA
            label="Tell Us What You're Bringing"
            message={QUOTE_REQUEST_MESSAGE}
            showPromise={false}
          />
        </Reveal>
      </div>
    </section>
  )
}
