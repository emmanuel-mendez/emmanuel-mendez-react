import React from 'react'
import { NavLink } from "react-router-dom";
import classNames from 'classnames';

export const NavSpanish = ({ toggleMenu, setToggleMenu, scrollToTopButton, setScrollToTopButton }) => {

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
				<NavLink className="menu__link" activeClassName="selectedMenuLink" to="/es/profile" >
					<li className="menu__item">
						Perfil
					</li>
				</NavLink>

				<NavLink className="menu__link" activeClassName="selectedMenuLink" to="/es/projects" >
					<li className="menu__item">
						Proyectos
					</li>
				</NavLink>

				<NavLink className="menu__link" activeClassName="selectedMenuLink" to="/es/skills" >
					<li className="menu__item">
						Habilidades
					</li>
				</NavLink>

				<NavLink className="menu__link" activeClassName="selectedMenuLink" to="/es/hobbies" >
					<li className="menu__item">
						Aficiones
					</li>
				</NavLink>

				<NavLink className="menu__link" activeClassName="selectedMenuLink" to="/es/contact" >
					<li className="menu__item">
						Contacto
					</li>
				</NavLink>
			</ul>

		</nav>
	)
}
