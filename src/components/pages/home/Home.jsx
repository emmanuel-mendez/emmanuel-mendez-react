import React from 'react'
import { usePathname } from '../../hooks/usePathname'

export const Home = () => {


	const path = usePathname()



	const goToBottom = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: "smooth"
		})
	}

	let Lang

	if (path.startsWith("/es/") === false) {
		Lang = (
			<article className="article">

				<div className="article__container">

					<section className="section__description">

						<div className="section__descriptionImage"></div>

						<div className="section__descriptionText">

							<button onClick={goToBottom}>bottom</button>

							<h2 className="section__descriptionTitle">EMMANUEL FABIÁN MÉNDEZ MARTINEZ en</h2>

							<p className="section__descriptionParagraph">Student at Universidad Nacional Experimental de la Gran Caracas</p>

							<p className="section__descriptionParagraph">Web developer</p>

							<p className="section__descriptionParagraph">Nationality: Venezolan</p>

							<p className="section__descriptionParagraph">Languajes: English / Spanish</p>




						</div>

					</section>

				</div>

			</article>
		)

	} else {
		Lang = (
			<article className="article">

				<div className="article__container">

					<section className="section__description">

						<div className="section__descriptionImage"></div>

						<div className="section__descriptionText">

							<h2 className="section__descriptionTitle">EMMANUEL FABIÁN MÉNDEZ MARTINEZ es</h2>

							<p className="section__descriptionParagraph">Student at Universidad Nacional Experimental de la Gran Caracas</p>

							<p className="section__descriptionParagraph">Web developer</p>

							<p className="section__descriptionParagraph">Nationality: Venezolan</p>

							<p className="section__descriptionParagraph">Languajes: English / Spanish</p>

						</div>

					</section>

				</div>

			</article>
		)
	}


	return (
		<>
			{Lang}
		</>
	)
}
