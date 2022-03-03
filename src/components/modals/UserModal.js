import { Modal, Button, Form } from 'react-bootstrap';

export default function UserModal(props) {
  return (
    <>
      <Modal {...props}>
				<Modal.Header closeButton>
					<Modal.Title>User Information</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Label>Full Name</Form.Label>
					<Form.Control
						required
						type="text"
					/>
					<Form.Label>Email</Form.Label>
					<Form.Control
						required
						type="text"
					/>
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						required
						type="text"
					/>
					<Form.Label>Address</Form.Label>
					<Form.Control
						required
						type="text"
					/>
					<Form.Label>Pets</Form.Label>
					<Form.Control
						required
						type="text"
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={props.onHide}>
						Close
					</Button>
					{/* <Button variant="primary" onClick={handleCloseUser}>
						Save Changes
					</Button> */}
				</Modal.Footer>
			</Modal>
    </>
  );
}
