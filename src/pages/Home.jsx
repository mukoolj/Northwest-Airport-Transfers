import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import QuickQuote from '../components/QuickQuote'
import IntroOfferBanner from '../components/IntroOfferBanner'
import KeyFeatures from '../components/KeyFeatures'
import FleetSection from '../components/FleetSection'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'
import PricingCards from '../components/PricingCards'
import WhatsAppNudge from '../components/WhatsAppNudge'
import WhatsAppCTA from '../components/WhatsAppCTA'

export default function Home() {
  return (
    <>
      <Hero />

      <QuickQuote />
      <WhatsAppNudge className="bg-navy-800" />

      <IntroOfferBanner />
      <WhatsAppNudge />

      <KeyFeatures />
      <WhatsAppNudge />

      <FleetSection />
      <WhatsAppNudge className="bg-navy-800" />

      <Testimonials />
      <WhatsAppNudge />

      <WhyChooseUs />
      <WhatsAppNudge className="bg-navy-800" />

      <section className="bg-navy-900 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Fixed-fare pricing by region
            </h2>
            <p className="mt-3 text-white/65">
              Introductory pricing valid until 31 December 2026. All tolls included, no hidden fees.
            </p>
          </div>
          <div className="mt-12">
            <PricingCards />
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/pricing"
              className="text-sm font-semibold text-gold-400 underline-offset-4 hover:underline"
            >
              View full pricing and suburb list →
            </Link>
          </div>
        </div>
      </section>
      <WhatsAppNudge className="bg-navy-800" />

      <section className="bg-navy-800 py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Ready to book your transfer?
          </h2>
          <p className="mt-3 text-white/65">
            Message us on WhatsApp for a fixed quote, or fill out the booking form.
          </p>
          <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <WhatsAppCTA label="Book on WhatsApp" size="lg" showPromise={false} />
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              Go to Booking Form
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
