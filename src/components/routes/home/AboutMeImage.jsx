import React from 'react'

function AboutMeImage() {
	return (
		<img src={process.env.PUBLIC_URL + '/png/emmanuelMendez.png'} width="512" height="512" alt="Emmanuel Méndez" className="aboutMe__image" />
	)
}

export default AboutMeImage
