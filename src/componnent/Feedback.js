import React, { Component } from 'react';
import "../assiste/feedback.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {MDBBtn
  } from 'mdb-react-ui-kit';
  import { FaStar } from 'react-icons/fa'; // Importing FontAwesome Star Icon for rating


  
  class ProductReviewForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        productName: '',
        rating: 0, // set initial rating to 0
        name: '',
        country: '',
        message: '',
      };
    }
  
    handleStarClick = (index) => {
      this.setState({ rating: index });
    }
  
    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    }

  handleSubmit = (event) => {
    event.preventDefault();
    // You can add your submission logic here
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Container>
            <Row>
              <Col xs={6} md={4} lg={3}>
                <label>Product:</label>
              </Col>
              <Col xs={6} md={8} lg={8}>
              
              <input
              type="text"
              className="form-control "
              name="productName"
              value={this.state.productName}
              onChange={this.handleInputChange}
              style={{borderRadius:"15px"}}
            />
              </Col>
              <Col xs={6} md={8} lg={1}></Col>
            </Row>
           <br/>
           <Row>
                    <Col xs={6} md={4} lg={3}>
                        <label>RATING:</label>
                    </Col>
                    <Col xs={6} md={8} lg={8}>
                        {[...Array(5)].map((star, index) => {
                            const ratingValue = index + 1;

                            return (
                                <label key={index}>
                                    <input 
                                        type="radio" 
                                        name="rating" 
                                        value={ratingValue}
                                        hidden 
                                        onClick={() => this.handleStarClick(ratingValue)}
                                    />
                                    <FaStar 
                                        className="star" 
                                        color={ratingValue <= this.state.rating ? "#9D0B00" : "#e4e5e9"} 
                                        size={30} 
                                        onMouseEnter={() => this.handleStarClick(ratingValue)}
                                    />
                                </label>
                            );
                        })}
                    </Col>
                    <Col xs={6} md={8} lg={1}></Col>
                </Row>
        <br/>
            <Row>
              <Col xs={6} md={4} lg={3}>
                <label>Name:</label>
              </Col>
              <Col xs={6} md={8} lg={8}>
              <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              style={{borderRadius:"15px" , border:" 1px solid #707070"}}
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
              style={{borderRadius:"15px" , border:" 1px solid #707070"}}
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
              style={{borderRadius:"15px"}}
            />
              </Col>
              <Col xs={6} md={8} lg={1}></Col>
            </Row>

            <Row style={{display:"flex", justifyContent:"end"}}>
                
            <MDBBtn
          type="submit"
          outline
          rounded
          className="btnmoreblogf"
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
