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

export default function App() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' bgColor='black' className='HContainer-navbar'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' style={{ color: "white" }}>
          <img src={logo} alt="Logo" />
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
              justifyContent: "center",
              alignItems: "center", 
              marginLeft:"3rem",
            }}
          >
            <MDBNavbarLink
              href='#'
              style={{ color: "white", fontSize: "24px", margin: "0 1rem" }}
            >
              HOME
            </MDBNavbarLink>
            <MDBNavbarLink
              href='#'
              style={{ color: "white", fontSize: "24px", margin: "0 1rem" }}
            >
              
              OUR_STORY
            </MDBNavbarLink>
            <MDBNavbarLink
              href='#'
              style={{ color: "white", fontSize: "24px", margin: "0 1rem" }}
            >
              OUR_PRODUCTS
            </MDBNavbarLink>
            <MDBNavbarLink
              href='#'
              style={{ color: "white", fontSize: "24px", margin: "0 1rem" }}
            >
              CONTACT_US
            </MDBNavbarLink>
          </MDBNavbarNav>

          <MDBNavbarNav
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center", 
              marginRight:"3rem"
            }}
          >
            <MDBIcon icon='search' fas style={{ color: "white", marginRight:"5rem" , fontSize:"30px" }} />
            <MDBIcon
              icon='facebook'
              fab
              style={{ margin: '0 1rem', color: "white" , fontSize:"30px"}}
            />
            <MDBIcon
              icon='instagram'
              fab
              style={{ margin: '0 1rem', color: "white" , fontSize:"30px"}}
            />
            <MDBIcon
              icon='youtube'
              fab
              style={{ margin: '0 1rem', color: "white" , fontSize:"30px"}}
            />
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
