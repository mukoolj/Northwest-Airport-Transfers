import { Link } from 'react-router-dom'
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import { BUSINESS, whatsappLink, SOCIAL_LINKS } from '../lib/constants'
import { FacebookIcon, InstagramIcon } from './SocialIcons'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas-alt text-slate-600">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-bold text-navy-900">
            {BUSINESS.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            Registered business name. Premium fixed-fare airport transfers
            across North West Sydney — fixed fares, all tolls included, no
            surge pricing, ever.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-gold-600">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={BUSINESS.phoneTel} className="flex items-center gap-2 hover:text-gold-600">
                <Phone size={16} className="text-gold-600" />
                Phone: {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold-600"
              >
                <MessageCircle size={16} className="text-gold-600" />
                WhatsApp: {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 hover:text-gold-600">
                <Mail size={16} className="text-gold-600" />
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-gold-600" />
              {BUSINESS.serviceArea}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-gold-600">
            Quick links
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/" className="hover:text-gold-600">Home</Link></li>
            <li><Link to="/pricing" className="hover:text-gold-600">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-gold-600">Contact / Book Now</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line px-4 py-6 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">Follow us</p>
        <div className="mt-3 flex justify-center gap-3">
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-navy-900 text-gold-400 transition-colors hover:border-gold-400"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-navy-900 text-gold-400 transition-colors hover:border-gold-400"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          © 2026 {BUSINESS.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
