import React from "react";
import "./about1.css";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";

function About1() {
  return (
    <div className="about1">
      <div className="main">
        <p className="para">
          Trusted by the world &apos;s best companies social proof to build
          <br /> Credibility
        </p>
      </div>

      <div className="logo-grid">
        <img src={logo2} alt="Logo 1" className="logo" />
        <img src={logo3} alt="Logo 2" className="logo" />
        <img src={logo4} alt="Logo 3" className="logo" />
        <img src={logo5} alt="Logo 4" className="logo" />
      </div>
    </div>
  );
}

export default About1;
