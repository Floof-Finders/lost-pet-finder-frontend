import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import UserModal from '../modals/UserModal';
import PetModal from '../modals/PetModal';
import './Profile.css';
import axios from 'axios';
import PetInfo from '../pet/PetInfo';

let placeholder =
	'http://via.placeholder.com/100x100.png?text=Pet+Picture+Here';

export default function Profile(props) {
	const [showUser, setShowUser] = useState(false);
	const [showPet, setShowPet] = useState(false);
	// const [userInfo, setUserInfo] = useState()

	let [lostPetArray, setLostPetArray] = useState();

	useEffect(() => {
		getPetData();
		handleGetUser();
	}, []);

	async function getPetData() {
		let petData = await axios.get(
			`${process.env.REACT_APP_BACKEND_SERVER}/pet-info`
		);
		console.log('petData:', petData.data);
		setLostPetArray(petData.data);
	}

	async function handlePetData(petInfo) {
		let response = await axios.post(
			`${process.env.REACT_APP_BACKEND_SERVER}/pet-creation`,
			petInfo
		);

		console.log('reponse:', response.data);
	}

	async function handleUserData(userInfo) {
		let response = await axios.post(
			`${process.env.REACT_APP_BACKEND_SERVER}/user-creation`,
			userInfo
		);

		console.log('reponse:', response.data);
	}

	async function handleGetUser() {
		// let userID = await axios.get(
		// 	`${process.env.REACT_APP_BACKEND_SERVER}/user-info`
		// );
		// setUserInfo(userID);
	}

	return (
		<div className='background'>
			<div className='profileBackground' style={{ width: props.overAllWidth }}>
				<Row>
					<Col md='auto'>
						<Container>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant='top' src='http://placehold.jp/286x180.png' />
								<Card.Body>
									<Card.Title>User Name</Card.Title>
									<Card.Text>
										User Bio: Lorem Ipsum is simply dummy text of the printing
										and typesetting industry.
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
									<Card.Text>
										Address: 1234 Woof St, Seattle WA, 98125
									</Card.Text>
									<Card.Text>Pets: 2</Card.Text>
									<Button onClick={() => setShowUser(true)} variant='primary'>
										Update Profile
									</Button>

									<Button onClick={() => setShowPet(true)}>
										Add a new Pet
									</Button>
								</Card.Body>
							</Card>
						</Container>
					</Col>
				</Row>
				<div className='petCardContainerOutside'>
					<Row xs={1} md={2} className='g-4 petCardContainer'>
						{lostPetArray &&
							lostPetArray.map((pet, id) => (
								<Col key={id}>
									<Card className='petCard' style={{ width: '25rem' }}>
										<Card.Img
											variant='top'
											src='http://placehold.jp/286x180.png'
										/>
										<Card.Body className='petCard'>
											<PetInfo pet={pet} placeholder={placeholder} />

											<Button
												onClick={() => setShowPet(true)}
												variant='primary'
											>
												Update Pet
											</Button>
										</Card.Body>
									</Card>
								</Col>
							))}
					</Row>
				</div>
				<UserModal
					handleUserData={handleUserData}
					showUser={showUser}
					onHide={() => setShowUser(false)}
				/>
				<PetModal
					handlePetData={handlePetData}
					showPet={showPet}
					onHide={() => setShowPet(false)}
				/>
			</div>
		</div>
	);
}
