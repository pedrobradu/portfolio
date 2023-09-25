import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
        const sections = ["home", "experience", "projects", "contact"];
        for (const section of sections) {
            const sectionEl = document.getElementById(section);
            if (sectionEl && sectionEl.getBoundingClientRect().top <= 200) {
                setActiveSection(section);
            }
        }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body sticky-top">
      <Container>
        <Navbar.Brand href="#home">
          <p className={`${styles.initials}`}>&lt; PBD/&gt;</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse className="me-5 justify-content-end" id="navbar-nav">
          <Nav className={`${styles.links}`}>
            <Nav.Link href="#home" className={activeSection === "home" ? `${styles.active}` : ""} active={activeSection === "home"}><span>Home</span></Nav.Link>
            <Nav.Link href="#experience" className={activeSection === "experience" ? `${styles.active}` : ""} active={activeSection === "experience"}><span>Experience</span></Nav.Link>
            <Nav.Link href="#projects" className={activeSection === "projects" ? `${styles.active}` : ""} active={activeSection === "projects"}><span>Projects</span></Nav.Link>
            <Nav.Link href="#contact" className={activeSection === "contact" ? `${styles.active}` : ""} active={activeSection === "contact"}><span>Contact</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

