import React, { useState, useEffect, useContext } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import UserModal from '../modals/UserModal';
import PetModal from '../modals/PetModal';
import './Profile.css';
import axios from 'axios';
import PetInfo from '../pet/PetInfo';
import { PetContext } from '../../context/petContext'
import { useCookies } from 'react-cookie';

let placeholder =
	'http://via.placeholder.com/100x100.png?text=Pet+Picture+Here';

function Profile(props) {
	const [showUser, setShowUser] = useState(false);
	const [showPet, setShowPet] = useState(false);
	const [cookies] = useCookies();

	console.log('What is in my cookies????',cookies.user)

	let { petArray, setPetArray } = useContext(PetContext);

	console.log('user???', petArray.user)
	useEffect(() => {
		getPetData(); // eslint-disable-line react-hooks/exhaustive-deps
	}, []);// eslint-disable-line react-hooks/exhaustive-deps

	async function getPetData() {
		let petData = await axios.get(
			`${process.env.REACT_APP_BACKEND_SERVER}/pet-info`
		);
		console.log('petData:', petData.data);
		setPetArray({pets: petData.data});
	}

	async function handlePetData(petInfo) {
		let response = await axios.post(
			`${process.env.REACT_APP_BACKEND_SERVER}/pet-creation`,
			petInfo
		);
		console.log('POST: PET: reponse:', response.data);
		setPetArray(response.data)
	}

	async function handleUserData(userInfo) {
		let response = await axios.post(
			`${process.env.REACT_APP_BACKEND_SERVER}/user-creation`,
			userInfo
		);
		console.log('reponse:', response.data);

	}

	// TODO: Use this??
	async function handleUpdatePet (petInfo) {
		try {
			await axios.put(`${process.env.REACT_APP_BACKEND_SERVER}/pet-update/${petInfo._id}`, petInfo)

			const updatedPets = petArray.pets.map(petToUpdate => {
				if(petToUpdate._id === petInfo._id) {
					return petInfo
				} else {
					return petToUpdate
				}
			})

			setPetArray({pets: updatedPets});

		} catch (e) {
			console.log(e)
		}
	} 

	return (
		<div className='background'>
			<div className='profileBackground' style={{ width: props.overAllWidth }}>
							<Card style={{ width: '18rem' }} 
							className='userInfo'
							>
								<Card.Img variant='top' src='http://placehold.jp/286x180.png' />
								<Card.Body>
									<Card.Title>
										{cookies.user && cookies.user.username} 
										Name?</Card.Title>
									<Card.Text>
										User Bio: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									</Card.Text>
									<Card.Text>Full Name: Andy Dwyer</Card.Text>
									<Card.Text>
										{cookies.user && cookies.user.email}
										</Card.Text>
									<Card.Text>Phone Number: 123-456-7891</Card.Text>
									<Card.Text>
										Address: 1234 Meow St, Seattle WA, 98125
									</Card.Text>
									<Card.Text>Pets: 
										{petArray.pets && petArray.pets.length}
									</Card.Text>

									<Button onClick={() => setShowUser(true)} variant='primary'
									className='onButton'>
										Update Profile
									</Button>

									<Button onClick={() => setShowPet(true)} className='onButton'>
										Add a new Pet
									</Button>
								</Card.Body>
							</Card>
						<Container>
							<h2 className='currentPetsHeader'>Here is a List of your current pets</h2>
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
					handleUpdatePet={handleUpdatePet}
				/>
			</div>
		</div>
	);
}

export default Profile
