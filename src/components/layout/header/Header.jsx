import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { Nav } from '../nav/Nav'
import { usePathname } from '../../hooks/usePathname'
import logo from '../../../logo.svg';

export const Header = ({ toggleMenu, setToggleMenu, scrollToTopButton, setScrollToTopButton, pageYOffset }) => {

	let path = usePathname()

	const linkTo = () => {
		if (path.startsWith("/es/")) {
			return "/es/"
		} else {
			return "/"
		}
	}

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

	return (

		<header className="header">
			<div className="header__container" >

				<div className="header__logoContainer">
					<NavLink className="header__link" exact to={linkTo} >
						<img className="header__logo" src={logo} alt="Logo" onClick={setToggleFromLogo} />
					</NavLink>
				</div>

				<div className="header__menuToggleContainer">
					<i className="fas fa-bars header__menuToggle" as="button" onClick={setToggleFromToggleMenu}></i>
				</div>

				<Nav toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} scrollToTopButton={scrollToTopButton} setScrollToTopButton={setScrollToTopButton} />

			</div>
		</header>

	)
}