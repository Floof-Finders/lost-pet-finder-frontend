import { Card, Button, Row, Col } from 'react-bootstrap';
import './Landing.css';
import PetInfoModal from '../modals/PetInfoModal';
import { useState } from 'react';

export default function Landing(props) {
	let lostPetArray = [1, 2, 3, 4];

	const [modalShow, setModalShow] = useState(false);

	return (
		<div style={{width: props.overAllWidth}} className='landing'>
			<h1>Landing Component</h1>
			<section>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</section>
			<button>Post Lost pet</button>
			<button>Post Found pet</button>

			<Row xs={1} md={2} className='g-4 petCards'>
				{lostPetArray.map((pet, id) => (
					<Col key={id}>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant='top' src='holder.js/100px180' />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Button 
									variant='primary' 
									onClick={() => setModalShow(true)}
								>
									View More
								</Button>
								<Button variant='danger'>Seen Near Me!</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>

			<PetInfoModal 
			show={modalShow} 
			onHide={() => setModalShow(false)} 
			/>
		</div>
	);
}
