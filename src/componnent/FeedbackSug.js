import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assiste/feedback.css";

import Feedback from "./Feedback";
import Suggestions from "./Suggestions";
import FeedbaceSlider from "./FeedbaceSlider";

export default function FeedbackSug() {
  return (
    <div>
      <Container>
        <Row >
          <Col>
            {" "}
            <div
              className="title"
              style={{
                display: "flex",
                justifyContent: "center",
                fontWeight: "700"
              }}
            >
              <h1>FEEDBACK</h1>
            </div>
          </Col>

          <Col>
            {" "}
            <div
              className="title"
              style={{
                display: "flex",
                justifyContent: "center",
                fontWeight: "700",
              }}
            >
              <h1>Suggestions</h1>
            </div>
          </Col>
        </Row>
        <Row>
          {/* Feedback */}
          <Col xs={12} md={6} lg={6} className="border-right" style={{marginTop:"3rem"}}>
            <Feedback />
          </Col>

          {/* Suggestions */}
          <Col xs={12} md={6} lg={6}>
            <Suggestions />
          </Col>
        </Row>
      </Container>
      <br /> <br /> <br />
      <hr />
      <br /> <br /> <br />
    </div>
  );
}
