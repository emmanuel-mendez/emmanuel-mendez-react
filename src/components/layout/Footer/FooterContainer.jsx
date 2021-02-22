import React, { useState } from 'react'

import { Footer } from './Footer';

const FooterContainer = () => {

	const [home, setHome] = useState()
	const [skills, setSkills] = useState()
	const [portfolio, setPortfolio] = useState()
	const [cv, setCv] = useState()
	const [contact, setContact] = useState()

	return <Footer
		home={home} setHome={setHome}
		skills={skills} setSkills={setSkills}
		portfolio={portfolio} setPortfolio={setPortfolio}
		cv={cv} setCv={setCv}
		contact={contact} setContact={setContact}
	/>
}

export default FooterContainer
