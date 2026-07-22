export default function ResponseTimePromise({ className = '', theme = 'light' }) {
  const colorClass = theme === 'dark' ? 'text-white/50' : 'text-slate-500'
  return (
    <p className={`text-xs ${colorClass} ${className}`}>
      We reply within 15 minutes
    </p>
  )
}
