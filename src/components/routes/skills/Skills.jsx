import React from 'react'

import { useLang } from '../../hooks/useLang'

import { ReactComponent as SkillsImage } from '../../../svg/skillsImage.svg';

import { ReactComponent as Frontend } from '../../../svg/frontend.svg';

import { ReactComponent as Backend } from '../../../svg/backend.svg';

const Skills = () => {
	return (
		<article className="article">

			<div className="route">

				<section className="skills">

					<div className="skills__description">
						<h2 className="skills__title">{
							useLang()
								? "Habilidades."
								: "Skills."
						}</h2>

						<ul className="skills__advantages">
							<li className="skills__advantage">
								{
									useLang()
										? "Domino todas las técnicas involucradas en el desarrollo de un proyecto."
										: "Master all the techniques involved in a development project."
								}
							</li>

							<li className="skills__advantage">
								{
									useLang()
										? "Realizo prototipos en tiempo record."
										: "Make prototypes very rapidly."
								}
							</li>

							<li className="skills__advantage">
								{
									useLang()
										? "Brindo ayuda a todos los miembros del equipo."
										: "Provide help to all the team members."
								}
							</li>

							<li className="skills__advantage">
								{
									useLang()
										? "Reduzco el costo de los proyectos."
										: "Reduce the cost of the projects."
								}
							</li>

							<li className="skills__advantage">
								{
									useLang()
										? "Cambio entre desarrollo frontend y backend, dependiendo de los requerimientos."
										: "Switch between frontend and backend development based on requirements."
								}
							</li>

							<li className="skills__advantage">
								{
									useLang()
										? "Comprendo todos los aspectos de las nuevas tecnologías."
										: "Understand all aspects of new technologies."
								}
							</li>
						</ul>

					</div>

					<SkillsImage className="skills__image" />

				</section>

				<section className="frontend">

					<div className="frontend__description">

						<h2 className="frontend__title">{
							useLang()
								? "Halibidades en frontend"
								: "Frontend skills."
						}</h2>

						<ul className="frontend__skills">

							<li className="frontend__skill">
								<h3>{
									useLang()
										? "Lenguaje de marcado de hipertexto"
										: "Markup Language"
								}</h3>
								<p>HTML</p>
							</li>

							<li className="frontend__skill">
								<h3>{
									useLang()
										? "Hojas de estilo"
										: "Style Sheet Language"
								}</h3>
								<p>CSS</p>
							</li>

							<li className="frontend__skill">
								<h3>{
									useLang()
										? "Prepocesador de hojas de estilo"
										: "Preprocessor Scripting Language"
								}</h3>
								<p>Sass</p>
							</li>

							<li className="frontend__skill">
								<h3>CSS-in-JS</h3>
								<p>Styled Components</p>
								<p>Emotion</p>
							</li>

							<li className="frontend__skill">
								<h3>{
									useLang()
										? "Lenuajes de programación"
										: "Programming language"
								}</h3>
								<p>Javascript</p>
								<p>Typescript</p>
							</li>

							<li className="frontend__skill">
								<h3>{
									useLang()
										? "Librería"
										: "Library"}</h3>
								<p>React</p>
							</li>

							<li className="frontend__skill">
								<h3>Framework</h3>
								<p>Next.js</p>
							</li>

						</ul>


					</div>

					<Frontend className="frontend__image" />


				</section>

				<section className="backend">

					<div className="backend__description">

						<h2 className="backend__title">{
							useLang()
								? "Habilidades en backend."
								: "Backend skills."
						}</h2>

						<ul className="backend__skills">

							<li className="backend__skill">
								<h3>{
									useLang()
										? "Leguajes de programación"
										: "Programming languages"
								}</h3>
								<p>Javascript</p>
								<p>Typescript</p>
								<p>PHP</p>
								<p>C++</p>
							</li>

							<li className="backend__skill">
								<h3>{
									useLang()
										? "Entorno de desarrollo para Javascript"
										: "Runtime enviroment for Javascript"
								}</h3>
								<p>Node.js</p>
							</li>

							<li className="backend__skill">
								<h3>{
									useLang()
										? "Entorno de desarrollo para Typescript"
										: "Runtime enviroment for Typescript"
								}</h3>
								<p>Deno</p>
							</li>

							<li className="backend__skill">
								<h3>APIs</h3>
								<p>REST</p>
								<p>GraphQL</p>
							</li>

							<li className="backend__skill">
								<h3>{
									useLang()
										? "Servidor de GraphQL"
										: "GraphQL server"
								}</h3>
								<p>Apollo server</p>
							</li>

							<li className="backend__skill">
								<h3>{
									useLang()
										? "Bases de datos"
										: "Databases"
								}</h3>

								<div className="backend__databases">
									<h4>SQL</h4>
									<p>MySQL</p>
								</div>

								<div className="backend__databases">
									<h4>NoSQL</h4>
									<p>MongoDB</p>
								</div>
							</li>

						</ul>

					</div>

					<Backend className="backend__image" />

				</section>

			</div>

		</article>

	)
}

export default Skills