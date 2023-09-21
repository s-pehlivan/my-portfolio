import React from "react";
import NavLink from "./NavLink";

const linksList = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact Me",
    path: "/contact",
  },
];

const NavLinks = () => {
  return (
    <nav className="nav-links">
      <ul className="flex gap-4">
        {linksList.map((link) => (
          <li key={link.title}>
            <NavLink path={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
