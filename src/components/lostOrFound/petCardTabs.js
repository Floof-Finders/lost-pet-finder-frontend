import { useContext, useState } from 'react'
import { Tabs, Tab, Card, Row, Col, Button } from 'react-bootstrap';

import { PetContext } from '../../context/petContext';
import lostDeer from '../img/staticPics/lost-unsplash.jpg'
import foundDogs from '../img/staticPics/found-puppies-unsplash.jpg'

export default function PetCards(props) {
  let { petArray } = useContext(PetContext);
	const [key, setKey] = useState('lost');

	// console.log('petArray',petArray.pets[0])

	return (
		<Tabs
			id='uncontrolled-tab-example'
			activeKey={key}
			onSelect={(k) => setKey(k)}
			className='mb-3'
		>
			<Tab eventKey='lost' title='Lost'>
				<Row xs={5} md={3} className='g-4 petCards'>
					{petArray.pets &&
						petArray.pets
							.filter((lost) => lost.lostOrFound === true && lost.isLost === true)
							.map((pet, id) => (
								<Col key={id}>
									<Card style={{ width: '18rem' }}>
										<Card.Img variant='top' src={lostDeer} />
										<Card.Body>
											<Card.Title>
												Pet Name: {pet.petName}
											</Card.Title>
											<Card.Title>
												Reward: $ {pet.reward ? pet.reward : 'No Reward'}
											</Card.Title>
											<Button
												variant='primary'
												onClick={() => {
													props.setShowComment(true)
													props.filteredPet(pet.petID)
												}}
											>
												View More
											</Button>
											{/* <Button variant='danger'>Seen Near Me!</Button> */}
										</Card.Body>
									</Card>
								</Col>
							))}
				</Row>
			</Tab>
			<Tab eventKey='found' title='Found'>
				<Row xs={5} md={3} className='g-4 petCards'>
					{petArray.pets &&
						petArray.pets
							.filter((lost) => lost.lostOrFound === false && lost.isLost === true)
							.map((pet, id) => (
								<Col key={id}>
									<Card style={{ width: '18rem' }}>
										<Card.Img variant='top' src={foundDogs} />
										<Card.Body>
											<Card.Title>
												{pet.petName} -- Reward: $ {pet.reward ? pet.reward : 'No Reward'}
											</Card.Title>
											<Button
												variant='primary'
												onClick={() => {
													props.filteredPet(pet.petID);
													props.setShowComment(true)
												}}
											>
												View More
											</Button>
											<Button variant='danger'>Seen Near Me!</Button>
										</Card.Body>
									</Card>
								</Col>
							))}
				</Row>
			</Tab>
		</Tabs>
	);
}
