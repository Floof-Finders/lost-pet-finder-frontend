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
				Everyone has heard or seen something about a pet going lost. We always want to be able to help in their times to need, because we know we pet owners. If we could we would bring an army and turn a town upside down just to find out pet.
			</section>

			<img className='secondImg' src={kittyTouchingHand} alt="Kitty Touching Hand" />
			<section className='secondInfo' >
				An Application that is based soley to bring a pet back to its owner. To view update to date comments, an interactive map that allows you to visually see the animals movements. We can not rely on street addresses when all we want to do is jump in our cars and drive as fast as we can to find them.
			</section>

			<img className='thirdImg' src={petNextToMan} alt="Kitty Touching Hand" />
			<section className='thirdInfo' >
				We created this application because we love our pets. We want to bring the community together and create a bonding community that understands the pain, and will bring the best out of us to unite for one sole purpose. Our love for our pets.   
			</section>
		</section>
	);
}

export default withAuth0(main);
