import { ProjectDB } from "@/data";
import { NextResponse } from "next/server";

export default async function getAll(props: { withProjects: boolean }) {
  const categories = await ProjectDB.getCategories({
    withProjects: props.withProjects,
  });

  return NextResponse.json({
    errorMessage: null,
    payload: categories,
  });
}
