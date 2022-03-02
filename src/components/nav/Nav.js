
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
          <Link to='landing'>Home</Link>
        </li>
        <li>
          <Link to='profile'>Home</Link>
        </li>
        <li>
          <Link to='aboutUs'>Home</Link>
        </li>
      </ul>
    </nav>
  )
}
