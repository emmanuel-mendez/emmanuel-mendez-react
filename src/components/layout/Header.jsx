import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";

import { useLogoLink } from '../../components/hooks/useLogoLink'

import { Nav } from './Nav'

import logo from '../../svg/logo.svg';
import { ReactComponent as Menu } from '../../svg/menu.svg';

export const Header = ({ toggleMenu, setToggleMenu, scrollToTopButton, setScrollToTopButton, pageYOffset, darkMode, setDarkMode }) => {

	useEffect(() => {
		if (pageYOffset > 112 && scrollToTopButton === false && toggleMenu === false) {
			setScrollToTopButton(true)
		} else if (pageYOffset < 112) {
			setScrollToTopButton(false)
		}
	}, [pageYOffset]) // eslint-disable-line

	const setToggleFromToggleMenu = () => {
		setToggleMenu(!toggleMenu)
		if (scrollToTopButton) {
			setScrollToTopButton(false)
		} else if (scrollToTopButton === false && pageYOffset > 112) {
			setScrollToTopButton(true)
		}
	}

	const setToggleFromLogo = () => {
		if (toggleMenu === true) {
			setToggleMenu(false)
		} else {
			return null
		}
	}

	return (

		<header className="header">
			<div className="header__container" >

				<div className="header__logoContainer">
					<NavLink className="header__link" exact to={useLogoLink()} >
						<img className="header__logo" src={logo} alt="Logo" onClick={setToggleFromLogo} />
					</NavLink>
				</div>

				<div className="header__menuToggleContainer">
					<Menu className="header__menuToggle" width="512" height="512" onClick={setToggleFromToggleMenu} />
				</div>

				<Nav toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} scrollToTopButton={scrollToTopButton} setScrollToTopButton={setScrollToTopButton} darkMode={darkMode} setDarkMode={setDarkMode} />

			</div>
		</header>

	)
}