import deleteProjectCategory from "@/api-calls/deleteProjectCategory";
import ProjectCategoryModal from "@/components/modals/Modal.Project.Category";
import { ProjectCategory } from "@/types";
import { useState } from "react";

type Props = {
  onDelete: (category: ProjectCategory) => void;
  category: ProjectCategory;
};

export default function DeleteCategory({ onDelete, category }: Props) {
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
        Delete
      </button>
      {isModalOpen && (
        <ProjectCategoryModal
          type="delete"
          category={category}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          onSubmit={(categoryID) => {
            deleteProjectCategory(categoryID).then((deletedCategory) =>
              onDelete(deletedCategory)
            );
          }}
        />
      )}
    </>
  );
}
