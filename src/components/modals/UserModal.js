import { Modal, Button, Form } from 'react-bootstrap';

export default function UserModal(props) {
	function handleSubmit(e) {
		e.preventDefault();
		let username = e.target.username.value;
		let firstName = e.target.firstName.value;
		let lastName = e.target.lastName.value;
		let password = e.target.password.value;
		let role = e.target.role.value;

		props.handleUserData({
			username,
			firstName,
			lastName,
			password,
			role,
		});
	}
	return (
		<>
			<Modal show={props.showUser} onHide={props.onHide}>
				<Modal.Header closeButton>
					<Modal.Title>User Information</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId='username'>
							<Form.Label>UserName</Form.Label>
							<Form.Control required type='text' maxlength="255"/>
						</Form.Group>

						<Form.Group controlId='firstName'>
							<Form.Label>First Name</Form.Label>
							<Form.Control required type='text' maxlength="255"/>
						</Form.Group>

						<Form.Group controlId='lastName'>
							<Form.Label>Last Name</Form.Label>
							<Form.Control required type='text' maxlength="255"/>
						</Form.Group>

						<Form.Group controlId='password'>
							<Form.Label>Password</Form.Label>
							<Form.Control required type='text' maxlength="255"/>
						</Form.Group>

						<Form.Group controlId='role'>
							<Form.Label>Role</Form.Label>
							<Form.Select aria-label='Default select example'>
								<option>Select Role</option>
								<option value='user'>User</option>
								<option value='writer'>Writer</option>
								<option value='editor'>Editor</option>
								<option value='admin'>Admin</option>
							</Form.Select>
						</Form.Group>

						<Button variant='secondary' type='submit' onClick={props.onHide}>
							Close
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
		</>
	);
}
