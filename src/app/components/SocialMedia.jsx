import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="socials mt-7">
      <ul className="flex gap-4 text-2xl text-[#0669AD]">
        <li className="border-2 border-[#0669AD] hover:border-[#5eb7f2] hover:text-[#5eb7f2] p-2 rounded-full">
          <Link href="/about">
            <FaGithub />
          </Link>
        </li>
        <li className="border-2 border-[#0669AD] hover:border-[#5eb7f2] hover:text-[#5eb7f2] p-2 rounded-full">
          <Link href="/about">
            <FaLinkedinIn />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
