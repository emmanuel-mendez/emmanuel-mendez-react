import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";

import { useLogoLink } from '../../components/hooks/useLogoLink'

import { Nav } from './Nav'

// import title from '../../svg/title.svg';

import menu from '../../svg/menu.svg';

export const Header = ({ toggleMenu, setToggleMenu, scrollToTopButton, setScrollToTopButton, pageYOffset }) => {

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
		if (toggleMenu) {
			setToggleMenu(!toggleMenu)
		}
	}

	return (

		<header className="header">
			<div className="header__container" >

				<div className="header__logoContainer">
					<NavLink className="header__link" exact to={useLogoLink()} >
						<div className="header__logo" onClick={setToggleFromLogo} >
							<h1 className="header__h1">Emmanuel Méndez</h1>
						</div>
					</NavLink>
				</div>

				<div className="header__menuToggleContainer">
					<img className="header__menuToggle" src={menu} alt="menu" onClick={setToggleFromToggleMenu} />
				</div>

				<Nav toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} scrollToTopButton={scrollToTopButton} setScrollToTopButton={setScrollToTopButton} />

			</div>
		</header>

	)
}