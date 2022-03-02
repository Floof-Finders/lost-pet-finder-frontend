import { Link } from 'react-router-dom';
import './Nav.css'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

export default function Nav(props) {
  return (
    <aside className='NavRoutes' style={{width: props.width, height:"100vh"}}>

    <nav >
      <aside onClick={props.closeSideNav}>{<CancelPresentationIcon/>}</aside>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='landing'>Landing</Link>
        </li>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to='about'>About Us</Link>
        </li>
      </ul>
    </nav>
    </aside>
  )
}
