import React from 'react'


import { HeaderEnglish } from './HeaderEnglish'
import { HeaderSpanish } from './HeaderSpanish'

import { usePathname } from '../../hooks/usePathname'

export const Header = ({ toggleMenu, setToggleMenu, scrollToTopButton, setScrollToTopButton, pageYOffset }) => {

	const path = usePathname()

	return (
		<>
			{ path.startsWith("/es/") ? (
				<HeaderSpanish toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} scrollToTopButton={scrollToTopButton} setScrollToTopButton={setScrollToTopButton} pageYOffset={pageYOffset} />

			) : (
					<HeaderEnglish toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} scrollToTopButton={scrollToTopButton} setScrollToTopButton={setScrollToTopButton} pageYOffset={pageYOffset} />
				)}
		</>
	)
}