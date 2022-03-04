import { Button, Row, Col, Modal, Container, Form } from 'react-bootstrap';
import './comment.css';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

// Pet Description
export default function PetInfoModal(props) {
	let commentArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	const [comment, setComment] = useState('');

	async function getComments() {
		let comments = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/comment-info`)
		console.log('comments:', comments.data);
	}

	async function handleSubmit(e) {
		e.preventDefault();
    let uuid = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/user-info`)

    console.log('uuid:', uuid.data);
		console.log('comment:', comment);
		props.handleCommentData({commentText: comment, userID: uuidv4});
	}

	return (
		<Modal show={props.showComment} onHide={props.onHide} aria-labelledby='contained-modal-title-vcenter'>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					Using Grid in Modal
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='show-grid'>
				<Container>
					<Row>
						Description super long!! Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim
					</Row>
					<Row>
						<Col xs={12} md={8}>
							Pet Image one
						</Col>
						<Col xs={6} md={4}>
							Pet Image two
						</Col>
					</Row>
				</Container>
				<Container className='commentContainer'>
					{commentArray.reverse().map((comment) => {
						if (comment === 'a') {
							return (
								<div key={comment} className='userComments'>
									User Comments: {comment}
								</div>
							);
						}
						return (
							<div key={comment} className='allComments'>
								Comments: {comment}
							</div>
						);
					})}
				</Container>
				TODO: Create a map here to map out the comments that we want to post
				TODO: Create a comment section and have it overflow with the curser at
				the bottom to show most recent comments
				<Button onClick={getComments}>View All Comments</Button>
				<Form onSubmit={handleSubmit}>
					<TextField
						id='fullWidth'
						label='Enter your comment here'
						fullWidth
						rows={4}
						onInput={(e) => setComment(e.target.value)}
					/>
					<Button type='submit'>Enter Comment</Button>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}
