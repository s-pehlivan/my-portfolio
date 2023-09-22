import React from "react";
import Link from "next/link";
import { FaCode, FaEye } from "react-icons/fa";

const ProjectCard = ({ title, description, img, gitLink, demoLink }) => {
  return (
    <div className="flex flex-col items-center sm:items-start text-center sm:text-start">
      <div
        className="h-40 sm:h-60 w-60 sm:w-full group rounded-xl relative group"
        style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      >
        <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-[#131313] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center gap-5">
          <Link
            href={gitLink}
            className="border cursor-pointer relative text-3xl rounded-full p-2 border-slate-300 text-slate-300 hover:text-white hover:border-white"
          >
            <FaCode />
          </Link>
          {demoLink !== "" && (
            <Link
              href={demoLink}
              className="border cursor-pointer relative text-3xl rounded-full p-2 border-slate-300 text-slate-300 hover:text-white hover:border-white"
            >
              <FaEye />
            </Link>
          )}
        </div>
      </div>
      <div className="content p-2 px-3">
        <h2 className="text-xl md:text-2xl mb-2">{title}</h2>
        <p className="break-words">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
