import { Dialog } from "@headlessui/react";
import Modal from "./Modal";

export default function ProjectModal(props: {
  title: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;

  children: React.ReactNode;
}) {
  return (
    <Modal isOpen={props.isOpen} onClose={() => props.setIsOpen(false)}>
      <Dialog.Panel className="w-4/5 bg-white rounded-lg max-w-[900px] min-w-[350px] overflow-hidden">
        <Dialog.Title className="text-2xl text-gray-200 font-bold bg-neutral-800 p-2">
          {props.title}
        </Dialog.Title>
        <div className="p-4">
          <div className="max-h-[80vh] overflow-y-scroll">{props.children}</div>
        </div>
      </Dialog.Panel>
    </Modal>
  );
}
