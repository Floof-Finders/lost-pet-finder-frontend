import { Button, Modal, Container, Form } from 'react-bootstrap';
import './comment.css';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PetInfo from '../pet/PetInfo';
import { useCookies } from 'react-cookie';

// Pet Description
function PetInfoModal(props) {
	const [cookies] = useCookies();

	let [commentArray, setCommentArray] = useState([
		{ commentText: 'Comments Rendered here' },
	]);
	const [comment, setComment] = useState('');

	useEffect(() => {
		getComments();
	}, []);

	async function getComments() {
		let comments = await axios.get(
			`${process.env.REACT_APP_BACKEND_SERVER}/comment-info`
		);
		setCommentArray(comments.data);
	}

	async function handleSubmit(e) {
		e.preventDefault();

		// Sends Comment Data back to save in database
		props.handleCommentData({
			commentText: comment,
			userID: cookies.user.userID,
			petId: props.pet.petID,
		});

		// Displays comments right after they post
		const timer = setTimeout(() => {
			getComments();
		}, 5);
		return () => clearTimeout(timer);
	}

	return (
		<Modal
			show={props.showComment}
			onHide={props.onHide}
			aria-labelledby='contained-modal-title-vcenter'
		>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					{props.pet.petName ? props.pet.petName : 'Default Pet Name: Ruffle'} -
					lost or found
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='show-grid'>
				<Container></Container>

				<PetInfo pet={props.pet} />

				<Container className='commentContainer'>
					{commentArray &&
						commentArray
							.filter((comment) => comment.petId === props.pet.petID)
							.reverse()
							.map((comment) => {
								if (comment.userID === cookies.user.userID) {
									return (
										<div key={comment.commentID} className='userComments'>
											{cookies.user.username}: {comment.commentText}
										</div>
									);
								}
								return (
									<div key={comment.commentID} className='allComments'>
										Other Users: {comment.commentText}
									</div>
								);
							})}
				</Container>

				<Form onSubmit={handleSubmit}>
					<Form.Group className='textField'>
						<TextField
							id='fullWidth'
							label='Enter your comment here'
							fullWidth
							rows={4}
							onInput={(e) => setComment(e.target.value)}
						/>
						<Button className='textFieldButton' type='submit'>
							Enter Comment
						</Button>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default PetInfoModal;
