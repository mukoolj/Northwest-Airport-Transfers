import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import FamilySection from '../components/FamilySection'
import FareCalculator from '../components/FareCalculator'
import IntroOfferBanner from '../components/IntroOfferBanner'
import KeyFeatures from '../components/KeyFeatures'
import CompetitorComparison from '../components/CompetitorComparison'
import FleetSection from '../components/FleetSection'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'
import FareCategoryCards from '../components/FareCategoryCards'
import PricingTable from '../components/PricingTable'
import PricingActions from '../components/PricingActions'
import AirportPickupNote from '../components/AirportPickupNote'
import WhatsAppNudge from '../components/WhatsAppNudge'
import PricingCallout from '../components/PricingCallout'
import WhatsAppCTA from '../components/WhatsAppCTA'
import Reveal from '../components/Reveal'
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
      <TrustBar />
      <FamilySection />
      <FareCalculator />

      <IntroOfferBanner />

      <section id="fares" className="relative scroll-mt-28 overflow-hidden bg-canvas py-10 md:scroll-mt-32 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-300/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold text-navy-900 md:text-4xl">
              Fixed-fare pricing by region
            </h2>
            <p className="mt-3 text-slate-600">
              Introductory pricing valid until 31 December 2026. All tolls included, no hidden fees.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-6 space-y-6 md:mt-12">
            <FareCategoryCards />
            <AirportPickupNote />
            <PricingTable />
            <PricingActions />
          </Reveal>
          <div className="mt-6 text-center md:mt-8">
            <Link
              to="/pricing"
              className="text-sm font-semibold text-gold-600 underline-offset-4 hover:underline"
            >
              View full pricing and suburb list →
            </Link>
          </div>
        </div>
      </section>
      <WhatsAppNudge className="bg-canvas" />

      <KeyFeatures />
      <CompetitorComparison />

      <FleetSection />
      <PricingCallout />

      <Testimonials />
      <PricingCallout />

      <WhyChooseUs />
      <PricingCallout />

      <section className="relative overflow-hidden bg-canvas-alt py-10 text-center md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gold-300/25 blur-3xl"
        />
        <Reveal className="relative mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-navy-900 md:text-4xl">
            Ready to book your transfer?
          </h2>
          <p className="mt-3 text-slate-600">
            Message us on WhatsApp for a fixed quote — we reply within 15 minutes.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:mt-7">
            <WhatsAppCTA label="Get a Quote on WhatsApp" size="lg" showPromise={false} />
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-navy-900/20 px-8 py-4 text-base font-semibold text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600"
            >
              Other ways to reach us
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
