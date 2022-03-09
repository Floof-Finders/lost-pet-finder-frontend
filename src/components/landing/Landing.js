import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Landing.css';
import Main from '../Main';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Profile from '../profile/Profile';
import AboutUs from '../aboutUs/AboutUs';
import LostOrFound from '../lostOrFound/LostOrFound';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

function Landing(props) {
	const [width, setWidth] = useState('0%');
	const [overAllWidth, setOverAllWidth] = useState('100%');
	const [showButton, setShowButton] = useState(true);
	const { user, isAuthenticated } = props.auth0;
	const setCookie = useCookies(); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (user) {
			saveUser();
		}
	}, [user]); // eslint-disable-line react-hooks/exhaustive-deps

	async function saveUser() {
		let userInfo = {
			username: user.nickname,
			email: user.email,
			password: user.email,
			role: 'editor',
		};

		await axios.post(
			`${process.env.REACT_APP_BACKEND_SERVER}/user-creation`,
			userInfo
		);

		let getUserInfo = await axios.get(
			`${process.env.REACT_APP_BACKEND_SERVER}/user-info`
		);

		let currentUser = getUserInfo.data.filter(email => email.email === user.email)
		setCookie[1]('user', currentUser[0])
	}

	const openSideNav = () => {
		setWidth('10%');
		setOverAllWidth('90%');
		setShowButton(false);
	};

	const closeSideNav = () => {
		setWidth('0%');
		setOverAllWidth('100%');
		setShowButton(true);
	};

	return (
		<div className='Landing'>
			<div>
				<Header
					showButton={showButton}
					width={width}
					closeSideNav={closeSideNav}
					openSideNav={openSideNav}
				/>
				<Routes>
					<Route path='/' element={<Main overAllWidth={overAllWidth} />} />
					<Route
						path='lostOrFound'
						element={<LostOrFound overAllWidth={overAllWidth} />}
					/>
					<Route
						path='about'
						element={
							isAuthenticated ? (
								<>
									<AboutUs overAllWidth={overAllWidth} />
								</>
							) : (
								''
							)
						}
					/>
					<Route
						path='profile'
						element={<Profile user={user} overAllWidth={overAllWidth} />}
					/>
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default withAuth0(Landing);
