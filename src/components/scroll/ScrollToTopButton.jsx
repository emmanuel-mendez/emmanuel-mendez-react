import React, { useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use'

export const ScrollToTopButton = () => {

	const { y: pageYOffset } = useWindowScroll()
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		if (pageYOffset > 112) {
			setVisible(true)
		} else {
			setVisible(false)
		}
	}, [pageYOffset])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	if (!visible) {
		return false
	}

	return (
		<div className="scrollToTop" onClick={scrollToTop}>
			<i className="scrollToTopArrow fas fa-chevron-up"></i>
		</div>
	)
}
