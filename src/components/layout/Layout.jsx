import React, { useState } from 'react'
import { ScrollToTopButton } from '../scroll/ScrollToTopButton'

import { Header } from './header/Header';

import { Container } from './container/Container'

function Layout(props) {

	const [toggle, setToggle] = useState(false)

	const setToggleFromArticle = () => {
		if (toggle) {
			setToggle(!toggle)
		}
	}

	return (
		<React.Fragment>
			<Header toggle={toggle} setToggle={setToggle} />

			<Container toggle={toggle} setToggle={setToggle} setToggleFromArticle={setToggleFromArticle} props={props} />

			<ScrollToTopButton />
		</React.Fragment>

	);
}

export default Layout;