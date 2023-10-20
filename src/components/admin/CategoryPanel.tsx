"use client";

import Link from "next/link";
import { Order, ProjectCategory } from "@/types";
import { useEffect, useState } from "react";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";
import getProjectCategories from "@/api-calls/getProjectCategories";
import updateProjectCategoriesOrder from "@/api-calls/updateProjectCategoriesOrder";

export default function CategoryPanel() {
  const [categories, setCategories] = useState<ProjectCategory[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const [isChangeOrderOpen, setIsChangeOrderOpen] = useState(false);

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

  const onOrderChange = (newOrder: number, categoryId: string) => {
    const newOrders = orders.map((order) => {
      if (order.id === categoryId) {
        return {
          ...order,
          order: newOrder,
        };
      }

      return order;
    });

    setOrders(newOrders);
  };

  const onSubmitOrder = () => {
    updateProjectCategoriesOrder(orders).then((categories) => {
      categories.sort((a, b) => a.order - b.order);
      setCategories(categories);

      setIsChangeOrderOpen(false);
    });
  };

  const onCancelChangeOrder = () => {
    setOrders(
      categories.map((category) => ({
        order: category.order,
        id: category.id,
      }))
    );

    setIsChangeOrderOpen(false);
  };

  return (
    <div>
      <h1>Category Panel</h1>
      <AddCategory onAdd={onAdd} />
      {!isChangeOrderOpen && (
        <button
          onClick={() => setIsChangeOrderOpen(true)}
          className="bg-slate-400 p-2"
        >
          Change Order
        </button>
      )}
      {isChangeOrderOpen && (
        <>
          <button onClick={onSubmitOrder} className="bg-slate-400 p-2">
            Submit Order
          </button>
          <button onClick={onCancelChangeOrder} className="bg-slate-400 p-2">
            Cancel
          </button>
        </>
      )}

      <ul className="flex gap-2 flex-wrap">
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <Link
                href={`/admin/projects/categories/${category.id}`}
                className="border border-black block p-2 hover:bg-gray-300"
              >
                {isChangeOrderOpen && (
                  <input
                    type="number"
                    value={
                      orders.find((order) => order.id === category.id)?.order
                    }
                    onChange={(e) =>
                      onOrderChange(parseInt(e.target.value), category.id)
                    }
                    onClick={(e) => e.preventDefault()}
                  />
                )}

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
