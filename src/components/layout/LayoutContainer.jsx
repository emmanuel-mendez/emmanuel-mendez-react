import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from "react-router-dom";
import { useScroll } from 'react-use';

import { Layout } from './Layout';

const LayoutContainer = ({ children, darkMode, setDarkMode }) => {

	const scrollRef = useRef(null);
	const { y } = useScroll(scrollRef);

	const [toggleMenu, setToggleMenu] = useState(false)
	const [scrollToTopButton, setScrollToTopButton] = useState(false)

	useEffect(() => {
		if (y > 112 && scrollToTopButton === false) {
			setScrollToTopButton(true)
		} else if (y < 112) {
			setScrollToTopButton(false)
		}
	}, [y]) // eslint-disable-line

	useEffect(() => {
		let a = document.getElementById("ref");
		a.scrollTo(0, 0);
	}, [useLocation()]); // eslint-disable-line

	const setToggleFromContainer = () => {
		if (toggleMenu === true) {
			setToggleMenu(!toggleMenu)
		}
	}

	return (
		<Layout children={children} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} darkMode={darkMode} setDarkMode={setDarkMode} setToggleFromContainer={setToggleFromContainer} y={y} scrollRef={scrollRef} scrollToTopButton={scrollToTopButton} />

	);
}

export default LayoutContainer