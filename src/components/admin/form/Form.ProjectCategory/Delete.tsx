"use client";

import { ProjectCategory } from "@/types";

export default function ProjectCategoryForm(props: {
  category: ProjectCategory;
  onCancel: () => void;
  onSubmit: (id: string) => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold">Do you want to delete this category?</h2>
      <div className="flex gap-2 border border-red-600 p-2 flex-col rounded-md">
        <p className="font-semibold border-b border-black">
          {props.category.title}
        </p>
        <p className="font-mono bg-slate-300 px-2">
          {props.category.description.length > 20
            ? props.category.description.slice(0, 20) + "..."
            : props.category.description}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          className="btn btn-attention"
          onClick={() => props.onSubmit(props.category.id)}
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
