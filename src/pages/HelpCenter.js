

import React from "react";
import MenuPages from "../componnent/MenuPages";
import HelpCenterContent from "../componnent/HelpCenterContent";
import Footer from '../componnent/Footer'

export default function HelpCenter() {
    const OUR = 'HELP CENTER'
    const PATH = "FAQs"
    
  return (
    <div>
      <div>
      <MenuPages our={OUR} path={PATH}/>
      </div>

      {/* Contant of help center */}
        <div>
        <HelpCenterContent/>
        </div>

        {/* footer */}
        <div>
        <Footer/>
      </div>
    </div>
  );
}
