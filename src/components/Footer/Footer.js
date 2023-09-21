import React from 'react';
import styles from './Footer.module.css';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <Container fluid className={styles.footerSection}>
      <Row>
        <Col md={12}>
          <p>© 2023 by Pedro Bracher Duarte. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
