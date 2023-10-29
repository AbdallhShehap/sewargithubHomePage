import React, { Component } from "react";
import Slider from "react-slick";
import im1 from "../images/cantrey.png";
import '../assiste/fabriccareslider.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
        dots: true, 
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <div className="fabriccustom-arrow custom-prev-arrow" style={{color:"red"}}>{"<"}</div>,
        nextArrow: <div className="fabriccustom-arrow custom-next-arrow" style={{color:"red"}}>{">"}</div>,
      };
    return (
      <div>
        
        <Slider {...settings}>
          <div>
            
            <div className="fabriccare-slider-element" >
                <div>
                <img src={im1}/>

                </div>
                    <div>
                <h1>Paleestine</h1>

                    </div>
            </div>



          </div>


             <div>
            
            <div className="fabriccare-slider-element" >
                <div>
                <img src={im1}/>

                </div>
                    <div>
                <h1>Paleestine</h1>

                    </div>
            </div>



          </div>

          <div>
            
            <div className="fabriccare-slider-element" >
                <div>
                <img src={im1}/>

                </div>
                    <div>
                <h1>Paleestine</h1>

                    </div>
            </div>



          </div>


          <div>
            
            <div className="fabriccare-slider-element" >
                <div>
                <img src={im1}/>

                </div>
                    <div>
                <h1>Paleestine</h1>

                    </div>
            </div>



          </div>



          <div>
            
            <div className="fabriccare-slider-element" >
                <div>
                <img src={im1}/>

                </div>
                    <div>
                <h1>Paleestine</h1>

                    </div>
            </div>



          </div>


          <div>
            
            <div className="fabriccare-slider-element" >
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