import React, { lazy, Suspense } from 'react'
import { useLang } from '../../hooks/useLang'

import { ReactComponent as HomeImage } from '../../../svg/homeImage.svg';

const AboutMeImage = lazy(() => import('./AboutMeImage'))

const Home = () => {

	return (

		<article className="article">

			<div className="route">

				<section className="home">

					<div className="home__description">
						<p className="home__introduce">
							{
								useLang()
									? "Hola, mi nombre es"
									: "Hi, my name is"
							}
						</p>

						<h2 className="home__title">Emmanuel Méndez.</h2>

						<h3 className="home__subtitle">
							{
								useLang()
									? "Soy un desarrollador web."
									: "I'm a web developer."
							}
						</h3>

						<p className="home__paragraph">
							{
								useLang()
									? "Me especializo en el diseño de sitios web excepcionales, desarrollo de aplicaciones multiplataforma y la administración bases de datos."
									: "I specialize in designing exceptional websites, building cross-platform applications and manage databases."
							}
						</p>

						<div className="home__getInTouchButton">
							{
								useLang()
									? "Contáctame"
									: "Get in touch"
							}
						</div>
					</div>

					<HomeImage className="home__image" />


				</section>

				<section className="aboutMe">

					<div className="aboutMe__description">

						<h2 className="aboutMe__title">
							{
								useLang()
									? "Acerca de mi."
									: "About me."
							}
						</h2>

						<p className="aboutMe__introduce">
							{useLang()
								? "Hola, soy Emmanuel Méndez, un desarrollador web residente en Caracas, Venezuela."
								: "Hello, I'm Emmanuel Méndez, a web developer based in Caracas, Venezuela."
							}
						</p>

						<p>
							{useLang()
								? <span>Soy un estudiante de la <a className="aboutMe__unexca" href="http://www.unexca.edu.ve/">Universidad Nacional Experimental de la Gran Caracas</a> que ama crear landing pages, single-page applications, ecommerce, progressive web apps, bases de datos SQL y NoSQL,  APISs REST y APIs GraphQL.</span>
								: <span>I'm a student at <a className="aboutMe__unexca" href="http://www.unexca.edu.ve/">Universidad Nacional Experimental de la Gran Caracas</a> that love create landing pages, single-page applications, ecommerce, progressive web apps, SQL and NoSQL databases, REST APISs and GraphQL APIs.</span>
							}</p>

					</div>

					<Suspense fallback={
						<div className="loader__index">
							<div className="spinner"></div>
						</div>
					}>

						<div className="aboutMe__imageContainer">
							<AboutMeImage />
						</div>

					</Suspense>

				</section>

			</div>

		</article >
	)
}

export default Home