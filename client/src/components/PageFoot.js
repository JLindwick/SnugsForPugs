import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
const style = {
  "padding":"5%",
  "marginLeft":"40%",
  "fontSize":"12px"
}

const footerStyle = {
  "backgroundColor":"#baa89c",
  "height":"100px"
}
function PageFoot() {
  return (
    <div style={footerStyle}>
      NOTE: This website is a school project, copyrighted by Justine C. Russell and is not a live adoption website for pugs, snuggly or otherwise
    </div>
  );
}

export default PageFoot;