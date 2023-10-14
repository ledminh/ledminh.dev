"use client";

import Link from "next/link";
import { ProjectCategory } from "@/types";
import { useState } from "react";
import AddCategoryButton from "./AddCategory";
import ProjectCategoryModal from "@/components/modals/Modal.Project.Category";
import EditCategory from "./EditCategory";

type Props = {
  initCategories: ProjectCategory[];
};

export default function CategoryPanel({ initCategories }: Props) {
  const [categories, setCategories] = useState(initCategories);

  const onAdd = (newCategory: ProjectCategory) => {
    const newCategories = [...categories, newCategory];
    newCategories.sort((a, b) => a.order - b.order);

    setCategories(newCategories);
  };

  const onEdit = (editedCategory: ProjectCategory) => {
    const newCategories = categories.map((category) => {
      if (category.id === editedCategory.id) {
        return editedCategory;
      }

      return category;
    });

    newCategories.sort((a, b) => a.order - b.order);

    setCategories(newCategories);
  };

  return (
    <div>
      <h1>Category Panel</h1>
      <AddCategoryButton onAdd={onAdd} />
      <ul className="flex gap-2">
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <Link
                href={`/admin/projects/categories/${category.id}`}
                className="border border-black block p-2 hover:bg-gray-300"
              >
                <p>{category.title}</p>
                <p>{category.description}</p>
                <p>{category.order}</p>
                <p>{category.sortedBy}</p>
                <div className="flex gap-2">
                  <EditCategory onEdit={onEdit} category={category} />
                  <button className="border-2 border-red-500 p-1 hover:border-blue-800">
                    Delete
                  </button>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
