import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

import { useLang } from '../hooks/useRoute'

import { ReactComponent as Home } from '../../svg/home.svg';
import { ReactComponent as Skills } from '../../svg/skills.svg';
import { ReactComponent as Portfolio } from '../../svg/portfolio.svg';
import { ReactComponent as Cv } from '../../svg/cv.svg';
import { ReactComponent as Contact } from '../../svg/contact.svg';

export const Footer = () => {

	const [home, setHome] = useState()
	const [skills, setSkills] = useState()
	const [portfolio, setPorfolio] = useState()
	const [cv, setCv] = useState()
	const [contact, setContact] = useState()

	return (
		<footer className="footer">

			<NavLink exact to={useLang("")} className="footer__container" activeClassName="footer__selected"
				isActive={(match, location) => {
					if (match) {
						setHome("footer__iconSelected")
					} else {
						setHome()
					}
				}}>

				<Home className={`footer__icon ${home}`} />
				<p className="footer__iconName">
					{useLang() === "/es/" ? ('Inicio') : ('Home')}
				</p>
			</NavLink>

			<NavLink exact to={useLang("skills")} className="footer__container" activeClassName="footer__selected"
				isActive={(match, location) => {
					if (match) {
						setSkills("footer__iconSelected footer__iconColor")
					} else {
						setSkills()
					}
				}}>
				<Skills className={`footer__icon ${skills}`} />
				<p className="footer__iconName">
					{useLang("skills") === "/es/skills" ? ('Habilidades') : ('Skills')}
				</p>
			</NavLink>

			<NavLink exact to={useLang("portfolio")} className="footer__container" activeClassName="footer__selected"
				isActive={(match, location) => {
					if (match) {
						setPorfolio("footer__iconSelected")
					} else {
						setPorfolio()
					}
				}}>
				<Portfolio className={`footer__icon ${portfolio}`} />
				<p className="footer__iconName">
					{useLang("portfolio") === "/es/portfolio" ? ('Portafolio') : ('Portfolio')}
				</p>
			</NavLink>

			<NavLink exact to={useLang("cv")} className="footer__container" activeClassName="footer__selected"
				isActive={(match, location) => {
					if (match) {
						setCv("footer__iconSelected")
					} else {
						setCv()
					}
				}}>
				<Cv className={`footer__icon ${cv}`} />
				<p className="footer__iconName">
					CV
				</p>
			</NavLink>

			<NavLink exact to={useLang("contact")} className="footer__container" activeClassName="footer__selected"
				isActive={(match, location) => {
					if (match) {
						setContact("footer__iconSelected")
					} else {
						setContact()
					}
				}}>
				<Contact className={`footer__icon ${contact}`} />
				<p className="footer__iconName">
					{useLang("contact") === "/es/contact" ? ('Contacto') : ('Contact')}
				</p>
			</NavLink>

		</footer>
	)
}
