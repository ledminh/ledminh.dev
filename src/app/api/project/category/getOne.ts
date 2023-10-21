import { ProjectDB } from "@/data";
import { NextResponse } from "next/server";

export default async function getOne(props: {
  id: string;
  withProjects: boolean;
}) {
  const category = await ProjectDB.getCategory({
    id: props.id,
    withProjects: props.withProjects,
  });

  return NextResponse.json({
    errorMessage: null,
    payload: category,
  });
}
