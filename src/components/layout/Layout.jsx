import React, { useState } from 'react'
import { useWindowScroll } from 'react-use'

import { Header } from './header/Header';
import { Container } from './container/Container'

import { ScrollToTopButton } from '../scroll/ScrollToTopButton'

export const Layout = (props) => {

	const [toggleMenu, setToggleMenu] = useState(false)
	const [scrollToTopButton, setScrollToTopButton] = useState(false)

	const { y: pageYOffset } = useWindowScroll()

	return (
		<React.Fragment>
			<Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} pageYOffset={pageYOffset} scrollToTopButton={scrollToTopButton} setScrollToTopButton={setScrollToTopButton} />

			<Container toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} props={props} />

			<ScrollToTopButton scrollToTopButton={scrollToTopButton} pageYOffset={pageYOffset} />
		</React.Fragment>

	);
}