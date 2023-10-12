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
    projects: [],
  };
}

export async function getCategories(): Promise<ProjectCategory[]> {
  const categories = await prismaClient.projectCategory.findMany({
    orderBy: {
      order: "asc",
    },
  });

  return categories.map((category) => ({
    id: category.id,
    order: category.order,
    title: category.title,
    description: category.description,
    sortedBy: category.sortedBy as "auto" | "manual",
    projects: [],
  }));
}
