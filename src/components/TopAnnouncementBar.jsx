import { Link } from 'react-router-dom'
import { useCountdown } from '../hooks/useCountdown'
import { BUSINESS } from '../lib/constants'

export default function TopAnnouncementBar() {
  const { days, expired } = useCountdown(BUSINESS.offerEndDate)

  if (expired) return null

  return (
    <div className="bg-gradient-to-r from-gold-300 to-gold-500 py-2 text-center text-navy-900">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-0.5 px-4 text-xs font-semibold sm:text-sm">
        <span>Introductory Offer — save up to $10 on every transfer.</span>
        <span className="font-extrabold">
          {days} {days === 1 ? 'day' : 'days'} left.
        </span>
        <Link to="/pricing" className="underline underline-offset-2 hover:no-underline">
          View pricing →
        </Link>
      </div>
    </div>
  )
}
