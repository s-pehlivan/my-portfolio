import React from "react";
import Link from "next/link";

const NavLink = ({ path, title }) => {
  return (
    <Link className={`pb-1 hover:text-slate-400 text-lg`} href={path}>
      {title}
    </Link>
  );
};

export default NavLink;
