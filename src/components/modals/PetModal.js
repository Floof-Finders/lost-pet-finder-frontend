import { Modal, Button, Form } from 'react-bootstrap';

export default function PetModal(props) {

  return (
    <>
      <Modal {...props}>
      <Modal.Header closeButton>
					<Modal.Title>Pet Information</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Label>Pet Name</Form.Label>
					<Form.Control
						required
						type="text"
					/>
					<Form.Label>Type</Form.Label>
					<Form.Control
						required
						type="text"
					/>
					<Form.Label>Breed</Form.Label>
					<Form.Control
						required
						type="text"
					/>
					<Form.Label>Age</Form.Label>
					<Form.Control
						required
						type="text"
					/>
					<Form.Label>Medical Conditions</Form.Label>
					<Form.Control
						required
						type="text"
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={props.onHide}>
						Close
					</Button>
					<Button variant="primary" onClick={props.onHide}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
    </>
  );
}
