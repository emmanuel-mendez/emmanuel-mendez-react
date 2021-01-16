import React from 'react'

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__topDesktop">

					<div className=" footer__section footer__network">
						<div className="footer__networkContainer footer__sectionContainer">
							<h2 className="footer__h2">Redes sociales</h2>

							<div className="footer__socialDiv">

								<div className="footer__social  footer__underline footer__facebook">
									<div className="footer__facebookContainer footer__socialContainer">
										<a href="https://www.facebook.com/Don-Refr%C3%A1n-2203076786583327" target="_blank" rel="noopener noreferrer" className="footer__socialLink">
											<i className="footer__socialLogo fab fa-facebook-f"></i>
											<p className="footer__socialDescription">Facebook</p>
										</a>
									</div>
								</div>


								<div className="footer__social  footer__underline footer__twitter">
									<div className="footer__twitterContainer footer__socialContainer">
										<a href="https://twitter.com/donrefran" target="_blank" rel="noopener noreferrer" className="footer__socialLink">
											<i className="footer__socialLogo fab fa-twitter"></i>
											<p className="footer__socialDescription">Twitter</p>
										</a>
									</div>
								</div>

								<div className="footer__social  footer__underline footer__instagram">
									<div className="footer__instagramContainer footer__socialContainer">
										<a href="https://www.instagram.com/donrefran" target="_blank" rel="noopener noreferrer" className="footer__socialLink">
											<i className="footer__socialLogo fab fa-instagram"></i>
											<p className="footer__socialDescription">Instagram</p>
										</a>
									</div>
								</div>

								<div className="footer__social  footer__underline footer__whatsapp">
									<div className="footer__whatsappContainer footer__socialContainer">
										<a href="https://api.whatsapp.com/send?phone=584241679997" target="_blank" rel="noopener noreferrer" className="footer__socialLink">
											<i className="footer__socialLogo fab fa-whatsapp"></i>
											<p className="footer__socialDescription">Whatsapp</p>
										</a>
									</div>
								</div>

							</div>
						</div>
					</div>

				</div>
			</div>
		</footer>
	)
}
