import { ProjectDB } from "@/data";
import { ProjectCategory } from "@/types";
import { NextResponse } from "next/server";

export default async function updateProjectCategory(
  projectCategory: ProjectCategory
) {
  const updatedCategory = await ProjectDB.updateProjectCategory(
    projectCategory
  );

  return NextResponse.json({
    errorMessage: null,
    payload: updatedCategory,
  });
}
