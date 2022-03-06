import AuthProvider from './context/authContext';
import { withAuth0 } from '@auth0/auth0-react';

import Landing from './components/landing/Landing';
import PetContext from './context/petContext';

function App(props) {
	return (
		<>
			<AuthProvider>
				<PetContext>
					<Landing />
				</PetContext>
			</AuthProvider>
		</>
	);
}

export default withAuth0(App);
