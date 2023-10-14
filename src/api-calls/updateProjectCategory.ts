import type { ProjectCategory, ProjectRequest, ProjectResponse } from "@/types";

async function updateProjectCategory(
  category: ProjectCategory
): Promise<ProjectCategory> {
  const request: ProjectRequest = {
    type: "update-project-category",
    payload: category,
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
      `Failed to update project category: ${response.statusText}`
    );
  }

  const result = (await response.json()) as ProjectResponse;

  if (result.errorMessage !== null) {
    throw new Error(result.errorMessage);
  }

  return result.payload;
}

export default updateProjectCategory;