import React from 'react'
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import { useNavLang } from '../../components/hooks/useNavLang'

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
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useNavLang("projects")} >
						{useNavLang("projects") === "/es/projects" ? ('Proyectos') : ('Projects')}
					</NavLink>
				</li>

				<li className="menu__item">
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useNavLang("skills")} >
						{useNavLang("skills") === "/es/skills" ? ('Habilidades') : ('Skills')}
					</NavLink>
				</li>

				<li className="menu__item">
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useNavLang("hobbies")} >
						{useNavLang("hobbies") === "/es/hobbies" ? ('Aficiones') : ('Hobbies')}
					</NavLink>
				</li>

				<li className="menu__item">
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useNavLang("contact")} >
						{useNavLang("contact") === "/es/contact" ? ('Contacto') : ('Contact')}
					</NavLink>
				</li>

				<li className="menu__item">
					<a className="menu__link" href={process.env.PUBLIC_URL + '/emmanuelMendez.pdf'} target="blank">
						{useNavLang("curriculum") === "/es/curriculum" ? ('Curriculum vitae') : ('Curriculum vitae')}
					</a>
				</li>
			</ul>
		</nav>
	)
}
