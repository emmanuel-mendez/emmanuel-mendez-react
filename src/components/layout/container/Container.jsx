import React from 'react'

import { Footer } from '../footer/Footer';

export const Container = ({ toggle, setToggle, props }) => {

	function setToggleFromContainer() {
		if (toggle === true) {
			setToggle(!toggle)
		}
	}

	return (
		<div className="container" onClick={setToggleFromContainer}>
			{props.children}
			<Footer />
		</div>
	)
}

