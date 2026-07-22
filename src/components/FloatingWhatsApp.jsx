import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../lib/constants'

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="animate-pulse-glow fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl transition-transform hover:scale-110 md:bottom-6 md:right-6"
    >
      <MessageCircle size={28} strokeWidth={2.2} />
    </a>
  )
}
