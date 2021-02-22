import React from 'react'
import {
	Router,
	Switch,
	Route,
} from "react-router-dom";

import Layout from './components/layout/LayoutContainer'

import Contact from './components/routes/contact/Contact'
import Home from './components/routes/home/Home'
import Portfolio from './components/routes/portfolio/Portfolio'
import Skills from './components/routes/skills/Skills'
import Cv from './components/routes/cv/Cv'

export const App = ({ darkMode, setDarkMode, history }) => {

	return (
		<div id="App" className={darkMode
			? "App darkMode"
			: "App"}>

			<Router history={history}>
				<Layout darkMode={darkMode} setDarkMode={setDarkMode}>
					<Switch>

						<Route exact path={["/", "/es/"]} >
							<Home />
						</Route>

						<Route exact path={["/skills", "/es/skills"]} >
							<Skills />
						</Route>

						<Route exact path={["/portfolio", "/es/portfolio"]} >
							<Portfolio />
						</Route>

						<Route exact path={["/cv", "/es/cv"]} >
							<Cv />
						</Route>

						<Route exact path={["/contact", "/es/contact"]} >
							<Contact />
						</Route>

					</Switch>
				</Layout>
			</Router>

		</div>
	);
}

export default App