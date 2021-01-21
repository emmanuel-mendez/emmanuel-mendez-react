import React from 'react'
import { NavLink } from "react-router-dom";

import { useLang } from '../hooks/useLang'

import home from '../../svg/home.svg';
import skills from '../../svg/skills.svg';
import portfolio from '../../svg/portfolio.svg';
import cv from '../../svg/cv.svg';
import contact from '../../svg/contact.svg';

export const BottomMenu = () => {
	return (
		<div className="bottomMenu">

			<NavLink exact to={useLang("")} className="bottomMenu__container" activeClassName="bottomMenu__selected">
				<img className="bottomMenu__icon" src={home} width="512" height="512" alt="home" />
				<p className="bottomMenu__iconName">
					{useLang("") === "/es/" ? ('Inicio') : ('Home')}
				</p>
			</NavLink>

			<NavLink exact to={useLang("skills")} className="bottomMenu__container" activeClassName="bottomMenu__selected">
				<img className="bottomMenu__icon" src={skills} width="512" height="512" alt="skills" />
				<p className="bottomMenu__iconName">
					{useLang("skills") === "/es/skills" ? ('Habilidades') : ('Skills')}
				</p>
			</NavLink>

			<NavLink exact to={useLang("portfolio")} className="bottomMenu__container" activeClassName="bottomMenu__selected">
				<img className="bottomMenu__icon" src={portfolio} width="512" height="512" alt="portfolio" />
				<p className="bottomMenu__iconName">
					{useLang("portfolio") === "/es/portfolio" ? ('Portafolio') : ('Portfolio')}
				</p>
			</NavLink>

			<a href={process.env.PUBLIC_URL + '/emmanuelMendez.pdf'} className="bottomMenu__container">
				<img className="bottomMenu__icon" src={cv} width="512" height="512" alt="cv" />
				<p className="bottomMenu__iconName">
					CV
						</p>
			</a>

			<NavLink exact to={useLang("contact")} className="bottomMenu__container" activeClassName="bottomMenu__selected">
				<img className="bottomMenu__icon" src={contact} width="512" height="512" alt="contact" />
				<p className="bottomMenu__iconName">
					{useLang("contact") === "/es/contact" ? ('Contacto') : ('Contact')}
				</p>
			</NavLink>

		</div>
	)
}
