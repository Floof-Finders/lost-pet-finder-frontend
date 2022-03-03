import { Modal, Button, Form } from 'react-bootstrap';

// Pet create/update
export default function PetModal(props) {
	function handleSubmit(e) {
		e.preventDefault();
		let petName = e.target.name.value;
		let petDescription = e.target.description.value;
		let petAge = e.target.age.value;
		let petBreed = e.target.breed.value;
		let petLost = e.target.lostLocation.value;
		let petMedical = e.target.medical.value;
		let petTracker = e.target.tracker.value;
		let petReward = e.target.reward.value;

		props.handlePetData({
			petName,
			petDescription,
			petAge,
			petBreed,
			petLost,
			petMedical,
			petTracker,
			petReward,
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
							<Form.Control required type='text' />
						</Form.Group>

						<Form.Group controlId='description'>
							<Form.Label>Description</Form.Label>
							<Form.Control required type='text' />
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
							<Form.Control type='text' />
						</Form.Group>

						<Form.Group controlId='lostLocation'>
							<Form.Label>Lost Location Temporary here</Form.Label>
							<Form.Control required type='text' />
						</Form.Group>

						<Form.Group controlId='medical'>
							<Form.Label>Current Medical Conditions</Form.Label>
							<Form.Control type='text' />
						</Form.Group>

						<Form.Group controlId='tracker'>
							<Form.Label>Tracker Chip</Form.Label>
							<Form.Select aria-label='Default select example'>
								<option>Select Yes or No</option>
								<option value='yes'>Yes</option>
								<option value='no'>No</option>
							</Form.Select>
						</Form.Group>

						<Form.Group controlId='reward'>
							<Form.Label>Reward</Form.Label>
							<Form.Control type='text' />
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
