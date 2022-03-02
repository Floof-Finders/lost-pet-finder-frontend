
import { Link } from 'react-router-dom';
// import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

export default function NavRoutes(props) {
  return (
    <nav>
      {/* <aside onClick={}>{<CancelPresentationIcon/>}</aside> */}
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
  )
}
