"use client";

import { ProjectCategoryWithProjects } from "@/types";

import ProjectCard from "@/components/projects/ProjectCard";

import { useState } from "react";

export default function CategoryCard({
  category,
}: {
  category: ProjectCategoryWithProjects;
}) {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <Wrapper
      key={category.id}
      title={category.title}
      description={category.description}
    >
      {category.projects.length > 0 ? (
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={() => setShowProjects(!showProjects)}
        >
          <span>{showProjects ? "Hide" : "Show"} Projects</span>
          <svg
            className={`w-4 h-4 ml-2 transition-transform transform ${
              showProjects ? "-rotate-180" : ""
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M6.293 6.707a1 1 0 010 1.414L3.414 11H17a1 1 0 110 2H3.414l2.879 2.879a1 1 0 11-1.414 1.414l-4.95-4.95a1 1 0 010-1.414l4.95-4.95a1 1 0 011.414 0z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      ) : (
        <p className="text-gray-500">No projects to show</p>
      )}

      {showProjects &&
        category.projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            github={project.github}
            demo={project.demo}
          />
        ))}
    </Wrapper>
  );
}

/********************
 * Components
 */

const Wrapper = (props: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => (
  <li className="bg-gray-100 p-4 shadow-md shadow-black flex flex-col gap-3 rounded-lg">
    <h2 className="font-bold text-2xl">{props.title}</h2>
    <p>{props.description}</p>
    <ul className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {props.children}
    </ul>
  </li>
);
