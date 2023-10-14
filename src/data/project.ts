import { NewProjectCategory, ProjectCategory } from "@/types";

import prismaClient from "./prismaClient";

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
