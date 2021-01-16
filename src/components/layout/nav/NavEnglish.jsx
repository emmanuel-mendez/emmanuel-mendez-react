import React from 'react'
import { NavLink } from "react-router-dom";
import classNames from 'classnames';

export const NavEnglish = ({ toggle, setToggle }) => {

	return (
		<nav className={classNames('nav', {
			'menuShow': toggle
		})}>

			<ul className="nav__menu" onClick={() => setToggle(!toggle)}>
				<NavLink className="menu__link" to="/profile" >
					<li className="menu__item">
						Profile
					</li>
				</NavLink>

				<NavLink className="menu__link" to="/projects" >
					<li className="menu__item">
						Projects
					</li>
				</NavLink>

				<NavLink className="menu__link" to="/skills" >
					<li className="menu__item">
						Skills
					</li>
				</NavLink>

				<NavLink className="menu__link" to="/hobbies" >
					<li className="menu__item">
						Hobbies
					</li>
				</NavLink>

				<NavLink className="menu__link" to="/contact" >
					<li className="menu__item">
						Contact
					</li>
				</NavLink>
			</ul>

			<div className="nav__copyright">
				<p className="nav__copyrightDescription">Copyright © 2021 http://emmanelos.github.io/portfolio</p>
				<p className="nav__copyrightDescription">All rights reserved</p>
			</div>
		</nav>
	)
}
