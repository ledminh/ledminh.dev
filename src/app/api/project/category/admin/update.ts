import { ProjectDB } from "@/data";
import { ProjectCategoryRequest } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export default async function update(request: NextRequest) {
  const { type, payload: projectCategory }: ProjectCategoryRequest =
    await request.json();

  if (type !== "update-project-category") {
    throw new Error(
      "Incorrect request. Type should be update-project-category. Current type: " +
        type
    );
  }

  const updatedCategory = await ProjectDB.updateProjectCategory(
    projectCategory
  );

  return NextResponse.json({
    errorMessage: null,
    payload: updatedCategory,
  });
}
