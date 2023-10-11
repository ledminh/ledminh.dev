"use client";

import ProjectCategoryModal from "@/components/modals/Modal.Project.Category";
import { useState } from "react";

export default function AddNewCategory() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-secondary"
        onClick={() => setIsModalOpen(true)}
      >
        Add New Category
      </button>
      <ProjectCategoryModal
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
