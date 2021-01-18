import React from 'react'
import { NavLink } from "react-router-dom";
import classNames from 'classnames';

export const NavEnglish = ({ toggleMenu, setToggleMenu, scrollToTopButton, setScrollToTopButton }) => {

	const toggle = () => {
		setToggleMenu(!toggleMenu)
		if (scrollToTopButton) {
			setScrollToTopButton(!scrollToTopButton)
		}
	}

	return (
		<nav className={classNames('nav', {
			'menuShow': toggleMenu,
			'menuHide': toggleMenu === false
		})}>

			<ul className="nav__menu" onClick={toggle}>
				<NavLink className="menu__link" activeClassName="selectedMenuLink" to="/profile" >
					<li className="menu__item">
						Profile
					</li>
				</NavLink>

				<NavLink className="menu__link" activeClassName="selectedMenuLink" to="/projects" >
					<li className="menu__item">
						Projects
					</li>
				</NavLink>

				<NavLink className="menu__link" activeClassName="selectedMenuLink" to="/skills" >
					<li className="menu__item">
						Skills
					</li>
				</NavLink>

				<NavLink className="menu__link" activeClassName="selectedMenuLink" to="/hobbies" >
					<li className="menu__item">
						Hobbies
					</li>
				</NavLink>

				<NavLink className="menu__link" activeClassName="selectedMenuLink" to="/contact" >
					<li className="menu__item">
						Contact
					</li>
				</NavLink>
			</ul>
		</nav>
	)
}
