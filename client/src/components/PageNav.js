import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import './css/PageNavStyle.css'
function PageNav() {
  return (
    <Navbar id="Style" bg="-*">
            <a  id='imageStyleLink' href='/'><Image src="./assets/images/logo.png" id="imageStyle" /></a>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="me-auto"  >
                      <Nav.Link href="/"><h3>Home</h3></Nav.Link>
          <Nav.Link href="/adopt"><h3>Adopt!</h3></Nav.Link>
            <Nav.Link href="/#missionStyle"><h3>Mission</h3></Nav.Link>
            <Nav.Link href="/#Staff"><h3>Staff</h3></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );      
}

export default PageNav;