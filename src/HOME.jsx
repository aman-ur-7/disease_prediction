import React from "react";
import Header from "./components/Header";
import About from "./raj/About";
import About1 from "./raj/About1";
import Pages from "./raj/Pages";
import Diseases from "./raj/Disease";
import Context from "./raj/Context";

const HOME = () => {
  return (
    <>
      <Header />
      <About />
      <About1 />
      <Pages />
      <Diseases />
      <Context />
    </>
  );
};

export default HOME;
