import type {
  ProjectCategory,
  ProjectCategoryRequest,
  ProjectCategoryResponse,
} from "@/types";

async function deleteProjectCategory(
  categoryID: string
): Promise<ProjectCategory> {
  const request: ProjectCategoryRequest = {
    type: "delete-project-category",
    payload: categoryID,
  };

  const response = await fetch("/api/project/category/admin?action=delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to delete project category: ${response.statusText}`
    );
  }

  const result = (await response.json()) as ProjectCategoryResponse;

  if (result.errorMessage !== null) {
    throw new Error(result.errorMessage);
  }

  return result.payload;
}

export default deleteProjectCategory;
