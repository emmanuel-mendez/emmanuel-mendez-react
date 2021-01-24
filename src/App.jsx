import React, { useState, useEffect } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import Layout from './components/layout/Layout'

import Contact from './components/routes/contact/Contact'
import Hobbies from './components/routes/hobbies/Hobbies'
import Home from './components/routes/home/Home'
import Portfolio from './components/routes/portfolio/Portfolio'
import Skills from './components/routes/skills/Skills'
import Cv from './components/routes/cv/Cv'


import './App.css';

const App = () => {

	const getInitialMode = () => {
		const savedMode = JSON.parse(localStorage.getItem('dark'))
		return savedMode || false
	}

	const [darkMode, setDarkMode] = useState(getInitialMode())

	useEffect(() => {
		localStorage.setItem('dark', JSON.stringify(darkMode))
	}, [darkMode])

	return (
		<div id="App" className={darkMode
			? "App darkMode"
			: "App"}>

			<Router>
				<Layout darkMode={darkMode} setDarkMode={setDarkMode}>
					<Switch>
						<Route exact path={["/", "/es/"]} >
							<Home darkMode={darkMode} setDarkMode={setDarkMode} />
						</Route>
						<Route component={Portfolio} exact path={["/portfolio", "/es/portfolio"]} />
						<Route component={Skills} exact path={["/skills", "/es/skills"]} />
						<Route component={Hobbies} exact path={["/hobbies", "/es/hobbies"]} />
						<Route component={Contact} exact path={["/contact", "/es/contact"]} />
						<Route component={Cv} exact path={["/cv", "/es/cv"]} />
					</Switch>
				</Layout>
			</Router>

		</div>
	);
}


export default App