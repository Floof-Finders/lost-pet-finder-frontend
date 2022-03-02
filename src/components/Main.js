import { BrowserRouter as Routes, Route } from 'react-router-dom';
import AboutUs from './aboutUs/AboutUs';
import Landing from './landing/Landing';
import Profile from './profile/Profile';


export default function main() {
	return (
		<section>
      <h1>Main Component</h1>
				<Routes>
					<Route path='landing' element={<Landing/>} />
					<Route path='profile' element={<Profile/>} />
					<Route path='aboutUs' element={<AboutUs/>} />
				</Routes>

		</section>
	);
}
