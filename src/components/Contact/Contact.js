import React from 'react';
import styles from './Contact.module.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact({id}) {
  return (
    <section id={id}>
      <Container className={styles.contactSection}>
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
