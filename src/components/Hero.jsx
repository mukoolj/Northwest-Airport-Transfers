import { Phone } from 'lucide-react'
import { BUSINESS } from '../lib/constants'
import WhatsAppCTA from './WhatsAppCTA'
import HeroArt from './HeroArt'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0">
        <HeroArt />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/70 to-navy-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
        <span className="mb-4 inline-block rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-gold-400">
          Fixed-Fare Airport Transfers
        </span>
        <h1 className="text-balance max-w-2xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Stress-Free Airport Transfers Across North West Sydney
        </h1>
        <p className="mt-5 max-w-xl text-balance text-lg text-white/80 sm:text-xl">
          Fixed fares, all tolls included, no surge pricing — ever.
        </p>

        <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <WhatsAppCTA label="Book on WhatsApp" size="lg" theme="dark" />
          <a
            href={BUSINESS.phoneTel}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-gold-400 hover:text-gold-400 sm:text-lg"
          >
            <Phone size={20} />
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
