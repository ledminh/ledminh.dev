import isImageType from "@/utils/isImageType";

import type { Project, ProjectResponse, ProjectRequest } from "@/types";

async function deleteProject(deletedProjectID: string): Promise<Project> {
  const request: ProjectRequest = {
    type: "delete-project",
    payload: deletedProjectID,
  };

  const response = await fetch("/api/project/admin?action=delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`Failed to delete project: ${response.statusText}`);
  }

  const result = (await response.json()) as ProjectResponse;

  if (result.errorMessage !== null) {
    throw new Error(result.errorMessage);
  }

  return result.payload as Project;
}

export default deleteProject;
