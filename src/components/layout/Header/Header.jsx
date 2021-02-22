import React from 'react'
import { NavLink } from "react-router-dom";

import { useLogoLink } from '../../hooks/useLogoLink'

import Nav from '../Nav/NavContainer'

import { ReactComponent as Logo } from '../../../svg/logo.svg';
import { ReactComponent as Menu } from '../../../svg/menu.svg';

export const Header = ({ toggleMenu, setToggleMenu, scrollToTopButton, setScrollToTopButton, darkMode, setDarkMode, setToggleFromToggleMenu, setToggleFromLogo }) => {
 return (
  <header className="header">
   <div className="header__container" >

    <div className="header__logoContainer">
     <NavLink className="header__link" exact to={useLogoLink()} >
      <Logo className="header__logo" width="512" height="512" alt="Logo" onClick={setToggleFromLogo} />
     </NavLink>
    </div>

    <div className="header__menuToggleContainer">
     <Menu className="header__menuToggle" width="512" height="512" onClick={setToggleFromToggleMenu} />
    </div>

    <Nav
     toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}
     scrollToTopButton={scrollToTopButton} setScrollToTopButton={setScrollToTopButton}
     darkMode={darkMode} setDarkMode={setDarkMode}
    />

   </div>
  </header>
 )
}
