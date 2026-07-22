import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import WhatsAppCTA from '../components/WhatsAppCTA'

export default function BookingSuccess() {
  return (
    <section className="flex min-h-[70vh] items-center bg-navy-900 py-16">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/10 text-gold-400">
          <CheckCircle2 size={36} />
        </div>
        <h1 className="mt-6 font-display text-3xl font-extrabold text-white sm:text-4xl">
          Booking Request Received! 🎉
        </h1>
        <p className="mt-4 text-white/70">
          We'll confirm within 2 hours via WhatsApp or email.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4">
          <WhatsAppCTA label="Chat with us on WhatsApp" size="lg" showPromise={false} />
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold-400 hover:text-gold-400"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
