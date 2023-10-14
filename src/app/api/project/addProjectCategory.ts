import { ProjectDB } from "@/data";
import { NewProjectCategory } from "@/types";
import { NextResponse } from "next/server";

export default async function addProjectCategory(
  newProjectCategoryData: NewProjectCategory
) {
  const newCategory = await ProjectDB.addProjectCategory(
    newProjectCategoryData
  );

  return NextResponse.json({
    errorMessage: null,
    payload: newCategory,
  });
}
