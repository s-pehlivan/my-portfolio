"use client";
import NavLink from "./NavLink";

const linksList = [
  {
    title: "Home",
    path: "/",
  },
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

const NavLinks = ({ mobileStyle }) => {
  return (
    <div className="nav-links">
      <ul className={`flex flex-row gap-5 ${mobileStyle}`}>
        {linksList.map((link) => (
          <li key={link.title}>
            <NavLink path={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
