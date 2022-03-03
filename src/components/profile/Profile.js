import React, { useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import UserModal from '../modals/UserModal';
import PetModal from '../modals/PetModal';
import './Profile.css';
import axios from 'axios';

export default function Profile(props) {
	const [showUser, setShowUser] = useState(false);
	const [showPet, setShowPet] = useState(false);
	let lostPetArr = [1, 2, 3, 4];

	async function handlePetData(petInfo) {
		console.log('petInfo:', petInfo);
		let response = await axios.post(
			`${process.env.REACT_APP_BACKEND}/pet-creation`,
			petInfo
		);
		console.log('reponse:', response);
	}

	return (
		<div style={{ width: props.overAllWidth }}>
			<Row>
				<Col md='auto'>
					<Container>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant='top' src='http://placehold.jp/286x180.png' />
							<Card.Body>
								<Card.Title>User Name</Card.Title>
								<Card.Text>
									User Bio: Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</Card.Text>
							</Card.Body>
						</Card>
					</Container>
				</Col>
				<Col>
					<Container>
						<Card style={{ width: '30rem' }}>
							<Card.Body>
								<Card.Title>User Information</Card.Title>
								<Card.Text>Full Name: Andy Dwyer</Card.Text>
								<Card.Text>Email: test@gmail.com</Card.Text>
								<Card.Text>Phone Number: 123-456-7891</Card.Text>
								<Card.Text>Address: 1234 Woof St, Seattle WA, 98125</Card.Text>
								<Card.Text>Pets: 2</Card.Text>
								<Button onClick={() => setShowUser(true)} variant='primary'>
									Update Profile
								</Button>
							</Card.Body>
						</Card>
					</Container>
				</Col>
			</Row>
			<Row xs={1} md={2}>
				<Container>
					{lostPetArr.map((pet, id) => (
						<Col key={id}>
							<Card style={{ width: '25rem' }}>
								<Card.Img variant='top' src='http://placehold.jp/286x180.png' />
								<Card.Body>
									<Card.Title>Pet Name</Card.Title>
									<Card.Text>
										Pet Bio: Lorem Ipsum is simply dummy text of the printing
										and typesetting industry.
									</Card.Text>
									<Card.Text>Type: Dog</Card.Text>
									<Card.Text>Breed: Shih Tzu</Card.Text>
									<Card.Text>Age: 8</Card.Text>
									<Card.Text>Medical Conditions: N/A</Card.Text>

									<Button onClick={() => setShowPet(true)} variant='primary'>
										Update Pet
									</Button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Container>
			</Row>
			<UserModal show={showUser} onHide={() => setShowUser(false)} />
			<PetModal
				handlePetData={handlePetData}
				showPet={showPet}
				setShowPet={setShowPet}
			/>
		</div>
	);
}
