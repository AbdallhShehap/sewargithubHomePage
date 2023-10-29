import React from "react";
import "../assiste/bannerOurStory.css";
import img1 from "../images/DSC00028.jpg";
import img2 from "../images/DSC00287.jpg";
import img3 from "../images/DSC00353.jpg";
import img4 from "../images/DSC00369.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BannerOurStory() {
  return (
    <div className="BannerOurStory">
      <div className="Gullery">
        <img className="img1" src={img1} />
        <img className="img2" src={img2} />
        <img className="img3" src={img3} />
        <img className="img4" src={img4} />
      </div>

      <div className="About-cont">
        <Container>
            <Row>

                <Col xs={6} md={6} lg={6} style={{fontSize:"130px" , color:"black", fontWeight:"700"}}><b>ABOUT US</b> </Col>


                <Col xs={6} md={6} lg={6}  style={{fontSize:"20px" , color:"black"}}>
                Raed Khalil For Chemicals Company is one of the leading companies in
          the field of detergents and fragrances industry, we started in 2017,
          and our passion has always been towards development, growth, and
          success, aiming to be a prominent name in our homeland, Jordan, and in
          the MENA region.
                </Col>
            </Row>
            
            </Container>

      </div>
    </div>
  );
}
