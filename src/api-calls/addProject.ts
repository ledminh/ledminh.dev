import type {
  NewProject,
  ProjectCategory,
  Project,
  ProjectResponse,
} from "@/types";

async function addProject(newProject: NewProject): Promise<Project> {
  const formData = new FormData();
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
