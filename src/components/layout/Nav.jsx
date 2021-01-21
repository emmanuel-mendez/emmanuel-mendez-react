import React from 'react'
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import { useLang } from '../hooks/useLang'

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
		</nav>
	)
}
