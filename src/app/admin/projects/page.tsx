import CategoryPanel from "@/components/admin/CategoryPanel";
import { ProjectDB } from "@/data";

export default async function ProjectsAdminPage() {
  const projectCategories = await ProjectDB.getCategories();

  return (
    <div>
      <h1>Project Categories Admin Page</h1>

      <CategoryPanel initCategories={projectCategories} />
    </div>
  );
}
