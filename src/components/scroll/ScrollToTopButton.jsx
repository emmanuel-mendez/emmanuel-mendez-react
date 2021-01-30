import React from 'react'

import { ReactComponent as Upload } from '../../svg/upload.svg';

export const ScrollToTopButton = ({ scrollToTopButton }) => {

	const scrollToTop = () => {

		let a = document.getElementById("ref");
		a.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const classNames = () => {
		if (scrollToTopButton) {
			return "scrollToTop"
		}
	}

	if (scrollToTopButton) {
		return (
			<div className={classNames()} onClick={scrollToTop}>
				<Upload className="scrollToTopArrow" />
			</div>
		)
	} else {
		return null
	}

}