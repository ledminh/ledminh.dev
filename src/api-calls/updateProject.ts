import isImageType from "@/utils/isImageType";

import type { EditedProjectData, Project, ProjectResponse } from "@/types";

async function updateProject(
  editedProject: EditedProjectData,
  categoryID: string
): Promise<Project> {
  const formData = new FormData();

  if (editedProject.order !== null)
    formData.append("order", editedProject.order.toString());

  formData.append("id", editedProject.id);
  formData.append("categoryID", categoryID);
  formData.append("title", editedProject.title);
  formData.append("description", editedProject.description);
  formData.append("github", editedProject.github);
  formData.append("demo", editedProject.demo);

  formData.append(
    "image",
    isImageType(editedProject.image)
      ? JSON.stringify(editedProject.image)
      : editedProject.image
  );

  const response = await fetch("/api/project/admin?action=update", {
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

export default updateProject;
