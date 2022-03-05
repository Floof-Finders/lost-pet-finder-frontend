import { Link } from 'react-router-dom';
import './Nav.css'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

export default function Nav(props) {
  return (
    <aside className='NavRoutes' style={{width: props.width
    , height:"100vh"
    }}>

    <nav >
      <aside className='exitNav'  onClick={props.closeSideNav}>{<CancelPresentationIcon fontSize='large'/>}</aside>
      <ul>
        <li className='navListLi'>
          <Link className='navLink' to='/'>Home</Link>
        </li>
        <li className='navListLi'>
          <Link className='navLink' to='landing'>Landing</Link>
        </li>
        <li className='navListLi'>
          <Link className='navLink' to="profile">Profile</Link>
        </li>
        <li className='navListLi'>
          <Link  className='navLink'to='about'>About Us</Link>
        </li>
      </ul>
    </nav>
    </aside>
  )
}
