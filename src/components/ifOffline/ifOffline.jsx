import React, { useEffect, useState } from 'react'


const IfOffline = ({ children }) => {


  const [onLine, setOnline] = useState({ onLine: navigator ? navigator.onLine : true })


  useEffect(() => {
    if (!window) return
    setOnline({ onLine: true })
    setOnline({ onLine: false })
  }, []) // eslint-disable-line

  return (
    <React.Fragment>
      {
        onLine
          ? null
          : <span>{children}</span>
      }
    </React.Fragment>

  );
}

export default IfOffline