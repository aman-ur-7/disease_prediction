// src/BodyHighlighter.js
import React, { useState } from "react";
import styled from "styled-components";

const imageURL =
  "https://www.clipartmax.com/png/full/34-343438_body-outline-person-silhouette.png";

const BodyPart = styled.div`
  position: absolute;
  cursor: pointer;
  ${({ highlighted }) => highlighted && `background: rgba(255, 255, 0, 0.5);`}
`;

const parts = [
  { name: "head", top: "10%", left: "45%", width: "10%", height: "10%" },
  { name: "chest", top: "30%", left: "40%", width: "20%", height: "20%" },
  { name: "left-arm", top: "30%", left: "25%", width: "15%", height: "30%" },
  { name: "right-arm", top: "30%", left: "60%", width: "15%", height: "30%" },
  { name: "left-leg", top: "60%", left: "40%", width: "10%", height: "30%" },
  { name: "right-leg", top: "60%", left: "50%", width: "10%", height: "30%" },
];

const BodyHighlighter = () => {
  const [highlightedPart, setHighlightedPart] = useState(null);

  const handleClick = (partName) => {
    setHighlightedPart(partName);
    // You can handle more logic here, like displaying symptoms related to the selected part
  };

  return (
    <div style={{ position: "relative", width: "300px", margin: "0 auto" }}>
      <img src={imageURL} alt="body" style={{ width: "100%" }} />
      {parts.map((part) => (
        <BodyPart
          key={part.name}
          highlighted={highlightedPart === part.name}
          style={{
            top: part.top,
            left: part.left,
            width: part.width,
            height: part.height,
          }}
          onClick={() => handleClick(part.name)}
        />
      ))}
    </div>
  );
};

export default BodyHighlighter;
