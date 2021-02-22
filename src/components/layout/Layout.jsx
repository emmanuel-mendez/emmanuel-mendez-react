import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from "react-router-dom";
import { useScroll } from 'react-use';

import { Header } from './Header';

import { Footer } from './Footer'

import { ScrollToTopButton } from '../scroll/ScrollToTopButton'
import { useOnline } from '../hooks/useOnline'
import { useLang } from '../hooks/useLang';

const Layout = ({ children, darkMode, setDarkMode }) => {

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

	const Offline = () => {
		return (
			<div className="offline">
				{ useLang()
					? <p>Sin conexión</p>
					: <p>Offline</p>
				}
			</div>
		)
	}

	return (
		<React.Fragment>
			<Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} darkMode={darkMode} setDarkMode={setDarkMode} y={y} />

			{
				useOnline()
					? null
					: <Offline />
			}

			<div className="layout" onClick={setToggleFromContainer} >

				<article className={useOnline()
					? "article"
					: "article article__offlineMode"}>

					<div className={
						useOnline()
							? "route"
							: "route route__offlineMode"
					} ref={scrollRef} id="ref">

						{children}
					</div>
				</article>

				<Footer />
			</div>

			<ScrollToTopButton scrollToTopButton={scrollToTopButton} />
		</React.Fragment>

	);
}

export default Layout