import React from "react";

const BlackContainer = ({ children }) => {
  return (
    <div className="h-full flex flex-col justify-center items-center mb-24 sm:mb-24 mt-48 bg-black bg-opacity-60 rounded-lg p-10">
      {children}
    </div>
  );
};

export default BlackContainer;
