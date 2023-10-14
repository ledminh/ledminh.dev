"use client";

import Link from "next/link";
import { Project } from "@/types";
import { useState } from "react";
import AddProject from "./AddProject";
import ProjectCategoryModal from "@/components/modals/Modal.Project.Category";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";

type Props = {
  initProjects: Project[];
};

export default function ProjectPanel({ initProjects }: Props) {
  const [projects, setProjects] = useState(initProjects);

  const onAdd = (newProject: Project) => {
    // const newProjects = [...projects, newProject];
    // newProjects.sort((a, b) => a.order - b.order);
    // setCategories(newCategories);
  };

  const onEdit = (editedProject: Project) => {
    // const newCategories = categories.map((category) => {
    //   if (category.id === editedCategory.id) {
    //     return editedCategory;
    //   }
    //   return category;
    // });
    // newCategories.sort((a, b) => a.order - b.order);
    // setCategories(newCategories);
  };

  const onDelete = (deletedCategory: Project) => {
    // const newCategories = categories.filter(
    //   (category) => category.id !== deletedCategory.id
    // );
    // newCategories.sort((a, b) => a.order - b.order);
    // setCategories(newCategories);
  };

  return (
    <div>
      <h1>Project Panel</h1>
      {/* <AddProject onAdd={onAdd} /> */}
      <ul className="flex gap-2">
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <div className="border border-black block p-2 hover:bg-gray-300">
                <p>{project.title}</p>
                <p>{project.description}</p>
                <p>{project.order}</p>
                {/* <div className="flex gap-2">
                  <EditCategory onEdit={onEdit} category={category} />
                  <DeleteCategory onDelete={onDelete} category={category} />
                </div> */}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
