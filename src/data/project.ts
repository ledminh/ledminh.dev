import {
  Image,
  NewProjectCategory,
  ProjectCategory,
  ProjectCategoryWithProjects,
  Project,
} from "@/types";

import prismaClient from "./prismaClient";

/*************************************
 * ADMIN FUNCTIONS
 *************************************/

// *********************
// Project Category
// *********************

export async function addProjectCategory(
  newCategory: NewProjectCategory
): Promise<ProjectCategory> {
  const returnedCategory = await prismaClient.projectCategory.create({
    data: newCategory,
  });

  return {
    id: returnedCategory.id,
    order: returnedCategory.order,
    title: returnedCategory.title,
    description: returnedCategory.description,
    sortedBy: returnedCategory.sortedBy as "auto" | "manual",
  };
}

export async function updateProjectCategory(
  editedCategory: ProjectCategory
): Promise<ProjectCategory> {
  const returnedCategory = await prismaClient.projectCategory.update({
    where: {
      id: editedCategory.id,
    },
    data: {
      order: editedCategory.order,
      title: editedCategory.title,
      description: editedCategory.description,
      sortedBy: editedCategory.sortedBy,
    },
  });

  return {
    id: returnedCategory.id,
    order: returnedCategory.order,
    title: returnedCategory.title,
    description: returnedCategory.description,
    sortedBy: returnedCategory.sortedBy as "auto" | "manual",
  };
}

export async function deleteProjectCategory(
  categoryID: string
): Promise<ProjectCategory> {
  const returnedCategory = await prismaClient.projectCategory.delete({
    where: {
      id: categoryID,
    },
  });

  return {
    id: returnedCategory.id,
    order: returnedCategory.order,
    title: returnedCategory.title,
    description: returnedCategory.description,
    sortedBy: returnedCategory.sortedBy as "auto" | "manual",
  };
}

export async function getCategories(): Promise<ProjectCategory[]> {
  return (
    await prismaClient.projectCategory.findMany({
      orderBy: {
        order: "asc",
      },
    })
  ).map((category) => ({
    ...category,
    sortedBy: category.sortedBy as "auto" | "manual",
  }));
}

// *********************
// Project
// *********************

export async function addImage(image: Omit<Image, "id">): Promise<Image> {
  const returnedImage = await prismaClient.image.create({
    data: image,
  });

  return {
    id: returnedImage.id,
    src: returnedImage.src,
    alt: returnedImage.alt,
  };
}

export async function addProject(
  categoryID: string,
  newProjectData: Omit<Project, "id">
): Promise<Project> {
  return await prismaClient.project.create({
    data: {
      ...newProjectData,
      category: {
        connect: {
          id: categoryID,
        },
      },
      image: {
        connect: {
          id: newProjectData.image.id,
        },
      },
    },

    include: {
      image: true,
    },
  });
}

/*************************************
 * USER FUNCTIONS
 *************************************/

export async function getCategoryWithProjects(
  categoryID: string
): Promise<ProjectCategoryWithProjects> {
  const category = await prismaClient.projectCategory.findUnique({
    where: {
      id: categoryID,
    },
    include: {
      projects: {
        orderBy: {
          order: "asc",
        },
        include: {
          image: true,
        },
      },
    },
  });

  if (!category) {
    throw new Error("Category not found");
  }

  const projects = category.projects.map((project) => ({
    ...project,
    image: project.image as Image,
  }));

  if (category.sortedBy === "manual") {
    projects.sort((a, b) => (a.order as number) - (b.order as number));
  }

  return {
    ...category,
    sortedBy: category.sortedBy as "auto" | "manual",
    projects,
  };
}
