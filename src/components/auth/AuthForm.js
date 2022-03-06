import { Button, Container } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import AuthSignUpForm from './AuthSignUpForm';
import AuthSignInForm from './AuthSignInForm';
import axios from 'axios';
import { useAuth0, withAuth0 } from '@auth0/auth0-react';


const AuthForm = () => {
	const state = useContext(AuthContext);

	const handleSignUpSubmit = async (e) => {
		e.preventDefault();
		let userName = e.target.username.value;
		let firstName = e.target.firstName.value;
		let lastName = e.target.lastName.value;
		let password = e.target.password.value;

		let userInfo = {
			userName,
			firstName,
			lastName,
			password,
		};
		await axios.post(
			`${process.env.REACT_APP_BACKEND_SERVER}/user-creation`,
			userInfo
		);
	};

	const handleLogInSubmit = (e) => {
		e.prevantDefault();
		let username = e.target.username.value;
		let password = e.target.password.value;
		state.login(username, password);
	};
  const {loginWithRedirect} = useAuth0()

	let loginDisplay = state.loggedIn ? (
		<Button onClick={state.logout}>Logout</Button>
	) : (
		<Container fluid>
			<AuthSignUpForm handleSignUpSubmit={handleSignUpSubmit} />
			<AuthSignInForm handleLogInSubmit={handleLogInSubmit} />

			<Button variant='danger' onClick={() => loginWithRedirect()}>Log In</Button>

		</Container>
	);

	return (
		<>
			<div>{loginDisplay}</div>
		</>
	);
};

export default withAuth0(AuthForm);
