import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

import { useLang } from '../hooks/useLang'

import { ReactComponent as Home } from '../../svg/home.svg';
import { ReactComponent as Skills } from '../../svg/skills.svg';
import { ReactComponent as Portfolio } from '../../svg/portfolio.svg';
import { ReactComponent as Cv } from '../../svg/cv.svg';
import { ReactComponent as Contact } from '../../svg/contact.svg';

export const BottomMenu = () => {

	const [home, setHome] = useState()
	const [skills, setSkills] = useState()
	const [portfolio, setPorfolio] = useState()
	const [contact, setContact] = useState()

	return (
		<div className="bottomMenu">

			<NavLink exact to={useLang("")} className="bottomMenu__container" activeClassName="bottomMenu__selected"
				isActive={(match, location) => {
					if (match) {
						setHome("bottomMenu__iconSelected")
					} else {
						setHome()
					}
				}}>

				<Home className={`bottomMenu__icon ${home}`} />
				<p className="bottomMenu__iconName">
					{useLang() === "/es/" ? ('Inicio') : ('Home')}
				</p>
			</NavLink>

			<NavLink exact to={useLang("skills")} className="bottomMenu__container" activeClassName="bottomMenu__selected"
				isActive={(match, location) => {
					if (match) {
						setSkills("bottomMenu__iconSelected")
					} else {
						setSkills()
					}
				}}>
				<Skills className={`bottomMenu__icon ${skills}`} />
				<p className="bottomMenu__iconName">
					{useLang("skills") === "/es/skills" ? ('Habilidades') : ('Skills')}
				</p>
			</NavLink>

			<NavLink exact to={useLang("portfolio")} className="bottomMenu__container" activeClassName="bottomMenu__selected"
				isActive={(match, location) => {
					if (match) {
						setPorfolio("bottomMenu__iconSelected")
					} else {
						setPorfolio()
					}
				}}>
				<Portfolio className={`bottomMenu__icon ${portfolio}`} />
				<p className="bottomMenu__iconName">
					{useLang("portfolio") === "/es/portfolio" ? ('Portafolio') : ('Portfolio')}
				</p>
			</NavLink>

			<a href={process.env.PUBLIC_URL + '/emmanuelMendez.pdf'} className="bottomMenu__container">
				<Cv className="bottomMenu__icon" />
				<p className="bottomMenu__iconName">
					CV
						</p>
			</a>

			<NavLink exact to={useLang("contact")} className="bottomMenu__container" activeClassName="bottomMenu__selected"
				isActive={(match, location) => {
					if (match) {
						setContact("bottomMenu__iconSelected")
					} else {
						setContact()
					}
				}}>
				<Contact className={`bottomMenu__icon ${contact}`} />
				<p className="bottomMenu__iconName">
					{useLang("contact") === "/es/contact" ? ('Contacto') : ('Contact')}
				</p>
			</NavLink>

		</div>
	)
}
