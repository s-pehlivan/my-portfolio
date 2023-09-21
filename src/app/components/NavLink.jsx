import React from "react";
import Link from "next/link";

const NavLink = ({ path, title, isActive }) => {
  const activeStyle = "border-b-2 rounded-sm border-[#DB8D76]";

  return (
    <Link className={`pb-1 hover:text-slate-400 text-lg`} href={path}>
      {title}
    </Link>
  );
};

export default NavLink;
