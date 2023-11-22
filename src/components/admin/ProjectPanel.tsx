"use client";

import Link from "next/link";
import { Project } from "@/types";
import { useEffect, useState } from "react";
import AddProject from "./AddProject";
import EditProject from "./EditProject";
import DeleteProject from "./DeleteProject";
import Image from "next/image";
import sortProjects from "@/utils/sortProjects";
import getProjectCategory from "@/api-calls/getProjectCategory";
import updateProjectsOrder from "@/api-calls/updateProjectsOrder";

import { CardBody, CardHeader, CardFooter, CardWrapper } from "./Card";

import {
  useChangeOrder,
  ChangeOrderButtons,
  OrderInput,
} from "@/components/ChangeOrder";

type Props = {
  categoryID: string;
};

export default function ProjectPanel({ categoryID }: Props) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [sortedBy, setSortedBy] = useState<"auto" | "manual">("manual");
  const [categoryTitle, setCategoryTitle] = useState<string>("");

  const {
    orders,
    setOrders,
    isChangeOrderOpen,
    setIsChangeOrderOpen,
    onSubmitOrder,
    onOrderChange,
    onCancelChangeOrder,
  } = useChangeOrder({
    items: projects,
    setItems: setProjects,
    updateOrder: updateProjectsOrder,
  });

  useEffect(() => {
    getProjectCategory({ id: categoryID, withProjects: true }).then(
      (category) => {
        setCategoryTitle(category.title);
        setSortedBy(category.sortedBy);

        const newProjectsSorted = sortProjects(
          category.projects,
          category.sortedBy
        );

        setProjects(newProjectsSorted);

        setOrders(
          newProjectsSorted.map((project) => ({
            order: project.order,
            id: project.id,
          }))
        );
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryID]);

  const onAdd = (newProject: Project) => {
    const newProjects = sortProjects([...projects, newProject], sortedBy);

    setProjects(newProjects);

    setOrders(
      newProjects.map((project) => ({
        order: project.order,
        id: project.id,
      }))
    );
  };

  const onEdit = (editedProject: Project) => {
    const newProjects = projects.map((project) => {
      if (project.id === editedProject.id) {
        return editedProject;
      }
      return project;
    });

    const newProjectsSorted = sortProjects(newProjects, sortedBy);

    setProjects(newProjectsSorted);

    setOrders(
      newProjectsSorted.map((project) => ({
        order: project.order,
        id: project.id,
      }))
    );
  };

  const onDelete = (deletedProject: Project) => {
    const newProjects = projects.filter(
      (project) => project.id !== deletedProject.id
    );

    const newProjectsSorted = sortProjects(newProjects, sortedBy);

    setProjects(newProjectsSorted);

    setOrders(
      newProjectsSorted.map((project) => ({
        order: project.order,
        id: project.id,
      }))
    );
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <h2 className="bg-blue-100 p-3 font-semibold text-lg flex items-center gap-1 sm:col-span-2">
        <Link
          href="/admin/projects"
          className="bg-blue-200/60 hover:bg-blue-200 rounded-full flex justify-center items-center w-8 h-8 group"
        >
          <span className="group-hover:-translate-x-1 transition">{"<-"}</span>
        </Link>
        <span>Category: {categoryTitle}</span>
      </h2>
      <p className="sm:col-span-2 font-mono font-semibold">
        SORTING MODE: {sortedBy}
      </p>

      <AddProject onAdd={onAdd} sortedBy={sortedBy} categoryID={categoryID} />

      {sortedBy === "manual" && (
        <ChangeOrderButtons
          setIsOpened={setIsChangeOrderOpen}
          isOpened={isChangeOrderOpen}
          onSubmit={onSubmitOrder}
          onCancel={onCancelChangeOrder}
        />
      )}

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:col-span-2">
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <CardWrapper type="div">
                <CardHeader>
                  <h2 className="font-semibold text-lg">{project.title}</h2>
                  {sortedBy === "manual" && (
                    <p className="text-blue-900 font-semibold">
                      {isChangeOrderOpen ? (
                        <OrderInput
                          order={orders}
                          itemID={project.id}
                          onOrderChange={onOrderChange}
                        />
                      ) : (
                        <span>Order: {project.order}</span>
                      )}
                    </p>
                  )}
                </CardHeader>
                <CardBody>
                  <p className="font-mono bg-slate-100 p-2">
                    {project.description.length > 20
                      ? project.description.slice(0, 20) + "..."
                      : project.description}
                  </p>

                  <div className="grid grid-cols-2 border border-slate-400 gap-2 p-2">
                    <p className="font-semibold col-span-2">Links:</p>
                    <Link
                      href={project.github}
                      className="bg-gray-500 text-white text-center p-1 hover:bg-gray-800"
                    >
                      GITHUB
                    </Link>
                    <Link
                      href={project.demo}
                      className="bg-gray-500 text-white text-center p-1 hover:bg-gray-800"
                    >
                      DEMO
                    </Link>
                  </div>

                  <div className="relative w-full h-40 border-4 border-black rounded-xl overflow-hidden">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <EditProject
                    onEdit={onEdit}
                    project={project}
                    sortedBy={sortedBy}
                    categoryID={categoryID}
                  />
                  <DeleteProject onDelete={onDelete} project={project} />
                </CardFooter>
              </CardWrapper>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
