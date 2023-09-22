import React from "react";

const BlackContainer = ({ children }) => {
  return (
    <div className="h-full flex flex-col justify-center items-center mb-10 mt-24">
      <div className="bg-black bg-opacity-60 rounded-lg p-5 my-8">
        <div className="flex flex-col gap-14">{children}</div>
      </div>
    </div>
  );
};

export default BlackContainer;
