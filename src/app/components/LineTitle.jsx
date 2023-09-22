import React from "react";

const LineTitle = ({ textSize, children }) => {
  return (
    <div className="flex flex-col items-center sm:items-start justify-center sm:justify-start">
      <div
        className={`${
          textSize || "text-xl"
        } header flex items-center gap-1 mb-6 md:mb-3`}
      >
        <div className="w-6 h-0.5 rounded bg-[#DB8D76]"></div>
        <h3 className="font-bold">{children}</h3>
        <div className="w-6 h-0.5 rounded bg-[#DB8D76]"></div>
      </div>
    </div>
  );
};

export default LineTitle;
