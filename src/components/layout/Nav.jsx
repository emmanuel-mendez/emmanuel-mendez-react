import React from 'react'
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import { useLang } from '../hooks/useRoute'
import { usePathname } from '../hooks/usePathname'

import { ReactComponent as Sun } from '../../svg/sun.svg';
import { ReactComponent as Moon } from '../../svg/moon.svg';


export const Nav = ({ toggleMenu, setToggleMenu, scrollToTopButton, setScrollToTopButton, darkMode, setDarkMode }) => {

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

			<ul className="nav__menu">

				<li className="menu__item" onClick={toggle}>
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useLang("skills")} >
						{useLang("skills") === "/es/skills" ? ('Habilidades') : ('Skills')}
					</NavLink>
				</li>

				<li className="menu__item" onClick={toggle}>
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useLang("portfolio")} >
						{useLang("portfolio") === "/es/portfolio" ? ('Portafolio') : ('Portfolio')}
					</NavLink>
				</li>

				<li className="menu__item" onClick={toggle}>
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useLang("cv")} >
						{'CV'}
					</NavLink>
				</li>

				<li className="menu__item" onClick={toggle}>
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useLang("contact")} >
						{useLang("contact") === "/es/contact" ? ('Contacto') : ('Contact')}
					</NavLink>
				</li>

				<li className="menu__item" onClick={() => setDarkMode(!darkMode)}>
					<div className="menu__link" >
						<p className="darkDescription">{useLang("") === "/es/" ? ('Modo oscuro') : ('Dark Mode')}</p>
						<div className={darkMode
							? "switch dark"
							: "switch"} >
							<div className="switchIcon"><Moon className="switchsvg" /></div>
							<div className="switchIcon"><Sun className="switchsvg" /></div>

						</div>
					</div>
				</li>
			</ul>

			<div className="copyright">

				<div className="copyright__copyright">
					<div className="copyright__copyrightDescription">{usePathname().startsWith("/es/")
						? (<div>
							<p>Diseñado y desarrollado por</p>
							<p>Emmanuel Méndez</p>
						</div>)
						: (<div>
							<p>Designed and built by</p>
							<p>Emmanuel Méndez</p>
						</div>)}</div>
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
		</nav>
	)
}
