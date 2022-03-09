import './Main.css';
import AuthForm from './auth/AuthForm';
// import Map from './map/Map';
import { withAuth0 } from '@auth0/auth0-react';

function main(props) {
	return (
		<section
			className='Main'
			style={{ width: props.overAllWidth, height: '100vh' }}
		>
			<h1>Main Component</h1>
			<AuthForm />
			{/* <Map /> */}
		</section>
	);
}

export default withAuth0(main)
