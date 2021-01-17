import React from 'react'

import { usePathname } from '../../hooks/usePathname'

import { FooterEnglish } from './FooterEnglish'
import { FooterSpanish } from './FooterSpanish'

export const Footer = () => {

	const path = usePathname()


	return (
		<>
			{ path.startsWith("/es/") ? (
				<FooterSpanish />

			) : (
					<FooterEnglish />
				)}
		</>
	)
}
