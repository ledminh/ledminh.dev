import type {
  ProjectCategoriesResponse,
  ProjectCategory,
  ProjectCategoryWithProjects,
} from "@/types";

async function getProjectCategories(props: {
  withProjects: boolean;
}): Promise<ProjectCategory[] | ProjectCategoryWithProjects[]> {
  const response = await fetch(
    "/api/project/category?action=get-all" +
      (props.withProjects ? "&with-projects=true" : ""),
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to get project categories: ${response.statusText}`);
  }

  const result = (await response.json()) as ProjectCategoriesResponse;

  if (result.errorMessage !== null) {
    throw new Error(result.errorMessage);
  }

  if (props.withProjects) {
    return result.payload as ProjectCategoryWithProjects[];
  }

  return result.payload as ProjectCategory[];
}

export default getProjectCategories;
