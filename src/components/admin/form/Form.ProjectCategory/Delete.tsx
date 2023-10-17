"use client";

import { ProjectCategory } from "@/types";

export default function ProjectCategoryForm(props: {
  category: ProjectCategory;
  onCancel: () => void;
  onSubmit: (id: string) => void;
}) {
  return (
    <div>
      <h2>Do you want to delete this category</h2>
      <div className="flex gap-2">
        <p>{props.category.title}</p>
        <p>{props.category.description}</p>
        <p>{props.category.order}</p>
        <p>{props.category.sortedBy}</p>
      </div>
      <div className="flex gap-2">
        <button
          className="btn btn-primary"
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
