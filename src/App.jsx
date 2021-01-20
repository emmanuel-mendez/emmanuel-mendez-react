import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import { Layout } from './components/layout/Layout'

import { Contact } from './components/pages/contact/Contact'
import { Hobbies } from './components/pages/hobbies/Hobbies'
import { Home } from './components/pages/home/Home'
import { Projects } from './components/pages/projects/Projects'
import { Skills } from './components/pages/skills/Skills'

import './App.css';

export const App = () => {

	return (
		<div className="App">

			<Router>
				<Layout>
					<Switch>
						<Route component={Home} exact path={["/", "/es/"]} />
						<Route component={Projects} exact path={["/projects", "/es/projects"]} />
						<Route component={Skills} exact path={["/skills", "/es/skills"]} />
						<Route component={Hobbies} exact path={["/hobbies", "/es/hobbies"]} />
						<Route component={Contact} exact path={["/contact", "/es/contact"]} />
					</Switch>
				</Layout>
			</Router>

		</div>
	);
}