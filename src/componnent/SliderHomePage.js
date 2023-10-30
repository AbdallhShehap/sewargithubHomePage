import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "../assiste/sliderhomepage.css";
import image1 from "../images/slider1.png";

export default function SliderHomePage() {
  return (
    <>
      <MDBCarousel className="Hsliderhomepage">
        <MDBCarouselItem
          className="w-100 d-block "
          itemId={1}
          src={image1}
          alt="..."
          
         
        />

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src={image1}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src={image1}
          alt="..."
        />
      </MDBCarousel>



      <div className="black-box-outsrtory" style={{ color: "white",  textAlign:"start" , width:"45%" , height:'40%' }}>
        <div style={{ marginLeft: "1rem" , marginTop:"1rem" }}>
          <h3 style={{fontSize:"34px"}}>THE BEST</h3>
        </div>
        <div className ="EXPERIENCE" style={{ marginLeft: "1rem" }}>
          <h1  style={{fontWeight:"700"}}>EXPERIENCE</h1>
        </div>
        
        <div>

        <p className="text-b" style={{  marginLeft: "1rem" }}>
        OF LIVING IN A CLEAN, SAFE AND PERFUMED 
ENVIRONMENT WITH THE SCENTS OF OUR 
DISTINCTIVE PRODUCTS

        </p>


        </div>
        <div style={{ marginLeft: "1rem" }}>

        <p  style={{ fontSize:"28px" , marginTop:"1.3rem" , textDecoration: "underline"}}><b>READ MORE</b> </p>
        </div>
      </div>
    </>
  );
}
