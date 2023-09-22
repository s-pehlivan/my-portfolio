"use client";
import { useState } from "react";
import React from "react";

import NavLinks from "./NavLinks";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="navbar fixed top-0 left-0 right-0 backdrop-blur-xl bg-black bg-opacity-60 md:bg-opacity-10 shadow-xl shadow-[#0669AD]/100 transition-all delay-100 text-white">
      <nav>
        <div className="flex flex-col px-8 sm:px-14 md:px-18 py-2">
          <div className="flex justify-between items-center py-5">
            <p className="pb-1text-2xl sm:text-3xl md:text-3xl">
              Sevde Pehlivan
            </p>
            <div className="mobile-menu block md:hidden pb-1">
              {navbarOpen ? (
                <button
                  onClick={() => setNavbarOpen((s) => !s)}
                  className="text-xl border-2 p-1 rounded-md hover:text-slate-400 hover:border-slate-400"
                >
                  <FaTimes />
                </button>
              ) : (
                <button
                  onClick={() => setNavbarOpen((s) => !s)}
                  className="text-xl border-2 p-1 rounded-md hover:text-slate-400 hover:border-slate-400"
                >
                  <FaBars />
                </button>
              )}
            </div>
            <div className="menu hidden md:block">
              <NavLinks />
            </div>
          </div>
          {navbarOpen && (
            <NavLinks mobileStyle={"flex-col py-4 items-center"} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
