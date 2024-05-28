import React from "react";
import "./pages.css";
import Image4 from "../assets/image4.jpg";
import Image7 from "../assets/image7.jpg";
import Image3 from "../assets/image3.jpg";

function Pages() {
  return (
    <div>
      <div className="page">
        <div>
          <p className="description">Gallery</p>

          <span>Explore images from our health care facilities</span>
        </div>
      </div>
      <div className="image-grid">
        <img src={Image4} alt="Logo 1" className="image" />
        <img src={Image7} alt="Logo 2" className="image" />
        <img src={Image3} alt="Logo 3" className="image" />
      </div>
    </div>
  );
}

export default Pages;
