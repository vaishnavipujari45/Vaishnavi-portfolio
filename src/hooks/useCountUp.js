import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `end` once `start` is true.
 * Supports decimals (e.g. CGPA 8.16).
 */
export function useCountUp(end, { start = true, duration = 1400, decimals = 0 } = {}) {
  const [value, setValue] = useState(0)
  const rafRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!start || startedRef.current) return
    startedRef.current = true

    const startTime = performance.now()
    const from = 0

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = from + (end - from) * eased
      setValue(current)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setValue(end)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => rafRef.current && cancelAnimationFrame(rafRef.current)
  }, [start, end, duration])

  return decimals > 0 ? value.toFixed(decimals) : Math.round(value)
}
