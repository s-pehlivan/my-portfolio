import React from "react";
import Link from "next/link";
import { FaCode, FaEye } from "react-icons/fa";

const ProjectCard = ({ title, description, img, gitLink, demoLink }) => {
  return (
    <div className="card flex flex-col gap-2 items-start justify-center p-3 my-2">
      <div className="bg-[url('/images/about-bg.jpeg')] relative h-60 w-full group rounded-xl">
        <div className="absolute top-0 left-0 w-full h-full bg-[#131313] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center gap-5">
          <Link
            href={gitLink}
            className="border relative text-3xl rounded-full p-2 border-slate-300 text-slate-300 hover:text-white hover:border-white"
          >
            <FaCode />
          </Link>
          {demoLink !== "" && (
            <Link
              href="/projects"
              className="border relative text-3xl rounded-full p-2 border-slate-300 text-slate-300 hover:text-white hover:border-white"
            >
              <FaEye />
            </Link>
          )}
        </div>
      </div>
      <div className="content p-2">
        <h2 className="text-2xl">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
