import React from 'react'

const Skills = () => {
	return (
		<article className="article">

			<div className="route">

				<section className="section__skills">

					<h2 className="section__skillsTitle">SKILLS</h2>

					<div>
						<h3>Markup Languages</h3>
						<p>HTML</p>
					</div>

					<div>
						<h3> Style Sheet Languages</h3>
						<p>CSS</p>

						<h4>Preprocessor Scripting Language</h4>
						<p>Sass</p>
					</div>

					<div>
						<h3>Programming languages</h3>
						<div>
							<h4>Javascript</h4>

							<h5>Backend</h5>
							<p>Node.js</p>
							<p>GraphQL</p>

							<h5>Frontend</h5>
							<p>React</p>
						</div>

						<div>
							<h4>PHP</h4>
						</div>
					</div>

					<div>
						<h3>Databases</h3>

						<div>
							<h4>SQL</h4>
							<p>MySQL</p>
						</div>

						<div>
							<h4>NoSQL</h4>
							<p>MongoDB</p>
						</div>
					</div>

					<div>
						<h3>Distributed Version-control</h3>
						<p>Git</p>
					</div>

					<div>
						<h3>Others</h3>
						<p>Responsive Web Desing</p>
					</div>

				</section>

			</div>

		</article>
	)
}

export default Skills