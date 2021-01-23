import React from 'react'
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import { useLang } from '../hooks/useLang'
import { usePathname } from '../hooks/usePathname'

export const Nav = ({ toggleMenu, setToggleMenu, scrollToTopButton, setScrollToTopButton }) => {

	const toggle = () => {
		setToggleMenu(!toggleMenu)
		if (scrollToTopButton) {
			setScrollToTopButton(!scrollToTopButton)
		}
	}

	return (
		<nav className={classNames('nav', {
			'menuShow': toggleMenu
		})}>

			<ul className="nav__menu" onClick={toggle}>

				<li className="menu__item">
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useLang("portfolio")} >
						{useLang("portfolio") === "/es/portfolio" ? ('Portafolio') : ('Portfolio')}
					</NavLink>
				</li>

				<li className="menu__item">
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useLang("skills")} >
						{useLang("skills") === "/es/skills" ? ('Habilidades') : ('Skills')}
					</NavLink>
				</li>

				<li className="menu__item">
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useLang("hobbies")} >
						{useLang("hobbies") === "/es/hobbies" ? ('Aficiones') : ('Hobbies')}
					</NavLink>
				</li>

				<li className="menu__item">
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useLang("contact")} >
						{useLang("contact") === "/es/contact" ? ('Contacto') : ('Contact')}
					</NavLink>
				</li>

				<li className="menu__item">
					<a className="menu__link" href={process.env.PUBLIC_URL + '/emmanuelMendez.pdf'} target="blank">
						{useLang("curriculum") === "/es/curriculum" ? ('Curriculum vitae') : ('Curriculum vitae')}
					</a>
				</li>
			</ul>

			<div className="copyright">

				<div className="copyright__container">

					<div className="copyright__copyright">
						<p className="copyright__copyrightDescription">{usePathname().startsWith("/es/")
							? ('Diseñado y desarrollado por Emmanuel Méndez')
							: ('Designed and built by Emmanuel Méndez')}</p>
					</div>

					<div className="copyright__languajes">
						<p className="copyright__languajesContainer">
							<NavLink exact to="/" className={classNames('copyright__languajesLink copyright__languajesEnglish  activeClassName="copyright__languajesSelected', {
								"copyright__languajesSelected": usePathname().startsWith("/es/") === false
							})}>
								English
						</NavLink>
				|
						<NavLink exact to="/es/" className={classNames('copyright__languajesLink copyright__languajesSpanish activeClassName="copyright__languajesSelected', {
								"copyright__languajesSelected": usePathname().startsWith("/es/")
							})}>
								Spanish
						</NavLink>
						</p>
					</div>

				</div>
			</div>
		</nav>
	)
}
