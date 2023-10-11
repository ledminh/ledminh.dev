import { Dialog } from "@headlessui/react";
import ProjectCategoryForm from "../admin/form/ProjectCategory.Form";
import Modal from "./Modal";

export default function AddNewCategoryModal(props: {
  title: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onSubmit: (data: {
    name: string;
    description: string;
    order: "manual" | "auto";
  }) => void;
}) {
  const _onSubmit = (data: {
    name: string;
    description: string;
    order: "manual" | "auto";
  }) => {
    props.onSubmit(data);
    props.setIsOpen(false);
  };

  const _onCancel = () => {
    props.setIsOpen(false);
  };

  return (
    <Modal isOpen={props.isOpen} onClose={() => props.setIsOpen(false)}>
      <Dialog.Panel className="w-4/5 bg-white rounded-lg max-w-[900px] min-w-[350px] overflow-hidden">
        <Dialog.Title className="text-2xl text-gray-200 font-bold bg-neutral-800 p-2">
          {props.title}
        </Dialog.Title>
        <div className="p-4">
          <div className="max-h-[80vh] overflow-y-scroll">
            <ProjectCategoryForm onCancel={_onCancel} onSubmit={_onSubmit} />
          </div>
        </div>
      </Dialog.Panel>
    </Modal>
  );
}
