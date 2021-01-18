import React from 'react'

import { Footer } from '../footer/Footer';

export const Container = ({ toggleMenu, setToggleMenu, props, pageYOffset, scrollToTopButton, setScrollToTopButton }) => {

	function setToggleFromContainer() {
		if (toggleMenu === true) {
			setToggleMenu(!toggleMenu)
			if (pageYOffset > 112) {
				setScrollToTopButton(!scrollToTopButton)
			}
		}
	}

	return (
		<>
			<div className="container" onClick={setToggleFromContainer}>
				{props.children}
			</div>
			<Footer />
		</>
	)
}

