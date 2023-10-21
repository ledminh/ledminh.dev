import type { Order, Project, ProjectRequest, ProjectsResponse } from "@/types";

async function updateProjectCategoriesOrder(
  orders: Order[]
): Promise<Project[]> {
  const request: ProjectRequest = {
    type: "update-projects-order",
    payload: orders,
  };

  const response = await fetch("/api/project/admin?action=update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`Failed to update projects order: ${response.statusText}`);
  }

  const result = (await response.json()) as ProjectsResponse;

  if (result.errorMessage !== null) {
    throw new Error(result.errorMessage);
  }

  return result.payload;
}

export default updateProjectCategoriesOrder;
