import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
const style = {
    "marginLeft":"40%",
    "height":"60%",
    "width":"50%"
  }
  
  const imageStyle = {
    "overflow":"hidden",
    "repeat":"no-repeat",
    "width":"90%",
    "marginTop":"5%",
  }
  function SecondPageNav() {
    return (
      <Navbar style={style} bg="-*">
              <a  href='/'><Image src="./assets/images/logo.png" style={imageStyle}/></a>
        <Container style={{"width":"100%","marginTop":"10%"}}>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"  >
            <Nav.Link href="/"><h3>Home</h3></Nav.Link>
            <Nav.Link href="/adopt"><h3></h3></Nav.Link>
              <Nav.Link href="#missionStyle"><h3></h3></Nav.Link>
              <Nav.Link href="#Staff"><h3></h3></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );      
  }
  

export default SecondPageNav;