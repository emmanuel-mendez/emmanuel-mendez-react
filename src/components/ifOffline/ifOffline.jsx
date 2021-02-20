import React, { useEffect, useState } from 'react'

const IfOffline = ({ children }) => {

  const [onLine, setOnLine] = useState({ onLine: navigator ? navigator.onLine : true })

  useEffect(() => {

    const goOnline = () => setOnLine({ onLine: true })

    const goOffline = () => setOnLine({ onLine: false })
    if (!window) return
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

  return (
    <>
      {
        onLine
          ? null
          : <span>{children}</span>
      }
    </>
  )

}

export default IfOffline