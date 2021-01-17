import React from 'react'
import { usePathname } from '../../hooks/usePathname'
import { HomeEnglish } from './HomeEnglish'
import { HomeSpanish } from './HomeSpanish'

export const Home = () => {

	const path = usePathname()

	return (
		<>
			{
				path.startsWith("/es/") === false ? (
					<HomeEnglish />
				) : (
						<HomeSpanish />
					)
			}
		</>
	)

}