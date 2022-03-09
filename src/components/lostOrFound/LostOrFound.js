import { Card, Button, Row, Col } from 'react-bootstrap';
import './lostOrFound.css';
import LostPetModal from '../modals/LostPetModal';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import { PetContext } from '../../context/petContext'

let placeholder =
	'http://placehold.jp/3d4070/ffffff/150x50.png?text=Profile%20image';
export default function Landing(props) {

	let { petArray, setPetArray } = useContext(PetContext);

	const [showComment, setShowComment] = useState(false);
	const [showPet, setShowPet] = useState();

	useEffect(() => {
		
		getPetData(); // eslint-disable-line react-hooks/exhaustive-deps
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	async function getPetData() {
		let petData = await axios.get(
			`${process.env.REACT_APP_BACKEND_SERVER}/pet-info`
		);
		setPetArray({pets: petData.data});
	}

	let filteredPet = (id) => {
		let pet = petArray.pets.filter((pet) => pet.petID === id);
		setShowPet(pet[0]);
	};

	

	async function handleCommentData(commentInfo) {
		await axios.post(
			`${process.env.REACT_APP_BACKEND_SERVER}/comment-creation`,
			commentInfo
		);
	}

	return (
		<div style={{ width: props.overAllWidth }} className='lostOrFoundWrapper'>
			<h1>LostOrFound Component</h1>
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

			<Row xs={5} md={3} className='g-4 petCards'>
				{petArray.pets &&
					petArray.pets.map((pet, id) => (
						<Col key={id}>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant='top' src={placeholder} />
								<Card.Body>
									<Card.Title>{pet.petName}</Card.Title>
									<Button
										variant='primary'
										onClick={() => {
											filteredPet(pet.petID);
											setShowComment(true);
										}}
									>
										View More
									</Button>
									<Button variant='danger'>Seen Near Me!</Button>
								</Card.Body>
							</Card>
						</Col>
					))}

				{showPet ? (
					<LostPetModal
						pet={showPet}
						showComment={showComment}
						onHide={() => setShowComment(false)}
						handleCommentData={handleCommentData}
					/>
				) : (
					''
				)}
			</Row>
		</div>
	);
}
