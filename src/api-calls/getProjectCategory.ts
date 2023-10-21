import type {
  ProjectCategoryResponse,
  ProjectCategory,
  ProjectCategoryWithProjects,
} from "@/types";

async function getProjectCategory(props: {
  id: string;
  withProjects: boolean;
}): Promise<ProjectCategoryWithProjects> {
  const response = await fetch(
    "/api/project/category?action=get-one&id=" +
      props.id +
      (props.withProjects ? "&with-projects=true" : ""),
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to get project category: ${response.statusText}`);
  }

  const result = (await response.json()) as ProjectCategoryResponse;

  if (result.errorMessage !== null) {
    throw new Error(result.errorMessage);
  }

  return result.payload as ProjectCategoryWithProjects;
}

export default getProjectCategory;
