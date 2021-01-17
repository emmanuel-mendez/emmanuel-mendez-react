import React from 'react';
import { ScrollToTopButton } from '../scroll/ScrollToTopButton'


import { Header } from './header/Header';
import { Footer } from './footer/Footer';

function Layout(props) {

	return (
		<React.Fragment>
			<Header />
			<div className="container">
				{props.children}
				<Footer />
			</div>
			<ScrollToTopButton />
		</React.Fragment>

	);
}

export default Layout;