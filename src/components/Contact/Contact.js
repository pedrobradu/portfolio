import React from 'react';
import styles from './Contact.module.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact({id}) {
  // inView will be true when the element is in the viewport
  const [ref, inView] = useInView({
    triggerOnce: false, // Observe forever
    threshold: 0.3 // At least 10% of the element is visible
  });

  return (
    <section id={id} ref={ref}>
      <Container className={`${styles.contactSection} ${inView ? "animate__animated animate__fadeInUp" : "animate__animated animate__fadeOutDown"}`}>
        <h2 className='mb-3'>Contact Me</h2>
        <Row>
          <Col className={styles.socialLinks}>
            {/* Here, you can add additional contact details or any other relevant information */}
            <p>Feel free to reach out to me for collaboration, projects, or any inquiries.</p>
            <a href="mailto:pedrobradul@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://github.com/pedrobradu" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/pedro-bracher-duarte" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://wa.me/+15144737893" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            {/* Add any other social media or important links as needed */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
