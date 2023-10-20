import ProjectPanel from "@/components/admin/ProjectPanel";
import { ProjectDB } from "@/data";

type Props = {
  params: {
    id: string;
  };
};

export default async function ProjectCategoriesAdminPage({ params }: Props) {
  return (
    <div>
      <ProjectPanel categoryID={params.id} />
    </div>
  );
}
