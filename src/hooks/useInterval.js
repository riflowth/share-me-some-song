import { useEffect } from 'react'

export default function useInterval(cb, period) {
  useEffect(() => {
    const interval = setInterval(cb, period)
    return () => clearInterval(interval)
  }, [])
}