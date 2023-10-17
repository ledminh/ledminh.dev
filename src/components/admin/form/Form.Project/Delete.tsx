"use client";

import { Project } from "@/types";
import Image from "next/image";

export default function ProjectForm(props: {
  onCancel: () => void;
  onSubmit: (id: string) => void;
  project: Project;
}) {
  return (
    <div>
      <h2>Do you want to delete this project</h2>
      <div className="flex gap-2">
        <p>{props.project.title}</p>
        <p>{props.project.description}</p>
        <p>{props.project.order}</p>
        <p>{props.project.github}</p>
        <p>{props.project.demo}</p>
        <div className="relative w-10 h-10">
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
          className="btn btn-primary"
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
