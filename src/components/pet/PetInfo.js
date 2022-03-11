import {
	Row,
	Col,
	Container,
	Card,
} from 'react-bootstrap';
import Map from '../map/Map'

import './petInfo.css'

// Pet Information - Breaking down into components
export default function PetInfo(props) {
	return (
		<Container>
			<Row >
				<span className='name'>

					{props.pet.petName ? props.pet.petName : 'Pet Name here'}
				</span>
			</Row>
			<Row >
				<span className='description'>

					{props.pet.description ? props.pet.description : 'Pet Description here'}
				</span>
			</Row>
			<Row>
				{/* <Col xs={8} md={6}>
					<Card>
						<Card.Img variant='top' src={props.placeholder} />
					</Card>
				</Col>
				<Col xs={8} md={6}>
					<Card>
						<Card.Img variant='top' src={props.placeholder} />
					</Card>
				</Col> */}
				<Col xs={8} md={6}>
					<Map pet={props.pet}/>
				</Col>
			</Row>
			<Row>
				<Col xs={8} md={6}>
					<section className='info'>
						{props.pet.age ? `Appoximate Pet Age: ${props.pet.age}` : 'Pets Age'}
					</section>

				</Col>
				<Col xs={8} md={6}>
					<section className='info'>
						{props.pet.breed ? `Pet's Breed: ${props.pet.breed}` : 'Pets Breed'}
					</section>

				</Col>
				<Col xs={8} md={6}>
					<section className='info'>
						{props.pet.trackerChip
							? `Tracker Chip: Yes`
							: 'No Tracker Chip Data Provided'}
					</section>

				</Col>
				<Col xs={8} md={6}>
					<section className='info'>
						{props.pet.reward ? `Reward: $${props.pet.reward}` : 'Pet Reward'}
					</section>

				</Col>
				<section className='description'>
					{props.pet.medicalConditions
						? ` Current Medical Condition: ${props.pet.medicalConditions}`
						: 'Pet Medical Conditions'}
				</section>

			</Row>
		</Container>
	);
}
