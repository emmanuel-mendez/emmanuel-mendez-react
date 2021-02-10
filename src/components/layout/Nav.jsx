import React from 'react'
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import { useRoute } from '../hooks/useRoute'
import { usePathname } from '../hooks/usePathname'

import { ReactComponent as Sun } from '../../svg/sun.svg';
import { ReactComponent as Moon } from '../../svg/moon.svg';
import { ReactComponent as Lang } from '../../svg/language.svg';


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
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useRoute("skills")} >
						{useRoute("skills") === "/es/skills" ? ('Habilidades') : ('Skills')}
					</NavLink>
				</li>

				<li className="menu__item" onClick={toggle}>
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useRoute("portfolio")} >
						{useRoute("portfolio") === "/es/portfolio" ? ('Portafolio') : ('Portfolio')}
					</NavLink>
				</li>

				<li className="menu__item" onClick={toggle}>
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useRoute("cv")} >
						{'CV'}
					</NavLink>
				</li>

				<li className="menu__item" onClick={toggle}>
					<NavLink className="menu__link" activeClassName="selectedMenuLink" exact to={useRoute("contact")} >
						{useRoute("contact") === "/es/contact" ? ('Contacto') : ('Contact')}
					</NavLink>
				</li>

				<li className="menu__item menu__lang" onClick={toggle}>

					{
						usePathname().startsWith("/es/")
							? (
								<NavLink exact to="/" className="menu__link menu__langLink" >
									<Lang className="languageIcon" />
									<div className="menu__langContainer">
										<p className="menu__langEn">EN</p>
									</div>

								</NavLink>
							)
							: (
								<NavLink exact to="/es/" className="menu__link menu__langLink" >
									<Lang className="languageIcon" />
									<div className="menu__langContainer">
										<p className="menu__langEs">ES</p>
									</div>

								</NavLink>
							)
					}

				</li>

				<li className="menu__item" onClick={() => setDarkMode(!darkMode)}>
					<div className="menu__link" >
						<p className="darkDescription">{useRoute("") === "/es/" ? ('Modo oscuro') : ('Dark Mode')}</p>
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

				<div className="copyright__languajes" onClick={toggle}>
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
