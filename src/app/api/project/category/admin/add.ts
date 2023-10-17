import { ProjectDB } from "@/data";
import { NextResponse, NextRequest } from "next/server";
import { ProjectCategoryRequest } from "@/types";

export default async function add(request: NextRequest) {
  const { type, payload: newProjectCategoryData }: ProjectCategoryRequest =
    await request.json();

  if (type !== "add-project-category") {
    throw new Error(
      "Incorrect request. Type should be add-project-category. Current type: " +
        type
    );
  }

  const newCategory = await ProjectDB.addProjectCategory(
    newProjectCategoryData
  );

  return NextResponse.json({
    errorMessage: null,
    payload: newCategory,
  });
}
