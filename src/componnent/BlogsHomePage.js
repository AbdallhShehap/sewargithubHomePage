import React , {useState} from 'react';
import Blog from '../componnent/Blog';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBBtn } from 'mdb-react-ui-kit';

import hpimgblog1 from '../images/hpblog1.png';
import hpimgblog2 from '../images/hpblog2.png';
import hpimgblog3 from '../images/hpblog3.png';

import '../assiste/Blog.css';

const allBlogsData  = [
  {
    title: 'Blog Title 1',
    image: hpimgblog1,
    content: 'Content of Blog 1  Content of Blog 2We consider it the little magnet; it is wanting to come here and afterward difficult to leave it.',
  },
  {
    title: 'Blog Title 2',
    image: hpimgblog2,
    content: 'Content of Blog 2 Content of Blog 2We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. ',
  },
  {
    title: 'Blog Title 3',
    image: hpimgblog3,
    content: 'Content of Blog 3  Content of Blog 2We consider it the little magnet; it is wanting to come here and afterward difficult to leave it.',
  }
  
];

export default function BlogsHomePage() {
   
  
    
  
  
  
    return (
      <div className='contanner-blogs' style={{height:"130vh"}}>
         <div style={{ display: "flex", justifyContent: "center", marginBottom:"2rem" }}>
        <h3 style={{ fontSize: "40px", color: "black" }}>SEE OUR LATEST STORIES</h3>
      </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "90%" }}>
            <Container fluid>
              <Row>
                {allBlogsData.map((blog, index) => (
                  <Col key={index} lg={4} md={4} sm={12} style={{marginTop:"3rem"}} >
                    <Blog blog={blog} />
                  </Col>
                ))}
              </Row>
            </Container>
          
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <MDBBtn
                  outline
                  rounded
                  className="btnmoreblog"
                  color="danger"
                 
                  style={{ fontSize: "20px" , marginTop:"3rem" ,color:"black", width:"30%"}}
                >
                  SEE ALL OUR NEWS
                </MDBBtn>
              </div>
            
          </div>
        </div>
      </div>
    );
  }