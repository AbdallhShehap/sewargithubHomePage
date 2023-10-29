import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBIcon,
  MDBCollapse,
  MDBNavbarLink
} from 'mdb-react-ui-kit';
import logo from "../images/logo.png";
import '../assiste/menuPages.css';

export default function App(props) {
  const { our, path } = props; 
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' bgColor='#911E1A' className='Container-navbar'>
      <MDBContainer fluid className="navbar-container">
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

        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MDBNavbarLink style={{ color: "white", fontSize: "20px", marginLeft:"4rem" }}>
              HOME
            </MDBNavbarLink>
          </MDBNavbarNav>

          <MDBNavbarNav>
            <MDBNavbarLink style={{ color: "white", fontSize: "20px" , marginLeft:"2rem"}}>
              ABOUT US
            </MDBNavbarLink>
          </MDBNavbarNav>
          <MDBNavbarNav>
            <MDBNavbarLink style={{ color: "white", fontSize: "20px", marginRight:"3rem" }}>
              OUR PRODUCTS
            </MDBNavbarLink>
          </MDBNavbarNav>

          <MDBNavbarNav>
            <MDBNavbarLink style={{ color: "white", fontSize: "20px", marginLeft:"2rem" }}>
              SERVICES
            </MDBNavbarLink>
          </MDBNavbarNav>
          <MDBNavbarNav>
            <MDBNavbarLink style={{ color: "white", fontSize: "20px" }}>
              CONTACTS
            </MDBNavbarLink>
          </MDBNavbarNav>
          <MDBNavbarNav
            style={{
              display: "flex",
              justifyContent: "center",  // Center align the social icons
            }}
          >
            <MDBIcon
              icon='facebook'
              fab
              style={{ margin: '0 1rem', color: "white", fontSize: "20px" }}
            />
            <MDBIcon
              icon='instagram'
              fab
              style={{ margin: '0 1rem', color: "white", fontSize: "20px" }}
            />
            <MDBIcon
              icon='youtube'
              fab
              style={{ margin: '0 1rem', color: "white", fontSize: "20px" }}
            />
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
           {/* Add the text in the lower left part here */}
           <div className="text-under-menu" style={{ color: 'white', fontSize: '20px', marginLeft: '1rem' }}>
           <h2 style={{fontSize:"2rem"}}>{our}</h2> 
           <h1 style={{fontSize:"6rem"}}>{path}</h1> 
          
        </div>
    </MDBNavbar>
  );
}
