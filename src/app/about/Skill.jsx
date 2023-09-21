import React from "react";

const Skill = ({ title }) => {
  return (
    <div className="capitalize my-3 flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-[#DB8D76]"></div>
      {title}
    </div>
  );
};

export default Skill;
