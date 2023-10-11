"use client";

import ProjectProjectModal from "@/components/modals/Modal.Project.Project";
import { useState } from "react";

export default function AddProjectButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-secondary"
        onClick={() => setIsModalOpen(true)}
      >
        Add Project
      </button>
      <ProjectProjectModal
        type="add"
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onSubmit={(data) => {
          console.log(data);
        }}
      />
    </>
  );
}
