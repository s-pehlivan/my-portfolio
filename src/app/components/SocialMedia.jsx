import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="socials">
      <ul className="flex gap-4 text-2xl text-[#DB8D76]">
        <li className="border-2 border-[#0669AD] hover:border-[#5eb7f2] hover:text-[#ffc19f] p-2 rounded-full">
          <Link href="https://github.com/s-pehlivan">
            <FaGithub />
          </Link>
        </li>
        <li className="border-2 border-[#0669AD] hover:border-[#5eb7f2] hover:text-[#ffc19f] p-2 rounded-full">
          <Link href="https://www.linkedin.com/in/f-sevde-pehlivan-77f/">
            <FaLinkedinIn />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
