import Nav from '../nav/Nav.js';

export default function Header(props) {
	return (
		<header>
			<h1>Header</h1>
			<button 
				onClick={() => props.openSideNav()}
				>Open Nav</button>
			<Nav width={props.width} closeSideNav={props.closeSideNav} />
		</header>
	);
}
