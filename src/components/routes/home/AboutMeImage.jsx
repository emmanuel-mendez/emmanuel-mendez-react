import React from 'react'

function AboutMeImage() {
	return (
		<img src={process.env.PUBLIC_URL + '/emmanuelMendez.webp'} width="512" height="512" alt="Emmanuel Méndez" className="aboutMe__image" />
	)
}

export default AboutMeImage
