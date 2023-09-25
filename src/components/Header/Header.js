import React from 'react';
import styles from './Header.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body sticky-top">
      <Container>
        <Navbar.Brand href="#home">
          <p className={`${styles.initials}`}>&lt; PBD/&gt;</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse className="me-5 justify-content-end" id="navbar-nav">
          <Nav className={`${styles.links}`}>
            <Nav.Link href="#home"><span>Home</span></Nav.Link>
            <Nav.Link href="#experience"><span>Experience</span></Nav.Link>
            <Nav.Link href="#projects"><span>Projects</span></Nav.Link>
            <Nav.Link href="#contact"><span>Contact</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
