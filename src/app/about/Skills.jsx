import React from "react";
import Skill from "./Skill";

const programming = [
  "JavaScript",
  "HTML",
  "CSS",
  "ReactJS",
  "NextJs",
  "TypeScript",
  "Swift",
  "SwiftUI",
  "UIKit",
];
const languages = [
  "English - Fluent",
  "Japanese - Conversational",
  "Korean - Conversational",
];

const Skills = () => {
  return (
    <div>
      <div className="header flex items-center gap-1">
        <div className="w-6 h-0.5 rounded bg-[#DB8D76]"></div>
        <h3 className="text-lg font-bold">Skills</h3>
        <div className="w-6 h-0.5 rounded bg-[#DB8D76]"></div>
      </div>
      <div className="mt-2">
        <h3 className="text-2xl border-b-2 border-[#0669AD] pb-1">
          Programming
        </h3>
        <div className="grid grid-cols-4">
          {programming.map((skill) => (
            <Skill key={skill} title={skill} />
          ))}
        </div>
      </div>
      <div className="mt-2">
        <h3 className="text-2xl border-b-2 border-[#0669AD] pb-1">Languages</h3>
        <div className="grid grid-cols-2">
          {languages.map((skill) => (
            <Skill key={skill} title={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
