import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './CardRow.css'; // Import your CSS file for additional styling

const CardRow = () => {
  return (
    <div className='one'>
      <Row  className='algin-items-center'>
        {/* Card One */}
        <Col md={4} className="mb-4">
          <Card className="custom-card">
            <Card.Img variant="right" src="https://media.istockphoto.com/id/1358013032/photo/web-development-concept.jpg?s=612x612&w=0&k=20&c=d0F_7Rs2bysfEL9zr9JVN1TLzVOlEycNkz-vd19OANA=" alt="Card One Image" />
            <Card.Body>
              <Card.Title>Web Development </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Join Here</Button>
            </Card.Body>
          </Card>
        </Col>

        
        {/* <Col md={4} className="mb-4">
          <Card className="custom-card">
            <Card.Img variant="top" src="https://placekitten.com/301/201" alt="Card Two Image" />
            <Card.Body>
              <Card.Title>Card Two</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col> */} 

        {/* Card Three */}
        {/* <Col md={4} className="mb-4">
          <Card className="custom-card">
            <Card.Img variant="bottom" src="https://placekitten.com/302/202" alt="Card Three Image" />
            <Card.Body>
              <Card.Title>Card Three</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </div>
  );
};

export default CardRow;
