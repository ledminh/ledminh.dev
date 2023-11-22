"use client";

import { Project } from "@/types";
import Image from "next/image";

export default function ProjectForm(props: {
  onCancel: () => void;
  onSubmit: (id: string) => void;
  project: Project;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold">Do you want to delete this project</h2>
      <div className="flex gap-2 border border-red-600 p-2 flex-col rounded-md">
        <h3 className="font-semibold border-b border-black">
          {props.project.title}
        </h3>
        <p className="font-mono bg-slate-300 px-2">
          {props.project.description.length > 20
            ? props.project.description.slice(0, 20) + "..."
            : props.project.description}
        </p>
        <div className="relative w-40 h-40 shadow-lg">
          <Image
            src={props.project.image.src}
            alt={props.project.image.alt}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <button
          className="btn btn-attention"
          onClick={() => props.onSubmit(props.project.id)}
        >
          Yes
        </button>
        <button className="btn btn-secondary" onClick={props.onCancel}>
          No
        </button>
      </div>
    </div>
  );
}
