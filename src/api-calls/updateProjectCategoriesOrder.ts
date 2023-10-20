import type {
  Order,
  ProjectCategory,
  ProjectCategoryRequest,
  ProjectCategoriesResponse,
} from "@/types";

async function updateProjectCategoriesOrder(
  orders: Order[]
): Promise<ProjectCategory[]> {
  const request: ProjectCategoryRequest = {
    type: "update-project-categories-order",
    payload: orders,
  };

  const response = await fetch("/api/project/category/admin?action=update", {
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

  const result = (await response.json()) as ProjectCategoriesResponse;

  if (result.errorMessage !== null) {
    throw new Error(result.errorMessage);
  }

  return result.payload;
}

export default updateProjectCategoriesOrder;
