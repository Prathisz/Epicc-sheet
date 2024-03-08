import React from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const ImageCarousel = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Carousel fade={true} interval={3000} pause={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
                alt="First slide"
              />
              <Carousel.Caption className="text-right">
                <h3>Education & Training</h3>
                <p>Description or additional text here</p>
                <Button variant="primary">Contact US</Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Carousel.Caption className="text-right">
                <h3>Education Organization</h3>
                <p>Description or additional text here</p>
                <Button variant="primary">Contact us</Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://wallpapers.com/images/hd/computer-coding-hd-rigvxnafbrqgfein.webp"
                alt="Third slide"
              />
              <Carousel.Caption className="text-right">
                <h3>Trainning Organization</h3>
                <p>Description or additional text here</p>
                <Button variant="primary">Contact us</Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageCarousel;
