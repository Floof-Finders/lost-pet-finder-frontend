import { useContext, useState } from 'react'
import { Tabs, Tab, Card, Row, Col, Button } from 'react-bootstrap';

import { PetContext } from '../../context/petContext';




export default function PetCards(props) {
  let { petArray } = useContext(PetContext);
	const [key, setKey] = useState('lost');

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
							.filter((lost) => lost.lostOrFound === true)
							.map((pet, id) => (
								<Col key={id}>
									<Card style={{ width: '18rem' }}>
										<Card.Img variant='top' src={props.placeholder} />
										<Card.Body>
											<Card.Title>
												{pet.petName} -- {pet.lostOrFound ? 'Lost' : 'Found'}
											</Card.Title>
											<Button
												variant='primary'
												onClick={() => {
													props.filteredPet(pet.petID)
													props.setShowComment
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
			<Tab eventKey='found' title='Found'>
				<Row xs={5} md={3} className='g-4 petCards'>
					{petArray.pets &&
						petArray.pets
							.filter((lost) => lost.lostOrFound === false)
							.map((pet, id) => (
								<Col key={id}>
									<Card style={{ width: '18rem' }}>
										<Card.Img variant='top' src={props.placeholder} />
										<Card.Body>
											<Card.Title>
												{pet.petName} -- {pet.lostOrFound ? 'Lost' : 'Found'}
											</Card.Title>
											<Button
												variant='primary'
												onClick={() => {
													props.filteredPet(pet.petID);
													props.setShowComment(true);
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
