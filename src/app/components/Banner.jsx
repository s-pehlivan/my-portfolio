import React from "react";
import NavLinks from "./NavLinks";
import SocialMedia from "./SocialMedia";

const Banner = () => {
  return (
    <div className="banner h-screen flex justify-center items-center">
      <div className="container grid grid-cols-6">
        <div className="col-span-4 col-start-2 col-end-6">
          <h1 className="text-6xl font-bold mb-5">Sevde Pehlivan</h1>
          <h2 className="text-xl text-[#DB8D76] font-bold">
            Full Stack Developer | iOS Application Developer
          </h2>
          <p className="text-xl">
            An aspiring engineer with a passion for coding.
          </p>
          <div className="links mt-10 text-xl">
            <NavLinks />
          </div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Banner;
