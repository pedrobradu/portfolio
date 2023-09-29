import React from 'react';
import styles from './Experience.module.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import kuke from '../../assets/images/kuke.png'
import novamente from '../../assets/images/novamente.png'
import lewagon from '../../assets/images/lewagon.png'
import { useInView } from 'react-intersection-observer';

function ExperienceItem({ exp }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4
  });

  return (
    <Row ref={ref} className={`d-flex align-items-center ${styles.experienceItem}`}>
      <Col md={2} className={`${styles.experienceLogo} ${inView ? "animate__animated animate__fadeInLeft" : "animate__animated animate__fadeOutLeft"}`}>
          <a href={exp.website} target="_blank" rel="noopener noreferrer">
              <Image src={exp.logo} alt={`${exp.company} Logo`} fluid rounded />
          </a>
      </Col>
      <Col md={8} className={`${styles.experienceDetail} ${inView ? "animate__animated animate__fadeInUp" : "animate__animated animate__fadeOut"}`}>
        <div>
          <h3>{exp.title} at {exp.company}</h3>
          <p>{exp.description}</p>
        </div>
      </Col>
      <Col md={2} className={`${inView ? "animate__animated animate__fadeInRight" : "animate__animated animate__fadeOutRight"}`}>
        <span className={styles.experienceDuration}>{exp.duration}</span>
      </Col>
    </Row>
  );
}


function Experience({id}) {
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Kuke",
      duration: "Feb 2023 - Present",
      description: "Led the business technology transition to a subscription-based model using Python, Django, and AWS. I developed an integrated client and order platform, boosting efficiency, and integrated payment and notification systems like Snipcart, Stripe, and Zapi for streamlined operations.",
      logo: kuke, // Path to the logo image of the company
      website: "https://clubekuke.com.br/",
    },
    {
      title: "Full Stack Developer",
      company: "Novamente Software House",
      duration: "Oct 2022 - Jan 2023",
      description: "Directly collaborated with clients to align product development, led robust database creation with PostgreSQL, and employed Ruby on Rails for backend tasks. I also crafted front-end designs using Bootstrap and ensured optimal app performance on Heroku.",
      logo: novamente, // Path to the logo image of the company
      website: "https://novamente.cc/",
    },
    {
      title: "Certificate in Web Development",
      company: "Le Wagon",
      duration: "Jul 2022 - Sep 2022",
      description: "9-week full-time intensive coding bootcamp learning HTML, CSS, Bootstrap, JavaScript ES6, SQL, Git, GitHub, Heroku and Ruby on Rails. Designed, implemented and shipped to production a clone of AirBnB and a Rails prototype.",
      logo: lewagon, // Path to the logo image of the company
      website: "https://www.lewagon.com/",
    },
    // ... other experiences
  ];

  const [sectionRef, sectionInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  return (
    <section id={id}>
      <Container className={styles.experienceSection}>
        <h2 ref={sectionRef} className={`mt-5 mb-5 ${sectionInView ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeOut"}`}>Experience</h2>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} exp={exp} />
        ))}
      </Container>
    </section>
  );  
}

export default Experience;
