import React from 'react'

import { useOnline } from '../hooks/useOnline'
import { useLang } from '../hooks/useLang';

import { HeaderContainer } from './header/HeaderContainer';
import { FooterContainer } from './footer/FooterContainer';

import ScrollToTopButton from '../scroll/scroll-to-top-button/ScrollToTopButtonContainer'

export const Layout = ({ children, toggleMenu, setToggleMenu, setToggleFromContainer, y, scrollRef, scrollToTopButton, darkMode, setDarkMode }) => {

  const Offline = () => {
    return (
      <div className="offline">
        { useLang()
          ? <p>Sin conexión</p>
          : <p>Offline</p>
        }
      </div>
    )
  }

  return (
    <>
      <HeaderContainer toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} darkMode={darkMode} setDarkMode={setDarkMode} y={y} />

      {
        useOnline()
          ? null
          : <Offline />
      }

      <div className="layout" onClick={setToggleFromContainer} >

        <article className={useOnline()
          ? "article"
          : "article article__offlineMode"}>

          <div className={
            useOnline()
              ? "route"
              : "route route__offlineMode"
          } ref={scrollRef} id="ref">

            {children}
          </div>
        </article>

        <FooterContainer />
      </div>

      <ScrollToTopButton scrollToTopButton={scrollToTopButton} />
    </>
  )
}
