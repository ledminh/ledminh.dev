import type { ProjectCategory, ProjectRequest, ProjectResponse } from "@/types";

async function deleteProjectCategory(
  categoryID: string
): Promise<ProjectCategory> {
  const request: ProjectRequest = {
    type: "delete-project-category",
    payload: categoryID,
  };

  const response = await fetch("/api/project", {
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

  const result = (await response.json()) as ProjectResponse;

  if (result.errorMessage !== null) {
    throw new Error(result.errorMessage);
  }

  return result.payload as ProjectCategory;
}

export default deleteProjectCategory;
