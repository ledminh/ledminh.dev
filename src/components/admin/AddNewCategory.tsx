"use client";

import AddNewCategoryModal from "@/components/modals/AddNewCategory.Modal";
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
      <AddNewCategoryModal
        title="Add New Category"
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onSubmit={(data) => {
          console.log(data);
        }}
      />
    </>
  );
}
