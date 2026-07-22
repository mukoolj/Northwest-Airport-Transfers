import { Link } from 'react-router-dom'
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import { BUSINESS, whatsappLink } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-bold text-white">
            {BUSINESS.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Registered business name. Premium fixed-fare airport transfers
            across North West Sydney — fixed fares, all tolls included, no
            surge pricing, ever.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-gold-400">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={BUSINESS.phoneTel} className="flex items-center gap-2 hover:text-gold-400">
                <Phone size={16} className="text-gold-400" />
                Phone: {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold-400"
              >
                <MessageCircle size={16} className="text-gold-400" />
                WhatsApp: {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 hover:text-gold-400">
                <Mail size={16} className="text-gold-400" />
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-gold-400" />
              {BUSINESS.serviceArea}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-gold-400">
            Quick links
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/" className="hover:text-gold-400">Home</Link></li>
            <li><Link to="/pricing" className="hover:text-gold-400">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-gold-400">Contact / Book Now</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50 sm:px-6">
        © 2026 {BUSINESS.name}. All rights reserved.
      </div>
    </footer>
  )
}
