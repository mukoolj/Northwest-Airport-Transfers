import { ArrowRight } from 'lucide-react'
import { whatsappLink } from '../lib/constants'

export default function PricingCallout({ className = '' }) {
  return (
    <div className={`border-y border-gold-200 bg-gold-50 py-4 ${className}`}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-4 text-center sm:flex-row sm:gap-4 sm:px-6">
        <p className="text-sm font-semibold text-navy-900 sm:text-base">
          Fares from $89 — fixed, all tolls included.
        </p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-bold text-gold-700 hover:text-gold-600"
        >
          Get your fare
          <ArrowRight size={15} />
        </a>
      </div>
    </div>
  )
}
