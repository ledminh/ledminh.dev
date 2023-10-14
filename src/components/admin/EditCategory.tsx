import updateProjectCategory from "@/api-calls/updateProjectCategory";
import ProjectCategoryModal from "@/components/modals/Modal.Project.Category";
import { ProjectCategory } from "@/types";
import { useState } from "react";

type Props = {
  onEdit: (editedCategory: ProjectCategory) => void;
  category: ProjectCategory;
};

export default function EditCategory({ onEdit, category }: Props) {
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
        <ProjectCategoryModal
          type="edit"
          initialData={category}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          onSubmit={(categoryData) => {
            updateProjectCategory(categoryData).then((updatedCategory) =>
              onEdit(updatedCategory)
            );
          }}
        />
      )}
    </>
  );
}
