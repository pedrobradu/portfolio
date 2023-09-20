import React from 'react';
import styles from './Home.module.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Home() {
  return (
    <Container className={`${styles.homeSection} py-5`}>
      <Row className="align-items-center">
        <Col md={6}>
          <h1>Hello, I'm [Your Name]</h1>
          <p className="lead">
            [A brief statement about yourself or your expertise, e.g., "A passionate front-end developer with expertise in React and modern web technologies."]
          </p>
        </Col>
        <Col md={6}>
          <Image src="[path_to_your_image]" roundedCircle fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
