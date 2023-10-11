import { Dialog } from "@headlessui/react";

export default function Modal(props: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <Dialog
      open={props.isOpen}
      onClose={props.onClose}
      className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black/90  overflow-x-scroll"
    >
      {props.children}
    </Dialog>
  );
}
