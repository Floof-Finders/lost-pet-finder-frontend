import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Profile from '../src/components/profile/Profile';
import AboutUs from './components/aboutUs/AboutUs';
import Landing from './components/landing/Landing';

function App() {
	const [width, setWidth] = useState('0%');
	const [overAllWidth, setOverAllWidth] = useState('100%');
	const [showButton, setShowButton] = useState(true)

	const openSideNav = () => {
		setWidth('20%');
		setOverAllWidth('80%');
		setShowButton(false)
	};

	const closeSideNav = () => {
		setWidth('0%');
		setOverAllWidth('100%');
		setShowButton(true)
	};
	
	return (
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
					<Route 
						path='/' 
						element={<Main overAllWidth={overAllWidth} />} />
					<Route
						path='landing'
						element={<Landing overAllWidth={overAllWidth} />}
					/>
					<Route
						path='about'
						element={<AboutUs overAllWidth={overAllWidth} />}
					/>
					<Route
						path='profile'
						element={<Profile overAllWidth={overAllWidth} />}
					/>
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default App;
