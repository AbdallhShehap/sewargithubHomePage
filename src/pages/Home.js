import React from "react";
import Menu from "../componnent/MenuHome";
import SliderHomePage from "../componnent/SliderHomePage";
// import HSlidePage from "../componnent/HSlidePage";
import BlogsHomePage from "../componnent/BlogsHomePage";
import SecoundSlider from "../componnent/SecoundSlider";
import ValueHome from "../componnent/ValueHome";
import FeedbackSug from "../componnent/FeedbackSug";
import SliderFeedback from "../componnent/FeedbaceSlider";
import Footer from "../componnent/Footer";
import img1sli from "../images/s4.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <div >
      <Container fluid >
        <Row style={{ width: "100%" }}>
          <Menu />
        </Row>


        <Row style={{ width: "100%" }}>
          <SliderHomePage />
        </Row>



        <Row style={{ justifyItems: "center", width: "100%" }}>
          <BlogsHomePage />
        </Row>


       
        <hr />
        



        <Row >
          <SecoundSlider />
        </Row>



        <Row style={{marginBottom:'10%'}}>
          <ValueHome />
        </Row>


        <Row style={{  width: "100%" }}>
          <FeedbackSug />
        </Row>


        <Row style={{ height: "100vh"}}>
          <div style={{ textAlign: "center" }}>
            <h2>
              <b style={{ color: "black", fontSize: "100px" }}>
                {" "}
                TESTIMONIALS{" "}
              </b>{" "}
            </h2>
          </div>

          <div>
            
              <SliderFeedback />
            
          </div>
        </Row>


        <Row>
          <Footer />
        </Row>


      </Container>
    </div>
  );
}
