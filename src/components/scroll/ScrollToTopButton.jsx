import React from 'react'


export const ScrollToTopButton = ({ scrollToTopButton, scrollToTop }) => {

	if (!scrollToTopButton) {
		return null
	}

	return (
		<div className="scrollToTop" onClick={scrollToTop}>
			<i className="scrollToTopArrow fas fa-chevron-up"></i>
		</div>
	)
}
