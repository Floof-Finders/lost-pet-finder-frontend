import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<BrowserRouter>
					<Routes>
						<Route
							path='/'
							element={
								<>
									<Header />
									<Main />
									<Footer />
								</>
							}
						/>
					</Routes>
				</BrowserRouter>
			</header>
		</div>
	);
}

export default App;
