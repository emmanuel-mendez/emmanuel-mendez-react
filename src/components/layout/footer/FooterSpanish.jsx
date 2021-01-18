import React from 'react'
import { NavLink } from "react-router-dom";


export const FooterSpanish = () => {
	return (
		<footer className="footer">
			<div className="footer__container">

				<div className="footer__copyright">
					<p className="footer__copyrightDescription">
						Diseñado y desarrollado por Emmanuel Méndez
					</p>
				</div>

				<div className="footer__languajes">
					<p className="footer__languajesContainer">
						<NavLink exact to="/" className="footer__languajesLink footer__languajesEnglish">
							English
					</NavLink>
					|
					<NavLink exact to="/es/" className="footer__languajesLink footer__languajesSpanish footer__languajesSelected" activeClassName="footer__languajesSelected">
							Spanish
					</NavLink>
					</p>
				</div>

			</div>
		</footer>
	)
}
