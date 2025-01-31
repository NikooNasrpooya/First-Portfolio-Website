import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png"
import git from "../assets/git.png"
import visualstudio from "../assets/visualstudio.png"
import python from "../assets/python.png"
import nodejs from "../assets/node.png"

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
    },
    {
      id: 9,
      src: bootstrap,
      title: "Bootstrap",
    },
    {
      id: 10,
      src: git,
      title: "Git",
    },
    {
      id: 11,
      src: visualstudio,
      title: "Visual Studio",
    },
    {
      id: 12,
      src: python,
      title: "Python",
    },
    {
      id: 13,
      src: nodejs,
      title: "Node Js",
    },
  ];

  return (
    <div
      name="Skills"
      className=" w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-6 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className="hover:scale-125 duration-500 py-2 rounded-lg"
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
