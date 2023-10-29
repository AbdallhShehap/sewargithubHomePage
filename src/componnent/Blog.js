import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

import '../assiste/Blog.css';

export default function Blog({ blog }) {
  return (
    <MDBCard className="custom-card" style={{  boxShadow: 'none', border: 'none' }}>
      <MDBCardImage style={{ borderRadius: '10%' , height:"50%", width:"100%" }} src={blog.image} position="top" alt="Blog Image" />
      <MDBCardBody>
        <MDBCardTitle>{blog.title}</MDBCardTitle>
        <MDBCardText>{blog.content}</MDBCardText>
        <div className="d-flex justify-content-end" style={{color:'red', fontSize:'20px', marginRight:"10px"}}>
          Read more
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
