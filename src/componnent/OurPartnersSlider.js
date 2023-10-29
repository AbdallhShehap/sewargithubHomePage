import React, { Component } from "react";
import Slider from "react-slick";
import im1 from "../images/cantrey.png";
import '../assiste/OurPartnersSlider.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
        dots: true, 
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <div className="custom-arrow custom-prev-arrow" style={{color:"red"}}>{"<"}</div>,
        nextArrow: <div className="custom-arrow custom-next-arrow" style={{color:"red"}}>{">"}</div>,
      };
    return (
      <div>
        
        <Slider {...settings}>
          <div>
            
            <div className="slider-element" >
                <div>
                <img src={im1}/>

                </div>
                    <div>
                <h1>Paleestine</h1>

                    </div>
            </div>



          </div>


             <div>
            
            <div className="slider-element" >
                <div>
                <img src={im1}/>

                </div>
                    <div>
                <h1>Paleestine</h1>

                    </div>
            </div>



          </div>

          <div>
            
            <div className="slider-element" >
                <div>
                <img src={im1}/>

                </div>
                    <div>
                <h1>Paleestine</h1>

                    </div>
            </div>



          </div>


          <div>
            
            <div className="slider-element" >
                <div>
                <img src={im1}/>

                </div>
                    <div>
                <h1>Paleestine</h1>

                    </div>
            </div>



          </div>



          <div>
            
            <div className="slider-element" >
                <div>
                <img src={im1}/>

                </div>
                    <div>
                <h1>Paleestine</h1>

                    </div>
            </div>



          </div>


          <div>
            
            <div className="slider-element" >
                <div>
                <img src={im1}/>

                </div>
                    <div>
                <h1>Paleestine</h1>

                    </div>
            </div>



          </div>


        </Slider>
      </div>
    );
  }
}