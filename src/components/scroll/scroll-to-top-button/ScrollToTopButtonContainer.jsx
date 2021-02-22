import React from 'react'


import { ScrollToTopButton } from './ScrollToTopButton';

const ScrollToTopButtonContainer = ({ scrollToTopButton }) => {

	const scrollToTop = () => {

		let ref = document.getElementById("ref");
		ref.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<ScrollToTopButton scrollToTop={scrollToTop} scrollToTopButton={scrollToTopButton} />
	)
}

export default ScrollToTopButtonContainer