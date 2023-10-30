// old slider

import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import "../assiste/SecoundSlider.css";
import { MDBBtn } from "mdb-react-ui-kit";
import image1 from "../images/slider1.png"
import image2 from "../images/slider1.png"
import image3 from "../images/slider1.png"

export default function SecoundSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    const slideCount = slideData.length;
    let newIndex = (index + selectedIndex) % slideCount;
    if (newIndex < 0) {
      newIndex = slideCount - 1;
    }
    setIndex(newIndex);
  };

  const slideData = [
    {
      name: "John Doe",
      subname: "juak",
      imageSrc:
        `${image1}`,
      description:
        "“Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.”",
    },
    {
      name: "Jane Smith",
      subname: "juak",
      imageSrc:
      `${image2}`,
      description:
        "“Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.”",
    },
    {
      name: "Jane Smith",
      subname: "juak",
      imageSrc:
      `${image3}`,
      description:
        "“Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.”",
    },
  ];
  return (
    <div className="Sall">
      <div className="SFourSection">
        <Carousel
          className="Scont"
          controls={true}
          indicators={false}
          activeIndex={index}
          onSelect={handleSelect}
        >
          {slideData.map((slide, slideIndex) => (
            <Carousel.Item key={slideIndex}>
              <div className="Sslider-container">
                <div className="Sslider-part">
                  <div className="Stext-at-bottom" style={{ width: "65%", height:"90%"}}>

                    <p style={{ fontSize: "16px", marginTop:"7rem" }}>{slide.description}</p>


                    <div style={{ textAlign: "start", marginTop: "10px" }}>
                      <MDBBtn
                        outline
                        rounded
                        className="Sbtnmoreblog"
                        style={{  backgroundColor: "#9D0C00", color: "white" }}
                      >
                        SEE ALL OUR NEWS
                      </MDBBtn>
                    </div>
                  </div>
                </div>
                  <div className="Shuge-text">HOME </div>
                  <div className="Shuge-text2">CARE </div>
                <div className="Sslider-part right-part">
                  <img src={slide.imageSrc} alt={slide.name} height="100%" width="100%" style={{borderRadius:"7%"}}/>
                  
                </div>
              </div>
            </Carousel.Item>
          ))}
          {/* <div className="carousel-controls-left-4">
            <button onClick={() => handleSelect(-1)}>&#8249; </button>
          </div>
          <div className="carousel-controls-right-4">
            <button onClick={() => handleSelect(1)}> &#8250;</button>
          </div> */}
        </Carousel>
      </div>
    </div>
  );
}

