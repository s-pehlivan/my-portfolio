import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const style = isSelected ? "border-[#DB8D76]" : "border-slate-800";

  return (
    <button
      className={`${style} border rounded-full text-xl py-3 px-12 cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
