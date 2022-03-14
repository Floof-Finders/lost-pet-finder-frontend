import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
</style>

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			redirectUri={window.location.origin}
		>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
