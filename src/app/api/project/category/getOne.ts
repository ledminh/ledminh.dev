import { ProjectDB } from "@/data";
import { NextResponse } from "next/server";

export default async function getOne(categoryID: string) {
  const category = await ProjectDB.getCategoryWithProjects(categoryID);

  return NextResponse.json({
    errorMessage: null,
    payload: category,
  });
}
