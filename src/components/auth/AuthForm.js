import { Form, FormControl, Button, Container } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const state = useContext(AuthContext);
  console.log(username, password);

  const handleChangeUser = (e) => {
    setUsername(e.target.value);
  }

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    state.login(username, password);
  }

  let loginDisplay = state.loggedIn ? (
    <Button onClick={state.logout}>Logout</Button>
  ) : (
    <Container fluid>
      <Form className="d-flex" onSubmit={handleSubmit}>
        <FormControl
          // type="email"
          placeHolder="Username"
          className="me-2"
          onChange={handleChangeUser}
        />
        <FormControl
          type="password"
          placeHolder="Password"
          className="me-2"
          onChange={handleChangePass}
        />
        <Button type="submit" variant="secondary">Login</Button>
      </Form>
    </Container>
  );


  return (
    <>
      <div>{loginDisplay}</div>
    </>
  );
};

export default AuthForm;
