import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="intro flex flex-col md:flex-row justify-between items-center gap-8 mb-10 lg:mb-6">
      <div className="content flex flex-col gap-8 text-center md:text-start">
        <div>
          <h2 className="text-2xl text-[#DB8D76] font-bold mb-2">
            Front-End Development
          </h2>
          <p>
            I started learning Front-End Development a year ago, and I am
            currently working as a mentor assistant in OJS Bootcamp. I am always
            waiting for different job opportunities and new challenges.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-[#DB8D76] font-bold mb-2">
            iOS Development
          </h2>
          <p>
            I started learning iOS Application development two years ago and,
            during that time, built different applications and earned
            experience. I am passionate about iOS development and currently
            working on different iOS projects.
          </p>
        </div>
      </div>
      <div className="image hidden md:block">
        <Image
          className=" brightness-75 rounded-full shadow-2xl shadow-[#DB8D76]/100 mt-5 "
          src="/images/avatar.png"
          alt="avatar"
          width={900}
          height={900}
        />
      </div>
    </section>
  );
};

export default Intro;
