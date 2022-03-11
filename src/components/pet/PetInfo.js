import {
	Row,
	Col,
	Container,
	Card,
} from 'react-bootstrap';

import './petInfo.css'
import puppyEyes from '../img/staticPics/sad-puppy-eyes-unsplash.jpg'
import sadKitty from '../img/staticPics/sad-cat-unsplash.jpg'

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
				<Col xs={8} md={6}>
					<Card>
						<Card.Img variant='top' src={puppyEyes} />
					</Card>
				</Col>
				<Col xs={8} md={6}>
					<Card>
						<Card.Img variant='top' src={sadKitty} />
					</Card>
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
