import React from 'react';
import styles from './Contact.module.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';

function Contact({id}) {
  // inView will be true when the element is in the viewport
  const [ref, inView] = useInView({
    triggerOnce: false, // Observe forever
    threshold: 0.3 // At least 10% of the element is visible
  });

  return (
    <section id={id} ref={ref}>
      <Container className={`${styles.contactSection} ${inView ? "animate__animated animate__fadeInUp" : "animate__animated animate__fadeOutDown"}`}>
        <h2>Contact Me</h2>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            {/* Here, you can add additional contact details or any other relevant information */}
            <p>Feel free to reach out to me for collaboration, projects, or any inquiries.</p>
            <p>Email: [your-email@example.com]</p>
            <p>Phone: [+123-456-7890]</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
