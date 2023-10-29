import React from "react";
import Menu from "../componnent/MenuHome";
import SliderHomePage from "../componnent/SliderHomePage";
// import HSlidePage from "../componnent/HSlidePage";
import BlogsHomePage from "../componnent/BlogsHomePage";
import SecoundSlider from "../componnent/SecoundSlider";
import ValueHome from "../componnent/ValueHome";
import FeedbackSug from "../componnent/FeedbackSug";
import SliderFeedback from "../componnent/FeedbaceSlider";
import Footer from "../componnent/Footer";
import img1sli from "../images/s4.png";

export default function Home() {
  return (
    <div style={{display:"flex", justifyItems:"center", alignContent:"center"}}>

    <div>
       <div style={{width:"100%"}}>
        <Menu />
      </div>
      <div style={{ height: "120vh", width:"100%" }}>
        <SliderHomePage/>
      </div>
    


      <div style={{justifyItems:"center" , height:"100vh", width:'100%'}}>
        <BlogsHomePage />
      </div>
      <br/>
      <hr/>

      <br/> <br/> <br/>
      <div style={{ height:"90vh"}} >
        <SecoundSlider />
      </div>
      
      
      
       <div style={{justifyItems:"center" , height:"180vh", width:'100%' }}>
        <ValueHome />
      </div> 


      
       <div style={{height:"100vh" , width:"100%", marginTop:"225px"}}>
        <FeedbackSug />
      </div> 


       <div style={{height:"100vh" , width:"100%" }}>
        <div style={{textAlign:"center"}} >
          <h2>
            <b style={{ color: "black", fontSize: "100px" }}> TESTIMONIALS </b>{" "}
          </h2>

        </div>


        <div style={{width:"1000px" , marginLeft:"15%" }}>
        <div>

        <SliderFeedback />
        </div>
        </div>

      </div> 


     
      <div>
        <Footer />
      </div>
    </div>

    </div>
  );
}
