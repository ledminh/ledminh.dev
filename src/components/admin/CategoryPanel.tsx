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
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 sm:col-span-2">
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <LinkWrapper categoryID={category.id}>
                <OrderInput
                  isShown={isChangeOrderOpen}
                  order={orders}
                  itemID={category.id}
                  onOrderChange={onOrderChange}
                />
                <CatHeader>
                  <h2 className="font-semibold text-lg">{category.title}</h2>
                  <p className="text-blue-900 font-semibold">
                    <span>Order: </span>
                    {category.order}
                  </p>
                </CatHeader>
                <CatBody>
                  <p className="font-mono bg-slate-100 p-2">
                    {category.description.length > 20
                      ? category.description.slice(0, 20) + "..."
                      : category.description}
                  </p>
                  <p>
                    <span className="font-bold">Sorting Mode:</span>{" "}
                    <span className="italic">{category.sortedBy}</span>
                  </p>
                  <p>
                    <span className="font-bold">Projects:</span>{" "}
                    <span className="italic">{category.numProjects}</span>
                  </p>
                </CatBody>
                <CatFooter>
                  <EditCategory onEdit={onEdit} category={category} />
                  <DeleteCategory onDelete={onDelete} category={category} />
                </CatFooter>
              </LinkWrapper>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/************************
 * Components
 */

const LinkWrapper = (props: {
  categoryID: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={`/admin/projects/categories/${props.categoryID}`}
      className="block hover:bg-gray-300 rounded-lg shadow-sm shadow-slate-700 overflow-hidden"
    >
      {props.children}
    </Link>
  );
};

const CatHeader = (props: { children: React.ReactNode }) => {
  return (
    <div className="p-2 bg-slate-400 flex justify-between items-center">
      {props.children}
    </div>
  );
};

const CatBody = (props: { children: React.ReactNode }) => {
  return (
    <div className="p-4 flex flex-col gap-2 text-sm">{props.children}</div>
  );
};

const CatFooter = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-2 justify-center bg-slate-300 p-2">
      {props.children}
    </div>
  );
};
