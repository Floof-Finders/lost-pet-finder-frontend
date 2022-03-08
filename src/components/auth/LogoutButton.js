import {useAuth0} from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const LogoutButton = () => {
  const {logout} = useAuth0();

  return (
    <Button variant="warning" onClick={()=> logout({ returnTo: 'http://localhost:3000' })}>
      Log Out
    </Button>
  )
}

export default LogoutButton;
