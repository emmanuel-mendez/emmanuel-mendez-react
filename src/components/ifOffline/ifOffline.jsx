import React, { useState, useEffect, children } from 'react'

const IfOffline = () => {

  const [state, setState] = useState({ onLine: navigator ? navigator.onLine : true })

  const goOnline = () => setState({ onLine: true })

  const goOffline = () => setState({ onLine: false })

  useEffect(() => {
    if (!window) return
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [state])

  const { onLine } = state

  return (
    <>

      {
        onLine
          ? null
          : <div>{children}</div>
      }

    </>
  )
}

export default IfOffline
