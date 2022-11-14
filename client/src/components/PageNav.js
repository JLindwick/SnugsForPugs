import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
const style = {
  "marginLeft":"45%",
  "font-size":"16px",
}

const imageStyle = {
  "marginLeft":"0%",
  "overflow":"hidden",
  "repeat":"no-repeat",
  "width":"80%"
}
function PageNav() {
  return (
    <Navbar style={style} bg="-*">
            <Image src="./images/logo.png" style={imageStyle}/>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{"marginTop":"15%"}}>
            <Nav.Link href="#link"><h4>About</h4></Nav.Link>
            <Nav.Link href="#link"><h4>Our Mission</h4></Nav.Link>
            <Nav.Link href="#link"><h4>Our Staff</h4></Nav.Link>
            <Nav.Link href="#link"><h4>Adopt!</h4></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNav;