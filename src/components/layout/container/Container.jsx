import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";

import { Footer } from '../footer/Footer';

export const Container = ({ toggleMenu, setToggleMenu, props }) => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [useLocation()]); // eslint-disable-line

	function setToggleFromContainer() {
		if (toggleMenu === true) {
			setToggleMenu(!toggleMenu)
		}
	}

	return (
		<div className="container" onClick={setToggleFromContainer}>
			{props.children}
			<Footer />
		</div>
	)
}

