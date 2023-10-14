import type { NewProject, Project, ProjectResponse } from "@/types";

async function addProject(
  newProject: NewProject,
  categoryID: string
): Promise<Project> {
  const formData = new FormData();

  if (newProject.order !== null)
    formData.append("order", newProject.order.toString());

  formData.append("categoryID", categoryID);
  formData.append("title", newProject.title);
  formData.append("description", newProject.description);
  formData.append("github", newProject.github);
  formData.append("demo", newProject.demo);
  formData.append("image", newProject.image);

  const response = await fetch("/api/project?type=add-project", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Failed to add project: ${response.statusText}`);
  }

  const result = (await response.json()) as ProjectResponse;

  if (result.errorMessage !== null) {
    throw new Error(result.errorMessage);
  }

  return result.payload as Project;
}

export default addProject;
