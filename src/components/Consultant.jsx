import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import doctorsData from "../exportData";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const Consultant = () => {
  const [countryName, setCountryName] = useState("");
  const [countryProperties, setCountryProperties] = useState("");

  const handleCountryClick = (geographyData) => {
    try {
      const COUNTRY_NAME = geographyData.properties.name;
      const COUNTRY_PROPERTIES = geographyData;
      setCountryName(COUNTRY_NAME);
      setCountryProperties(COUNTRY_PROPERTIES);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(countryProperties, countryName);

  return (
    <>
      <header>header</header>
      <ComposableMap
        className="consultant_map"
        width={800}
        height={400}
        projectionConfig={{ scale: 150 }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                onClick={() => handleCountryClick(geo)}
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#1a81e1",
                    outline: "none",
                    cursor: "pointer",
                  },
                  pressed: {
                    fill: "#1471c9",
                    outline: "none",
                  },
                }}
                stroke="#FFF"
                strokeWidth={1}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default Consultant;
