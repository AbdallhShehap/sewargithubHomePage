import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import logo from "../images/logo.png";
import '../assiste/menuHome.css';
import {Link} from "react-router-dom"

export default function App() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' bgColor='black' className='HContainer-navbar'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' style={{ color: "white" }}>
          <img src={logo} alt="Logo" width="50%" />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>


        <MDBCollapse navbar show={showNavSecond} style={{}}>
          <MDBNavbarNav
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center", 
              marginLeft:"2rem",
              
              
            }}
          >
            <MDBNavbarLink
              href='#'
              style={{ color: "white", fontSize: "18px", margin: "0 1rem" }}
            >
              <Link to="/ourstory" style={{color:'white'}}> HOME</Link>
              
            </MDBNavbarLink>
            <MDBNavbarLink
              href='#'
              style={{ color: "white", fontSize: "18px", margin: "0 1rem" }}
            >
               <Link to="/ourstory" style={{color:'white'}}> OUR_STORY</Link>
             
            </MDBNavbarLink>
            <MDBNavbarLink
              href='#'
              style={{ color: "white", fontSize: "18px", margin: "0 1rem" }}
            >
             <Link to="/" style={{color:'white'}}> OUR_PRODUCTS</Link>

              
            </MDBNavbarLink>
            <MDBNavbarLink
              href='#'
              style={{ color: "white", fontSize: "18px", margin: "0 1rem" }}
            >
            <Link to="/contacts" style={{color:'white'}}> CONTACT_US</Link>

              
            </MDBNavbarLink>

            <MDBNavbarNav
            style={{
              display: "flex",
              justifyContent:"end",
              alignItems: "center", 
              
            }}
          >
            <MDBIcon icon='search' fas style={{ color: "white", fontSize:"15px", marginRight:"1rem" }} />
            <MDBIcon
              icon='facebook'
              fab
              style={{  color: "white" , fontSize:"15px" , marginRight:"0.5rem"}}
            />
            <MDBIcon
              icon='instagram'
              fab
              style={{ color: "white" , fontSize:"15px", marginRight:"0.5rem"}}
            />
            <MDBIcon
              icon='youtube'
              fab
              style={{ color: "white" , fontSize:"15px", marginRight:"0.5rem"}}
            />
          </MDBNavbarNav>
          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}





