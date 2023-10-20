import { ProjectDB } from "@/data";
import { ProjectCategoryRequest } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export default async function update(request: NextRequest) {
  const { type, payload }: ProjectCategoryRequest = await request.json();

  if (type === "update-project-category") {
    const updatedCategory = await ProjectDB.updateProjectCategory(payload);

    return NextResponse.json({
      errorMessage: null,
      payload: updatedCategory,
    });
  }

  if (type === "update-project-categories-order") {
    const updatedCategories = await ProjectDB.updateProjectCategoriesOrder(
      payload
    );

    return NextResponse.json({
      errorMessage: null,
      payload: updatedCategories,
    });
  }

  throw new Error(
    "Incorrect request. Type should be update-project-category. Current type: " +
      type
  );
}
