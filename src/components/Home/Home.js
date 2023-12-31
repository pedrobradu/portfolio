import React from 'react';
import styles from './Home.module.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import profilePic from '../../assets/images/profile.jpeg';
import resume from '../../assets/documents/resume.pdf';
import { useInView } from 'react-intersection-observer';

function Home({id}) {
  // inView will be true when the element is in the viewport
  const [ref, inView] = useInView({
    triggerOnce: false, // Observe forever
    threshold: 0.4 // At least 10% of the element is visible
  });
  
  return (
    <section id={id} ref={ref}>
      <Container className={`${styles.homeSection}`}>
        <Row className="justify-content-around align-items-center">
          <Col md={6}>
            <Image src={profilePic} roundedCircle ref={ref} className={`${inView ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeOutUp"}`} />
          </Col>
          <Col md={6} className={`mx-auto ${styles.firstCol} ${inView ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeOut"}`}>
            <div>
              <h1>Hello, I'm PEDRO DUARTE</h1>
              <p className={`${styles.lead}`}>
                Full Stack Software Developer with a Bachelor's degree in Civil Engineering and 5 years of entrepreneurial experience.
              </p>
            </div>
            <Button variant="dark" className="fw-bold w-100 mx-auto" href={resume} download>Download My Resume</Button>
            <div className={`${styles.techStack}`}>
              <i class="devicon-python-plain-wordmark"></i>
              <i class="devicon-django-plain-wordmark"></i>
              <i class="devicon-ruby-plain-wordmark"></i>
              <i class="devicon-rails-plain-wordmark"></i>
              <i class="devicon-html5-plain-wordmark"></i>
              <i class="devicon-css3-plain-wordmark"></i>
              <i class="devicon-bootstrap-plain-wordmark"></i>
              <i class="devicon-postgresql-plain-wordmark"></i>
              <i class="devicon-react-plain-wordmark"></i>
              <i class="devicon-javascript-plain-wordmark"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
