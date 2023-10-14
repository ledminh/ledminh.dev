import type {
  NewProjectCategory,
  ProjectCategory,
  ProjectRequest,
  ProjectResponse,
} from "@/types";

async function addProjectCategory(
  newCategory: NewProjectCategory
): Promise<ProjectCategory> {
  const request: ProjectRequest = {
    type: "add-project-category",
    payload: newCategory,
  };

  const response = await fetch("/api/project", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`Failed to add project category: ${response.statusText}`);
  }

  const result = (await response.json()) as ProjectResponse;

  if (result.errorMessage !== null) {
    throw new Error(result.errorMessage);
  }

  return result.payload as ProjectCategory;
}

export default addProjectCategory;
