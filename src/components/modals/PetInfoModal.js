import { Button, Row, Col, Modal, Container } from 'react-bootstrap';

// Pet Description
export default function petInfoModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Using Grid in Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>Description super long!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</Row>
          <Row>
            <Col xs={12} md={8}>
              Pet Image one
            </Col>
            <Col xs={6} md={4}>
            Pet Image two
            </Col>
          </Row>


          TODO: Create a map here to map out the comments that we want to post
          TODO: Create a comment section and have it overflow with the curser at the bottom to show most recent comments

          <Row>
            <Col xs={12} md={8}>
              <Button>View Comments</Button>
            </Col>
            <Col xs={6} md={4}>
            <Button>Comments</Button>
            </Col>
          </Row>
          
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
