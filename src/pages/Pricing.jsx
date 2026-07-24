import WhatsAppNudge from '../components/WhatsAppNudge'
import WhatsAppCTA from '../components/WhatsAppCTA'
import HowItWorks from '../components/HowItWorks'
import Faq from '../components/Faq'
import Seo from '../components/Seo'
import FareCategoryCards from '../components/FareCategoryCards'
import PricingTable from '../components/PricingTable'
import PricingActions from '../components/PricingActions'
import SuburbAccordion from '../components/SuburbAccordion'
import { FAQS } from '../lib/constants'
import { taxiServiceJsonLd, faqJsonLd } from '../lib/seo'

export default function Pricing() {
  return (
    <>
      <Seo
        title="Airport Transfer Prices North West Sydney | Fixed Fares from $89"
        description="Fixed airport transfer fares from $89 across North West Sydney. Parramatta, Blacktown, Hills District, Rouse Hill and more. All tolls included. No hidden charges."
        jsonLd={[taxiServiceJsonLd, faqJsonLd(FAQS)]}
      />

      <section className="bg-canvas py-10 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full border border-gold-300 bg-gold-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-gold-600">
            Fixed-Fare Pricing
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-navy-900 md:text-5xl">
            Transparent pricing. No hidden fees.
          </h1>
          <p className="mt-4 text-slate-600">
            Every fare is fixed and confirmed before your trip — all tolls
            included, no surge pricing, ever. Introductory pricing valid till
            31 December 2026.
          </p>
        </div>
      </section>

      <section className="bg-canvas pb-10 md:pb-16">
        <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6">
          <FareCategoryCards />
          <PricingTable />
          <PricingActions />
          <SuburbAccordion />
        </div>
      </section>

      <WhatsAppNudge className="bg-canvas-alt" />

      <HowItWorks />

      <section className="bg-canvas-alt py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="font-display text-base font-bold text-navy-900 md:text-xl">
            A standard sedan from 13cabs costs $108 from Parramatta. We charge
            $89 — in a premium 7-seat SUV with all tolls included.
          </p>
        </div>
      </section>

      <Faq />

      <section className="bg-canvas py-10 text-center md:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-navy-900 md:text-4xl">
            Not sure which region you're in?
          </h2>
          <p className="mt-3 text-slate-600">
            Message us your suburb on WhatsApp and we'll confirm your fixed fare in minutes.
          </p>
          <div className="mt-6 md:mt-7">
            <WhatsAppCTA label="Get my fare on WhatsApp" size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
