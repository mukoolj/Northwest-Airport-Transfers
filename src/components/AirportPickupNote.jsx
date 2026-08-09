import { PlaneLanding } from 'lucide-react'
import { AIRPORT_PICKUP_SURCHARGE } from '../lib/constants'

export default function AirportPickupNote() {
  return (
    <div className="flex items-center gap-3 rounded-xl border-2 border-gold-400 bg-gold-50 px-5 py-3">
      <span className="animate-banner-flash flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-400 text-navy-900">
        <PlaneLanding size={16} />
      </span>
      <p className="text-sm font-semibold text-navy-900">
        Airport pickups (arrivals) are the drop-off fares above{' '}
        <span className="text-gold-700">+ ${AIRPORT_PICKUP_SURCHARGE}</span> — covers airport queuing and pickup fees.
      </p>
    </div>
  )
}
