import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center p-5">
      <Link href="/" className="pb-1 hover:text-slate-400 text-lg` text-3xl">
        Sevde Pehlivan
      </Link>
      <NavLinks />
    </div>
  );
};

export default Navbar;
