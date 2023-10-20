import type { ProjectCategoriesResponse, ProjectCategory } from "@/types";

async function getProjectCategories(): Promise<ProjectCategory[]> {
  const response = await fetch("/api/project/category?action=get-all", {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`Failed to get project categories: ${response.statusText}`);
  }

  const result = (await response.json()) as ProjectCategoriesResponse;

  if (result.errorMessage !== null) {
    throw new Error(result.errorMessage);
  }

  return result.payload as ProjectCategory[];
}

export default getProjectCategories;
