import React from 'react'
import { Link } from "react-router-dom";
import { NavEnglish } from '../nav/NavEnglish'

export const HeaderEnglish = ({ toggle, setToggle }) => {

	function setToggleFromToggleMenu() {
		setToggle(!toggle)
	}

	return (
		<header className="header">

			<div className="header__container" >
				<div className="header__logoContainer">
					<Link className="header__link menu__link" to="/" >
						<img className="header__logo" src={process.env.PUBLIC_URL + '/favicon.ico'} alt="Logo" />
					</Link>
				</div>

				<div className="header__menuToggleContainer">
					<i className="fas fa-bars header__menuToggle" as="button" onClick={setToggleFromToggleMenu}></i>
				</div>

				<NavEnglish toggle={toggle} setToggle={setToggle} />

			</div>
		</header>
	)
}
