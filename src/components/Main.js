import './Main.css';
import { withAuth0 } from '@auth0/auth0-react';

import kittyTouchingHand from './img/staticPics/kitty-touch-hand-unsplash.jpg'
import puppyEyes from './img/staticPics/sad-puppy-eyes-unsplash.jpg'
import petNextToMan from './img/staticPics/pet-next-to-man.jpg'
function main(props) {
	return (
		<section className='Main' style={{ height: '100vh' }}>
			<h1 className='h1'>Bringing a Community Together For One Purpose</h1>
			<img className='firstImg' src={puppyEyes} alt="Puppy Eyes" />
			<section className='firstInfo'>
				Everyone has heard or seen something about a pet getting lost. We want to be able to help in their time of need. If we could, we would bring in an army and turn a town upside down just to find our pet.
			</section>

			<img className='secondImg' src={kittyTouchingHand} alt="Kitty Touching Hand" />
			<section className='secondInfo' >
				The purpose of our application is to bring pets back to their owners. View up-to-date comments and an interactive map that allows you to visually track an animals movements.
			</section>

			<img className='thirdImg' src={petNextToMan} alt="Kitty Touching Hand" />
			<section className='thirdInfo' >
				We created this application because we love our pets. We want to bring our communities together and share the bond that loving our pets create.
			</section>
		</section>
	);
}

export default withAuth0(main);
