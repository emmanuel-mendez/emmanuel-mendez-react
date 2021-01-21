import React from 'react'

import upload from '../../svg/upload.svg';

export const ScrollToTopButton = ({ scrollToTopButton, pageYOffset }) => {


	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const classNames = () => {
		if (scrollToTopButton) {
			return "scrollToTop"
		}
	}

	if (scrollToTopButton) {
		return (
			<div className={classNames()} onClick={scrollToTop}>
				<img className="scrollToTopArrow" alt="scrollToTopArrow" src={upload} />
			</div>
		)
	} else {
		return null
	}

}