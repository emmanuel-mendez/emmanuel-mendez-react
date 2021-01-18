import React from 'react'
import { NavLink } from "react-router-dom";

export const FooterEnglish = () => {

	return (
		<footer className="footer">

			<div className="footer__container">

				<div className="footer__copyright">
					<p className="footer__copyrightDescription">Designed and built by Emmanuel Méndez</p>
				</div>

				<div className="footer__languajes">
					<p className="footer__languajesContainer">
						<NavLink exact to="/" className="footer__languajesLink footer__languajesEnglish footer__languajesSelected" activeClassName="footer__languajesSelected">
							English
					</NavLink>
		|
					<NavLink exact to="/es/" className="footer__languajesLink footer__languajesSpanish" activeClassName="footer__languajesSelected">
							Spanish
					</NavLink>
					</p>
				</div>

			</div>
		</footer>
	)
}
