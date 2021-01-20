import React from 'react'
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import { useNavLang } from '../../hooks/useNavLang'

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
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useNavLang("profile")} >
						{useNavLang("profile") ? ('Perfil') : ('Profile')}
					</NavLink>
				</li>

				<li className="menu__item">
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useNavLang("projects")} >
						{useNavLang("projects") ? ('Proyectos') : ('Projects')}
					</NavLink>
				</li>

				<li className="menu__item">
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useNavLang("skills")} >
						{useNavLang("skills") ? ('Habilidades') : ('Skills')}
					</NavLink>
				</li>

				<li className="menu__item">
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useNavLang("hobbies")} >
						{useNavLang("hobbies") ? ('Aficiones') : ('Hobbies')}
					</NavLink>
				</li>

				<li className="menu__item">
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useNavLang("contact")} >
						{useNavLang("contact") ? ('Contacto') : ('Contact')}
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
