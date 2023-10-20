import { ProjectDB } from "@/data";
import { NextResponse } from "next/server";

export default async function getAll() {
  const categories = await ProjectDB.getCategories();

  return NextResponse.json({
    errorMessage: null,
    payload: categories,
  });
}
