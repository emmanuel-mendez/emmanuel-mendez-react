import React from 'react'
import { NavLink } from "react-router-dom";
import classNames from 'classnames';

import { usePathname } from '../hooks/usePathname'

export const Footer = () => {

	return (

		<footer className="footer">

			<div className="footer__container">

				<div className="footer__copyright">
					<p className="footer__copyrightDescription">{usePathname().startsWith("/es/")
						? ('Diseñado y desarrollado por Emmanuel Méndez')
						: ('Designed and built by Emmanuel Méndez')}</p>
				</div>

				<div className="footer__languajes">
					<p className="footer__languajesContainer">
						<NavLink exact to="/" className={classNames('footer__languajesLink footer__languajesEnglish  activeClassName="footer__languajesSelected', {
							"footer__languajesSelected": usePathname().startsWith("/es/") === false
						})}>
							English
						</NavLink>
				|
						<NavLink exact to="/es/" className={classNames('footer__languajesLink footer__languajesSpanish activeClassName="footer__languajesSelected', {
							"footer__languajesSelected": usePathname().startsWith("/es/")
						})}>
							Spanish
						</NavLink>
					</p>
				</div>

			</div>
		</footer>

	)
}
