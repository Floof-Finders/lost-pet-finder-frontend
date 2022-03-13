import './errorPage.css'
import noEntry from '../img/staticPics/no-entry-unsplash.jpg'
import LoginButton from '../auth/LoginButton';

export default function error403() {
	return (
		<div className='errorPage'>
			<h1 className='logIn'>Please Log In to view this Page.</h1>
			<img className='noEntry' src={noEntry} />
			<h2 className='directions'>
				<LoginButton />
			</h2>
		</div>
	);
}
