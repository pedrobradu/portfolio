import React from 'react';
import styles from './Footer.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <Container fluid className={styles.footerSection}>
      <Row>
        <Col md={6}>
          <p>© 2023 by [Your Name]. All rights reserved.</p>
        </Col>
        <Col md={6} className={styles.socialLinks}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          {/* Add any other social media or important links as needed */}
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
