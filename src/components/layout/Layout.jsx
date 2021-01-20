import React, { useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use'
import { useLocation } from "react-router-dom";

import { Header } from './Header';
import { Footer } from './Footer'

import { ScrollToTopButton } from '../scroll/ScrollToTopButton'

export const Layout = (props) => {

	const [toggleMenu, setToggleMenu] = useState(false)
	const [scrollToTopButton, setScrollToTopButton] = useState(false)

	const { y: pageYOffset } = useWindowScroll()

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [useLocation()]); // eslint-disable-line

	const setToggleFromContainer = () => {
		if (toggleMenu === true) {
			setToggleMenu(!toggleMenu)
		}
	}

	return (
		<React.Fragment>
			<Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} pageYOffset={pageYOffset} scrollToTopButton={scrollToTopButton} setScrollToTopButton={setScrollToTopButton} />

			<div className="layout" onClick={setToggleFromContainer}>
				{props.children}
				<Footer />
			</div>

			<ScrollToTopButton scrollToTopButton={scrollToTopButton} pageYOffset={pageYOffset} />
		</React.Fragment>

	);
}