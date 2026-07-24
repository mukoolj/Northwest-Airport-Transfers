import { BUSINESS } from '../lib/constants'
import WhatsAppCTA from './WhatsAppCTA'

const NOTES = [
  'All fares are one-way and fixed — confirmed before your trip',
  'All tolls included — no conditions',
  'Introductory pricing valid till 31 December 2026',
  'Group fares subject to availability of second vehicle',
  'Travelling with a pram counts as one large bag towards your luggage allowance',
  'Not sure which category applies? Just ask on WhatsApp',
]

export default function PricingActions() {
  return (
    <div className="text-center">
      <WhatsAppCTA label="Get your fixed quote on WhatsApp" size="lg" showPromise={false} />
      <p className="mt-3 text-sm text-slate-600">
        Or call us on{' '}
        <a href={BUSINESS.phoneTel} className="font-semibold text-gold-600 hover:underline">
          {BUSINESS.phoneDisplay}
        </a>
      </p>

      <ul className="mx-auto mt-8 max-w-xl space-y-2 text-left">
        {NOTES.map((note) => (
          <li key={note} className="flex items-start gap-2 text-xs text-slate-500">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-400" />
            {note}
          </li>
        ))}
      </ul>
    </div>
  )
}
