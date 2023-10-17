import { ProjectDB } from "@/data";
import { NextRequest, NextResponse } from "next/server";

export default async function deleteProjectCategory(request: NextRequest) {
  const { id } = (await request.json()) as { id: string };

  const deletedProject = await ProjectDB.deleteProject(id);

  return NextResponse.json({
    errorMessage: null,
    payload: deletedProject,
  });
}
