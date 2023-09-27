import React from 'react';
import { useState, useEffect} from 'react';
import styles from './Header.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

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

  const handleNavLinkClick = (e, hash) => {
    e.preventDefault();
    setTimeout(() => {
        console.log("HOIIIIII");
        window.location.hash = hash;
    }, 100);  // 150ms delay
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body sticky-top">
      <Container>
        <Navbar.Brand href="#home">
          <p className={`${styles.initials}`}>&lt; PBD/&gt;</p>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvas-navbar-nav" />
          <Navbar.Offcanvas 
            id="offcanvas-navbar-nav" 
            aria-labelledby="offcanvas-navbar-label"
            placement="end"
          >
            <Offcanvas.Header closeButton className="bg-warning text-black">
              <Offcanvas.Title className={`${styles.title}`} id="offcanvas-navbar-label">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="bg-warning bg-opacity-75 text-black justify-content-end">
              <Nav className={`${styles.links}`}>
                {/* ... your nav links ... */}
                <Nav.Link 
                  href="#home" 
                  onClick={(e) => handleNavLinkClick(e, "#home")}
                  className={activeSection === "home" ? `${styles.active}` : ""} 
                  active={activeSection === "home"}>
                    <span>Home</span>
                </Nav.Link>
                <Nav.Link 
                  href="#experience" 
                  onClick={(e) => handleNavLinkClick(e, "#experience")}
                  className={activeSection === "experience" ? `${styles.active}` : ""} 
                  active={activeSection === "experience"}>
                    <span>Experience</span>
                </Nav.Link>
                <Nav.Link 
                  href="#projects" 
                  onClick={(e) => handleNavLinkClick(e, "#projects")}
                  className={activeSection === "projects" ? `${styles.active}` : ""} 
                  active={activeSection === "projects"}>
                    <span>Projects</span>
                </Nav.Link>
                <Nav.Link 
                  href="#contact" 
                  onClick={(e) => handleNavLinkClick(e, "#contact")}
                  className={activeSection === "contact" ? `${styles.active}` : ""} 
                  active={activeSection === "contact"}>
                    <span>Contact</span>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;

