import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Row } from 'react-bootstrap';


function Photo() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="images/id_photo.png" rounded style={{ width: '30%' }} />
        </Col>
      </Row>
    </Container>
  );
}

export default Photo;