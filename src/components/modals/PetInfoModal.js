import {
  Button,
  Row,
  Col,
  Modal,
  Container,
  Form,
  Card,
} from 'react-bootstrap';
import './comment.css';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

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
    async function getComments() {
      let comments = await axios.get(
        `${process.env.REACT_APP_BACKEND_SERVER}/comment-info`
      );
      setCommentArray(comments.data);
    }
    getComments();
  }, [comment]);

  async function handleSubmit(e) {
    e.preventDefault();

    // DONE: Pass in ID of user to the backend to get this specific user that is logged in
    let userID = await axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}/user-info`
    );
    console.log('userID:', userID.data);

    // TODO: Filter through users to return correct user with auth
    let loggedInUser = userID.data[1].userID;

    // Setting Userid to state so we can grab the user of this log in to map out user comments
    setUserId(loggedInUser);
    //  ? userID.data[0].userID : uuidv4

    // TODO: Change DB for petId to be UUID
    // let petID = await axios.get(
    // 	`${process.env.REACT_APP_BACKEND_SERVER}/pet-info`
    // );

    props.handleCommentData({
      commentText: comment,
      userID: loggedInUser,
      //  ? userID.data[0].userID : uuidv4,
      petId: 123,
      // petId: petID.data[0].petID ? petID.data[0].petID : uuidv4
    });
  }

  function handleErrors(error) {
    let errMsg = 'Error with saving location. Please try again later.';
    if (error) {
      return errMsg;
    }
  }

  async function getLocation(e) {
    e.preventDefault();
    try {
      let lostLocation = await axios.get(
        `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API}&callback=initMap`
      );
      console.log('lostLocation:', lostLocation.data[0]);
    } catch (error) {
      this.handleErrors();
    }
  }

  // <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>

  return (
    <Modal
      show={props.showComment}
      onHide={props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Pet Name here - lost or found
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            Description super long!! Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim
          </Row>
          <Row>
            <Col xs={8} md={6}>
              <Card>
                <Card.Img variant="top" src={placeholder} />
              </Card>
            </Col>
            <Col xs={8} md={6}>
              <Card>
                <Card.Img variant="top" src={placeholder} />
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <img
            async
            defer
						title={'Place where pet was lost'}
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API}&callback=initMap`}
						// TODO: COME back and fix this to alt description from the center of map?
						alt={'Come back to this alt requirement later'}
						zoom={15}
          />
        </Container>
        <Container className="commentContainer">
          {commentArray &&
            commentArray.reverse().map((comment) => {
              if (comment.userID === userId) {
                return (
                  <div key={comment.commentID} className="userComments">
                    User Comments: {comment.commentText}
                  </div>
                );
              }
              return (
                <div key={comment.commentID} className="allComments">
                  Comments: {comment.commentText}
                </div>
              );
            })}
        </Container>
        {/* DONE: Create a map here to map out the comments that we want to post */}
        {/* DONE: Create a comment section and have it overflow */}
        {/* TODO: Load curser at the bottom to show most recent comments */}
        <Form onSubmit={handleSubmit}>
          <TextField
            id="fullWidth"
            label="Enter your comment here"
            fullWidth
            rows={4}
            onInput={(e) => setComment(e.target.value)}
          />
          <Button type="submit">Enter Comment</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
