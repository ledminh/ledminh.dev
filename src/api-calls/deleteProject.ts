import isImageType from "@/utils/isImageType";

import type { Project, ProjectResponse } from "@/types";

async function updateProject(deletedProjectID: string): Promise<Project> {
  const response = await fetch("/api/project?type=delete-project", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: deletedProjectID,
    }),
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

export default updateProject;
