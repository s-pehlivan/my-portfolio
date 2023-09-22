import React from "react";
import Skill from "./Skill";
import LineTitle from "../components/LineTitle";

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
      <LineTitle textSize="text-xl">Skills</LineTitle>
      <div className="mt-3 mb-5">
        <h3 className="text-2xl border-b-2 border-[#0669AD] pb-1 mb-3">
          Programming
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {programming.map((skill) => (
            <Skill key={skill} title={skill} />
          ))}
        </div>
      </div>
      <div className="mt-2">
        <h3 className="text-2xl border-b-2 border-[#0669AD] pb-1 mb-3">
          Languages
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {languages.map((skill) => (
            <Skill key={skill} title={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
