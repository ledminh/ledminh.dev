// Create a new page named ProjectsAdminPage

import ProjectCategoryForm from "@/components/admin/ProjectCategoryForm";
import ProjectForm from "@/components/admin/ProjectForm";

export default function ProjectsAdminPage() {
  return (
    <div>
      <h1>Projects Admin Page</h1>
      <ProjectCategoryForm />
      <ProjectForm />
    </div>
  );
}