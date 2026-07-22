import { Phone, Mail } from 'lucide-react'
import { BUSINESS } from '../lib/constants'
import WhatsAppCTA from '../components/WhatsAppCTA'
import BookingForm from '../components/BookingForm'

export default function Contact() {
  return (
    <>
      <section className="bg-canvas py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full border border-gold-300 bg-gold-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-gold-600">
            Contact / Book Now
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold text-navy-900 sm:text-5xl">
            Book your airport transfer
          </h1>
          <p className="mt-4 text-slate-600">
            Reach us on WhatsApp for the fastest response, or complete the booking form below.
          </p>
        </div>
      </section>

      <section className="bg-canvas-alt py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            Prefer to chat?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Most customers find it easier to get a quote directly on WhatsApp
            — we reply within 15 minutes.
          </p>
          <div className="mt-7">
            <WhatsAppCTA label="Chat on WhatsApp instead" size="lg" />
          </div>

          <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3 border-t border-line pt-8 text-sm text-slate-600 sm:flex-row sm:justify-center sm:gap-6">
            <a href={BUSINESS.phoneTel} className="flex items-center gap-2 hover:text-gold-600">
              <Phone size={16} />
              {BUSINESS.phoneDisplay}
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 hover:text-gold-600">
              <Mail size={16} />
              {BUSINESS.email}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              Or request a booking below
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              We'll confirm your booking within 2 hours via WhatsApp or email.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>
    </>
  )
}
