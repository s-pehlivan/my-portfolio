"use client";
import React from "react";
import { useState } from "react";

import ProjectCard from "./ProjectCard";
import LineTitle from "../components/LineTitle";
import ProjectTag from "./ProjectTag";

const prjList = [
  {
    title: "Travel",
    description: "A web application for a travel list.",
    image: "/images/app-imgs/travel.jpg",
    tag: ["All", "Web"],
    demoLink: "https://travel-list-bay.vercel.app/",
    gitLink: "/projects",
  },
  {
    title: "Eat N' Split",
    description: "A web application for splitting the bills.",
    image: "/images/app-imgs/eat-split.jpg",
    tag: ["All", "Web"],
    demoLink: "https://eat-n-split-blush.vercel.app/",
    gitLink: "/projects",
  },
  {
    title: "usePopcorn",
    description:
      "A web application to view and rate movies, and add them to watched-list. ",
    image: "/images/app-imgs/usePopcorn.jpg",
    tag: ["All", "Web"],
    demoLink: "",
    gitLink: "/",
  },
  {
    title: "Tip For Meal",
    description: "A tip calculator application for iOS. ",
    image: "/images/app-imgs/phone-1.jpeg",
    tag: ["All", "iOS"],
    demoLink: "",
    gitLink: "https://github.com/s-pehlivan/TipForMeal",
  },
  {
    title: "ByteCoin",
    description:
      "ByteCoin app provides the latest Bitcoin prices for the chosen currency.",
    image: "/images/app-imgs/phone-2.jpeg",
    tag: ["All", "iOS"],
    demoLink: "",
    gitLink: "https://github.com/s-pehlivan/ByteCoin",
  },
  {
    title: "Daily Records",
    description: "A simple diary application.",
    image: "/images/app-imgs/daily.jpg",
    tag: ["All", "iOS"],
    demoLink: "",
    gitLink: "https://github.com/s-pehlivan/DailyRecords",
  },
  {
    title: "My Notes",
    description: "A simple note-taking application.",
    image: "/images/app-imgs/my-notes.jpg",
    tag: ["All", "iOS"],
    demoLink: "",
    gitLink: "https://github.com/s-pehlivan/MyNotes",
  },
  {
    title: "Learn Kanji",
    description: "Kanji Dictionary App",
    image: "/images/app-imgs/learn-kanji.jpg",
    tag: ["All", "iOS"],
    demoLink: "",
    gitLink: "https://github.com/s-pehlivan/LearnKanji",
  },
  {
    title: "To Do",
    description: "This is a simple to-do list application.",
    image: "/images/app-imgs/to-do.jpg",
    tag: ["All", "iOS"],
    demoLink: "",
    gitLink: "https://github.com/s-pehlivan/To-Do",
  },
];

const ProjectList = () => {
  const [selected, setSelected] = useState("All");

  const handleSelection = (newTag) => {
    setSelected(newTag);
  };

  return (
    <div className="p-10">
      <LineTitle textSize="text-xl sm:text-2xl text-3xl">Projects</LineTitle>
      <div className="buttons flex justify-center gap-2 sm:gap-3 text-md sm:text-lg my-5">
        <ProjectTag
          name="All"
          onClick={handleSelection}
          isSelected={selected === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleSelection}
          isSelected={selected === "Web"}
        />
        <ProjectTag
          name="iOS"
          onClick={handleSelection}
          isSelected={selected === "iOS"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-baseline">
        {prjList
          .filter((project) => project.tag.includes(selected))
          .map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              img={project.image}
              gitLink={project.gitLink}
              demoLink={project.demoLink}
            />
          ))}
      </div>
    </div>
  );
};

export default ProjectList;
