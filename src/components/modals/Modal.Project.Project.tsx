import ProjectForm from "@/components/admin/form/Form.Project";

import ProjectModal from "./Modal.Project";

export default function ProjectProjectModal(
  props: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
  } & (
    | {
        type: "add";
        onSubmit: (data: {
          order: number;
          title: string;
          description: string;
          github: string;
          demo: string;
          image: File;
        }) => void;
      }
    | {
        type: "edit";
        onSubmit: (data: {
          id: string;
          order: number;
          title: string;
          description: string;
          github: string;
          demo: string;
          image: File;
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
    title = "Add New Project";
    form = (
      <ProjectForm.Add
        onCancel={() => props.setIsOpen(false)}
        onSubmit={(data) => {
          props.onSubmit(data);
          props.setIsOpen(false);
        }}
      />
    );
  } else if (props.type === "edit") {
    title = "Edit Project";
    form = (
      <ProjectForm.Edit
        onCancel={() => props.setIsOpen(false)}
        onSubmit={(data) => {
          props.onSubmit(data);
          props.setIsOpen(false);
        }}
      />
    );
  } else {
    title = "Delete Project";
    form = (
      <ProjectForm.Delete
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
