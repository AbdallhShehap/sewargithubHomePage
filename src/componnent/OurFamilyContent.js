import React from "react";
import img1 from "../images/persone1.png";
import img2 from "../images/persone2.png";
import img3 from "../images/persone2.png";
import img4 from "../images/persone1.png";
import "../assiste/ourfamilycontent.css";

export default function OurFamilyContent() {
  return (
    <div className="OurFamilyContent">
      <div className="titleourfamily">
        <h1> OUR FAMILY</h1>
      </div>

      <div>
        <div className="GulleryOurFamily">
          <div className="ourfamilyimg1">
            <img className="" src={img1} />
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  color: "#911E1A",
                  fontSize: "2rem",
                  fontWeight: "bolder",
                }}
              >
                {" "}
                Abd Alrahaman Otaibi
              </p>
              <p style={{ color: "black", fontSize: "2rem" }}>
                Marketing Officer
              </p>
            </div>
          </div>
          <div className="ourfamilyimg2">
            <img className="" src={img2} />
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  color: "#911E1A",
                  fontSize: "2rem",
                  fontWeight: "bolder",
                }}
              >
                {" "}
                Abd Alrahaman Otaibi
              </p>
              <p style={{ color: "black", fontSize: "2rem" }}>
                Marketing Officer
              </p>
            </div>
          </div>
          <div className="ourfamilyimg3">
            <img className="" src={img3} />
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  color: "#911E1A",
                  fontSize: "2rem",
                  fontWeight: "bolder",
                }}
              >
                {" "}
                Abd Alrahaman Otaibi
              </p>
              <p style={{ color: "black", fontSize: "2rem" }}>
                Marketing Officer
              </p>
            </div>
          </div>
          <div className="ourfamilyimg4">
            <img className="" src={img4} />
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  color: "#911E1A",
                  fontSize: "2rem",
                  fontWeight: "bolder",
                }}
              >
                {" "}
                Abd Alrahaman Otaibi
              </p>
              <p style={{ color: "black", fontSize: "2rem" }}>
                Marketing Officer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="QA-Message">
        <div className="title-QA" style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "4rem", color: "#911E1A", fontWeight: "700" }}>
            QA Message:
          </h1>
        </div>
        <div className="text-QA">
          <p style={{ fontSize: "1.8rem", color: "black" }}>
            At RKC’s Quality Control Department, we are dedicated to setting the
            highest standards, ensuring precision at every step, and delivering
            consistent product quality. Our unwavering commitment is to prevent
            defects and provide you with products that exceed your expectations.
            Your trust fuels our relentless pursuit of excellence, and together,
            we are building a future where quality knows no compromise.
          </p>
        </div>
        <div className="end-text-QA">
          <p
            style={{
              fontSize: "1.8rem",
              color: "#911E1A",
              fontWeight: "700",
            }}
          >
            Quality Beyond Measure.
          </p>
        </div>
      </div>

      <div className="JOIN-OUR-TALENTED-TEAM">
  <div className="circle-inside">
    <div className="centered-text">
      <p style={{ color: "white", fontSize: "1rem", textAlign: "center" }}>JOIN OUR</p>
      <p style={{ color: "white", fontSize: "2rem", textAlign: "center"  }}>TALENTED TEAM</p>
    </div>
  </div>
</div>

    </div>
  );
}
