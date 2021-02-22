import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorkerRegistration';
import { AppContainer } from './AppContainer'

ReactDOM.render(
	<React.StrictMode>
		<AppContainer />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.register();