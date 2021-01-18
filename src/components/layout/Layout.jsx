import React, { useState } from 'react'
import { useWindowScroll } from 'react-use'
import { ScrollToTopButton } from '../scroll/ScrollToTopButton'

import { Header } from './header/Header';

import { Container } from './container/Container'

export const Layout = (props) => {

	const [toggleMenu, setToggleMenu] = useState(false)
	const [scrollToTopButton, setScrollToTopButton] = useState(false)

	const { y: pageYOffset } = useWindowScroll()

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const setToggleFromContainer = () => {
		if (toggleMenu) {
			setToggleMenu(!toggleMenu)
		}
	}

	return (
		<React.Fragment>
			<Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} pageYOffset={pageYOffset} scrollToTopButton={scrollToTopButton} setScrollToTopButton={setScrollToTopButton} />

			<Container toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} setToggleFromContainer={setToggleFromContainer} props={props} pageYOffset={pageYOffset} scrollToTopButton={scrollToTopButton} setScrollToTopButton={setScrollToTopButton} />

			<ScrollToTopButton scrollToTopButton={scrollToTopButton} scrollToTop={scrollToTop} />
		</React.Fragment>

	);
}