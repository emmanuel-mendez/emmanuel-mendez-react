import { useState, useEffect } from 'react'

export const useOnline = () => {

  const [online, setOnline] = useState({ onLine: navigator ? navigator.onLine : true })

  const goOnline = () => setOnline({ onLine: true })
  const goOffline = () => setOnline({ onLine: false })

  useEffect(() => {
    if (!window) return
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [online])

  return online.onLine
}
