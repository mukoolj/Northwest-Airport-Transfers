import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../lib/constants'

export default function StickyMobileBar() {
  const [nearFooter, setNearFooter] = useState(false)

  useEffect(() => {
    const footer = document.getElementById('site-footer')
    if (!footer) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { rootMargin: '0px' }
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get a Quote on WhatsApp"
      className={`fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-gold-400 px-4 py-3 text-sm font-bold text-navy-900 shadow-[0_-4px_16px_rgba(0,0,0,0.25)] transition-transform duration-300 md:hidden ${
        nearFooter ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <MessageCircle size={18} />
      WhatsApp — Get a Quote
    </a>
  )
}
