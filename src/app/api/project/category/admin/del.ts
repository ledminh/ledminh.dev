import { ProjectDB } from "@/data";
import { NextResponse, NextRequest } from "next/server";
import { ProjectCategoryRequest } from "@/types";

export default async function deleteProjectCategory(request: NextRequest) {
  const { type, payload: categoryID }: ProjectCategoryRequest =
    await request.json();

  if (type !== "delete-project-category") {
    throw new Error(
      "Incorrect request. Type should be update-project-category. Current type: " +
        type
    );
  }
  const deletedCategory = await ProjectDB.deleteProjectCategory(categoryID);

  return NextResponse.json({
    errorMessage: null,
    payload: deletedCategory,
  });
}
