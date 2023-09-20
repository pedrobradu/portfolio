import React from 'react';
import styles from './Projects.module.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: "My Awesome App 1",
    description: "A single-page application made with React.",
    image: "/path/to/image.jpg",
    liveLink: "https://liveproject.com",
    codeLink: "https://github.com/username/repo"
  },
  {
    title: "My Awesome App 2",
    description: "A single-page application made with React.",
    image: "/path/to/image.jpg",
    liveLink: "https://liveproject.com",
    codeLink: "https://github.com/username/repo"
  },
  // ... other projects
];

function Projects() {
  return (
    <Container className={styles.projectsSection}>
      <Row>
        {projects.map((project, index) => (
          <Col md={6} sm={12} key={index} className={styles.projectCol}>
            <Card className={styles.projectCard}>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  {project.description}
                </Card.Text>
                <Button href={project.liveLink} target="_blank">Live Demo</Button>
                <Button href={project.codeLink} target="_blank" className="ml-2">Code</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
