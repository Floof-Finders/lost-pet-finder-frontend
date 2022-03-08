import { Link } from 'react-router-dom';
import './Nav.css';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import LogInButton from '../auth/LoginButton';
import LogoutButton from '../auth/LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';


function Nav(props) {
	const { isAuthenticated } = props.auth0;
	return (
		<aside
			className='NavRoutes'
			style={{ width: props.width, height: '100vh' }}
		>
			<nav>
				<aside className='exitNav' onClick={props.closeSideNav}>
					{<CancelPresentationIcon fontSize='large' />}
				</aside>
				<ul>
					<li className='navListLi'>
						<Link className='navLink' to='/'>
							Home
						</Link>
					</li>
					<li className='navListLi'>
						<Link className='navLink' to='lostOrFound'>
							Lost/Found
						</Link>
					</li>
					<li className='navListLi'>
						<Link className='navLink' to='profile'>
							Profile
						</Link>
					</li>
					<li className='navListLi'>
						<Link className='navLink' to='about'>
							About Us
						</Link>
					</li>
					{isAuthenticated ? (
						<li className='navListLi'>
							<LogoutButton />
						</li>
					) : (
						<li className='navListLi'>
							<LogInButton />
						</li>
					)}
				</ul>
			</nav>
		</aside>
	);
}

export default withAuth0(Nav)
