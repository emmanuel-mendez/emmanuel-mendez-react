import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";

import { Header } from './Header';

import { Footer } from './Footer'

import { ScrollToTopButton } from '../scroll/ScrollToTopButton'

const Layout = ({ toggleMenu, setToggleMenu, children, darkMode, setDarkMode, scrollToTopButton, setScrollToTopButton, y, scrollRef }) => {


	useEffect(() => {
		window.scrollTo(0, 0);
	}, [useLocation()]); // eslint-disable-line

	const setToggleFromContainer = () => {
		if (toggleMenu === true) {
			setToggleMenu(!toggleMenu)
			setScrollToTopButton(!scrollToTopButton)
		}
	}

	return (
		<React.Fragment>
			<Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} scrollToTopButton={scrollToTopButton} setScrollToTopButton={setScrollToTopButton} darkMode={darkMode} setDarkMode={setDarkMode} y={y} scrollRef={scrollRef} />

			<div className="layout" onClick={setToggleFromContainer}>
				{children}
				<Footer />
			</div>

			<ScrollToTopButton scrollToTopButton={scrollToTopButton} />
		</React.Fragment>

	);
}

export default Layout