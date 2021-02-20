import React, { useEffect, useState } from 'react'


const IfOffline = ({ children }) => {


  const [online, setOnline] = useState({ onLine: navigator ? navigator.onLine : true })


  useEffect(() => {
    if (!window) return
    setOnline({ onLine: true })
    setOnline({ onLine: false })
  }, []) // eslint-disable-line

  return (
    <React.Fragment>
      {
        online
          ? null
          : <span>{children}</span>
      }
    </React.Fragment>

  );
}

export default IfOffline