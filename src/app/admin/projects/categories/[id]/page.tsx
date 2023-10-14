import ProjectPanel from "@/components/admin/ProjectPanel";
import { ProjectDB } from "@/data";

type Props = {
  params: {
    id: string;
  };
};

export default async function CategoriesAdminPage({ params }: Props) {
  const projects = await ProjectDB.getProjects(params.id);

  return (
    <div>
      <h1>Projects for category {params.id}</h1>

      <ProjectPanel initProjects={projects} />
    </div>
  );
}
