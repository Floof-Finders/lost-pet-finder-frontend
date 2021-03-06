import Nav from '../nav/Nav.js';
import './Header.css';
import pawPrint from '../img/staticPics/paw-print-unsplash.jpg';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function Header(props) {
	return (
		<header data-testid="header">
			<span>
				<img className='pawPrint' src={pawPrint} alt='paw print'></img>
			</span>
			<h1 className='projName'>Lost Pet Finder 9000</h1>

			{props.showButton ? (
				<span className='openNav' onClick={() => props.openSideNav()}>
					<MenuRoundedIcon
						// color="action"
						fontSize='large'
					/>
				</span>
			) : (
				''
			)}
			<Nav width={props.width} closeSideNav={props.closeSideNav} />
		</header>
	);
}
