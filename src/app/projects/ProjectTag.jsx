import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const style = isSelected ? "bg-[#DB8D76]" : "bg-slate-800";

  return (
    <button
      className={`${style} rounded-xl text-xl py-1 px-6 cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
