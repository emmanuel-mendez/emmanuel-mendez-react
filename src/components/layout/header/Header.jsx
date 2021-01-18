import React from 'react'


import { HeaderEnglish } from './HeaderEnglish'
import { HeaderSpanish } from './HeaderSpanish'

import { usePathname } from '../../hooks/usePathname'

export const Header = ({ toggle, setToggle }) => {

	const path = usePathname()

	return (
		<>
			{ path.startsWith("/es/") ? (
				<HeaderSpanish toggle={toggle} setToggle={setToggle} />

			) : (
					<HeaderEnglish toggle={toggle} setToggle={setToggle} />
				)}
		</>
	)
}