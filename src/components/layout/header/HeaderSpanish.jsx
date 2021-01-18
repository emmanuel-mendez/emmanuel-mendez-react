import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { NavSpanish } from '../nav/NavSpanish'

export const HeaderSpanish = ({ toggleMenu, setToggleMenu, scrollToTopButton, setScrollToTopButton, pageYOffset }) => {

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
					<Link className="header__link menu__link" to="/es/" >
						<img className="header__logo" src={process.env.PUBLIC_URL + '/favicon.ico'} alt="Logo" onClick={setToggleFromLogo} />
					</Link>
				</div>

				<div className="header__menuToggleContainer">
					<i className="fas fa-bars header__menuToggle" as="button" onClick={setToggleFromToggleMenu}></i>
				</div>

				<NavSpanish toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} scrollToTopButton={scrollToTopButton} setScrollToTopButton={setScrollToTopButton} />

			</div>
		</header>
	)
}
