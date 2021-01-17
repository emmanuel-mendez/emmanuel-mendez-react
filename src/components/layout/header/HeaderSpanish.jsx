import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { NavSpanish } from '../nav/NavSpanish'

export const HeaderSpanish = ({ toggle, setToggle }) => {

	function updateState() {
		const state = toggle
		setToggle(!state)
	}

	return (
		<header className="header">

			<div className="header__languajes">
				<p className="header__languajesContainer">
					<NavLink exact to="/" className="header__languajesLink header__languajesEnglish" activeClassName="header__languajesSelected">
						English
					</NavLink>
					|
					<NavLink exact to="/es/" className="header__languajesLink header__languajesSpanish" activeClassName="header__languajesSelected">
						Spanish
					</NavLink>
				</p>
			</div>

			<div className="header__container" >
				<div className="header__logoContainer">
					<Link className="header__link menu__link" to="/es/" >
						<img className="header__logo" src={process.env.PUBLIC_URL + '/favicon.ico'} alt="Logo" />
					</Link>
				</div>

				<div className="header__menuToggleContainer">
					<i className="fas fa-bars header__menuToggle" as="button" onClick={updateState}></i>
				</div>

				<NavSpanish toggle={toggle} setToggle={setToggle} />

			</div>
		</header>
	)
}
