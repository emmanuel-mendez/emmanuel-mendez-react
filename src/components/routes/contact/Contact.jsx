import React from 'react'

import { ReactComponent as Linkedin } from '../../../svg/linkedin.svg';
import { ReactComponent as Facebook } from '../../../svg/facebook.svg';
import { ReactComponent as Instagram } from '../../../svg/instagram.svg';
import { ReactComponent as Twitter } from '../../../svg/twitter.svg';
import { ReactComponent as Github } from '../../../svg/github.svg';

const Contact = () => {
	return (
		<section className="contact">

			<ul className="contact__links">
				<li className="contact__linkContainer">
					<a href="https://www.linkedin.com/in/emmanelos" target="blank" className="contact__link">
						<Linkedin className="contact__linkLogo" />
						<p>Linkedin</p>
					</a>
				</li>

				<li className="contact__linkContainer">
					<a href="https://www.facebook.com/emmanelos/" target="blank" className="contact__link">
						<p>Facebook</p>
						<Facebook className="contact__linkLogo" />

					</a>
				</li>

				<li className="contact__linkContainer">
					<a href="https://www.instagram.com/emmanelos/" target="blank" className="contact__link">
						<Instagram className="contact__linkLogo" />
						<p>Instagram</p>
					</a>
				</li>

				<li className="contact__linkContainer">
					<a href="https://twitter.com/emmanelost" target="blank" className="contact__link">
						<p>Twitter</p>
						<Twitter className="contact__linkLogo" />

					</a>
				</li>

				<li className="contact__linkContainer">
					<a href="https://github.com/emmanelos" target="blank" className="contact__link">
						<Github className="contact__linkLogo" />
						<p>Github</p>
					</a>
				</li>
			</ul>

		</section>
	)
}

export default Contact