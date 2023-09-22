import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="intro flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="content flex flex-col gap-8 text-center md:text-start">
        <div>
          <h2 className="text-2xl text-[#DB8D76] font-bold mb-2">
            Front-End Development
          </h2>
          <p>
            I have started learning Front-End Development a year ago and
            currently I am working as a mentor assistant in OJS Bootcamp and
            currently looking for different job opportunities and new
            challenges.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-[#DB8D76] font-bold mb-2">
            iOS Development
          </h2>
          <p>
            I have started learning iOS Application development two years ago
            and have build different applications and earned experience. I am
            passionate about iOS Develeopment and currently working on different
            iOS projects.
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
