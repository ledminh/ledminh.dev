import updateProject from "@/api-calls/updateProject";
import ProjectProjectModal from "@/components/modals/Modal.Project.Project";
import { Project } from "@/types";
import { useState } from "react";

type Props = {
  onEdit: (editedProject: Project) => void;
  project: Project;
  sortedBy: "auto" | "manual";
  categoryID: string;
};

export default function EditCategory({
  onEdit,
  project,
  sortedBy,
  categoryID,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-secondary"
        onClick={(e) => {
          e.preventDefault();
          setIsModalOpen(true);
        }}
      >
        Edit
      </button>
      {isModalOpen && (
        <ProjectProjectModal
          type="edit"
          initialData={project}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          sortedBy={sortedBy}
          onSubmit={(projectData) => {
            updateProject(projectData, categoryID).then((updatedProject) =>
              onEdit(updatedProject)
            );
          }}
        />
      )}
    </>
  );
}
