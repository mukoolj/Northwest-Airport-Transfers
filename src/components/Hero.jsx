import { QUOTE_REQUEST_MESSAGE } from '../lib/constants'
import WhatsAppCTA from './WhatsAppCTA'
import heroImage from '../assets/images/jeep.jpg'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <img
        src={heroImage}
        alt="White Jeep Grand Cherokee L, the vehicle used for Northwest Airport Transfers' private Sydney airport transfers"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[68%_center] md:object-[78%_center]"
      />
      {/* Mobile: fairly uniform tint so text stays readable across the full card, since text spans most of the section height on narrow screens. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,20,40,0.80) 0%, rgba(10,20,40,0.68) 45%, rgba(10,20,40,0.88) 100%)',
        }}
      />
      {/* Desktop: dark on the text side, fading out toward the Jeep so it stays clearly visible. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(to right, rgba(10,20,40,0.88) 0%, rgba(10,20,40,0.72) 45%, rgba(10,20,40,0.28) 100%)',
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <h1 className="text-balance max-w-xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          Private Sydney Airport Transfers from $89
        </h1>
        <p className="mt-4 max-w-lg text-balance text-base text-white/85 sm:text-lg">
          Comfortable, reliable airport transfers for families, groups and
          business travellers across North-West and Western Sydney.
        </p>
        <p className="mt-4 max-w-lg text-sm font-medium text-gold-300 sm:text-base">
          Introductory offer · Fixed fares · Tolls included · Child seats available
        </p>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <WhatsAppCTA
            label="Get a Quote on WhatsApp"
            message={QUOTE_REQUEST_MESSAGE}
            size="lg"
            theme="dark"
          />
          <a
            href="#fares"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-gold-400 hover:text-gold-400 sm:text-lg"
          >
            View Fares
          </a>
        </div>
      </div>
    </section>
  )
}
