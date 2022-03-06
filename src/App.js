import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Profile from '../src/components/profile/Profile';
import AboutUs from './components/aboutUs/AboutUs';
import LostOrFound from './components/lostOrFound/LostOrFound';
import AuthProvider from './context/authContext';
import { withAuth0 } from '@auth0/auth0-react';

function App(props) {
	const [width, setWidth] = useState('0%');
	const [overAllWidth, setOverAllWidth] = useState('100%');
	const [showButton, setShowButton] = useState(true);
	const {
		//  user, 
		 isAuthenticated } = props.auth0;
	console.log('isAuth?',isAuthenticated)

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
		<AuthProvider>
			<div
				className='App'
				// style={{width: overAllWidth}}
			>
				<div className='App-header'>
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
							element={<Profile overAllWidth={overAllWidth} />}
						/>
					</Routes>
					<Footer />
				</div>
			</div>
		</AuthProvider>
	);
}

export default withAuth0(App);
