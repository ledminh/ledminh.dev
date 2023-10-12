import type { NewProjectCategory, ProjectRequest } from "@/types";

async function addProjectCategory(newCategory: NewProjectCategory) {
  const request: ProjectRequest = {
    type: "add-project-category",
    payload: newCategory,
  };

  console.log("request", request);

  const response = await fetch("/api/project", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  console.log("response", response);

  if (!response.ok) {
    throw new Error(`Failed to add project category: ${response.statusText}`);
  }

  const result = await response.json();

  console.log("result", result);
  
  return result;
}

export default addProjectCategory;
