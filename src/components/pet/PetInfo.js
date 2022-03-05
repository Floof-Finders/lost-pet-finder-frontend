import {
	Row,
	Col,
	Container,
	Card,
} from 'react-bootstrap';

// Pet Information - Breaking down into components
export default function PetInfo(props) {
	return (
		<Container>
			<Row>
				{props.pet.description ? props.pet.description : 'Pet Description here'}
			</Row>
			<Row>
				<Col xs={8} md={6}>
					<Card>
						<Card.Img variant='top' src={props.placeholder} />
					</Card>
				</Col>
				<Col xs={8} md={6}>
					<Card>
						<Card.Img variant='top' src={props.placeholder} />
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xs={8} md={6}>
					{props.pet.age ? `Appoximate Pet Age: ${props.pet.age}` : 'Pets Age'}
				</Col>
				<Col xs={8} md={6}>
					{props.pet.breed ? `Pet's Breed: ${props.pet.breed}` : 'Pets Breed'}
				</Col>
				<Col xs={8} md={6}>
					{props.pet.trackerChip
						? `Tracker Chip: Yes`
						: 'No Tracker Chip Data Provided'}
				</Col>
				<Col xs={8} md={6}>
					{props.pet.reward ? `Reward: $${props.pet.reward}` : 'Pet Reward'}
				</Col>
				{props.pet.medicalConditions
					? ` Current Medical Condition: ${props.pet.medicalConditions}`
					: 'Pet Medical Conditions'}
			</Row>
		</Container>
	);
}
