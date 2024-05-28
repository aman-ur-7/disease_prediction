import React from "react";
import "./Disease.css";

import image1 from "../assets/image1.jpg";
import image7 from "../assets/image7.jpg";

function Diseases() {
  return (
    <div className="row">
      <div className="image_wrapper">
        <img src={image1} alt={"name"} className={"img"} />
      </div>
      <div className="contetnt_wrapper">
        <div className="content">
          <p className="fst">Stay ahead of potential health issues</p>
          <p className="sec">Disease prediction system</p>
          <p className="trd">
            Our advanced algorithms analyzer your health data to predicted
            potential diseases alowing for early eantervation and prevantion.
          </p>
        </div>
      </div>

      <div className="contetnt_wrapper">
        <div className="content">
          <p className="fst">Stay ahead of potential health issues</p>
          <p className="sec">Disease prediction system</p>
          <p className="trd">
            Our advanced algorithms analyzer your health data to predicted
            potential diseases alowing for early eantervation and prevantion.
          </p>
        </div>
      </div>

      <div className="image_wrapper">
        <img src={image7} alt={"name"} className={"img"} />
      </div>

      <div className="image_wrapper">
        <img src={image1} alt={"name"} className={"img"} />
      </div>
      <div className="contetnt_wrapper">
        <div className="content">
          <p className="fst">Stay ahead of potential health issues</p>
          <p className="sec">Disease prediction system</p>
          <p className="trd">
            Our advanced algorithms analyzer your health data to predicted
            potential diseases alowing for early eantervation and prevantion.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Diseases;
