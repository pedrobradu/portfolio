import React from 'react';
import styles from './Experience.module.css';
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
import kuke from '../../assets/images/kuke.png'
import novamente from '../../assets/images/novamente.png'
import lewagon from '../../assets/images/lewagon.png'


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
      logo: kuke, // Path to the logo image of the company
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
      logo: novamente, // Path to the logo image of the company
    },
    {
      title: "Front-end Developer 3",
      company: "Awesome Tech Inc.",
      duration: "Jan 2022 - Present",
      description: "Developed and maintained the company's main web application using React and other modern web technologies.",
      responsibilities: [
        "Optimized the web application for mobile devices.",
        "Collaborated with UX/UI designers to implement responsive designs.",
        // ... other responsibilities or achievements
      ],
      logo: lewagon, // Path to the logo image of the company
    },
    // ... other experiences
  ];

  return (
    <Container className={styles.experienceSection}>
      <h2 className="mb-5">Experience</h2>
      {experiences.map((exp, index) => (
        <Row key={index} className={`d-flex ${styles.experienceItem}`}>
          <Col md={2} className={`d-flex align-items-center ${styles.experienceLogo}`}>
            <Image src={exp.logo} alt={`${exp.company} Logo`} fluid rounded />
          </Col>
          <Col md={8} className={`d-flex align-items-center justify-content-center ${styles.experienceDetail}`}>
            <div>
              <h3>{exp.title} at {exp.company}</h3>
              <p>{exp.description}</p>
            </div>
            {/* <h5>Key Responsibilities:</h5>
            <ListGroup>
              {exp.responsibilities.map((res, idx) => (
                <ListGroup.Item key={idx}>{res}</ListGroup.Item>
              ))}
            </ListGroup> */}
          </Col>
          <Col md={2} className={`d-flex align-items-center ${styles.experienceLogo}`}>
            <span className={styles.experienceDuration}>{exp.duration}</span>
          </Col>
        </Row>
      ))}
    </Container>
  );  
}

export default Experience;
