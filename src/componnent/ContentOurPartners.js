import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OurPartnersSlider from "../componnent/OurPartnersSlider";

export default function ContentOurPartners() {
  return (
    <div className="contentOurPartners">
      {/* slider Our Partners */}
      <div
        className="sliderOurPartners"
        style={{
          display: "flex",
          justifyContent: "center",
          height: "80vh",
          marginTop: "10rem",
        }}
      >
        <div style={{ width: "80%" }}>
          <OurPartnersSlider />
        </div>
      </div>

      {/* details Our Partners */}
      <Container className="detailsOurPartners">
        <Row>
          <Col xs={4} md={4} lg={4}>
            <p
              style={{
                color: "black",
                fontSize: "4rem",
                fontWeight: "900",
                marginBottom: "6rem",
              }}
            >
              PALESTINE
            </p>
          </Col>

          <Col xs={8} md={8} lg={8}>
            <p
              style={{
                color: "#911E1A",
                fontSize: "3.5rem",
                fontWeight: "400",
              }}
            >
              Western International Group W.I.G
            </p>
          </Col>
        </Row>



        <Row style={{marginBottom:"2rem"}}>
          <p style={{ color: "black", fontSize: "2rem" }}>
            <span style={{ color: "#911E1A", fontWeight: "700" }}>
              <FontAwesomeIcon icon={faMapMarker} /> Location:
            </span>{" "}
            Plot No. TP020301 – National Industries Park- Jabel Ali -Dubai - UAE
          </p>
        </Row>

        <Row style={{marginBottom:"2rem"}}>
          <p style={{ color: "black", fontSize: "2rem" }}>
            <span style={{ color: "#911E1A", fontWeight: "700" }}>
              <FontAwesomeIcon icon={faEnvelope} /> Postal Code:
            </span>{" "}
           3843
          </p>
        </Row>

        <Row style={{marginBottom:"2rem"}}>
          <p style={{ color: "black", fontSize: "2rem" }}>
            <span style={{ color: "#911E1A", fontWeight: "700" }}>
              <FontAwesomeIcon icon={faEnvelope} /> Email:
            </span>{" "}
            ossama.ahmed@westernint.com
          </p>
        </Row>

        <Row style={{marginBottom:"2rem"}}>
          <p style={{ color: "black", fontSize: "2rem" }}>
            <span style={{ color: "#911E1A", fontWeight: "700" }}>
              <FontAwesomeIcon icon={faPhone} /> Phone:
            </span>{" "}
            +97156035425
          </p>
        </Row>

        <Row style={{marginBottom:"4rem"}}>
          <p style={{ color: "black", fontSize: "2rem" }}>
            <span style={{ color: "#911E1A", fontWeight: "700" }}>
              <FontAwesomeIcon icon={faGlobe} /> Website:
            </span>{" "}
            www.westernint.com
          </p>
        </Row>
      </Container>
    </div>
  );
}
