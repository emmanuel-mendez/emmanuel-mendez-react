import React, { useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use'
import { useLocation } from "react-router-dom";

import { Header } from './Header';
import { Footer } from './Footer'

import { ScrollToTopButton } from '../scroll/ScrollToTopButton'



import { NavLink } from "react-router-dom";

import { useLang } from '../hooks/useLang'

import home from '../../svg/home.svg';
import skills from '../../svg/skills.svg';
import portfolio from '../../svg/portfolio.svg';
import cv from '../../svg/cv.svg';
import contact from '../../svg/contact.svg';

export const Layout = (props) => {

	const [toggleMenu, setToggleMenu] = useState(false)
	const [scrollToTopButton, setScrollToTopButton] = useState(false)

	const { y: pageYOffset } = useWindowScroll()

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [useLocation()]); // eslint-disable-line

	const setToggleFromContainer = () => {
		if (toggleMenu === true) {
			setToggleMenu(!toggleMenu)
		}
	}

	return (
		<React.Fragment>
			<Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} pageYOffset={pageYOffset} scrollToTopButton={scrollToTopButton} setScrollToTopButton={setScrollToTopButton} />

			<div className="layout" onClick={setToggleFromContainer}>
				{props.children}
				<Footer />
				<div className="bottomMenu">

					<NavLink exact to={useLang("")} className="bottomMenu__container" activeClassName="bottomMenu__selected">
						<img className="bottomMenu__icon" src={home} alt="home" />
						<p className="bottomMenu__iconName">
							{useLang("") === "/es/" ? ('Inicio') : ('Home')}
						</p>
					</NavLink>

					<NavLink exact to={useLang("skills")} className="bottomMenu__container" activeClassName="bottomMenu__selected">
						<img className="bottomMenu__icon" src={skills} alt="skills" />
						<p className="bottomMenu__iconName">
							{useLang("skills") === "/es/skills" ? ('Habilidades') : ('Skills')}
						</p>
					</NavLink>

					<NavLink exact to={useLang("portfolio")} className="bottomMenu__container" activeClassName="bottomMenu__selected">
						<img className="bottomMenu__icon" src={portfolio} alt="portfolio" />
						<p className="bottomMenu__iconName">
							{useLang("portfolio") === "/es/portfolio" ? ('Portafolio') : ('Portfolio')}
						</p>
					</NavLink>

					<a href={process.env.PUBLIC_URL + '/emmanuelMendez.pdf'} className="bottomMenu__container">
						<img className="bottomMenu__icon" src={cv} alt="cv" />
						<p className="bottomMenu__iconName">
							CV
						</p>
					</a>

					<NavLink exact to={useLang("contact")} className="bottomMenu__container" activeClassName="bottomMenu__selected">
						<img className="bottomMenu__icon" src={contact} alt="contact" />
						<p className="bottomMenu__iconName">
							{useLang("contact") === "/es/contact" ? ('Contacto') : ('Contact')}
						</p>
					</NavLink>

				</div>
			</div>

			<ScrollToTopButton scrollToTopButton={scrollToTopButton} pageYOffset={pageYOffset} />
		</React.Fragment>

	);
}