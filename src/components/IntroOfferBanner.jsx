import { useCountdown } from '../hooks/useCountdown'
import { BUSINESS } from '../lib/constants'

function TimeBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-navy-900/90 px-4 py-3 sm:px-6 sm:py-4">
      <span className="font-display text-2xl font-extrabold text-gold-400 sm:text-3xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[11px] uppercase tracking-wide text-white/60 sm:text-xs">
        {label}
      </span>
    </div>
  )
}

export default function IntroOfferBanner() {
  const { days, hours, minutes, seconds, expired } = useCountdown(BUSINESS.offerEndDate)

  return (
    <section className="bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 py-12">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="inline-block rounded-full bg-navy-900 px-4 py-1 text-xs font-bold uppercase tracking-wide text-gold-400">
          Introductory Offer
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
          Save up to $20 on every airport transfer
        </h2>
        <p className="mt-2 text-navy-900/80">
          Locked-in introductory pricing, valid until 31 December 2026
        </p>

        {!expired ? (
          <div className="mt-7 flex items-center justify-center gap-3 sm:gap-4">
            <TimeBlock value={days} label="Days" />
            <TimeBlock value={hours} label="Hours" />
            <TimeBlock value={minutes} label="Mins" />
            <TimeBlock value={seconds} label="Secs" />
          </div>
        ) : (
          <p className="mt-7 font-semibold text-navy-900">
            This offer has ended — WhatsApp us for current pricing.
          </p>
        )}
      </div>
    </section>
  )
}
