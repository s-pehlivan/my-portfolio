import React from "react";
const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen max-w-screen backdrop-brightness-75 text-white">
      <div className="h-full container mx-auto p-5">{children}</div>
    </div>
  );
};

export default Layout;
