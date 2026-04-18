import { useState, useEffect } from 'react'

export function useBogotaClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    function tick() {
      const d = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Bogota' }))
      const hh = String(d.getHours()).padStart(2, '0')
      const mm = String(d.getMinutes()).padStart(2, '0')
      const ss = String(d.getSeconds()).padStart(2, '0')
      setTime(`${hh}:${mm}:${ss}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return time
}
