import ProjectCategoryForm from "../admin/form/Form.ProjectCategory/";

import ProjectModal from "./Modal.Project";

export default function ProjectCategoryModal(
  props: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
  } & (
    | {
        type: "add";
        onSubmit: (data: {
          name: string;
          description: string;
          order: "manual" | "auto";
        }) => void;
      }
    | {
        type: "edit";
        onSubmit: (data: {
          id: string;
          name: string;
          description: string;
          order: "manual" | "auto";
        }) => void;
      }
    | {
        type: "delete";
        onSubmit: (id: string) => void;
      }
  )
) {
  let form: React.ReactNode, title: string;

  if (props.type === "add") {
    title = "Add New Category";
    form = (
      <ProjectCategoryForm.Add
        onCancel={() => props.setIsOpen(false)}
        onSubmit={(data) => {
          props.onSubmit(data);
          props.setIsOpen(false);
        }}
      />
    );
  } else if (props.type === "edit") {
    title = "Edit Category";
    form = (
      <ProjectCategoryForm.Edit
        onCancel={() => props.setIsOpen(false)}
        onSubmit={(data) => {
          props.onSubmit(data);
          props.setIsOpen(false);
        }}
      />
    );
  } else {
    title = "Delete Category";
    form = (
      <ProjectCategoryForm.Delete
        onCancel={() => props.setIsOpen(false)}
        onSubmit={(id) => {
          props.onSubmit(id);
          props.setIsOpen(false);
        }}
      />
    );
  }

  return (
    <ProjectModal
      title={title}
      isOpen={props.isOpen}
      setIsOpen={props.setIsOpen}
    >
      {form}
    </ProjectModal>
  );
}
