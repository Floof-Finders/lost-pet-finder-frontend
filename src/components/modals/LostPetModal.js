import {
	Button,
	Modal,
	Container,
	Form,
} from 'react-bootstrap';
import './comment.css';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import PetInfo from '../pet/PetInfo';

let placeholder =
	'http://via.placeholder.com/100x100.png?text=Pet+Picture+Here';

// Pet Description
export default function PetInfoModal(props) {
	let [commentArray, setCommentArray] = useState([
		{ commentText: 'Comments Rendered here' },
	]);
	const [comment, setComment] = useState('');
	const [userId, setUserId] = useState();

	// DONE: Make this a useEffect to update comments on render
	useEffect(() => {
		// TODO: Create get request to get user's info on load
		getComments();
	}, []);
	console.log('PET PROPS', props.pet);
	async function getComments() {
		let comments = await axios.get(
			`${process.env.REACT_APP_BACKEND_SERVER}/comment-info`
		);
		setCommentArray(comments.data);
	}

	async function handleSubmit(e) {
		e.preventDefault();

		// DONE: Pass in ID of user to the backend to get this specific user that is logged in
		let userID = await axios.get(
			`${process.env.REACT_APP_BACKEND_SERVER}/user-info`
		);

		// TODO: Filter through users to return correct user with auth
		let loggedInUser = userID.data[1].userID;

		// Setting Userid to state so we can grab the user of this log in to map out user comments
		setUserId(loggedInUser);
		//  ? userID.data[0].userID : uuidv4

		// DONE: Change DB for petId to be UUID
		// let petID = await axios.get(
		// 	`${process.env.REACT_APP_BACKEND_SERVER}/pet-info`
		// );

		props.handleCommentData({
			commentText: comment,
			userID: loggedInUser,
			// TODO: Get petId from props
			petId: props.pet.petID,
		});

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

				<PetInfo pet={props.pet} placeholder={placeholder} />

				<Container className='commentContainer'>
					{commentArray &&
						commentArray.reverse().map((comment) => {
							if (comment.userID === userId) {
								return (
									<div key={comment.commentID} className='userComments'>
										User Comments: {comment.commentText}
									</div>
								);
							}
							return (
								<div key={comment.commentID} className='allComments'>
									Comments: {comment.commentText}
								</div>
							);
						})}
				</Container>
				{/* DONE: Create a map here to map out the comments that we want to post */}
				{/* DONE: Create a comment section and have it overflow */}
				{/* TODO: Load curser at the bottom to show most recent comments */}

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
