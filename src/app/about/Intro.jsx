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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            saepe esse autem nostrum! Minus tempore alias sapiente cum laborum
            cumque ex necessitatibus quod doloribus optio sunt, facere ut
            voluptatem dicta culpa unde ipsa soluta praesentium quidem sit odio
            nesciunt obcaecati dolor. Rem tempora magni amet exercitationem
            minima quidem rerum soluta.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-[#DB8D76] font-bold mb-2">
            iOS Development
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error non,
            atque porro, nemo tempore quos libero nobis doloribus eum unde
            tenetur sit. Nostrum sunt porro dolores vero sint quia debitis
            asperiores dicta ex? Vel assumenda rem, cumque quisquam corporis
            necessitatibus! Eligendi aliquam dignissimos deserunt omnis suscipit
            illum, cum hic! Molestias?
          </p>
        </div>
      </div>
      <div className="image hidden md:block">
        <Image
          className=" brightness-75 rounded-full shadow-2xl shadow-[#DB8D76]/100 mt-5 "
          src="/images/avatar.png"
          alt="avatar"
          width={1500}
          height={1500}
        />
      </div>
    </section>
  );
};

export default Intro;
