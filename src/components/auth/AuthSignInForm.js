import { Form, Button } from "react-bootstrap"

export default function AuthSignInForm(props) {
	return (
		<Form onSubmit={props.handleLogInSubmit}>
			<Form.Group controlId='username'>
				<Form.Label>UserName: </Form.Label>
				<Form.Control required type='text' />
			</Form.Group>

			<Form.Group controlId='password'>
				<Form.Label>Password: </Form.Label>
				<Form.Control required type='text' />
			</Form.Group>

      <Button type="Submit" variant='secondary'>Log in</Button>
		</Form>
	);
}
