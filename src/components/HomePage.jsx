import React from "react";

import About from "./About";
import Dev1 from "./Dev1";
import Devs from "./Devs";
import Service from "./Service";
import Showcase from "./Showcase";
import Wtf1 from "./Wtf1";
import Faq from "./Faq";
import Joinus from "./Joinus";
import Result from "./Result";

const HomePage = () => {
  return (
    <>
      <div className="h-12 sm:h-20 w-full my-[25px] md:my-[33px]"></div>
      <Showcase />
      <About />
      <Dev1 />
      <Devs />
      <Wtf1 />
      <Service />
      <Faq />
      <Joinus />
      <Result />
    </>
  );
};

export default HomePage;
