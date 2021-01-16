import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { NavEnglish } from '../nav/NavEnglish'

export const HeaderEnglish = ({ toggle, setToggle }) => {

	function updateState() {
		const state = toggle
		setToggle(!state)
	}

	return (
		<header className="header">

			<div className="header__languajes">
				<p className="header__languajesContainer">
					<NavLink to="/" className="header__languajesLink header__languajesEnglish">
						English
					</NavLink>
		|
					<NavLink to="/es/" className="header__languajesLink header__languajesSpanish">
						Spanish
					</NavLink>
				</p>
			</div>

			<div className="header__container" >
				<div className="header__logoContainer">
					<Link className="menu__link" to="/" >
						<h1 className="header__title">Emmanuel Méndez</h1>
					</Link>
				</div>

				<div className="header__menuToggleContainer">
					<i className="fas fa-bars header__menuToggle" as="button" onClick={updateState}></i>
				</div>

				<NavEnglish toggle={toggle} setToggle={setToggle} />

			</div>
		</header>
	)
}
