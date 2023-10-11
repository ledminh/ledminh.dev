"use client";

import { Dialog } from "@headlessui/react";

import { useRouter } from "next/navigation";

export default function Modal(props: {
  title: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <Dialog
      open={true}
      onClose={() => router.back()}
      className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/90"
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
    </Dialog>
  );
}
