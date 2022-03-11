import React, { useState, useEffect, useContext } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import UserModal from '../modals/UserModal';
import PetModal from '../modals/PetModal';
import './Profile.css';
import axios from 'axios';
import PetInfo from '../pet/PetInfo';
import { PetContext } from '../../context/petContext';
import { useCookies } from 'react-cookie';
import petProfile from '../img/staticPics/cats-dogs-unsplash.jpg'

let placeholder =
	'http://via.placeholder.com/100x100.png?text=Pet+Picture+Here';

function Profile(props) {
	const [showUser, setShowUser] = useState(false);
	const [showPet, setShowPet] = useState(false);
	const [cookies , setCookie] = useCookies();

	let { petArray, setPetArray } = useContext(PetContext);
	useEffect(() => {
		getPetData(); // eslint-disable-line react-hooks/exhaustive-deps
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	async function getPetData() {
		let petData = await axios.get(
			`${process.env.REACT_APP_BACKEND_SERVER}/pet-info`
		);
		setPetArray({ pets: petData.data });
	}

	async function handlePetData(petInfo) {
		await axios.post(
			`${process.env.REACT_APP_BACKEND_SERVER}/pet-creation`,
			petInfo
		);

		let petData = await axios.get(
			`${process.env.REACT_APP_BACKEND_SERVER}/pet-info`
		);

		setPetArray({ pets: petData.data });
	}

	async function handleUserData(userInfo) {
		userInfo['email'] = cookies.user.email
		userInfo['userID'] = cookies.user.userID
		console.log('userInfo', userInfo)
		let newUser = await axios.put(
			`${process.env.REACT_APP_BACKEND_SERVER}/user-update/${userInfo.userID}`,
			userInfo
		);
		console.log('newUser', newUser.data)

		setCookie('user', newUser.data);
	}

	async function postToLostPets (petID) {
		let post = petArray.pets.filter(pet => pet.petID === petID)

		post[0].isLost = true

		await axios.put(`${process.env.REACT_APP_BACKEND_SERVER}/pet-toLost/${petID}`,
		post)

	}

	// TODO: Use this??
	// async function handleUpdatePet(petInfo) {
	// 	try {
			
	// 		const updatedPets = petArray.pets.map((petToUpdate) => {
	// 			console.log('id matching', petToUpdate.userID, '===',petInfo.userID)
	// 			if (petToUpdate.userID === petInfo.petID) {
	// 				return petInfo;
	// 			} else {
	// 				return petToUpdate;
	// 			}
	// 		});
	// 		await axios.put(
	// 			`${process.env.REACT_APP_BACKEND_SERVER}/pet-update/${petInfo.petID}`,
	// 			updatedPets
	// 		);

	// 		setPetArray({ pets: updatedPets });
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// }

	return (
		<div className='background'>
				<section className='userInfo'>
					<Card style={{ width: '18rem' }}>
						<Card.Img variant='top' src={petProfile} />
						<Card.Body>
							<Card.Title>
								Username: {cookies.user && cookies.user.username}
								
							</Card.Title>
							
							<Card.Text>Full Name: {cookies.user.firstName ? `${cookies.user.firstName} ${cookies.user.lastName}` : 'Default First name and Last name' }</Card.Text>
							<Card.Text>Email: {cookies.user && cookies.user.email}</Card.Text>
							<Card.Text>
								Pets:
								{petArray.pets && petArray.pets.length}
							</Card.Text>

							<Button
								onClick={() => setShowUser(true)}
								variant='primary'
								className='onButton'
							>
								Update Profile
							</Button>

							<Button onClick={() => setShowPet(true)} className='onButton'>
								Add a new Pet
							</Button>
						</Card.Body>
					</Card>
				</section>
				<Container>
					<h2 className='currentPetsHeader'>
						Here is a List of your current pets
					</h2>
				</Container>
				<div className='petCardContainerOutside'>
					<Row xs={1} md={2} className='g-4 petCardContainer'>
						{petArray.pets &&
							petArray.pets.map((pet, id) => (
								<Col key={id}>
									<Card className='petCard' style={{ width: '25rem' }}>
										{/* <Card.Img
											variant='top'
											src='http://placehold.jp/286x180.png'
										/> */}
										<Card.Body className='petCard'>
											<PetInfo pet={pet} placeholder={placeholder} />

											{/* <Button
												onClick={() => setShowPet(true)}
												variant='primary'
											>
												Update Pet
											</Button> */}

											<Button onClick={() => postToLostPets(pet.petID)}>Post to lost pets</Button>
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
					// handleUpdatePet={handleUpdatePet}
				/>
			</div>
	);
}

export default Profile;
