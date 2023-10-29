import React from "react";
import MenuPages from "../componnent/MenuPages";
import OurFamilyContent from "../componnent/OurFamilyContent";
import Footer from '../componnent/Footer'

export default function OurFamily() {
    const OUR = 'OUR TALENTED'
    const PATH = "FAMILY"
    
  return (
    <div>
      <div>
      <MenuPages our={OUR} path={PATH}/>
      </div>

      {/* Contant of ourfamily */}
        <div>
        <OurFamilyContent/>
        </div>

        {/* footer */}
        <div>
        <Footer/>
      </div>
    </div>
  );
}
