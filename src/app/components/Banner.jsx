import React from "react";
import NavLinks from "./NavLinks";
import SocialMedia from "./SocialMedia";

const Banner = () => {
  return (
    <div className="banner min-h-screen flex justify-center items-center">
      <div className="flex min-h-screen items-center justify-center md:text-start text-center">
        <div className="flex flex-col items-center md:items-start">
          <h1 className=" text-5xl md:text-6xl font-bold mb-5">
            Sevde Pehlivan
          </h1>
          <h2 className="text-lg md:text-xl text-[#DB8D76] font-bold">
            Front-End Developer | iOS Application Developer
          </h2>
          <p className="text-lg md:text-xl">
            An aspiring engineer with a passion for coding.
          </p>
          <div className="flex flex-col items-center gap-3 md:flex-row mt-10 text-lg md:text-xl">
            <NavLinks />
          </div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Banner;
