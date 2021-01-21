import React from 'react'
import { usePathname } from '../../hooks/usePathname'
import { Link } from "react-router-dom";

const Home = () => {

	const useLang = () => {
		if (usePathname().startsWith("/es/")) {
			return true
		}
	}

	return (

		<article className="article">

			<section className="home">

				<div className="home__container">

					<h2 className="home__title">
						<p>{"<Emmanuel"}</p><p className="home__titleLastName">{"Méndez/>"}</p>
					</h2>

					<img src={process.env.PUBLIC_URL + '/emmanuelMendez.webp'} width="512" height="512" alt="Emmanuel Méndez" className="home__image" />

					<div className="home__descriptionContainer">

						<p className="home__description">{useLang()
							? ("Desarrollador web")
							: ("Web developer")}</p>

						<p className="home__description">{useLang()
							? ("Estudiante en la Universidad Nacional Experimental de la Gran Caracas")
							: ("Student at Universidad Nacional Experimental de la Gran Caracas")}</p>

						<p className="home__description">{useLang()
							? ("Nacionalidad: Venezolano")
							: ("Nationality: Venezolan")}</p>

						<p className="home__description">{useLang()
							? ("Lenguajes: Ingles / Español")
							: ("Languajes: English / Spanish")}</p>
					</div>

				</div>

			</section>

			<section className="home__links">

				<ul className="home__linksList">

					<li className="home__itemLink">
						<Link className="home__link" to="/projects">{useLang()
							? ("Proyectos")
							: ("Projects")}</Link >
					</li>

					<li className="home__itemLink">
						<Link className="home__link" to="/skills">{useLang()
							? ("Habilidades")
							: ("Skills")}</Link>
					</li>

					<li className="home__itemLink">
						<Link className="home__link" to="/hobbies">{useLang()
							? ("Aficiones")
							: ("Hobbies")}</Link>
					</li>

					<li className="home__itemLink">
						<Link className="home__link" to="/contact">{useLang()
							? ("Contacto")
							: ("Contact")}</Link>
					</li>

					<li className="home__itemLink">
						<a className="home__link" href={process.env.PUBLIC_URL + '/emmanuelMendez.pdf'} target="blank">Curriculum vitae</a>
					</li>

				</ul>

			</section>

		</article >
	)
}

export default Home