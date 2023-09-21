import React from "react";
import NavLink from "./NavLink";

const linksList = [
  {
    title: "About Me",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const NavLinks = () => {
  return (
    <nav className="nav-links">
      <ul className="flex gap-5">
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
