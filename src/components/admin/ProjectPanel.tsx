"use client";

import { Project } from "@/types";
import { useEffect, useState } from "react";
import AddProject from "./AddProject";
import EditProject from "./EditProject";
import DeleteProject from "./DeleteProject";
import Image from "next/image";

type Props = {
  initProjects: Project[];
  sortedBy: "auto" | "manual";
  categoryID: string;
};

export default function ProjectPanel({
  initProjects,
  sortedBy,
  categoryID,
}: Props) {
  const [projects, setProjects] = useState(initProjects);

  useEffect(() => {
    if (sortedBy === "manual") {
      const newProjects = [...projects];
      newProjects.sort((a, b) => (a.order as number) - (b.order as number));
      setProjects(newProjects);
    } else {
      const newProjects = [...projects];
      newProjects.sort((a, b) => a.title.localeCompare(b.title));
      setProjects(newProjects);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedBy, initProjects]);

  const onAdd = (newProject: Project) => {
    const newProjects = [...projects, newProject];

    if (sortedBy === "auto") {
      newProjects.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      newProjects.sort((a, b) => (a.order as number) - (b.order as number));
    }

    setProjects(newProjects);
  };

  const onEdit = (editedProject: Project) => {
    const newProjects = projects.map((project) => {
      if (project.id === editedProject.id) {
        return editedProject;
      }
      return project;
    });

    if (sortedBy === "manual") {
      newProjects.sort((a, b) => (a.order as number) - (b.order as number));
    } else {
      newProjects.sort((a, b) => a.title.localeCompare(b.title));
    }

    setProjects(newProjects);
  };

  const onDelete = (deletedProject: Project) => {
    const newProjects = projects.filter(
      (project) => project.id !== deletedProject.id
    );
    if (sortedBy === "manual") {
      newProjects.sort((a, b) => (a.order as number) - (b.order as number));
    } else {
      newProjects.sort((a, b) => a.title.localeCompare(b.title));
    }

    setProjects(newProjects);
  };

  return (
    <div>
      <h1>Project Panel</h1>
      <AddProject onAdd={onAdd} sortedBy={sortedBy} categoryID={categoryID} />
      <ul className="flex gap-2">
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <div className="border border-blue-900 block p-2 hover:bg-gray-300">
                <p>{project.title}</p>
                <p>{project.description}</p>
                <p>{project.order}</p>
                <p>{project.github}</p>
                <p>{project.demo}</p>
                <div className="relative w-10 h-10">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    className="object-fill"
                  />
                </div>
                <div className="flex gap-2">
                  <EditProject
                    onEdit={onEdit}
                    project={project}
                    sortedBy={sortedBy}
                    categoryID={categoryID}
                  />
                  <DeleteProject onDelete={onDelete} project={project} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
