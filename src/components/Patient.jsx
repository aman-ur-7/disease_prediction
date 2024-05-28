import React from "react";
import { IoManOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Patient = () => {
  const navigate = useNavigate();

  return (
    <div className="patient">
      <div className="container">
        <div className="patient-program">
          <h1>Who is the checkup for?</h1>
          <div onClick={() => navigate("/patientnext")}>
            <section>
              <IoManOutline />
              <span>Myself</span>
              <span>I &apos;m 18 or older</span>
            </section>
            <section>
              <FaPeopleGroup />
              <span>Someone else </span>
              <span>child or adult</span>
            </section>
          </div>
          <p style={{ color: "#1471c9" }}>
            Report an issue with this question?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Patient;
