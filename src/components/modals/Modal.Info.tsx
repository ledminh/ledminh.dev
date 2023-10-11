"use client";

import { Dialog } from "@headlessui/react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";

export default function InfoModal (props: {
  title: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <Modal
      isOpen={true}
      onClose={() => router.back()}
    >
      <Dialog.Panel className="w-4/5 p-4 bg-white rounded-lg">
        <Dialog.Title className="pb-3 text-2xl font-bold border-b-2 border-b-neutral-600">
          {props.title}
        </Dialog.Title>
        <div className="py-4 overflow-y-scroll max-h-[75vh] border-b-2 border-b-neutral-600 mb-4">
          {props.children}
        </div>
        <button className="btn btn-secondary" onClick={() => router.back()}>
          Close
        </button>
      </Dialog.Panel>
    </Modal>
  );
}
