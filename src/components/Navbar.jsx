import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { BUSINESS, whatsappLink } from '../lib/constants'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact / Book Now' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-900/95 backdrop-blur supports-[backdrop-filter]:bg-navy-900/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <svg width="34" height="34" viewBox="0 0 64 64" className="shrink-0">
            <rect width="64" height="64" rx="14" fill="#0a1128" />
            <path d="M14 40l3.5-11a5 5 0 0 1 4.8-3.5h19.4a5 5 0 0 1 4.8 3.5L50 40" stroke="#eebc4a" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="10" y="40" width="44" height="9" rx="4.5" fill="#eebc4a" />
            <circle cx="20" cy="49" r="4" fill="#0a1128" stroke="#eebc4a" strokeWidth="2" />
            <circle cx="44" cy="49" r="4" fill="#0a1128" stroke="#eebc4a" strokeWidth="2" />
          </svg>
          <span className="font-display text-base font-bold leading-tight text-white sm:text-lg">
            Northwest <span className="text-gold-400">Airport Transfers</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-gold-400 ${
                  isActive || link.to === '/pricing' ? 'text-gold-400' : 'text-white/85'
                } ${link.to === '/pricing' ? 'font-bold' : ''}`
              }
            >
              {link.label}
              {link.to === '/pricing' && (
                <span className="rounded-full bg-gold-400/15 px-2 py-0.5 text-[10px] font-bold text-gold-400">
                  from $89
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={BUSINESS.phoneTel}
            className="flex items-center gap-1.5 text-sm font-medium text-white/85 transition-colors hover:text-gold-400"
          >
            <Phone size={16} />
            {BUSINESS.phoneDisplay}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-whatsapp/20 transition-transform hover:scale-105"
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy-900 px-4 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-base font-medium ${
                    isActive || link.to === '/pricing' ? 'text-gold-400' : 'text-white/85'
                  } ${link.to === '/pricing' ? 'font-bold' : ''}`
                }
              >
                {link.label}
                {link.to === '/pricing' && (
                  <span className="rounded-full bg-gold-400/15 px-2 py-0.5 text-[10px] font-bold text-gold-400">
                    from $89
                  </span>
                )}
              </NavLink>
            ))}
            <a href={BUSINESS.phoneTel} className="flex items-center gap-2 text-base font-medium text-white/85">
              <Phone size={18} />
              {BUSINESS.phoneDisplay}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-base font-semibold text-white"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
