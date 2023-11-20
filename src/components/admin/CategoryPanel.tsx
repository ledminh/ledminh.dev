"use client";

import Link from "next/link";
import { ProjectCategory } from "@/types";
import { useEffect, useState } from "react";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";
import getProjectCategories from "@/api-calls/getProjectCategories";
import updateProjectCategoriesOrder from "@/api-calls/updateProjectCategoriesOrder";

import {
  useChangeOrder,
  ChangeOrderButtons,
  OrderInput,
} from "@/components/ChangeOrder";

export default function CategoryPanel() {
  const [categories, setCategories] = useState<ProjectCategory[]>([]);

  const {
    orders,
    setOrders,
    isChangeOrderOpen,
    setIsChangeOrderOpen,
    onSubmitOrder,
    onOrderChange,
    onCancelChangeOrder,
  } = useChangeOrder({
    items: categories,
    setItems: setCategories,
    updateOrder: updateProjectCategoriesOrder,
  });

  useEffect(() => {
    getProjectCategories({
      withProjects: true,
    }).then((categories) => {
      categories.sort((a, b) => a.order - b.order);
      setCategories(categories);

      setOrders(
        categories.map((category) => ({
          order: category.order,
          id: category.id,
        }))
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAdd = (newCategory: ProjectCategory) => {
    const newCategories = [...categories, newCategory];
    newCategories.sort((a, b) => a.order - b.order);

    setCategories(newCategories);

    setOrders(
      newCategories.map((category) => ({
        order: category.order,
        id: category.id,
      }))
    );
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

    setOrders(
      newCategories.map((category) => ({
        order: category.order,
        id: category.id,
      }))
    );
  };

  const onDelete = (deletedCategory: ProjectCategory) => {
    const newCategories = categories.filter(
      (category) => category.id !== deletedCategory.id
    );

    newCategories.sort((a, b) => a.order - b.order);

    setCategories(newCategories);

    setOrders(
      newCategories.map((category) => ({
        order: category.order,
        id: category.id,
      }))
    );
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <AddCategory onAdd={onAdd} />
      <ChangeOrderButtons
        setIsOpened={setIsChangeOrderOpen}
        isOpened={isChangeOrderOpen}
        onSubmit={onSubmitOrder}
        onCancel={onCancelChangeOrder}
      />
      <ul className="flex gap-2 flex-wrap sm:col-span-2">
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <Link
                href={`/admin/projects/categories/${category.id}`}
                className="border border-black block p-2 hover:bg-gray-300"
              >
                <OrderInput
                  isShown={isChangeOrderOpen}
                  order={orders}
                  itemID={category.id}
                  onOrderChange={onOrderChange}
                />
                <p>{category.title}</p>
                <p>{category.description}</p>
                <p>{category.order}</p>
                <p>{category.sortedBy}</p>
                <p>numProjects: {category.numProjects}</p>
                <div className="flex gap-2">
                  <EditCategory onEdit={onEdit} category={category} />
                  <DeleteCategory onDelete={onDelete} category={category} />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
