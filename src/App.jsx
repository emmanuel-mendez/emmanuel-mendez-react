import React, { useState } from 'react'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import classNames from 'classnames';
import './App.css';

function App() {

	const [toggle, setToggle] = useState(false)

	const Nav =

		<nav className={classNames('nav', {
			'menuShow': toggle
		})}>
			<ul className="nav__menu">
				<Link className="menu__link" to="/" >
					<li className="menu__item">
						Profile
                    </li>
				</Link>

				<Link className="menu__link" to="/portfolio" >
					<li className="menu__item">
						Portfolio
                    </li>
				</Link>

				<Link className="menu__link" to="/contact" >
					<li className="menu__item">
						Contact
                    </li>
				</Link>
			</ul>

			<div className="nav__copyright">
				<p className="nav__copyrightDescription">Copyright © 2020 www.emmanuelmendez.com</p>
				<p className="nav__copyrightDescription">All rights reserved</p>
			</div>
		</nav>

	return (
		<div className="App">

			<BrowserRouter>
				<Switch>
					{/* <Route exact path="/" component={Home} guest/>
    <Route path="/products" component={Products} guest/>
    <Route exact path="/product/:productId" component={Product} guest/>
    <Route path="/messagesInfo" component={MessagesInfo} guest/>
    <Route path="/contact" component={Contact} guest/>
    <Route path="/about" component={About} guest/>
    <Route path="/team" component={Team} guest/>
    <Route path="/principles" component={Principles} guest/>

    <Route path="/register" component={Register} guest/>
    <Route path="/login" component={Login} guest/>

    <Route path="/userHome" component={UserHome} authenticated/>
    <Route path="/messages" component={Messages} authenticated /> */}

					<header className="header">

						<div className="header__languajes">
							<p>
								English  |  Spanish
                            </p>
						</div>

						<div className="header__container">
							<div className="header__logoContainer">
								<Link className="menu__link" to="/" >
									<h1 className="header__title">Emmanuel Méndezz</h1>
								</Link>
							</div>

							<div className="header__menuToggleContainer">
								<i className="fas fa-bars header__menuToggle" as="button" onClick={() => setToggle(!toggle)}></i>
							</div>

							{Nav}

						</div>
					</header>

				</Switch>
			</BrowserRouter>

			<article className="article">

				<div className="article__container">

					<section className="section__description">

						<div className="section__descriptionImage"></div>

						<div className="section__descriptionText">

							<h2 className="section__descriptionTitle">EMMANUEL MÉNDEZ</h2>

							<p className="section__descriptionParagraph">Student at Universidad Nacional Experimental de la Gran Caracas</p>

							<p className="section__descriptionParagraph">Web developer</p>

							<p className="section__descriptionParagraph">Nationality: Venezolan</p>

							<p className="section__descriptionParagraph">Languajes: English / Spanish</p>

						</div>

					</section>

					<section className="section__about">

						<h2 className="section__aboutTitle">ABOUT</h2>

						<p className="section__aboutParagraph">Professional with advanced skills in electronics, frontend and backend development of web applications, databases management and remote work.</p>

					</section>

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

					<section className="section__history">
						<section className="section__experience">
							<div>
								<p>
									Web developer
									Químicos Mayulu C.A. Internship
									Jan 2020 – Sep 2020, 9 mos
									Distrito Federal, Venezuela
									Develop a web application that speeds up the process of disclosure, updating and sale of cleaning products of the company.
                                </p>
							</div>

							<div>
								<p>
									Web developer
									Universidad Nacional Experimental de la Gran Caracas Internship
									Jan 2019 – Nov 2019, 11 mos
									Distrito Federal, Venezuela
									Develop a web application that allows to register and control the projects of the coordination of the Programa Nacional de Formación en Contaduría Pública of the UNEXCA's Altagracia headquarters.
                                </p>
							</div>

							<div>
								<p>
									Technical support
									U.E.N.B Armando Zuloaga Blanco Internship
									Feb 2018 – Nov 2018, 10 mos
									Distrito Federal, Venezuela
									Preventive and corrective maintenance of computers.
                                </p>
							</div>
						</section>

						<section className="section__education">
							<div>
								<p>
									Universidad Nacional Experimental de la Gran Caracas
									Engineering, Computer engineering
									Dates attended or expected graduation 2018 – 2022
                                </p>
							</div>
						</section>
					</section>

				</div>

			</article>

			<footer className="footer">
				<div className="footer__container">

					<div className="footer__topDesktop">

						<div className=" footer__section footer__network">
							<div className="footer__networkContainer footer__sectionContainer">
								<h2 className="footer__h2">Redes sociales</h2>

								<div className="footer__socialDiv">

									<div className="footer__social  footer__underline footer__facebook">
										<div className="footer__facebookContainer footer__socialContainer">
											<a href="https://www.facebook.com/Don-Refr%C3%A1n-2203076786583327" target="_blank" rel="noopener noreferrer" className="footer__socialLink">
												<i class="footer__socialLogo fab fa-facebook-f"></i>
												<p className="footer__socialDescription">Facebook</p>
											</a>
										</div>
									</div>


									<div className="footer__social  footer__underline footer__twitter">
										<div className="footer__twitterContainer footer__socialContainer">
											<a href="https://twitter.com/donrefran" target="_blank" rel="noopener noreferrer" className="footer__socialLink">
												<i class="footer__socialLogo fab fa-twitter"></i>
												<p className="footer__socialDescription">Twitter</p>
											</a>
										</div>
									</div>

									<div className="footer__social  footer__underline footer__instagram">
										<div className="footer__instagramContainer footer__socialContainer">
											<a href="https://www.instagram.com/donrefran" target="_blank" rel="noopener noreferrer" className="footer__socialLink">
												<i class="footer__socialLogo fab fa-instagram"></i>
												<p className="footer__socialDescription">Instagram</p>
											</a>
										</div>
									</div>

									<div className="footer__social  footer__underline footer__whatsapp">
										<div className="footer__whatsappContainer footer__socialContainer">
											<a href="https://api.whatsapp.com/send?phone=584241679997" target="_blank" rel="noopener noreferrer" className="footer__socialLink">
												<i class="footer__socialLogo fab fa-whatsapp"></i>
												<p className="footer__socialDescription">Whatsapp</p>
											</a>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>

					<div className="footer__copyright">
						<p className="footer__copyrightDescription">Copyright © 2020 www.emmanuelmendez.com</p>
						<p className="footer__copyrightDescription">All rights reserved</p>
					</div>

				</div>
			</footer>
		</div>
	);
}

export default App;
