import React from 'react'

import { useLang } from '../hooks/useLang'

export const ScrollDown = () => {
	return (
		<div className="scrollDown">
			{
				useLang()
					? (
						<>
							<p>DESLIZA</p>
							<p>ABAJO </p>
						</>
					) : (
						<>
							<p>SCROLL</p>
							<p>DOWN </p>
						</>
					)

			}

			<div className="scrollDown__line"></div>
		</div>
	)
}
