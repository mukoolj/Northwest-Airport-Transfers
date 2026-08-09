import { Luggage, Baby, Users } from 'lucide-react'
import { FARE_CATEGORIES } from '../lib/constants'

const ICONS = { luggage: Luggage, baby: Baby, users: Users }

export default function FareCategoryCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {FARE_CATEGORIES.map((cat) => {
        const Icon = ICONS[cat.icon]
        return (
          <div
            key={cat.id}
            className="relative rounded-2xl border border-gold-400/25 bg-navy-900 p-6 text-center sm:text-left"
          >
            {cat.badge && (
              <span className="animate-sticker-flash absolute -top-3 right-4 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-navy-900 shadow-md">
                {cat.badge}
              </span>
            )}
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 sm:mx-0">
              <Icon size={22} />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-white">{cat.title}</h3>
            <p className="mt-1.5 text-sm text-white/70">{cat.desc}</p>
          </div>
        )
      })}
    </div>
  )
}
