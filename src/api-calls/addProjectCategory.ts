import type {
  NewProjectCategory,
  ProjectCategory,
  ProjectCategoryRequest,
  ProjectCategoryResponse,
} from "@/types";

async function addProjectCategory(
  newCategory: NewProjectCategory
): Promise<ProjectCategory> {
  const request: ProjectCategoryRequest = {
    type: "add-project-category",
    payload: newCategory,
  };

  const response = await fetch("/api/project/category/admin?action=add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`Failed to add project category: ${response.statusText}`);
  }

  const result = (await response.json()) as ProjectCategoryResponse;

  if (result.errorMessage !== null) {
    throw new Error(result.errorMessage);
  }

  return result.payload as ProjectCategory;
}

export default addProjectCategory;
