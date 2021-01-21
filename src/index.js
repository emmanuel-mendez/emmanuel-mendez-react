import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorkerRegistration';

const App = lazy(() => import('./App.jsx'))

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback={
			<div className="loader">
				<div className="spinner"></div>
			</div>
		}>
			<App />
		</Suspense>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.register();