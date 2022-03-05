import { useContext } from 'react';
import { When } from 'react-if';
import { AuthContext } from '../../context/authContext';

export default function Auth(props) {
  const state = useContext(AuthContext);

  const isLoggedIn = state.loggedIn;
  const canDo = state.can(props.capabilities);
  const okToRender = isLoggedIn && canDo;

  return <When condition={okToRender}>{props.children}</When>;
}
