import React from 'react';
import styles from './Home.module.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profilePic from '../../assets/images/profile.jpeg'
import { useInView } from 'react-intersection-observer';

function Home({id}) {
  // inView will be true when the element is in the viewport
  const [ref, inView] = useInView({
    triggerOnce: false, // Observe forever
    threshold: 0.3 // At least 10% of the element is visible
  });
  
  return (
    <section id={id} ref={ref}>
      <Container className={`${styles.homeSection}`}>
        <Row className="align-items-center">
          <Col md={6}>
            <div className={`${inView ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeOut"}`}>
              <h1>Hello, I'm [Your Name]</h1>
              <p className="lead">
                [A brief statement about yourself or your expertise, e.g., "A passionate front-end developer with expertise in React and modern web technologies."]
              </p>
            </div>
          </Col>
          <Col md={6}>
            <Image src={profilePic} roundedCircle ref={ref} className={`${inView ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeOutUp"}`} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
