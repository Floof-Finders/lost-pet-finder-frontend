import { Card, Button, Row, Col } from 'react-bootstrap';
import './Landing.css';
import LostPetModal from '../modals/LostPetModal';
import { useEffect, useState } from 'react';
import axios from 'axios';

let placeholder = 'http://placehold.jp/3d4070/ffffff/150x50.png?text=Profile%20image'
export default function Landing(props) {
	let [ lostPetArray, setLostPetArray ] = useState();

	const [showComment, setShowComment] = useState(false);

	useEffect(() => {
		getPetData()
	}, [])
	
	async function getPetData() {
		let petData = await axios.get(
			`${process.env.REACT_APP_BACKEND_SERVER}/pet-info`
		);
		console.log('petData:', petData.data);
		setLostPetArray(petData.data)
	}

	async function handleCommentData(commentInfo) {
		let response = await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/comment-creation`, commentInfo)

		console.log('response:', response.data);
	}

	return (
		<div style={{width: props.overAllWidth}} className='landing'>
			<h1>Landing Component</h1>
			<section>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</section>
			<button>Post Lost pet</button>
			<button>Post Found pet</button>

			<Row xs={1} md={2} className='g-4 petCards'>
				{lostPetArray && lostPetArray.map((pet, id) => (
					<Col key={id}>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant='top' src={placeholder} />
							<Card.Body>
								<Card.Title>{pet.petName}</Card.Title>
								<Button 
									variant='primary' 
									onClick={() => setShowComment(true)}
								>
									View More
								</Button>
								<Button variant='danger'>Seen Near Me!</Button>
							</Card.Body>
						</Card>

						{/* Filter through pets by ID
						When clicked on pet info, send the id of that pet into the modal?  */}
						<LostPetModal 
						pet={pet}
						showComment={showComment} 
						onHide={() => setShowComment(false)} 
						handleCommentData={handleCommentData}
						/>
					</Col>
				))}
			</Row>

		</div>
	);
}
