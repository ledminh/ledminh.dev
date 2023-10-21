import ProjectPanel from "@/components/admin/ProjectPanel";

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
