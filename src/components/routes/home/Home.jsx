import React, { lazy, Suspense } from 'react'
import { useLang } from '../../hooks/useLang'

const HomeImage = lazy(() => import('./HomeImage'))

const Home = () => {

	return (

		<article className="article">

			<div className="route">

				<section className="home">

					<div className="home__description">
						<p className="home__introduce">Hi, my name is</p>

						<h2 className="home__title">Emmanuel Méndez.</h2>

						<h3 className="home__subtitle">Web developer.</h3>

						<p> I specialize in designing and building exceptional websites, databases and cross-platform applications</p>
					</div>

					<button className="home__getInTouch">
						Get in touch
					</button>

				</section>

			</div>

		</article >
	)
}

export default Home