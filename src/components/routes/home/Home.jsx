import React, { lazy, Suspense } from 'react'
// import { useLang } from '../../hooks/useLang'

import { ReactComponent as HomeImage } from '../../../svg/homeImage.svg';

const AboutMeImage = lazy(() => import('./AboutMeImage'))

const Home = () => {

	return (

		<article className="article">

			<div className="route">

				<section className="home">

					<div className="home__description">
						<p className="home__introduce">Hi, my name is</p>

						<h2 className="home__title">Emmanuel Méndez.</h2>

						<h3 className="home__subtitle">I'm a web developer.</h3>

						<p> I specialize in designing and building exceptional websites, databases and cross-platform applications</p>
					</div>

					<button className="home__getInTouchButton">
						Get in touch
					</button>

					<HomeImage className="home__image" />


				</section>

				<section className="aboutMe">

					<div className="aboutMe__description">

						<h2 className="aboutMe__title">About me.</h2>

						<p className="aboutMe__introduce">Hello, I'm Emmanuel Méndez, a web developer based in Caracas, Venezuela</p>

						<p>I'm a student at<span> Universidad Nacional Experimental de la Gran Caracas</span> that love create landing pages, single-page applications, ecommerce, progressive web apps, SQL and NoSQL databases, REST APISs and GraphQL APIs</p>

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