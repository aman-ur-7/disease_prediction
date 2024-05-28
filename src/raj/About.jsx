import React from "react";
import "./about.css";
import book from "../assets/logo.jpg";

function About() {
  return (
    <div className="about-us">
      <div className="about-us-header">
        <img src={book} alt="Book" />
      </div>

      <div className="maintext">
        <div className="text1">
          <p className="p1">Revolutionizing</p>
          <p className="p2"> healthcare with</p>
          <p className="p3">Technology</p>
        </div>

        <div className="text">
          <p>
            Get personalized healthcare solution with our advance
            <br />
            diseases prediction system
          </p>

          <div className="button-container">
            <button className="button">Learn more</button>
            <button className="button">Contact us</button>
          </div>
        </div>
      </div>

      <div className="about-us-content">
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </div>
    </div>
  );
}

export default About;
