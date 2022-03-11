import { Modal, Button, Form } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

// Pet create/update
function PetModal(props) {
	const [cookies] = useCookies();

	async function handleSubmit(e) {
		e.preventDefault();
		let petName = e.target.name.value;
		let description = e.target.description.value;
		let age = e.target.age.value;
		let breed = e.target.breed.value;
		let isLost = false;
		let medicalConditions = e.target.medical.value;
		let trackerChip = e.target.tracker.value;
		let lostOrFound = e.target.lost.value;
		let reward = e.target.reward.value;

		console.log('pet data', {
			petName,
			userID: cookies.user.userID,
			description,
			age: parseInt(age),
			breed,
			isLost,
			medicalConditions,
			trackerChip,
			lostOrFound,
			reward: parseInt(reward),
		});

		// props.getUpdateData({
		// 	petName,
		// 	userID: cookies.user.userID,
		// 	description,
		// 	age: parseInt(age),
		// 	breed,
		// 	isLost,
		// 	medicalConditions,
		// 	trackerChip,
		// 	lostOrFound,
		// 	reward: parseInt(reward),
		// });

		props.handlePetData({
			petName,
			userID: cookies.user.userID,
			description,
			age: parseInt(age),
			breed,
			isLost,
			medicalConditions,
			trackerChip,
			lostOrFound,
			reward: parseInt(reward),
		});
	}
	return (
		<>
			<Modal show={props.showPet} onHide={props.onHide}>
				<Modal.Header closeButton>
					<Modal.Title>Pet Information</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId='name'>
							<Form.Label>Pet Name</Form.Label>
							<Form.Control required type='text' maxLength='255' />
						</Form.Group>

						<Form.Group controlId='description'>
							<Form.Label>Description</Form.Label>
							<Form.Control  required type='text' maxLength='255' />
						</Form.Group>

						<Form.Group controlId='age'>
							<Form.Label>Age</Form.Label>
							<Form.Select aria-label='Default select example'>
								<option value='0'>Select Pet's Age</option>
								<option value='3'>Under 3 years old</option>
								<option value='6'>Between 3 and 6 years old</option>
								<option value='9'>Between 6 and 9 years old</option>
								<option value='12'>Over 12 years old</option>
							</Form.Select>
						</Form.Group>

						<Form.Group controlId='breed'>
							<Form.Label>Breed</Form.Label>
							<Form.Control type='text' maxLength='255' />
						</Form.Group>

						<Form.Group controlId='isLost'>
							<Form.Label>Lost Location Temporary here</Form.Label>
							<Form.Control required type='text' maxLength='255' />
						</Form.Group>

						<Form.Group controlId='medical'>
							<Form.Label>Current Medical Conditions</Form.Label>
							<Form.Control type='text' maxLength='255' />
						</Form.Group>

						<Form.Group controlId='tracker'>
							<Form.Label>Tracker Chip</Form.Label>
							<Form.Select aria-label='Default select example'>
								<option value={false}>Select Yes or No</option>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</Form.Select>
						</Form.Group>

						<Form.Group controlId='lost'>
							<Form.Label>Lost or Found</Form.Label>
							<Form.Select aria-label='Default select example'>
								<option value={true}>Select Lost or Found</option>
								<option value={true}>Lost</option>
								<option value={false}>Found</option>
							</Form.Select>
						</Form.Group>

						<Form.Group controlId='reward'>
							<Form.Label>Reward</Form.Label>
							<Form.Control type='number' maxLength='255' />
						</Form.Group>
						<Button variant='primary' type='submit' 
						// onClick={props.onHide}
						>
							Save Changes
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
		</>
	);
}

export default PetModal;
