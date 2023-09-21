import React from "react";
import Intro from "./Intro";
import Skills from "./Skills";

const AboutContainer = () => {
  return (
    <div className="bg-black bg-opacity-60 rounded-lg p-5">
      <div className="flex flex-col gap-14">
        <Intro />
        <Skills />
      </div>
    </div>
  );
};

export default AboutContainer;
