import deleteProject from "@/api-calls/deleteProject";
import ProjectProjectModal from "@/components/modals/Modal.Project.Project";
import { Project } from "@/types";
import { useState } from "react";

type Props = {
  onDelete: (project: Project) => void;
  project: Project;
};

export default function DeleteCategory({ onDelete, project }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-attention btn-sm"
        onClick={(e) => {
          e.preventDefault();
          setIsModalOpen(true);
        }}
      >
        Delete
      </button>
      {isModalOpen && (
        <ProjectProjectModal
          type="delete"
          project={project}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          onSubmit={(projectID) => {
            deleteProject(projectID).then((deletedProject) =>
              onDelete(deletedProject)
            );
          }}
        />
      )}
    </>
  );
}
