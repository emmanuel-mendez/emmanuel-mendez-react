import React from 'react'
import { Nav } from './Nav'

const NavContainer = ({ toggleMenu, setToggleMenu, scrollToTopButton, setScrollToTopButton, darkMode, setDarkMode }) => {

	const toggle = () => {
		setToggleMenu(!toggleMenu)
		if (scrollToTopButton) {
			setScrollToTopButton(!scrollToTopButton)
		}
	}

	return (
		<Nav toggle={toggle} toggleMenu={toggleMenu} darkMode={darkMode} setDarkMode={setDarkMode} />
	)
}

export default NavContainer
