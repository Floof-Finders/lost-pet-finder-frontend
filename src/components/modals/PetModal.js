import { Modal, Button, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

// Pet create/update
export default function PetModal(props) {
	async function handleSubmit(e) {
		e.preventDefault();
		let petName = e.target.name.value;
		let description = e.target.description.value;
		let age = e.target.age.value;
		let breed = e.target.breed.value;
		let lostLocation = e.target.lostLocation.value;
		let medicalConditions = e.target.medical.value;
		let trackerChip = e.target.tracker.value;
		let lostOrFound = e.target.lost.value;
		let reward = e.target.reward.value;

		let userID = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/user-info`)

		props.handleUpdatePet({
			petName,
			userID: userID.data[0].userID ? userID.data[0].userID : uuidv4,
			description,
			age,
			breed,
			lostLocation,
			medicalConditions,
			trackerChip,
			lostOrFound,
			reward,
		})
		
		props.handlePetData({
			petName,
			userID: userID.data[0].userID ? userID.data[0].userID : uuidv4,
			description,
			age,
			breed,
			lostLocation,
			medicalConditions,
			trackerChip,
			lostOrFound,
			reward,
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
							<Form.Control required type='text' maxlength="255" />
						</Form.Group>

						<Form.Group controlId='description'>
							<Form.Label>Description</Form.Label>
							<Form.Control required type='text' maxlength="255"/>
						</Form.Group>

						<Form.Group controlId='age'>
							<Form.Label>Age</Form.Label>
							<Form.Select aria-label='Default select example'>
								<option>Select Pet's Age</option>
								<option value='3'>Under 3 years old</option>
								<option value='6'>Between 3 and 6 years old</option>
								<option value='9'>Between 6 and 9 years old</option>
								<option value='12'>Over 12 years old</option>
							</Form.Select>
						</Form.Group>

						<Form.Group controlId='breed'>
							<Form.Label>Breed</Form.Label>
							<Form.Control type='text' maxlength="255"/>
						</Form.Group>

						<Form.Group controlId='lostLocation'>
							<Form.Label>Lost Location Temporary here</Form.Label>
							<Form.Control required type='text' maxlength="255"/>
						</Form.Group>

						<Form.Group controlId='medical'>
							<Form.Label>Current Medical Conditions</Form.Label>
							<Form.Control type='text' maxlength="255"/>
						</Form.Group>

						<Form.Group controlId='tracker'>
							<Form.Label>Tracker Chip</Form.Label>
							<Form.Select aria-label='Default select example'>
								<option>Select Yes or No</option>
								<option value='yes'>Yes</option>
								<option value='no'>No</option>
							</Form.Select>
						</Form.Group>

						<Form.Group controlId='lost'>
							<Form.Label>Lost or Found</Form.Label>
							<Form.Select aria-label='Default select example'>
								<option>Select Lost or Found</option>
								<option value='yes'>Lost</option>
								<option value='no'>Found</option>
							</Form.Select>
						</Form.Group>

						<Form.Group controlId='reward'>
							<Form.Label>Reward</Form.Label>
							<Form.Control type='number' maxlength="255"/>
						</Form.Group>
					<Button 
						variant='primary' 
						type='submit' 
						onClick={props.onHide}
					>
						Save Changes
					</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
				</Modal.Footer>
			</Modal>
		</>
	);
}
