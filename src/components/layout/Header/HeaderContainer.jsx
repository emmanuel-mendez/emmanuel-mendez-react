import React from 'react'
import { Header } from './Header'

const HeaderContainer = ({ toggleMenu, setToggleMenu, scrollToTopButton, setScrollToTopButton, darkMode, setDarkMode }) => {

	const setToggleFromToggleMenu = () => {
		setToggleMenu(!toggleMenu)
	}

	const setToggleFromLogo = () => {
		if (toggleMenu === true) {
			setToggleMenu(false)
		} else {
			return null
		}
	}

	return (
		<Header
			darkMode={darkMode} setDarkMode={setDarkMode}
			toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}
			setToggleFromToggleMenu={setToggleFromToggleMenu}
			setToggleFromLogo={setToggleFromLogo}
			scrollToTopButton={scrollToTopButton} setScrollToTopButton={setScrollToTopButton}
		/>
	)
}

export default HeaderContainer