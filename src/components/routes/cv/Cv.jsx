import React from 'react'

import { useLang } from '../../hooks/useLang'

const Cv = () => {
	return (

		<>
			<section className="cv">

				<div className="cv__imgContainer">
					{useLang()
						? <img src={process.env.PUBLIC_URL + '/png/EMMANUEL-MÉNDEZ.png'} width="512" height="512" alt="Emmanuel Méndez" className="cv__img" />
						: <img src={process.env.PUBLIC_URL + '/png/EMMANUEL-MENDEZ.png'} width="512" height="512" alt="Emmanuel Méndez" className="cv__img" />
					}
				</div>

				<div className="cv__links">
					<h3 className="cv__title">Download</h3>

					<ul className="cv__downloads">
						<li className="cv__download">
							PDF
						</li>

						<li className="cv__download">
							PNG
						</li>
					</ul>
				</div>

			</section>
		</>

	)
}

export default Cv