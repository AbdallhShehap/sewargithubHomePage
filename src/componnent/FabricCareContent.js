import React from "react";
import FabricCareSlider from "../componnent/FabricCareSlider";

export default function FabricCareContent() {
  return (
    <div>
      <div
        className="sliderOurPartners"
        style={{
          display: "flex",
          justifyContent: "center",
          height: "80vh",
          marginTop: "10rem",
        }}
      >
        <div style={{ width: "80%" }}>
          <FabricCareSlider />
        </div>
      </div>
    </div>
  );
}
