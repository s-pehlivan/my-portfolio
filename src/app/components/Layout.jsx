import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen backdrop-brightness-75">
      <div className="container mx-auto p-5">{children}</div>
    </div>
  );
};

export default Layout;
