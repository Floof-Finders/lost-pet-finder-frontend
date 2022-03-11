import './Main.css';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from '../components/auth/LoginButton'
function main(props) {
	return (

		<section
			className='Main'
			style={{ height: '100vh' }}
			>
			<h1>Lost or Found, the best app to find your pet!</h1>

			<section>
				Description of the app and what you can do!!

			</section>
				<LoginButton />
		</section>
	);
}

export default withAuth0(main)
