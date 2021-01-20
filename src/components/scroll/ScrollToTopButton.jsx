import React from 'react'

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
				<i className="scrollToTopArrow fas fa-chevron-up"></i>
			</div>
		)
	} else {
		return null
	}

}