import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { REGIONS } from '../lib/constants'

export default function SuburbAccordion() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setOpen(mq.matches)
  }, [])

  return (
    <div className="overflow-hidden rounded-2xl border border-gold-400/20 bg-navy-900">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
      >
        <span className="font-display text-base font-bold text-white sm:text-lg">
          Which suburbs are in each region?
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-gold-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="space-y-4 border-t border-gold-400/20 px-6 py-5">
          {REGIONS.map((region) => (
            <div key={region.id}>
              <p className="text-sm font-semibold text-gold-400">{region.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-white/70">
                {region.suburbs.join(', ')}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
