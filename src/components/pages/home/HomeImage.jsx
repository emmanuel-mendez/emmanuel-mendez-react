import React from 'react'

function HomeImage() {
	return (
		<img src={process.env.PUBLIC_URL + '/emmanuelMendez.webp'} width="512" height="512" alt="Emmanuel Méndez" className="home__image" />
	)
}

export default HomeImage
