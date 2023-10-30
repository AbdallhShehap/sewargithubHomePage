import React, { Component } from 'react';
import "../assiste/feedback.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBBtn } from 'mdb-react-ui-kit';

class ProductReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      rating: 1,
      name: '',
      country: '',
      message: '',
      activeButton: null,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleButtonClick = (btnName) => {
    this.setState({
      activeButton: btnName,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // You can add your submission logic here
  }

  render() {
    const { activeButton } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Container>
            <Row style={{ marginBottom: "3rem", marginTop: "2rem" }}>
              <Col xs={4} md={4} lg={4}>
                <MDBBtn
                  type="button"
                  outline
                  rounded
                  className={`btnmoreblog ${activeButton === "NEW PRODUCT" ? "clicked" : ""}`}
                  style={{
                    
                    backgroundColor: activeButton === "NEW PRODUCT" ? "white" : "#9D0C00",
                    color: activeButton === "NEW PRODUCT" ? "black" : "white",
                  
                  
                  }}
                  onClick={() => this.handleButtonClick("NEW PRODUCT")}
                >
                  NEW PRODUCT
                </MDBBtn>
              </Col>

              <Col xs={4} md={4} lg={4}>
                <MDBBtn
                  type="button"
                  outline
                  rounded
                  className={`btnmoreblog ${activeButton === "COMPLAINT" ? "clicked" : ""}`}
                  style={{
                    
                    backgroundColor: activeButton === "COMPLAINT" ? "white" : "#9D0C00",
                    color: activeButton === "COMPLAINT" ? "black" : "white",
                   
                  }}
                  onClick={() => this.handleButtonClick("COMPLAINT")}
                >
                  COMPLAINT 
                </MDBBtn>
              </Col>

              <Col xs={4} md={4} lg={4}>
                <MDBBtn
                  type="button"
                  outline
                  rounded
                  className={`btnmoreblog ${activeButton === "POINT OF SALE" ? "clicked" : ""}`}
                  style={{
                    
                    backgroundColor: activeButton === "POINT OF SALE" ? "white" : "#9D0C00",
                    color: activeButton === "POINT OF SALE" ? "black" : "white",
                    
                  }}
                  onClick={() => this.handleButtonClick("POINT OF SALE")}
                >
                  POINT OF SALE
                </MDBBtn>
              </Col>
            </Row>
        
            <Row style={{marginTop:"6rem"}}> 
              

              <Col xs={6} md={4} lg={3}>
                <label>Name:</label>
              </Col>
              <Col xs={6} md={8} lg={8}>
              <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              style={{  borderRadius:"15px"}}
            />
              </Col>
              <Col xs={6} md={8} lg={1}></Col>
            </Row>
            <br/>
        
            <Row>
              <Col xs={6} md={4} lg={3}>
                <label>Country:</label>
              </Col>
              <Col xs={6} md={8} lg={8}>
                 
              <input
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.handleInputChange}
              style={{  borderRadius:"15px"}}
            />
              </Col>
              <Col xs={6} md={8} lg={1}></Col>
            </Row>

            <br/>
            <Row>
              <Col xs={6} md={4} lg={3}>
                <label> Message:</label>
              </Col>
              <Col xs={6} md={8} lg={8}>
              <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
              style={{  borderRadius:"15px"}}
            />
              </Col>
              <Col xs={6} md={8} lg={1}></Col>
            </Row>

            <Row style={{display:"flex", justifyContent:"end"}}>
                
          <MDBBtn
          type="submit"
          outline
          rounded
          className="btnmoreblogs"
          style={{
            fontSize: "18px",
            backgroundColor: "#9D0C00",
            color: "white",
            width: "10rem",
          }}
        >
          SUBMIT
        </MDBBtn>
            </Row>
          </Container>

        

       

         

       
         
        </form>
      </div>
    );
  }
}

export default ProductReviewForm;
