import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Profile from '../src/components/profile/Profile';
import AboutUs from './components/aboutUs/AboutUs';
import Landing from './components/landing/Landing';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Header />
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Main />
								<Footer />
							</>
						}
					/>
					<Route path='landing' element={<Landing />} />
					<Route path='about' element={<AboutUs />} />
					<Route path='profile' element={<Profile />} />
				</Routes>
			</header>
		</div>
	);
}

export default App;
