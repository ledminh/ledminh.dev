import AddProjectButton from "@/components/admin/AddProject";
import CategoryPanel from "@/components/admin/CategoryPanel";
import { ProjectDB } from "@/data";

export default async function ProjectsAdminPage() {
  const projectCategories = await ProjectDB.getCategories();

  return (
    <div>
      <h1>Projects Admin Page</h1>

      <CategoryPanel initCategories={projectCategories} />
      <AddProjectButton />
    </div>
  );
}
