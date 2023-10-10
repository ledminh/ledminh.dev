// Create a new page named ProjectsAdminPage

import ProjectCategoryForm from "@/components/admin/ProjectCategoryForm";
import ProjectForm from "@/components/admin/ProjectForm";

export default function ProjectsAdminPage() {
  return (
    <div>
      <h1>Projects Admin Page</h1>
      <div className="border-2 border-blue-900 p-4">
        <ProjectCategoryForm />
      </div>

      <div className="border-2 border-blue-900 p-4">
        <ProjectForm />
      </div>
    </div>
  );
}
