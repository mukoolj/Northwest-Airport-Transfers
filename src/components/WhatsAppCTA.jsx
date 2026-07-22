import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../lib/constants'
import ResponseTimePromise from './ResponseTimePromise'

export default function WhatsAppCTA({
  label = 'Book on WhatsApp',
  message,
  full = false,
  size = 'md',
  variant = 'green',
  theme = 'light',
  showPromise = true,
  promiseText,
  className = '',
}) {
  const sizeClasses =
    size === 'lg'
      ? 'px-8 py-4 text-base sm:text-lg'
      : 'px-6 py-3 text-sm sm:text-base'

  const variantClasses =
    variant === 'gold'
      ? 'bg-gradient-to-r from-gold-300 to-gold-500 text-navy-900 shadow-gold-500/30'
      : 'bg-whatsapp text-white shadow-whatsapp/25'

  const promiseClass = theme === 'dark' ? 'text-white/50' : 'text-slate-500'

  return (
    <div className={`flex flex-col items-center gap-2 ${full ? 'w-full' : ''} ${className}`}>
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-full font-bold shadow-lg transition-transform hover:scale-[1.03] ${sizeClasses} ${variantClasses} ${
          full ? 'w-full' : ''
        }`}
      >
        <MessageCircle size={20} />
        {label}
      </a>
      {showPromise && (
        promiseText ? (
          <p className={`text-xs ${promiseClass}`}>{promiseText}</p>
        ) : (
          <ResponseTimePromise theme={theme} />
        )
      )}
    </div>
  )
}
