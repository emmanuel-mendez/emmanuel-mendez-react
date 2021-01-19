import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { NavEnglish } from '../nav/NavEnglish'
import { NavSpanish } from '../nav/NavSpanish'
import { usePathname } from '../../hooks/usePathname'
import logo from '../../../logo.svg';

export const Header = ({ toggleMenu, setToggleMenu, scrollToTopButton, setScrollToTopButton, pageYOffset }) => {

	useEffect(() => {
		if (pageYOffset > 112 && scrollToTopButton === false && toggleMenu === false) {
			setScrollToTopButton(true)
		} else if (pageYOffset < 112) {
			setScrollToTopButton(false)
		} // eslint-disable-next-line
	}, [pageYOffset])

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

	let path = usePathname()

	const linkTo = () => {
		if (path.startsWith("/es/")) {
			return "/es/"
		} else {
			return "/"
		}
	}

	return (

		<header className="header">
			<div className="header__container" >

				<div className="header__logoContainer">
					<NavLink className="header__link menu__link" exact to={linkTo} >
						<img className="header__logo" src={logo} alt="Logo" onClick={setToggleFromLogo} />
					</NavLink>
				</div>

				<div className="header__menuToggleContainer">
					<i className="fas fa-bars header__menuToggle" as="button" onClick={setToggleFromToggleMenu}></i>
				</div>

				{path.startsWith("/es/") ? (
					<NavSpanish toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} scrollToTopButton={scrollToTopButton} setScrollToTopButton={setScrollToTopButton} />

				) : (
						<NavEnglish toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} scrollToTopButton={scrollToTopButton} setScrollToTopButton={setScrollToTopButton} />
					)}

			</div>
		</header>

	)
}