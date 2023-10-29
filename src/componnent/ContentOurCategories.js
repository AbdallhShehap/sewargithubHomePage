import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgblog from "../images/blog.png";
import imgblog1 from "../images/blog2.png";

export default function ContentOurCategories() {
  return (
    <div style={{ justifyContent:"center" , height:"190vh"}}>
      <Container style={{width:"80%"}}>
        <Row style={{height:"28%" , marginTop:"4%" }}>
          {/* image */}

          <Col xs={6} md={4} lg={4} >
            <img src={imgblog} style={{ height: "25rem" }} />
          </Col>

          {/* <details for blog  */}
          <Col
            xs={6}
            md={8}
            lg={8}
            style={{ height: "25rem", display: "flex", alignItems: "center" }}
          >
            <div>
              <div>
                {" "}
                <h1 style={{color:"black" , fontWeight:"900"}}>FRESHNERS</h1>
              </div>
              <div>
                <p>
                  We stand out with our meticulously chosen fragrances sourced
                  from top international suppliers. Our experts craft formulas
                  to infuse vitality and freshness into your life.
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <button
                  style={{
                    borderRadius: "20%",
                    fontSize: "1.3rem",
                    backgroundColor: "#9D0C00",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                  }}
                >
                  {" "}
                  SEE MORE{" "}
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <Row style={{height:"28%" , marginTop:"4%" }}>
          {/* image */}

          <Col xs={6} md={4} lg={4}>
            <img src={imgblog1} style={{ height: "25rem" }} />
          </Col>

          {/* <details for blog  */}
          <Col
            xs={6}
            md={8}
            lg={8}
            style={{ height: "25rem", display: "flex", alignItems: "center" }}
          >
            <div>
              <div>
                {" "}
                <h1 style={{color:"black" , fontWeight:"bolder"}}>FABRIC CARE</h1>
              </div>
              <div>
                <p>
                  We stand out with our meticulously chosen fragrances sourced
                  from top international suppliers. Our experts craft formulas
                  to infuse vitality and freshness into your life.
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <button
                  style={{
                    borderRadius: "20%",
                    fontSize: "1.3rem",
                    backgroundColor: "#9D0C00",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                  }}
                >
                  {" "}
                  SEE MORE{" "}
                </button>
              </div>
            </div>
          </Col>
        </Row>
            <hr />
        <Row style={{height:"28%" , marginTop:"4%" }}>
          {/* image */}

          <Col xs={6} md={4} lg={4}>
            <img src={imgblog} style={{ height: "25rem" }} />
          </Col>

          {/* <details for blog  */}
          <Col
            xs={6}
            md={8}
            lg={8}
            style={{ height: "25rem", display: "flex", alignItems: "center" }}
          >
            <div>
              <div>
                {" "}
                <h1 style={{color:"black" , fontWeight:"bolder"}}>HOME CARE</h1>
              </div>
              <div>
                <p>
                  We stand out with our meticulously chosen fragrances sourced
                  from top international suppliers. Our experts craft formulas
                  to infuse vitality and freshness into your life.
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <button
                  style={{
                    borderRadius: "20%",
                    fontSize: "1.3rem",
                    backgroundColor: "#9D0C00",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                  }}
                >
                  {" "}
                  SEE MORE{" "}
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
