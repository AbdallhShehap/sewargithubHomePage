import React from "react";
import MenuPages from "../componnent/MenuPages";
import FabricCareContent from "../componnent/FabricCareContent";
import Footer from '../componnent/Footer'

export default function FabricCare() {
    const OUR = 'CATEGORIES'
    const PATH = "FABRIC CARE"
    
  return (
    <div>
      <div>
      <MenuPages our={OUR} path={PATH}/>
      </div>

      {/* Contant of ourfamily */}
        <div>
        <FabricCareContent/>
        </div>

        {/* footer */}
        <div>
        <Footer/>
      </div>
    </div>
  );
}
