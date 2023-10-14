import addProjectCategory from "@/api-calls/addProjectCategory";
import ProjectCategoryModal from "@/components/modals/Modal.Project.Category";
import { ProjectCategory } from "@/types";
import { useState } from "react";

type Props = {
  onAdd: (newCategory: ProjectCategory) => void;
};

export default function AddCategory({ onAdd }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-secondary"
        onClick={() => setIsModalOpen(true)}
      >
        Add Category
      </button>
      {isModalOpen && (
        <ProjectCategoryModal
          type="add"
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          onSubmit={(newCategoryData) => {
            addProjectCategory(newCategoryData).then((newCategory) =>
              onAdd(newCategory)
            );
          }}
        />
      )}
    </>
  );
}
