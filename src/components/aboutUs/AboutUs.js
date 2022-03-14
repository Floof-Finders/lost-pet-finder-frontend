import './AboutUs.css';
import { Card } from 'react-bootstrap';

// Mark
import mark from '../img/profile/MThanadabouth.jpg';
import lilBae from '../img/pets/lilBae.jpeg';
// Charlie
import charlie from '../img/profile/charlieF.JPG';
import HaruKrissy from '../img/pets/HaruKrissy.jpg';
// Heather
import heather from '../img/profile/hBisgaard.jpg';
import betaRomen from '../img/pets/betaRomen.png';
import betaromen from '../img/pets/betaromen.jpg';

import Image from 'react-bootstrap/Image';

export default function AboutUs(props) {
	return (
		<div className='aboutUs'>
			<h2 className='header'>Creators of Lost Pet Finder</h2>

			<Image className='heather' thumbnail src={heather} />
			<Image className='heatherPet' thumbnail src={betaromen} />
			<Image className='charlie' thumbnail src={charlie} />
			<Image className='charliePet' thumbnail src={HaruKrissy} />
			<Image className='mark' thumbnail src={mark} />
			<Image className='markPet' thumbnail src={lilBae} />

			<section className='heatherBio'>
				<div className='Header'>Heather Bisgaard</div>
				<span className='iconsHeather'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						fill='currentColor'
						class='bi bi-github'
						viewBox='0 0 16 16'
					>
						<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
					</svg>
					<Card.Link className='githubIcon' href='https://github.com/vbchomp'>
						github.com/vbchomp
					</Card.Link>
				</span>

				<span className='iconsHeather'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						fill='currentColor'
						class='bi bi-linkedin'
						viewBox='0 0 16 16'
					>
						<path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
					</svg>
					<Card.Link
						className='githubIcon'
						href='https://www.linkedin.com/in/heather-bisgaard/'
					>
						linkedin.com/in/heather-bisgaard
					</Card.Link>
				</span>
				<aside className='bio'>
					Heather is a Software Engineer and recent graduate from Code Fellows.
					Previously, she was a Database and Systems Administrator who dabbled
					in Electronics repair and Calibration. Recently, she decided to change
					directions to Software Development to allow for a newly discovered
					passion - sailing.
					<br /> <br />
					She has been in the Army for 18 years and learned how to work in teams
					of diverse personalities and still accomplish our missions.
					<br />
					<br />
					She has always been into technology and since getting into marine
					life, has learned many of the perils affecting one of our worlds most
					precious resources. She would like to use technology to figure out
					ways to help protect the world’s bodies of water and all the wonderful
					creatures living within them.
				</aside>
			</section>

			<section className='charlieBio'>
				<div className='Header'>Charlie Fadness</div>
				<span className='iconsCharlie'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						fill='currentColor'
						class='bi bi-github'
						viewBox='0 0 16 16'
					>
						<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
					</svg>
					<Card.Link
						className='githubIcon'
						href='https://github.com/fadnesscharlie'
					>
						github.com/fadnesscharlie
					</Card.Link>
				</span>

				<span className='iconsCharlie'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						fill='currentColor'
						class='bi bi-linkedin'
						viewBox='0 0 16 16'
					>
						<path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
					</svg>
					<Card.Link
						className='githubIcon'
						href='https://www.linkedin.com/in/cfadness/'
					>
						linkedin.com/in/cfadness
					</Card.Link>
				</span>
				<aside className='bio'>
					From Massage therapist to software developer. Using the 10 years worth
					of skills from being a massage therapist has taught me communication
					skills. Skills that involve getting information from each client, and
					creating a plan, process, and post plan to solve the clients issues.
					<br />
					<br />
					Using my passion for helping and teaching, I look forward to working
					with others, especially being able to be a part of AR/VR development
					for our educational system to bring technology to our schools, but
					mainly helping our children learn in a faster pace environment.
					
				</aside>
			</section>

			<section className='markBio'>
				<div className='Header'>Mark Thanadabouth</div>
				<span className='iconsMark'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						fill='currentColor'
						class='bi bi-github'
						viewBox='0 0 16 16'
					>
						<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
					</svg>
					<Card.Link
						className='githubIcon'
						href='https://github.com/markjackson28'
					>
						github.com/markjackson28
					</Card.Link>
				</span>

				<span className='iconsMark'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						fill='currentColor'
						class='bi bi-linkedin'
						viewBox='0 0 16 16'
					>
						<path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
					</svg>
					<Card.Link
						className='githubIcon'
						href='https://www.linkedin.com/in/markjackson28/'
					>
						linkedin.com/in/markjackson28
					</Card.Link>
				</span>
				<aside className='bio'>
					Mark is a Code Fellows graduate in Full Stack Software Development. He
					is an Army veteran who is originally from Chicago. Right after the
					military, he received a dual degree in Electronic Music Production and
					Digital Audio engineering. <br />
					<br />
					He then transitioned into the fitness field and became a personal
					trainer for a couple of years. After his time as a personal trainer,
					he decided to take a leap into the software development world. He
					decided to transition into software development because he likes to
					solve problems and work with teams.
					<br />
					<br /> He is highly adaptable and willing to learn whatever it takes
					to reach his goal. He chose to learn this skill so he can be
					competitive in the tech industry. His passion for tech is extremely
					vast; tech is all around and is growing day by day with no plans of
					stopping. He hopes that one day, his skills can be a part of that
					movement.
				</aside>
			</section>
		</div>
	);
}
