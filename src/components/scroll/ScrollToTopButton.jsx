import React from 'react'

export const ScrollToTopButton = ({ scrollToTopButton, scrollToTop }) => {

	const classNames = () => {
		if (scrollToTopButton) {
			return "scrollToTop"
		} else {
			return "scrollToTop hideScrollToTopButton"
		}
	}

	return (
		<div className={classNames()} onClick={scrollToTop}>
			<i className="scrollToTopArrow fas fa-chevron-up"></i>
		</div>
	)
}
