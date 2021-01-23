import React from 'react'

const Contact = () => {
	return (
		<article className="article">

			<div className="article__container">

				<div className="contact__socialNetwork">

					<h2 className="contact__h2">Social Network</h2>

					<div className="contact__socialDiv">

						<div className="contact__social  contact__underline contact__facebook">
							<div className="contact__facebookContainer contact__socialContainer">
								<a href="https://www.facebook.com/Don-Refr%C3%A1n-2203076786583327" target="_blank" rel="noopener noreferrer" className="contact__socialLink">
									<i className="contact__socialLogo fab fa-facebook-f"></i>
									<p className="contact__socialDescription">Facebook</p>
								</a>
							</div>
						</div>


						<div className="contact__social  contact__underline contact__twitter">
							<div className="contact__twitterContainer contact__socialContainer">
								<a href="https://twitter.com/donrefran" target="_blank" rel="noopener noreferrer" className="contact__socialLink">
									<i className="contact__socialLogo fab fa-twitter"></i>
									<p className="contact__socialDescription">Twitter</p>
								</a>
							</div>
						</div>

						<div className="contact__social  contact__underline contact__instagram">
							<div className="contact__instagramContainer contact__socialContainer">
								<a href="https://www.instagram.com/donrefran" target="_blank" rel="noopener noreferrer" className="contact__socialLink">
									<i className="contact__socialLogo fab fa-instagram"></i>
									<p className="contact__socialDescription">Instagram</p>
								</a>
							</div>
						</div>

						<div className="contact__social  contact__underline contact__whatsapp">
							<div className="contact__whatsappContainer contact__socialContainer">
								<a href="https://api.whatsapp.com/send?phone=584241679997" target="_blank" rel="noopener noreferrer" className="contact__socialLink">
									<i className="contact__socialLogo fab fa-whatsapp"></i>
									<p className="contact__socialDescription">Whatsapp</p>
								</a>
							</div>
						</div>

					</div>
				</div>

			</div>

		</article>
	)
}

export default Contact