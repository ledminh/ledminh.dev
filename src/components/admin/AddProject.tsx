import addProject from "@/api-calls/addProject";
import ProjectProjectModal from "@/components/modals/Modal.Project.Project";
import { Project } from "@/types";
import { useState } from "react";

type Props = {
  onAdd: (newProject: Project) => void;
};

export default function AddProject({ onAdd }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-secondary"
        onClick={() => setIsModalOpen(true)}
      >
        Add Project
      </button>
      {isModalOpen && (
        <ProjectProjectModal
          type="add"
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          onSubmit={(newProjectData) => {
            addProject(newProjectData).then((newProject) => onAdd(newProject));
          }}
        />
      )}
    </>
  );
}
