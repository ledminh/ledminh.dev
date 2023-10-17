import ProjectForm from "@/components/admin/form/Form.Project";

import ProjectModal from "./Modal.Project";
import { EditedProjectData, Image, NewProject, Project } from "@/types";

export default function ProjectProjectModal(
  props: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
  } & (
    | {
        type: "add";
        onSubmit: (newProjectData: NewProject) => void;
        sortedBy: "auto" | "manual";
      }
    | {
        type: "edit";
        onSubmit: (data: EditedProjectData) => void;
        initialData: Project;
        sortedBy: "auto" | "manual";
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
        sortedBy={props.sortedBy}
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
        initialData={props.initialData}
        sortedBy={props.sortedBy}
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
