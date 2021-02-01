import React from 'react'

import { useLang } from '../../hooks/useLang'

import { ReactComponent as CvImage } from '../../../svg/cvImage.svg';

const Cv = () => {
	return (

		<>
			<section className="cv">

				<h2 className="cv__title">Curriculum Vitae.</h2>

				<div className="cv__imgContainer">
					{useLang()
						? <img src={process.env.PUBLIC_URL + '/png/EMMANUEL-MÉNDEZ.png'} width="512" height="512" alt="Emmanuel Méndez" className="cv__img" />
						: <img src={process.env.PUBLIC_URL + '/png/EMMANUEL-MENDEZ.png'} width="512" height="512" alt="Emmanuel Méndez" className="cv__img" />
					}

					<CvImage className="cv__svg" />
				</div>

				<div className="cv__links">
					<h3 className="cv__linksTitle">Download</h3>

					<ul className="cv__downloads">
						<li className="cv__download">
							{
								useLang()
									? <a href={process.env.PUBLIC_URL + '/pdf/EMMANUEL-MÉNDEZ.pdf'} target="blank">PDF</a>
									: <a href={process.env.PUBLIC_URL + '/pdf/EMMANUEL-MENDEZ.pdf'} target="blank">PDF</a>
							}
						</li>

						<li className="cv__download">
							{
								useLang()
									? <a href={process.env.PUBLIC_URL + '/png/EMMANUEL-MÉNDEZ.png'} target="blank">PNG</a>
									: <a href={process.env.PUBLIC_URL + '/png/EMMANUEL-MENDEZ.png'} target="blank">PNG</a>
							}
						</li>
					</ul>
				</div>

			</section>
		</>

	)
}

export default Cv