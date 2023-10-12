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
