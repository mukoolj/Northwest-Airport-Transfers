import { ArrowRight } from 'lucide-react'
import { whatsappLink } from '../lib/constants'

export default function WhatsAppNudge({ className = '' }) {
  return (
    <div className={`flex justify-center py-6 ${className}`}>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
      >
        Questions? Chat with us on WhatsApp
        <ArrowRight size={16} />
      </a>
    </div>
  )
}
