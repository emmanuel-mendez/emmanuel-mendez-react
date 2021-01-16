import React, { useState } from 'react'
import { usePathname } from '../../hooks/usePathname'

import { HeaderEnglish } from './HeaderEnglish'
import { HeaderSpanish } from './HeaderSpanish'

export const Header = () => {

	const path = usePathname()

	const [toggle, setToggle] = useState(false)

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