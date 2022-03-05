import './Main.css';
import AuthForm from './auth/AuthForm';

export default function main(props) {
	return (
		<section
			className='Main'
			style={{ width: props.overAllWidth, height: '100vh' }}
		>
			<h1>Main Component</h1>
			<AuthForm />
		</section>
	);
}
