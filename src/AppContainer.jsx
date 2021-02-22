import React, { useState, useEffect, lazy, Suspense } from 'react'
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'
import './App.css';

const App = lazy(() => import('./App.jsx'))

export const AppContainer = () => {

 const history = createBrowserHistory()

 ReactGA.initialize('UA-000000-01')
 ReactGA.pageview(window.location.pathname + window.location.search)

 history.listen(function (location) {
  ReactGA.pageview(window.location.pathname + window.location.search)
 })

 const getInitialMode = () => {
  const savedMode = JSON.parse(localStorage.getItem('dark'))
  return savedMode || false
 }

 const [darkMode, setDarkMode] = useState(getInitialMode())

 useEffect(() => {
  localStorage.setItem('dark', JSON.stringify(darkMode))
 }, [darkMode])

 return (
  < Suspense fallback={
   < div className="loader__index" >
    <div className="spinner"></div>
   </ div>
  }>
   <App darkMode={darkMode} setDarkMode={setDarkMode} history={history} />
  </Suspense >
 )
}







