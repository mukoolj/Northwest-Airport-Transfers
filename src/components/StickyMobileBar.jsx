import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../lib/constants'

export default function StickyMobileBar() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-gold-400 px-4 py-3 text-sm font-bold text-navy-900 shadow-[0_-4px_16px_rgba(0,0,0,0.25)] md:hidden"
    >
      <MessageCircle size={18} />
      Book on WhatsApp — Reply in 15 mins
    </a>
  )
}
