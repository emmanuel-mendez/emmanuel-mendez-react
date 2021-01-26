import React from 'react'

import { useLang } from '../../hooks/useLang'

import { ReactComponent as PortfolioImage } from '../../../svg/portfolioImage.svg';

const Portfolio = () => {
	return (
		<article className="article">

			<div className="route">

				<section className="portfolio">

					<div className="portfolio__description">
						<h2 className="portfolio__title">{
							useLang()
								? "Portafolio."
								: "Portfolio."
						}</h2>

						<p className="portfolio__paragraph">
							This is my portfolio
						</p>

					</div>

					<PortfolioImage className="portfolio__image" />

				</section>

				<section className="portfolio">

					<div className="portfolio__description">

						<ul className="portfolio__list">
							<li className="portfolio__item">
								<h3 className="portfolio__itemTitle">Mayulu shop</h3>

								<div className="portfolio__itemDescription">
									<p className="portfolio__itemParagraph">Web developer</p>
									<p className="portfolio__itemParagraph">Químicos Mayulu C.A.</p>
									<p className="portfolio__itemParagraph">Jan 2020 – Sep 2020</p>
									<p className="portfolio__itemParagraph">Caracas, Venezuela</p>
									<p className="portfolio__itemParagraph">Develop a web application that speeds up the process of disclosure, updating and sale of cleaning products of the company.</p>
								</div>

								<div className="portfolio__itemImageContainer">
									<img src={process.env.PUBLIC_URL + '/png/mayuluShop.png'} alt="Mayulu Shop" className="portfolio__itemImage" />
								</div>

							</li>

						</ul>

					</div>

				</section>

			</div>

		</article>
	)
}

export default Portfolio