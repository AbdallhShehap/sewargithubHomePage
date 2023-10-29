import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assiste/SlideOurStory.css";

export default function SlideOurStory() {
  const [selectedRow, setSelectedRow] = useState(null);

  const rowClickHandler = (rowIndex) => {
    setSelectedRow(rowIndex);
  };

  const renderTextForSelectedRow = () => {
    const texts = [
      "OUR VISION Raed Khalil For Chemicals Company is one of the leading companies in the eld of detergents and fragrances industry, we started in 2017, and our passion has been always towards development.",

      "OUR MISSION Raed Khalil For Chemicals Company is one of the leading companies in the eld of detergents and fragrances industry, we started in 2017, and our passion has been always towards development.",

      "OUR VALUES Raed Khalil For Chemicals Company is one of the leading companies in the eld of detergents and fragrances industry, we started in 2017, and our passion has been always towards development.",

      "OUR FAMILY and our passion has been always towards development Raed Khalil For Chemicals Company is one of the leading companies in the eld of detergents and fragrances industry, we started in 2017, and our passion has been always towards development."
    ];

    if (selectedRow !== null && selectedRow >= 0 && selectedRow < texts.length) {
      return texts[selectedRow];
    }
    return "";
  };

  return (
    <Container>
      <Row className="slides-container">
        {/* side */}
        <Col xs={3} md={3} lg={3} className="side">
          <Container>
            
            <br /> <br />
            {[0, 1, 2, 3].map((rowIndex) => (
              <Row
                key={rowIndex}
                style={{ cursor: "pointer" }}
                onClick={() => rowClickHandler(rowIndex)}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: "30px",
                    textAlign: "center",
                  }}
                >
                  <p>OUR</p>
                  <p>{["VISION", "MISSION", "VALUES", "FAMILY"][rowIndex]}</p>
                  <br />
                </div>
              </Row>
            ))}
          </Container>
        </Col>

        {/* image and text */}
        <Col xs={3} md={9} lg={9} className="image-text">
          <div
            className="black-box OURBOX"
            style={{
              color: "white",
              width: "60%",
              height: "25rem",
              marginBottom: "10rem",
              marginLeft: "23.5rem",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                marginLeft: "2rem",
                padding: "0.5rem",
              }}
            >
              {renderTextForSelectedRow()}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
