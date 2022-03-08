import { createContext, useState } from 'react';
const axios = require('axios');

export const AuthContext = createContext();

export default function AuthProvider(props) {
	const [loggedIn, setloggedIn] = useState(false);
	const [capabilities, setCapabilities] = useState([]);
	const [role, setRole] = useState('');

	console.log(loggedIn, capabilities, role);

	const login = async (username, password) => {
		await axios
			.post(
				`${process.env.REACT_APP_BACKEND_SERVER}/signin`,
				{},
				{
					auth: {
						username: username,
						password: password,
					},
				}
			)
			.then((res) => {
				if (res) {
					setloggedIn(true);
					setCapabilities(res.data.user.capabilities);
					setRole(res.data.user.role);
				}
			})
			.catch((error) => {
				console.log('Error on Authentication', error);
			});
	};

	const logout = () => {
		// on logout, reset state variables
		setloggedIn(false);
	};

	const can = (capability) => {
		return capabilities.includes(capability);
	};

	const state = {
		loggedIn,
		capabilities,
		role,
		login,
		logout,
		can,
	};

	return (
		<AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
	);
}
