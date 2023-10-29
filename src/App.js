import React from "react";
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OurStory from "./pages/OurStory";
import OurFamily from "./pages/OurFamily";
import OurPartners from "./pages/OurPartners";
import OurCategories from "./pages/OurCategories";
import FabricCare from "./pages/FabricCare";
import OurBlog from "./pages/OurBlog";
import Contacts from "./pages/Contacts";
import HelpCenter from "./pages/HelpCenter";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/ourfamily" element={<OurFamily />} />
          <Route path="/ourpartners" element={<OurPartners />} />
          <Route path="/ourcategories" element={<OurCategories />} />
          <Route path="/categoryfabriccare" element={<FabricCare />} />
          <Route path="/ourblog" element={<OurBlog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



{/* <Routes> */}
{/* <Route path='/' element={<Layouts />} > */}
    {/* <Route/> */}
      {/* <Route path="productdetails" element={<ProductDetails />} /> */}
      {/* <Route path="home" element={<Home />} /> */}
      {/* <Route path="mac" element={<IMac />} /> */}
      {/* <Route path="macmini" element={<MacMini/>} /> */}
      {/* <Route path="ipadpro" element={<IPadPro />} /> */}
      // <Route path="ipad" element={<IPad />} />
    
// </Route>
      // <Route path="registration" element={<Registration />} />
      // <Route path="login" element={<Login />} />
// </Routes>