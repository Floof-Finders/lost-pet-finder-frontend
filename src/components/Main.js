import './Main.css';
import { withAuth0 } from '@auth0/auth0-react';
function main(props) {
	return (
		<section className='Main' style={{ height: '100vh' }}>
			<h1>Lost or Found, the best app to find your pet!</h1>

			<section>
				Description of the app and what you can do!!
				<ul>
					<ul>
						<li>Navigation</li>
						<ul>
							<li>Sign in with Google</li>
							<li>Click on the hamburger on the top right to navigate</li>
						</ul>
					</ul>
					<ul>
						<li>Profile Page</li>
						<ul>
							<li>Optional: Update your profile</li>
							<li>Create a profile for your pet</li>
							<li>Post your pet to the Lost or Found Page</li>
						</ul>
					</ul>
					<ul>
						<li>Lost and Found Page</li>
						<ul>
							<li>Filter for lost or found</li>
						</ul>
						<ul>
							<li>Pet Information</li>
							<ul>
								<li>Click on Interactive Map</li>
								<li>Comment on the Pet to communicate with others</li>
							</ul>
						</ul>
					</ul>
				</ul>
			</section>
		</section>
	);
}

export default withAuth0(main);
