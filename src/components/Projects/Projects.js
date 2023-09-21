import React from 'react';
import styles from './Projects.module.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import locals_1 from '../../assets/images/locals_1.jpg';  
import presentation from '../../assets/images/presentation.jpeg';  


const projects = [
  {
    title: "My Awesome App 1",
    description: "A single-page application made with React.",
    image: locals_1,
    liveLink: "https://locals-only-pedrobradu-49cce69c5b97.herokuapp.com/",
    codeLink: "https://github.com/pedrobradu/LOCALS_ONLY",
  },
  {
    title: "My Awesome App 2",
    description: "A single-page application made with React.",
    image: presentation,
    type: "video",
    liveLink: "https://www.youtube.com/watch?v=2GYRJtd1Qgc&t=4943s",
  },
  // ... other projects
];

function Projects({id}) {
  return (
    <section id={id}>
      <Container className={styles.projectsSection}>
        <h2 className="mb-5">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} sm={12} key={index} className={styles.projectCol}>
              <Card className={styles.projectCard}>
                <Card.Img variant="top" src={project.image} className={styles.projectImage} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>
                    {project.description}
                  </Card.Text>
                  {project.type === 'video' ? (
                    <Button href={project.liveLink} target="_blank">Watch Video</Button>
                  ) : (
                    <>
                      <Button href={project.liveLink} target="_blank">WebSite</Button>
                      {/* Only render GitHub button if codeLink is present */}
                      {project.codeLink && (
                        <Button href={project.codeLink} target="_blank" className="ms-2">Github</Button>
                      )}
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
