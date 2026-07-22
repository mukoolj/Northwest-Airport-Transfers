import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import QuickQuote from '../components/QuickQuote'
import IntroOfferBanner from '../components/IntroOfferBanner'
import KeyFeatures from '../components/KeyFeatures'
import CompetitorComparison from '../components/CompetitorComparison'
import FleetSection from '../components/FleetSection'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'
import PricingCards from '../components/PricingCards'
import WhatsAppNudge from '../components/WhatsAppNudge'
import PricingCallout from '../components/PricingCallout'
import WhatsAppCTA from '../components/WhatsAppCTA'
import Seo from '../components/Seo'
import { taxiServiceJsonLd } from '../lib/seo'

export default function Home() {
  return (
    <>
      <Seo
        title="Airport Transfers North West Sydney | From $89 Fixed Fare | Northwest Airport Transfers"
        description="Premium airport transfers across North West Sydney. Fixed fares from $89, all tolls included, no surge pricing. Child seats available. Book on WhatsApp 0493 002 728."
        jsonLd={taxiServiceJsonLd}
      />

      <Hero />

      <QuickQuote />
      <PricingCallout className="bg-canvas-alt" />

      <IntroOfferBanner />
      <WhatsAppNudge className="bg-canvas" />

      <KeyFeatures />
      <CompetitorComparison />

      <FleetSection />
      <PricingCallout className="bg-canvas" />

      <Testimonials />
      <PricingCallout className="bg-canvas-alt" />

      <WhyChooseUs />
      <PricingCallout className="bg-canvas" />

      <section className="bg-canvas py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Fixed-fare pricing by region
            </h2>
            <p className="mt-3 text-slate-600">
              Introductory pricing valid until 31 December 2026. All tolls included, no hidden fees.
            </p>
          </div>
          <div className="mt-12">
            <PricingCards />
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/pricing"
              className="text-sm font-semibold text-gold-600 underline-offset-4 hover:underline"
            >
              View full pricing and suburb list →
            </Link>
          </div>
        </div>
      </section>
      <WhatsAppNudge className="bg-canvas-alt" />

      <section className="bg-canvas-alt py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Ready to book your transfer?
          </h2>
          <p className="mt-3 text-slate-600">
            Message us on WhatsApp for a fixed quote — we reply within 15 minutes.
          </p>
          <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <WhatsAppCTA label="Book on WhatsApp" size="lg" showPromise={false} />
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-navy-900/20 px-8 py-4 text-base font-semibold text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600"
            >
              Other ways to reach us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
