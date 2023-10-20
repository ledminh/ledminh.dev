import ProjectPanel from "@/components/admin/ProjectPanel";
import { ProjectDB } from "@/data";

type Props = {
  params: {
    id: string;
  };
};

export default async function ProjectCategoriesAdminPage({ params }: Props) {
  const category = await ProjectDB.getCategoryWithProjects(params.id);

  return (
    <div>
      <h1>Projects for category {category.title}</h1>

      <ProjectPanel
        initProjects={category.projects}
        sortedBy={category.sortedBy}
        categoryID={category.id}
      />
    </div>
  );
}
