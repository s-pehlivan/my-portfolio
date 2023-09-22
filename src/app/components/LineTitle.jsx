import React from "react";

const LineTitle = ({ textSize, children }) => {
  return (
    <div
      className={`${textSize || "text-xl"} header flex items-center gap-1 mb-3`}
    >
      <div className="w-6 h-0.5 rounded bg-[#DB8D76]"></div>
      <h3 className="font-bold">{children}</h3>
      <div className="w-6 h-0.5 rounded bg-[#DB8D76]"></div>
    </div>
  );
};

export default LineTitle;
