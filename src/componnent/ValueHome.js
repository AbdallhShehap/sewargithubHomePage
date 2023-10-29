import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from '../images/w2.png';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function ValueHome() {
  const valueToDisplay = [
    {
      id: 1,
      image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
    },
    {
      id: 2,
      image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
    },
    {
      id: 3,
      image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
    },
    {
      id: 4,
      image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
    },
    {
      id: 5,
      image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
    },
    {
      id: 6,
      image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
    }
  ];

  return (
    <div className="ValueHome" style={{ width: "100%" }}>
      <div
        className="title"
        style={{
          display: "flex",
          justifyContent: "start",
          width: "80%",

          marginLeft: "10rem",
          marginBottom: "2rem",
        }}
      >
        <p>
          <b style={{ fontSize: "30px", color: "black" }}> SEE_OUR</b>
        </p>
        <h1>
          <b style={{ fontSize: "180px", color: "black" }}>VALUES</b>
        </h1>
        <p
          style={{
            width: "35%",
            marginLeft: "6rem",
            marginTop: "10rem",
          }}
        >
          Raed Khalil For Chemicals which is located in the Hashemite Kingdom of
          Jordan, is a factory specializing in the manufacture of home care,
          detergent, and freshener products, we offer our products in your hands
          to have the best experience of living in a clean, safe and perfumed
          environment with the scents of our distinctive products.
        </p>
      </div>

      <div>
        <Container fluid style={{ width: "80%" }}>
          <Row style={{ marginLeft: "3rem" }}>
            <Col lg={4} md={4} sm={12} style={{ marginTop: "3rem" }}>
              <MDBCard
                className="custom-card"
                style={{ boxShadow: "none", border: "none" }}
              >
                <MDBCardImage
                  style={{ borderRadius: "10%", height: "20rem", width: "90%" }}
                  src={image1}
                  position="top"
                  alt="Blog Image"
                />
              </MDBCard>
            </Col>

            <Col lg={4} md={4} sm={12} style={{ marginTop: "3rem" }}>
              <MDBCard
                className="custom-card"
                style={{ boxShadow: "none", border: "none" }}
              >
                <MDBCardImage
                  style={{ borderRadius: "10%", height: "20rem", width: "90%" }}
                  src={image1}
                  position="top"
                  alt="Blog Image"
                />
              </MDBCard>
            </Col>

            <Col lg={4} md={4} sm={12} style={{ marginTop: "3rem" }}>
              <MDBCard
                className="custom-card"
                style={{ boxShadow: "none", border: "none" }}
              >
                <MDBCardImage
                  style={{ borderRadius: "10%", height: "20rem", width: "90%" }}
                  src={image1}
                  position="top"
                  alt="Blog Image"
                />
              </MDBCard>
            </Col>
          </Row>

          <Row style={{ marginTop: "4rem", marginLeft: "3rem" }}>
            <Col lg={4} md={4} sm={12} style={{ marginTop: "3rem" }}>
              <MDBCard
                className="custom-card"
                style={{ boxShadow: "none", border: "none" }}
              >
                <MDBCardImage
                  style={{ borderRadius: "10%", height: "20rem", width: "90%" }}
                  src={image1}
                  position="top"
                  alt="Blog Image"
                />
              </MDBCard>
            </Col>

            <Col lg={4} md={4} sm={12} style={{ marginTop: "3rem" }}>
              <MDBCard
                className="custom-card"
                style={{ boxShadow: "none", border: "none" }}
              >
                <MDBCardImage
                  style={{ borderRadius: "10%", height: "20rem", width: "90%" }}
                  src={image1}
                  position="top"
                  alt="Blog Image"
                />
              </MDBCard>
            </Col>

            <Col lg={4} md={4} sm={12} style={{ marginTop: "3rem" }}>
              <MDBCard
                className="custom-card"
                style={{ boxShadow: "none", border: "none" }}
              >
                <MDBCardImage
                  style={{ borderRadius: "10%", height: "20rem", width: "90%" }}
                  src={image1}
                  position="top"
                  alt="Blog Image"
                />
              </MDBCard>
            </Col>
          </Row>
        </Container>

        <div style={{display:"flex", justifyContent:"center" , marginTop: "5rem"}}>

        <MDBBtn
          outline
          rounded
          className="btnmoreblog"
          style={{
            fontSize: "13px",
            backgroundColor: "#9D0C00",
            color: "white",
            width: "13rem",
          }}
        >
          DISCOVER OUR STORY
        </MDBBtn>
        </div>
      </div>
    </div>
  );
}
