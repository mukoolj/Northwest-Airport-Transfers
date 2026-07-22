import PricingCards from '../components/PricingCards'
import WhatsAppNudge from '../components/WhatsAppNudge'
import WhatsAppCTA from '../components/WhatsAppCTA'
import { useCountdown } from '../hooks/useCountdown'
import { BUSINESS } from '../lib/constants'

export default function Pricing() {
  const { days, expired } = useCountdown(BUSINESS.offerEndDate)

  return (
    <>
      <section className="bg-navy-900 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-gold-400">
            Fixed-Fare Pricing
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold text-white sm:text-5xl">
            Pricing by Region
          </h1>
          <p className="mt-4 text-white/70">
            All fares are fixed, include every toll, and are confirmed before you travel.
            No surge pricing, ever.
          </p>
          {!expired && (
            <p className="mt-2 text-sm font-semibold text-gold-400">
              Introductory pricing ends in {days} {days === 1 ? 'day' : 'days'} — locked in until 31 December 2026
            </p>
          )}
        </div>
      </section>

      <section className="bg-navy-900 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <PricingCards detailed />
        </div>
      </section>

      <WhatsAppNudge className="bg-navy-800" />

      <section className="bg-navy-800 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center font-display text-2xl font-bold text-white sm:text-3xl">
            What counts as Standard vs Family/Group?
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-navy-900 p-6">
              <h3 className="font-display text-lg font-bold text-gold-400">Standard</h3>
              <p className="mt-2 text-sm text-white/70">
                1–4 passengers, up to 3 bags, no child seats required.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-navy-900 p-6">
              <h3 className="font-display text-lg font-bold text-gold-400">Family / Group</h3>
              <p className="mt-2 text-sm text-white/70">
                Child seats, 4+ bags, a pram, or 5+ passengers.
              </p>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-white/50">
            Not sure which applies to you? Send us your trip details on WhatsApp and we'll confirm your fare.
          </p>
        </div>
      </section>

      <section className="bg-navy-900 py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Not sure which region you're in?
          </h2>
          <p className="mt-3 text-white/65">
            Message us your suburb on WhatsApp and we'll confirm your fixed fare in minutes.
          </p>
          <div className="mt-7">
            <WhatsAppCTA label="Get my fare on WhatsApp" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
