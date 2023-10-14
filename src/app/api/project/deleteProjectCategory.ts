import { ProjectDB } from "@/data";
import { NextResponse } from "next/server";

export default async function updateProjectCategory(categoryID: string) {
  const deletedCategory = await ProjectDB.deleteProjectCategory(categoryID);

  return NextResponse.json({
    errorMessage: null,
    payload: deletedCategory,
  });
}
