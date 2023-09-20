import React from 'react';
import styles from './Experience.module.css';
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';


function Experience() {

  const experiences = [
    {
      title: "Front-end Developer 1",
      company: "Awesome Tech Inc.",
      duration: "Jan 2022 - Present",
      description: "Developed and maintained the company's main web application using React and other modern web technologies.",
      responsibilities: [
        "Optimized the web application for mobile devices.",
        "Collaborated with UX/UI designers to implement responsive designs.",
        // ... other responsibilities or achievements
      ],
      logo: "/path/to/logo1.png", // Path to the logo image of the company
    },
    {
      title: "Front-end Developer 2",
      company: "Awesome Tech Inc.",
      duration: "Jan 2022 - Present",
      description: "Developed and maintained the company's main web application using React and other modern web technologies.",
      responsibilities: [
        "Optimized the web application for mobile devices.",
        "Collaborated with UX/UI designers to implement responsive designs.",
        // ... other responsibilities or achievements
      ],
      logo: "/path/to/logo1.png", // Path to the logo image of the company
    },
    // ... other experiences
  ];

  return (
    <Container className={styles.experienceSection}>
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <Row key={index} className={styles.experienceItem}>
          <Col md={3} className={styles.experienceLogo}>
            <Image src={exp.logo} alt={`${exp.company} Logo`} fluid rounded />
          </Col>
          <Col md={9} className={styles.experienceDetail}>
            <h3>{exp.title} at {exp.company}</h3>
            <span className={styles.experienceDuration}>{exp.duration}</span>
            <p>{exp.description}</p>
            <h5>Key Responsibilities:</h5>
            <ListGroup>
              {exp.responsibilities.map((res, idx) => (
                <ListGroup.Item key={idx}>{res}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Experience;
