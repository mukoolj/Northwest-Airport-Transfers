import { Phone, Mail } from 'lucide-react'
import { BUSINESS, whatsappLink } from '../lib/constants'
import WhatsAppCTA from '../components/WhatsAppCTA'
import Seo from '../components/Seo'
import { taxiServiceJsonLd } from '../lib/seo'

const QUOTE_ITEMS = [
  { emoji: '📍', label: 'Suburb' },
  { emoji: '📅', label: 'Date & time' },
  { emoji: '👥', label: "Passengers & children's ages" },
  { emoji: '🧳', label: 'Bags large & small' },
  { emoji: '🍼', label: 'Pram yes/no' },
  { emoji: '✈️', label: 'Departing or arriving' },
  { emoji: '', label: 'Terminal' },
  { emoji: '', label: 'Flight number if arriving' },
]

export default function Contact() {
  return (
    <>
      <Seo
        title="Book Airport Transfer North West Sydney | Northwest Airport Transfers"
        description="Book your North West Sydney airport transfer on WhatsApp. Fixed fares, child seats, flight tracking. Call or message 0493 002 728."
        jsonLd={taxiServiceJsonLd}
      />

      <section className="bg-canvas py-10 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full border border-gold-300 bg-gold-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-gold-600">
            Contact / Book Now
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-navy-900 md:text-5xl">
            Ready to book or get a quote?
          </h1>
          <p className="mt-4 text-slate-600">
            Reach us however suits you — WhatsApp gets the fastest reply.
          </p>

          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:mt-9">
            <WhatsAppCTA label="Chat on WhatsApp" size="lg" showPromise={false} />
            <a
              href={BUSINESS.phoneTel}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-8 py-4 text-base font-semibold text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600"
            >
              <Phone size={20} />
              Call {BUSINESS.phoneDisplay}
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-8 py-4 text-base font-semibold text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600"
            >
              <Mail size={20} />
              Email us
            </a>
          </div>

          <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-line bg-white p-7 text-left shadow-sm md:mt-12">
            <h2 className="font-display text-lg font-bold text-navy-900">
              To get your fixed fare, send us:
            </h2>
            <ul className="mt-4 space-y-2.5">
              {QUOTE_ITEMS.map((item) => (
                <li key={item.label} className="flex items-center gap-2.5 text-sm text-slate-700">
                  {item.emoji && <span aria-hidden="true">{item.emoji}</span>}
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
