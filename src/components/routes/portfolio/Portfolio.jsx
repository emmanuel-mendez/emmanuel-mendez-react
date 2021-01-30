import React from 'react'

import { useLang } from '../../hooks/useLang'

import QuimicosMayuluImage from './QuimicosMayuluImage'

import { ReactComponent as PortfolioImage } from '../../../svg/portfolioImage.svg';

const Portfolio = () => {
	return (

		<>
			<section className="portfolio">

				<div className="portfolio__description">
					<h2 className="portfolio__title">{
						useLang()
							? "Portafolio."
							: "Portfolio."
					}</h2>

					<p className="portfolio__paragraph">
						{
							useLang()
								? "Esta es la colección de los proyectos que representan mi trabajo como desarrollador web."
								: "This is the collection of projects that represent my work as a web developer."
						}
					</p>

					<h3 className="portfolio__subtitle">{
						useLang()
							? "Declaración de originalidad y confidencialidad."
							: "Statement of Originality and Confidentiality."
					}</h3>

					<p className="portfolio__originalityAndConfidentiality">
						{
							useLang()
								? "Este portafolio es obra de Emmanuel Méndez. Por favor no copie sin permiso. Algunas de las exhibiciones, muestras de trabajo y / o muestras de servicios son propiedad de la organización cuyo nombre aparece en el documento. Cada uno ha otorgado permiso para que este producto se utilice como demostración de mi trabajo."
								: "This portfolio is the work of Emmanuel Méndez. Please do not copy without permission. Some of the exhibits, work samples, and/or service samples are the proprietary property of the organization whose name appears on the document. Each has granted permission for this product to be used as a demonstration of my work."
						}
					</p>

				</div>

				<PortfolioImage className="portfolio__image" />

			</section>

			<section className="portfolio">

				<div className="portfolio__worksDescription">

					<ul className="portfolio__list">
						<li className="portfolio__item">
							<a href="https://quimicos-mayulu-client.herokuapp.com/" target="blank">
								<h3 className="portfolio__itemTitle">Mayulu shop</h3>

								<div className="portfolio__itemDescription">

									<p className="portfolio__itemParagraph">Químicos Mayulu C.A.</p>
									<p className="portfolio__itemParagraph">{
										useLang()
											? "Ene 2020 - Dic 2020"
											: "Jan 2020 – Dic 2020"
									}</p>
									<p className="portfolio__itemParagraph">Caracas, Venezuela</p>
									<p className="portfolio__itemParagraph">{
										useLang()
											? "Desarrollador web"
											: "Web developer"
									}</p>

								</div>

								<div className="portfolio__itemImageContainer">

									<QuimicosMayuluImage />

								</div>

								<p className="portfolio__itemResume">{
									useLang()
										? "Desarrollar una aplicación web que agiliza el proceso de divulgación, actualización y venta de los productos de limpieza de la empresa."
										: "Develop a web application that speeds up the process of disclosure, updating and sale of cleaning products of the company."
								}</p>
							</a>
						</li>

					</ul>

				</div>

			</section>
		</>

	)
}

export default Portfolio