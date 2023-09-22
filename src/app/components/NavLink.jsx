import React from "react";
import Link from "next/link";

const NavLink = ({ path, title }) => {
  return (
    <Link
      className={`pb-1 hover:text-slate-300 text-lg border-b-2 border-[#DB8D76] hover:border-[#0669ad]`}
      href={path}
    >
      {title}
    </Link>
  );
};

export default NavLink;
