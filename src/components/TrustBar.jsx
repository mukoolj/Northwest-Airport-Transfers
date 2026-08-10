import { Check } from 'lucide-react'

const ITEMS = [
  'Fixed Confirmed Fares',
  'Tolls Included',
  'Child Seats Available',
  'No Surge Pricing',
]

export default function TrustBar() {
  return (
    <div className="border-b border-line bg-canvas">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-4 px-4 py-6 sm:px-6 md:flex md:flex-wrap md:items-center md:justify-center md:gap-x-10 md:gap-y-2 md:py-5">
        {ITEMS.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <Check size={16} strokeWidth={3} className="shrink-0 text-gold-600" />
            <span className="text-sm font-medium text-navy-900">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
