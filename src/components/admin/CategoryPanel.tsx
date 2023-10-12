"use client";

import { ProjectCategory } from "@/types";
import { useState } from "react";
import AddCategoryButton from "./AddCategoryButton";

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

  return (
    <div>
      <h1>Category Panel</h1>
      <AddCategoryButton onAdd={onAdd} />
      <ul className="flex gap-2">
        {categories.map((category) => {
          return (
            <li key={category.id} className="border border-black">
              <p>{category.title}</p>
              <p>{category.description}</p>
              <p>{category.order}</p>
              <p>{category.sortedBy}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
