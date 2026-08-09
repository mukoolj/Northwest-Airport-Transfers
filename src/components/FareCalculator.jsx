import { useMemo, useState } from 'react'
import { MapPin, PlaneLanding, ChevronDown } from 'lucide-react'
import { REGIONS, FARE_CATEGORIES, AIRPORT_PICKUP_SURCHARGE } from '../lib/constants'
import { TERMINALS, getRegionBySuburb } from '../lib/pricing'
import WhatsAppCTA from './WhatsAppCTA'

function SelectField({ label, icon: Icon, value, onChange, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
        <Icon size={14} className="text-gold-600" />
        {label}
      </span>
      <span className="relative block">
        <select
          value={value}
          onChange={onChange}
          className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3.5 pr-10 text-sm font-medium text-navy-900 transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-400/40"
        >
          {children}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </span>
    </label>
  )
}

export default function FareCalculator() {
  const [suburb, setSuburb] = useState('')
  const [terminal, setTerminal] = useState('')

  const region = useMemo(() => (suburb ? getRegionBySuburb(suburb) : null), [suburb])
  const showResult = Boolean(region && terminal)

  return (
    <div className="relative z-10 mx-auto -mt-14 max-w-3xl px-4 sm:-mt-20 sm:px-6">
      <div className="rounded-3xl border border-gold-200 bg-white p-6 shadow-2xl shadow-navy-900/20 sm:p-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-gold-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold-600">
            Instant Fare Calculator
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 md:text-3xl">
            What's my fare?
          </h2>
          <p className="mt-1.5 text-sm text-slate-600">
            Pick your suburb and terminal — see your fixed fare instantly.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <SelectField label="Pickup suburb" icon={MapPin} value={suburb} onChange={(e) => setSuburb(e.target.value)}>
            <option value="">Select your suburb</option>
            {REGIONS.map((r) => (
              <optgroup key={r.id} label={r.label}>
                {[...r.suburbs].sort((a, b) => a.localeCompare(b)).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </optgroup>
            ))}
          </SelectField>

          <SelectField
            label="Drop off — Airport terminal"
            icon={PlaneLanding}
            value={terminal}
            onChange={(e) => setTerminal(e.target.value)}
          >
            <option value="">Select terminal</option>
            {TERMINALS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </SelectField>
        </div>

        {suburb && !terminal && (
          <p className="mt-4 text-center text-xs text-slate-500">
            Now select your terminal to see the fare →
          </p>
        )}

        {showResult && (
          <div key={`${suburb}-${terminal}`} className="animate-fade-in-up mt-6 rounded-2xl border border-gold-300 bg-gold-50 p-5">
            <p className="text-center text-xs font-semibold uppercase tracking-wide text-gold-700">
              {region.label} → Sydney Airport {terminal}
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {FARE_CATEGORIES.map((cat) => (
                <div key={cat.id}>
                  <p className="text-[11px] font-semibold uppercase text-slate-500">{cat.title}</p>
                  <p className="mt-1 font-display text-xl font-extrabold text-navy-900">${region[cat.id].now}</p>
                  <p className="mt-1 text-[10px] leading-snug text-slate-500">{cat.shortDesc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-slate-500">
              Drop-off fare shown — fixed, all tolls included. Airport pickup (arrival) adds ${AIRPORT_PICKUP_SURCHARGE}.
            </p>
            <div className="mt-4 flex justify-center">
              <WhatsAppCTA
                label="Book this fare on WhatsApp"
                message={`Hi, I'd like to book a transfer from ${suburb} (${region.label}) to Sydney Airport ${terminal}.`}
                showPromise={false}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
