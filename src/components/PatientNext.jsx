import React from "react";
import { BsGenderFemale } from "react-icons/bs";
import { PiGenderMale } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const PatientNext = () => {
  const navigate = useNavigate();

  return (
    <section className="patient_next">
      <div className="container">
        <div onClick={() => navigate("/symptoms")}>
          <h1>What is your sex?</h1>
          <div>
            <div>
              <PiGenderMale />
              <span>Male</span>
            </div>
            <div>
              <BsGenderFemale />
              <span>Female</span>
            </div>
          </div>
          <span style={{ color: "#1471c9" }}>
            Report an issue with this question?
          </span>
        </div>
      </div>
    </section>
  );
};

export default PatientNext;
