import { Button, Form } from "react-bootstrap"


export default function signUpForm(props) {
	return (
		<Form onSubmit={props.handleSignUpSubmit}>
			<Form.Group controlId='username'>
				<Form.Label>UserName: </Form.Label>
				<Form.Control required type='text' />
			</Form.Group>

			<Form.Group controlId='firstName'>
				<Form.Label>First Name: </Form.Label>
				<Form.Control required type='text' />
			</Form.Group>

			<Form.Group controlId='lastName'>
				<Form.Label>Last Name: </Form.Label>
				<Form.Control required type='text' />
			</Form.Group>

			<Form.Group controlId='password'>
				<Form.Label>Password: </Form.Label>
				<Form.Control required type='text' />
			</Form.Group>

      <Button type="Submit" >Sign Up</Button>
		</Form>
	);
}
