import { useEffect, useState } from 'react'

export function useCountdown(targetDate) {
  const target = new Date(targetDate).getTime()
  const [remaining, setRemaining] = useState(() => Math.max(target - Date.now(), 0))

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(Math.max(target - Date.now(), 0))
    }, 1000)
    return () => clearInterval(id)
  }, [target])

  const totalSeconds = Math.floor(remaining / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds, expired: remaining <= 0 }
}
