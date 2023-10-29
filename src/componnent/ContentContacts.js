import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

export default function ContentContacts() {
  return (
    <div className="ContentContacts" style={{ height: "100vh", width: "100%" }}>
      <Container>
        <Row className="leftandrightside">
          {/* LEFT SIDE */}
          <Col xs={12} md={4} lg={4}>
            <Row style={{ marginTop: "5rem" }}>
              <h1
                style={{ fontWeight: "700", color: "black", fontSize: "3rem" }}
              >
                LET’S TALK!
              </h1>
            </Row>

            <Row>
              <p>
                Raed Khalil For Chemicals Company is one of the leading
                companies in the eld of detergents and fragrances industry, we
                started in 2017, and our passion has been always towards
                development, growth and success, aiming to be a prominent name
                in our homeland, Jordan and in the MENA region.
              </p>
            </Row>

            <Row style={{ marginBottom: "2rem" }}>
              <p
                style={{
                  color: "black",
                  fontSize: "2rem",
                  fontSize: "2rem",
                  fontWeight: "400",
                }}
              >
                <span style={{ color: "black" }}>
                  <FontAwesomeIcon icon={faPhone} />
                </span>{" "}
                ++962 (0) 78787 3176
              </p>
            </Row>

            <Row style={{ marginBottom: "2rem" }}>
              <p
                style={{
                  color: "black",
                  fontSize: "2rem",
                  fontSize: "2rem",
                  fontWeight: "700",
                }}
              >
                <span style={{ color: "black", fontWeight: "400" }}>
                  <FontAwesomeIcon icon={faMapMarker} />
                </span>{" "}
                Jordan - Amman - Sahab - King Abdullah II Industrial City
                Building No. (408)
              </p>
            </Row>

            <Row style={{ marginBottom: "2rem" }}>
              <p
                style={{
                  color: "black",
                  fontSize: "2rem",
                  fontSize: "2rem",
                  fontWeight: "700",
                }}
              >
                <span style={{ color: "black", fontWeight: "400" }}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>{" "}
                info@raedchem.com
              </p>
            </Row>
          </Col>

          {/* RIGHT SIDE */}
          <Col xs={12} md={8} lg={8}>
            <Row style={{ marginTop: "6rem" }}>
              <Col>
                {" "}
                <bottun
                  style={{
                    borderRadius: "20%",
                    fontSize: "1.3rem",
                    backgroundColor: "#9D0C00",
                    padding: "1rem",
                    // paddingRight: "1rem",
                    color: "White",
                  }}
                >
                  MARKETING
                </bottun>
              </Col>

              <Col>
                {" "}
                <bottun
                  style={{
                    borderRadius: "20%",
                    fontSize: "1.3rem",
                    backgroundColor: "#9D0C00",
                    padding: "1rem",
                    // paddingRight: "1rem",
                    color: "White",
                  }}
                >
                  SEALES
                </bottun>
              </Col>

              <Col>
                {" "}
                <bottun
                  style={{
                    borderRadius: "20%",
                    fontSize: "1.3rem",
                    backgroundColor: "#9D0C00",
                    padding: "1rem",
                    // paddingRight: "1rem",
                    color: "White",
                  }}
                >
                  VENDOR
                </bottun>
              </Col>

              <Col>
                {" "}
                <bottun
                  style={{
                    borderRadius: "20%",
                    fontSize: "1.3rem",
                    backgroundColor: "#9D0C00",
                    padding: "1rem",
                    // paddingRight: "1rem",
                    color: "White",
                  }}
                >
                  COMPLAINT
                </bottun>
              </Col>
            </Row>

            <Row style={{ marginTop: "6rem" , width:"100%"}}>
                <Col xs={4} md={6} lg={6} style={{ display:"flex", justifyContent:"end", alignItems:"center"}}>
                <label>
            COMPANY NAME 
          </label>
                </Col>
                <Col xs={8} md={6} lg={6}  style={{textAlign:"end"}}><input type="text" style={{borderRadius:"7%" , borderColor:"#707070"}} /></Col>
                
        
            
            </Row>



            <Row style={{ marginTop: "6rem" , width:"100%"}}>
                <Col xs={4} md={6} lg={6} style={{ display:"flex", justifyContent:"end", alignItems:"center"}}>
                <label>
                PHONE 
          </label>
                </Col>
                <Col xs={8} md={6} lg={6}  style={{textAlign:"end"}}><input type="text" style={{borderRadius:"7%" , borderColor:"#707070"}} /></Col>
                
        
            
            </Row>




            <Row style={{ marginTop: "6rem" , width:"100%"}}>
                <Col xs={4} md={6} lg={6} style={{ display:"flex", justifyContent:"end", alignItems:"center"}}>
                <label>
                MESAAGE 
          </label>
                </Col>
                <Col xs={8} md={6} lg={6}  style={{textAlign:"end"}}><input type="text" style={{borderRadius:"7%" , borderColor:"#707070"}} /></Col>
                
        
            
            </Row>

            <Row style={{marginTop:"5rem"}}>
              <Col style={{display:'flex', justifyContent:"end"}}>

                <bottun
                  style={{
                    borderRadius: "20%",
                    fontSize: "1.3rem",
                    backgroundColor: "#9D0C00",
                    padding: "1rem",
                    // paddingRight: "1rem",
                    color: "White",
                  }}
                >
                  SUBMIT
                </bottun>
              </Col>
            </Row>
          </Col>
        </Row>

    
      </Container>
    </div>
  );
}
